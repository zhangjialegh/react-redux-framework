/* eslint no-dupe-keys: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { StickyContainer, Sticky } from 'react-sticky';

/*components*/
import { ListView } from 'antd-mobile';

/*styles*/
import styles from '../styles/listviewwrap.less'

/*files*/
const like = require('assets/image/like.svg')
const like_active = require('assets/image/like.svg')

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

export default class ListViewWrap extends React.Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }


 

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
      });
    }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      genData(++pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          height: 10,
        }}
      />
    );
    let index = data.length - 1;
    // const row = (rowData, sectionID, rowID) => {
    //   if (index < 0) {
    //     index = data.length - 1;
    //   }
    //   const obj = data[index--];
    //   return (
    //     <div key={rowID} style={{ padding: '0 15px' }}>
    //       <div
    //         style={{
    //           lineHeight: '50px',
    //           color: '#888',
    //           fontSize: 18,
    //           borderBottom: '1px solid #F6F6F6',
    //         }}
    //       >{obj.title}</div>
    //       <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
    //         <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
    //         <div style={{ lineHeight: 1 }}>
    //           <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
    //           <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>35</span>¥ {rowID}</div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };
    

    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} className={styles.card_items}>
          <div className={styles.card_img_wrapper}>
            <img src={obj.img} alt="加载中..."/>
          </div>
          <div className={styles.card_content_wrapper}>
            <img src={like} alt="like" className={styles.collect_icon}/>
            <div className={styles.card_top_container}>
              <div>
                <h5 className={styles.card_small_title}>Listing Price</h5>
                <strong className={styles.card_bold_number}>$136,900</strong>
              </div>
              <div style={{marginLeft: '20px'}}>
                <h5 className={styles.card_small_title}>Listing Price</h5>
                <strong className={styles.card_bold_number}>$136,900</strong>
              </div>
            </div>
            <div className={styles.card_center_container}>
              <p className={styles.card_content_text}>13434 gsgg, Gfdsf , Walll 9089e</p>
              <p className={styles.card_content_text}>3是发顺丰 894见覅 水i3494</p>
            </div>
            <p className={styles.card_content_text}>Aprere:455% <span>|</span> Rental: 4,5%</p>
            <ul className={styles.tag_container}>
             <li>huoying</li>
             <li>sishen</li>
             <li>haizeiwang</li>
            </ul>
          </div>
        </div>
      );
    };

    return (
      <>
      
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        className={styles.list_view_wrapper}
        useBodyScroll
        // renderSectionWrapper={sectionID => (
        //   <StickyContainer
        //     key={`s_${sectionID}_c`}
        //     className="sticky-container"
        //     style={{ zIndex: 4 }}
        //   />
        // )}
        // renderSectionHeader={sectionData => (
        //   <Sticky>
        //     {({
        //       style,
        //     }) => (
        //       <div
        //         className="sticky"
        //         style={{
        //           ...style,
        //           zIndex: 3,
        //           backgroundColor: parseInt(sectionData.replace('Section ', ''), 10) % 2 ?
        //             '#5890ff' : '#F8591A',
        //           color: 'white',
        //         }}
        //       >{`Task ${sectionData.split(' ')[1]}`}</div>
        //     )}
        //   </Sticky>
        // )}
        // renderHeader={hearder}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        pageSize={4}
        onScroll={() => { console.log('scroll'); }}
        scrollEventThrottle={200}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
      </>
    );
  }
}




