import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from "react-router-dom";


/*components*/
import { List, InputItem, Icon } from 'antd-mobile';

/*styles*/
import styles from './styles/searchinput.less'
class SearchInput extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  handleClick = () => {
    console.log(this.props,this.props.history,'click');
    
    this.props.history.push({ pathname : '/search' ,query : { from: '/'} })
  }
  render() {
    return (
      <div>
        <List 
        onClick={this.handleClick}
        style={{
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <InputItem
            editable="false"
            disabled="true"
            placeholder="Search city zipcode address"
            style={{
              fontSize: '12px'
            }}
          ><Icon type="search" size="xs" color="#9B9B9B"/></InputItem>
        </List>
      </div>
    );
  }
}
export default withRouter(SearchInput)
