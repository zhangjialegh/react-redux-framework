import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import getClientHeight from 'utils/getClientHeight'
import {withRouter} from "react-router-dom";

/*actions*/
import { receiveHotSearch } from 'actions/search'

/*api*/
import { suggestSearch } from 'services'

/*components*/
import Header from './components/Header'
import HotSearch from './components/HotSearch'
import MyJRoll from 'react-roll-container'
import { SearchBar, Icon } from 'antd-mobile';

/*styles*/
import styles from './styles/search.less'
@connect(
  state => state.getIn(['search']),
  dispatch => bindActionCreators({ receiveHotSearch }, dispatch)
)
class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentHot: '',
      height: getClientHeight,
      fromPath: this.props.location.query ? this.props.location.query.from : '/',
      suggestList: []
    }
  }
  componentDidMount() {
    this.getScrollHeight()
  }
  handleBackHistory = () => {
    console.log('back');
    
    this.props.history.goBack()
  }
  suggestSearch = async (params) => {
    let res = await suggestSearch(params)
    this.setState({
      suggestList: res
    })
  }
  handleChange = (val) => {
    console.log(val,'change');
    this.suggestSearch({
      text: val
    })
    this.setState({
      currentHot: val
    })
  }
  handleSubmit = (val) => {
    this.props.receiveHotSearch(val)
  }
  getScrollHeight = () => {
    // const header = document.querySelector('#styleBody')
    // const height = getClientHeight - header.offsetHeight
    // this.setState(() => ({ height }))
  }
  upDateValue = value => {
    this.setState({ currentHot: value })
  }
  hotClick = text => {
    this.setState(() => {
      return { currentHot: text }
    })
  }
  render() {
    const { hotData = ['sdfjl','sfjlsdjf'] } = this.props
    const { currentHot, height } = this.state



    return (
      <div style={{ height: '100vh' }}>
        <div className={styles.search_wrapper}>
          <div onClick={this.handleBackHistory}>
            <Icon type="left" />
          </div>
          <SearchBar placeholder="Search" maxLength={8} style={{
            width: '100%',
            backgroundColor: 'transparent'
          }}
          value={currentHot}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          />
        </div>
        <MyJRoll bgColor={'#fff'}
            height={height + 'px'}
        >
          <p className={styles.search_hot_title}>
            <i className="fa fa-fire" />
            <span>Top search</span>
          </p>
          <p className={styles.style_div_p}>
            {hotData.map((text, index) => (
              <HotSearch
                  currentHot={currentHot}
                  hotClick={() => this.hotClick(text)}
                  hotText={text}
                  key={index}
              />
            ))}
          </p>
        </MyJRoll>
      </div>
    )
  }
}
Search.propTypes = {
  hotData: PropTypes.array
}
export default withRouter(Search)
