import React from 'react'
import PropTypes from 'prop-types'

/*components*/
import ScrollView from 'components/ScrollView'
import Swiper from 'components/Swiper'
import {Button} from 'antd-mobile'
import mapboxgl from 'mapbox-gl'


/*styles*/
// import styles from './styles/home.less'

/*files*/
// const search = require('./files/search.svg')

class Index extends React.Component {
  state = {
    list: [2,2,3,4,5,6,]
  }
  componentDidMount() {
 
    mapboxgl.accessToken = 'pk.eyJ1IjoiempsMDMwMyIsImEiOiJjajlxaGF5aDA1eWZzMnFtcXlqZzZ5dHloIn0.B3qh_Vd3MoT1mD4ND0MP4Q';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10'
    });
  }
  handleClick = title => {
    //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
    
  }
  render() {
    console.log(this.props,'lsit');
    
    return (
      <div>
        <div id="map"></div>
      <ScrollView/>
      <Swiper/>
      <Button type="primary"/>
      </div>
    )
  }
}
Index.propTypes = {
}
export default Index
