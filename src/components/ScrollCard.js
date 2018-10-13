import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'

/*styles*/
import './styles/scrollcard.less'

/*files*/
// const search = require('./files/search.svg')

class ScrollCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  componentDidMount() {
  
  }
  handleClick = title => {
    //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
  }
  render() {
    const {last} = this.props
    return (
      <Link className={`card_wrapper ${last?'last':''}`} to="/">
       
      </Link>
    )
  }
}
ScrollCard.propTypes = {
}
export default ScrollCard
