import React from 'react'
import PropTypes from 'prop-types'


/*components*/
import ScrollCard from './ScrollCard'

/*styles*/
import styles from './styles/scrollview.less'

/*files*/
// const search = require('./files/search.svg')

export default class ScrollView extends React.Component {
  state = {
    list: [2,2,3,4,5,6,]
  }
  componentDidMount() {

  }
  handleClick = title => {
    //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
  }
  render() {
    const {list} = this.state
    const {srcoll_view_wrapper} = styles
    return (
      <div className={srcoll_view_wrapper}>
       {
         list.map((item,index)=><ScrollCard key={item+index} last={index==list.length-1}/>)
       }
      </div>
    )
  }
}
ScrollView.propTypes = {
}
