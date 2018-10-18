import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'

/*actions*/


/*api*/
import { getCbsaRanking } from 'services'

/*component*/
import ErrorBoundary from 'pages/Commons/ErrorBoundary'
import SearchInput from 'components/SearchInput'
import ScrollView from 'components/ScrollView'
import TableEva from './components/TableEva'

/*styles*/
import styles from './styles/home.less'

/*files*/
const logo = require('assets/image/logo-light.svg')
const header_bg = require('assets/image/home_header_bg.png')
// const BasicInputExampleWrapper = createForm()(BasicInputExample);
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cbsaRankList: [],
      topTenList: [1,2,3,4,5,6]
    }
  }
  componentDidMount() {
    this.getCbsaRanking()
  }

  async getCbsaRanking(){
   const res = await getCbsaRanking()
   console.log(res,'gg')
   this.setState({
    cbsaRankList: res
   })
  }


  render() {
    const { cbsaRankList, topTenList } = this.state
    console.log(this.state,this.props,'home state');
    
    const scroll_card = topTenList.map((item,index)=>(
      <Link to="/citydetail" key={`key-${item}`} className={`scroll_view_card ${index==topTenList.length-1?'last':''}`}>
         <div className="head_pic" style={{
           backgroundImage: `url(${header_bg})`,
           backgroundRepeat: 'no-repeat',
           backgroundPosition: 'center center',
           backgroundSize: 'cover'
         }}></div>
         <div className="body_wrapper">
           <span className="dollar_number">$159,000</span>
           <p className="info_text">9340 Carling street, New York, NY</p>
           <p className="info_text_regular">2室1卫 784 sqft 建于1950</p>
         </div>
      </Link>
    ))
   
     return(
      <>
        <ErrorBoundary>
          <div></div>
        </ErrorBoundary>
        <div className={styles.home_wrapper}>
          <header className={styles.home_header_wrapper} style={{
            background: `url(${header_bg}) no-repeat center center`,
            backgroundSize: 'cover'
          }}>
          <img className={styles.logo} src={logo} alt=""/>
          <h2 className={styles.title}>Explore US Properties</h2>
          <p className={styles.sub_title}>We Have All The Data You Need</p>
          <SearchInput/>
          </header>
          <div className={styles.home_body_wrapper}>
             <div className="section_title">Top 10 Properties</div>
             <ScrollView className={'scroll_view_bottom'}>
               {scroll_card}
             </ScrollView>
             <div className="section_divider"></div>
             <div className="section_title">City Evaluation<span style={{
               float: 'right',
               color: '#D5A478',
               paddingLeft: '80px'
             }}>More</span></div>
             <TableEva renderList={cbsaRankList}/>
          </div>
        </div>
      </>
     )
  }
}
Home.propTypes = {

}
export default Home
