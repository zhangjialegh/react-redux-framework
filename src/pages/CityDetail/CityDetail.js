import React from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import Link from 'react-router-dom/Link'

/*actions*/

/*components*/
import ScrollView from 'components/ScrollView'
import ErrorBoundary from 'pages/Commons/ErrorBoundary'
import RadarChart from './components/RadarChart'
import ListingPriceChart from './components/ListingPriceChart'
import { Icon } from 'antd-mobile';

/*styles*/
import styles from './styles/citydetail.less'

/*files*/
const header_bg = require('assets/image/home_header_bg.png')
const loading = require('assets/image/loading.svg')
// const BasicInputExampleWrapper = createForm()(BasicInputExample);

class CityDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mapLoaded: false
    }
  }
  componentDidMount() {
    const that = this
    mapboxgl.accessToken = 'pk.eyJ1IjoiempsMDMwMyIsImEiOiJjajlxaGF5aDA1eWZzMnFtcXlqZzZ5dHloIn0.B3qh_Vd3MoT1mD4ND0MP4Q';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });
    this.timer = setInterval(()=>{
      const bool = map.loaded()
      if(bool) {
        clearInterval(that.timer)
      }
      that.setState({
        mapLoaded: bool
      })
    },50)
  }

  componentWillUnmount() {
    clearInterval
  }


  render() {
    const {mapLoaded} = this.state
    const list = [1,2,3,4,5,6,7,8]
    const scroll_card = list.map((item,index)=>(
      <Link to="/propertydetail" key={`key-${item}`} className={`scroll_view_card ${index==list.length-1?'last':''}`}>
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
        <div className={styles.city_detail_wrapper}>
          <div className={styles.city_map_wrapper}>
            <div id="map" className={styles.city_map_container}>
            </div>
            {
              !mapLoaded
              ?<div className={styles.map_loading}><img src={loading} className="loading_svg"/></div>
              : null
            }
          </div>
          <div className="section_title">Seattle Home Prices</div>

          <div className="city_market_wrapper">
            <ul className="city_market_list">
             <li>
               <span>Listing Price</span>
               <span>$180,000</span>
             </li>
             <li>
               <span>Sold Price</span>
               <span>$180,000</span>
             </li>
             <li>
               <span>Rental</span>
               <span>$180,000</span>
             </li>
            </ul>
          </div>

          <div className="section_title">WeHome Score</div>
          <RadarChart/>

          <div className="section_title">Listing Price History</div>
          <ListingPriceChart/>

          <div className="section_title">Property you may be interested</div>
          <ScrollView className={'scroll_view_bottom'}>
            {scroll_card}
          </ScrollView>
        </div>
      </>
     )
  }
}
CityDetail.propTypes = {

}
export default CityDetail
