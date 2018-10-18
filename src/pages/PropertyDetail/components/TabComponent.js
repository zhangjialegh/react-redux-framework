import React from 'react'
import PropTypes from 'prop-types'
import { StickyContainer, Sticky } from 'react-sticky';

/*actions*/

/*components*/
import { Tabs } from 'antd-mobile'
import Tab1 from './Tab1'
import Tab2 from './Tab2'

/*styles*/
import styles from '../styles/chart.less'

/*files*/
// const header_bg = require('assets/image/home_header_bg.png')
// const BasicInputExampleWrapper = createForm()(BasicInputExample);

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' }
];

export default class TabComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    
  }


  render() {
   
     return(
      <StickyContainer>
        <Tabs tabs={tabs}
          initalPage={'t1'}
          renderTabBar={renderTabBar}
        >
          <Tab1/>
          <Tab2/>
        </Tabs>
      </StickyContainer>
     )
  }
}
TabComponent.propTypes = {

}
