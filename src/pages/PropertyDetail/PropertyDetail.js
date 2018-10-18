import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'


/*actions*/

/*components*/
import ScrollView from 'components/ScrollView'
import ErrorBoundary from 'pages/Commons/ErrorBoundary'
import RadarChart from './components/RadarChart'
import ListingPriceChart from './components/ListingPriceChart'
import TabComponent from './components/TabComponent'
import Swiper from 'components/Swiper'
import { Slider, Modal } from 'antd-mobile'


/*styles*/
import styles from './styles/propertydetail.less'

/*files*/
const header_bg = require('assets/image/home_header_bg.png')
// const BasicInputExampleWrapper = createForm()(BasicInputExample);


class PropertyDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionModal: false
    }
  }
  componentDidMount() {

  }

  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      questionModal: true
    });
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }


  render() {
    const list = [1,2,3,4,5,6,7,8]
    const scroll_card = list.map((item,index)=>(
      <Link to="/" key={`key-${item}`} className={`scroll_view_card ${index==list.length-1?'last':''}`}>
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
        <div className={styles.property_detail_wrapper}>
          <Modal
            visible={this.state.questionModal}
            transparent
            maskClosable={false}
            onClose={this.onClose('questionModal')}
            title="Title"
            footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('questionModal')(); } }]}
          >
            {this.state.tips}
          </Modal>
          <Swiper/>
          <div className={styles.addr_title}>64 College Dr, Edison NJ 08817</div>

          <div className="city_market_wrapper">
            <ul className="city_market_list border_none">
             <li>
               <span>Listiong Price</span>
               <span>$180,000</span>
             </li>
             <li>
               <span>WeHome Rating</span>
               <span>89</span>
             </li>
            </ul>
          </div>

          <div className="section_divider"></div>

          <div className="section_title" style={{
            paddingBottom: 0
          }}>Overall Estimate</div>
          <div className="city_market_wrapper">
            <ul className="city_market_list border_top_none">
             <li>
               <span>Annual Return Rate</span>
               <span>11.9%</span>
             </li>
             <li>
               <span>Total Income(X Years)</span>
               <span>$180,000</span>
             </li>
             <li>
               <span>Initial Investment</span>
               <span>$180,000</span>
             </li>
             <li>
               <span>Rental Income(X Years)</span>
               <span>$18,000</span>
             </li>
             <li>
               <span>Appreciation Income(X Years)</span>
               <span>6.8%</span>
             </li>
            </ul>


            <ul className="city_market_list border_none">
             <li>
               <span onClick={this.showModal('questionModal')}>House Price<i className="font_family icon-question"></i></span>
               <span>$180,000</span>
             </li>
             <Slider
                defaultValue={26}
                min={0}
                max={30}
                onChange={console.log('change')}
                onAfterChange={console.log('afterChange')}
                handleStyle={{
                  width: '14px',
                  height: '14px',
                  backgroundColor: '#D5A478',
                  marginLeft: '-8px',
                  marginTop: '-6px'
                }}
                trackStyle={{
                  height: '3px'
                }}
                railStyle={{
                  height: '3px'
                }}
                style={{
                  padding: '15px 0'
                }}
              />
             <li>
               <span>Down Payment<i className="font_family icon-question"></i></span>
               <span>$180,000</span>
             </li>
             <Slider
                defaultValue={26}
                min={0}
                max={30}
                onChange={console.log('change')}
                onAfterChange={console.log('afterChange')}
                handleStyle={{
                  width: '14px',
                  height: '14px',
                  backgroundColor: '#D5A478',
                  marginLeft: '-8px',
                  marginTop: '-6px'
                }}
                trackStyle={{
                  height: '3px'
                }}
                railStyle={{
                  height: '3px'
                }}
                style={{
                  padding: '15px 0'
                }}
              />
             <li>
               <span>Rental<i className="font_family icon-question"></i></span>
               <span>$180,000</span>
             </li>
             <Slider
                defaultValue={26}
                min={0}
                max={30}
                onChange={console.log('change')}
                onAfterChange={console.log('afterChange')}
                handleStyle={{
                  width: '14px',
                  height: '14px',
                  backgroundColor: '#D5A478',
                  marginLeft: '-8px',
                  marginTop: '-6px'
                }}
                trackStyle={{
                  height: '3px'
                }}
                railStyle={{
                  height: '3px'
                }}
                style={{
                  padding: '15px 0'
                }}
              />
              <li>
               <span>Holding Period<i className="font_family icon-question"></i></span>
               <span>7 Years</span>
             </li>
             <Slider
                defaultValue={26}
                min={0}
                max={30}
                onChange={console.log('change')}
                onAfterChange={console.log('afterChange')}
                handleStyle={{
                  width: '14px',
                  height: '14px',
                  backgroundColor: '#D5A478',
                  marginLeft: '-8px',
                  marginTop: '-6px'
                }}
                trackStyle={{
                  height: '3px'
                }}
                railStyle={{
                  height: '3px'
                }}
                style={{
                  padding: '15px 0'
                }}
              />
            </ul>
          </div>
          <div className="section_divider"></div>
          <TabComponent/>
          
          <div>
            <div className="section_title">WeHome Score</div>
            <RadarChart/>
          </div>
          <div>
            <div className="section_title">Comparative Analysis</div>
            <ListingPriceChart/>
          </div>
          

          <div className="section_title">Reference <span style={{
            float: 'right'
          }}>www.zillow.com</span></div>
          <div className="section_divider"></div>

          <div className="section_title">Property you may be interested</div>
          <ScrollView className={'scroll_view_bottom'}>
            {scroll_card}
          </ScrollView>
        </div>
      </>
     )
  }
}
PropertyDetail.propTypes = {

}
export default PropertyDetail
