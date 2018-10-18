import React, {Component} from 'react'
import PropTypes from 'prop-types'

/*components*/
import { Carousel} from 'antd-mobile';

/*styles*/
import styles from './styles/swiper.less'

/*files*/
// const search = require('./files/search.svg')

class Swiper extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  handleClick = title => {
    //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
  }
  render() {
    
    const {className} = this.props
    return (
      <Carousel
          className={`my_carousel ${className?className:''}`}
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%' }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    )
  }
}
Swiper.propTypes = {
}
export default Swiper
