import React from 'react'
import PropTypes from 'prop-types'

/*actions*/

/*components*/

/*styles*/
import styles from '../styles/tab1.less'

/*files*/

export default class Tab1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    
  }


  render() {
   
     return(
      <div className={styles.summary_wrapper}>
        <div className="section_title">Facts and Features</div>
        <ul className={styles.summary_container}>
        <li>
          <i className="font_family icon-type"></i>
          <p>
            <span>Type</span>
            <strong>Single Family</strong>
          </p>
        </li>
        <li>
          <i className="font_family icon-bed"></i>
          <p>
            <span>Bed</span>
            <strong>2 rooms</strong>
          </p>
        </li>
        <li>
          <i className="font_family icon-sqft"></i>
          <p>
            <span>Sqft</span>
            <strong>18,000</strong>
          </p>
        </li>
        <li>
          <i className="font_family icon-status"></i>
          <p>
            <span>Status</span>
            <strong>Sold</strong>
          </p>
        </li>
        <li>
          <i className="font_family icon-days"></i>
          <p>
            <span>Days on Market</span>
            <strong>24 days</strong>
          </p>
        </li>
        <li>
          <i className="font_family icon-bath"></i>
          <p>
            <span>Baths</span>
            <strong>2 baths</strong>
          </p>
        </li>
        <li>
          <i className="font_family icon-build"></i>
          <p>
            <span>Year Built</span>
            <strong>1989</strong>
          </p>
        </li>
        </ul>
      </div>
     )
  }
}
Tab1.propTypes = {

}
