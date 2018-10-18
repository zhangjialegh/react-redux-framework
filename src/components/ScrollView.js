import React from 'react'
import PropTypes from 'prop-types'


/*components*/
// import ScrollCard from './ScrollCard'

/*styles*/
import styles from './styles/scrollview.less'

/*files*/
// const search = require('./files/search.svg')

export default class ScrollView extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  handleClick = title => {
    //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
  }
  render() {
    const {children,className} = this.props
    return (
      <div className={`srcoll_view_wrapper ${className?className:''}`}>
       {children}
      </div>
    )
  }
}
ScrollView.propTypes = {
}
