import React from 'react'
import PropTypes from 'prop-types'
import { Button, Menu, ActivityIndicator, Icon } from 'antd-mobile';

/*actions*/

/*component*/
import ErrorBoundary from 'pages/Commons/ErrorBoundary'
import SearchInput from 'components/SearchInput'
import ListViewWrap from './components/ListViewWrap'

/*styles*/
import styles from './styles/propertylist.less'

/*files*/
// const search = require('./files/search.svg')
// const BasicInputExampleWrapper = createForm()(BasicInputExample);

const dataMenu = [
  {
    value: '1',
    label: 'Food',
  }, {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
  },
];
class PropertyList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initData: dataMenu,
      show: false,
      open: false
    }
  }
  componentDidMount() {

  }

  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      this.setState({
        initData: dataMenu,
      })
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
      open: false
    });
  }

  onChange = (value) => {
    let label = '';
    dataMenu.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    console.log(label);
  }

  onOpenFilter = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  onOpenSort = (...args) => {
    console.log(args);
    this.setState({ show: !this.state.show });
  }

  render() {
    const { initData, show, open } = this.state

    // 排序列表
    const menuEl = (
      <Menu
        className="single-foo-menu"
        data={initData}
        value={['1']}
        level={1}
        onChange={this.onChange}
        height={show?initData.length * 44:0}
      />
    )

    // 筛选列表
    const filterEl = (
      <div className={styles.filter_wrapper} style={{
        right: open ? 0 : '-360px'
      }}>
        <div className={styles.filter_container}>
          <div className={styles.filter_content}>
            <header>
              <p>Filters</p>
              <p></p>
            </header>
            <ul className={styles.filter_body}>
              <li>
                <p className={styles.filter_title}>Price($)</p>
                <ul>
                  <li className={`filter_tag_item width-slide-3 ${true?'active':''}`}>Bellow 100k</li>
                  <li className={`filter_tag_item width-slide-3 ${true?'active':''}`}>Bellow 100k</li>
                  <li className={`filter_tag_item width-slide-3 ${true?'active':''}`}>Bellow 100k</li>
                  <li className={`filter_tag_item width-slide-3 ${true?'active':''}`}>Bellow 100k</li>
                  <li className={`filter_tag_item width-slide-3 ${true?'active':''}`}>Bellow 100k</li>
                </ul>
              </li>

              <li>
                <p className={styles.filter_title}>Rooms</p>
                <ul>
                  <li className={`filter_tag_item width-slide-4 ${true?'active':''}`}>1</li>
                  <li className={`filter_tag_item width-slide-4 ${true?'active':''}`}>2</li>
                  <li className={`filter_tag_item width-slide-4 ${true?'active':''}`}>3</li>
                  <li className={`filter_tag_item width-slide-4 ${true?'active':''}`}>4+</li>
                </ul>
              </li>

              <li>
                <p className={styles.filter_title}>Baths</p>
                <ul>
                  <li className={`filter_tag_item width-slide-4 ${true?'active':''}`}>1</li>
                  <li className={`filter_tag_item width-slide-4 ${true?'active':''}`}>2</li>
                  <li className={`filter_tag_item width-slide-4 ${true?'active':''}`}>3+</li>
                </ul>
              </li>

              <li>
                <p className={styles.filter_title}>Baths</p>
                <ul>
                  <li className={`filter_tag_item width-slide-4 ${true?'active':''}`}>1</li>
                  <li className={`filter_tag_item width-slide-4 ${true?'active':''}`}>2</li>
                  <li className={`filter_tag_item width-slide-4 ${true?'active':''}`}>3+</li>
                </ul>
              </li>


              <li>
                <p className={styles.filter_title}>House Type</p>
                <ul>
                  <li className={`filter_tag_item width-slide-2 ${true?'active':''}`}>Single Family House</li>
                  <li className={`filter_tag_item width-slide-2 ${true?'active':''}`}>Condo</li>
                </ul>
              </li>

              <li>
                <p className={styles.filter_title}>Days on market</p>
                <ul>
                  <li className={`filter_tag_item width-slide-5 ${true?'active':''}`}> {'<'} 1 </li>
                  <li className={`filter_tag_item width-slide-5 ${true?'active':''}`}>3</li>
                  <li className={`filter_tag_item width-slide-5 ${true?'active':''}`}>7</li>
                  <li className={`filter_tag_item width-slide-5 ${true?'active':''}`}>15</li>
                  <li className={`filter_tag_item width-slide-5 ${true?'active':''}`}>30</li>
                </ul>
              </li>
              
            </ul>
          </div>




          
        </div>
        <div className={styles.btn_wrapper}>
          <Button className="filter_btn" type="">Clear All</Button>
          <Button className="filter_btn" type="primary">Confirm</Button>
        </div>
      </div>
    )

    // const loadingEl = (
    //   <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
    //     <ActivityIndicator size="large" />
    //   </div>
    // );
    const hearder = (
      <div className={show ? 'single-menu-active' : ''}>
        <div>
          <div className="single-top-nav-bar">
            <div className={styles.sort_wrapper} onClick={this.onOpenSort}>
            All<Icon type="down" size="xs" style={{
              transition: 'all 0.3s',
              transform: show ? 'rotate(180deg)' : 'rotate(0deg)'
            }} />
            </div>
            <div className={styles.sort_wrapper}>
            综合
            </div>
            <div className={styles.sort_wrapper}>
            价格<p className="sort_up_down"><i className="font_family icon-up active"></i><i className="font_family icon-down"></i></p>
            </div>
            <div className={styles.sort_wrapper} onClick={this.onOpenFilter}>
            <i className="font_family icon-filter"/> Filters
            </div>
          </div>
        </div>
        {menuEl}
        {filterEl}
        <div className={`menu_mask ${show || open ? 'active':''}`} onClick={this.onMaskClick} />
      </div>
      )


     return(
      <>
        <ErrorBoundary>
          <div></div>
        </ErrorBoundary>
        <div className={styles.property_wrapper}>
          <div className={styles.search_wrapper}>
            <SearchInput/>
          </div>
          {hearder}
          <ListViewWrap/>
        </div>
      </>
     )
  }
}
PropertyList.propTypes = {

}
export default PropertyList
