import React from 'react'
import PropTypes from 'prop-types'

/*actions*/

/*components*/
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import "echarts/lib/component/legendScroll"
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'

/*styles*/
import styles from '../styles/chart.less'

/*files*/
// const header_bg = require('assets/image/home_header_bg.png')
// const BasicInputExampleWrapper = createForm()(BasicInputExample);

export default class ListingPriceChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    let myChart = echarts.init(this.refs.line)  
		window.onresize = () => {
      myChart.resize()
    }
		
		const option = {
          title: {
            text: 88,
            x: 'center',
            y: 'center',
            textStyle: {
                color: '#fff',
                fontWeight: 'bolder',
                fontSize: 20,
            }
        },
        radar: {
            name: {
                textStyle: {
                    color: '#333',
                    padding: [0, 5]
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#d5a478',
                opacity: 0.58
              }
            },
            splitArea: {
                show: true,
                areaStyle: {
                  color: '#DADADA',
                  opacity: 0.7
                }
            },
            splitLine: {
                show: false
            },
            indicator: [
              { name: '房屋增值', max: 100},
              { name: '抗跌能力', max: 100},
              { name: '短租收益', max: 100},
              { name: '长租收益', max: 100},
              { name: '持有成本', max: 100}
            ]
        },
        series: [{
            type: 'radar',
            symbol:"none",
            lineStyle: {
              opacity: 0
            },
            areaStyle: {
              color: '#d5a478',
              opacity: 1
            },
            data : [
                {
                    value : [99,78,87,67,80]
                }
            ]
        }]
    };
    myChart.setOption(option) 
  }

  componentWillUnmount() {
    window.onresize = null
  }


  render() {
   
     return(
      <div className={styles.line_chart_wrapper}>
        {/* <ul className={styles.appreciation_wrapper}>
          <li className="text_left">
            <span className="number_text">$178,000</span>
            <p className="desc_text">Median</p>
          </li>
          <li className="text_center">
            <span className="number_text">$178,000</span>
            <p className="desc_text">{"Cuurent Appreciation \n (12 months)"}</p>
          </li>
          <li className="text_right">
            <span className="number_text">$178,000</span>
            <p className="desc_text">{"Cuurent Appreciation \n (12 months)"}</p>
          </li>
        </ul> */}


        <div ref="line" className={styles.chart_container} style={{
          border: 'none'
        }}></div>

        {/* <div className={styles.rent_wrapper}>
          <ul className={styles.appreciation_wrapper}>
            <li className="text_left">
              <span className="number_text"><span className="number_text large">5 </span>Excullent</span>
              <p className="desc_text">Price-to-rent Ratio</p>
            </li>
            <li className="text_center">
              <span className="number_text">$178,000</span>
              <p className="desc_text">{"Cuurent Appreciation \n (12 months)"}</p>
            </li>
            <li className="text_right">
              <span className="number_text">$178,000</span>
              <p className="desc_text">{"Cuurent Appreciation \n (12 months)"}</p>
            </li>
          </ul>

          <ul className={styles.appreciation_wrapper}>
            <li className="text_left">
              <span className="number_text"></span>
              <p className="desc_text"></p>
            </li>
            <li className="text_center">
              <span className="number_text">$178,000</span>
              <p className="desc_text">{"Cuurent Appreciation \n (12 months)"}</p>
            </li>
            <li className="text_right">
              <span className="number_text">$178,000</span>
              <p className="desc_text">{"Cuurent Appreciation \n (12 months)"}</p>
            </li>
          </ul>

          <ul className={styles.appreciation_wrapper}>
            <li className="text_left">
              <span className="number_text"></span>
              <p className="desc_text"></p>
            </li>
            <li className="text_center">
              <span className="number_text">$178,000</span>
              <p className="desc_text">{"Cuurent Appreciation \n (12 months)"}</p>
            </li>
            <li className="text_right">
              <span className="number_text">$178,000</span>
              <p className="desc_text">{"Cuurent Appreciation \n (12 months)"}</p>
            </li>
          </ul>
        </div> */}


      </div>
     )
  }
}
ListingPriceChart.propTypes = {

}
