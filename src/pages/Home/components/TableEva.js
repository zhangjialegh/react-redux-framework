import React from 'react'
import PropTypes from 'prop-types'

/*styles*/
import styles from '../styles/tableeva.less'


/*components*/
import { Modal } from 'antd-mobile'


const tlList = ['seattle','new york','dalls','settle','dalls','new york']

class TableEva extends React.Component {
  state = {
    questionModal: false
  }
  componentDidMount() {
    // this.autoFocusInst.focus();
  }

  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      questionModal: true
    });
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  render() {
    const { questionModal } = this.state
    const { renderList } = this.props
    console.log(renderList,'rederList');
    
    const len = renderList.length

    return (
      <>
        <Modal
          visible={questionModal}
          transparent
          maskClosable={false}
          onClose={this.onClose('questionModal')}
          title="Title"
          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('questionModal')(); } }]}
        >
          {this.state.tips}
        </Modal>
        <table className={styles.table_left} border="0" cellPadding="0" cellSpacing	
="0">
          <tbody>
            <tr>
              <th>City</th>
            </tr>
            {
              tlList.map((item,index)=>{
                return (
                  <tr key={`tr-${item}-${index}`} style={{
                    backgroundColor: index%2==0?'rgba(216,216,216,0.15)':'#FFFFFF'
                  }}>
                    <td>Seattle</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className={styles.table_right_wrapper}>
          <div className={styles.table_right_container}>
            <table border="0" cellPadding="0" cellSpacing	
="0">
              <tbody>
                <tr>
                {
                  tlList.map((item,index)=>{
                    return (
                      <th key={`th-${item}-${index}`} onClick={this.showModal('questionModal')}>
                        {item}<i className="font_family icon-question"></i>
                      </th>
                    )
                  })
                }
                </tr>
                {
                  tlList.map((key,idx)=>{
                    return (
                      <tr key={`trr-${key}-${idx}`} style={{
                        backgroundColor: idx%2==0?'rgba(216,216,216,0.15)':'#FFFFFF'
                      }}>
                        {tlList.map((item,index)=>{
                          return (
                            <td key={`td-${item}-${index}`}>{item}</td>
                          )
                        })}
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  }
}
TableEva.propTypes = {
  renderList: PropTypes.array
}
export default TableEva
