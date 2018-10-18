import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routers from 'routers'
import { NavBar, Icon, TabBar } from 'antd-mobile';
import Auth from './Auth';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
            navLight: false
        }
    }
    listenScroll = () => {
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(scrollTop >= 45) {
            this.setState({
                navLight: true
            })
        } else {
            this.setState({
                navLight: false
            })
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScroll)
    }
    render() {
        let { navLight } = this.state
        let { location } = this.props
        console.log(location.key,'dd');
        
        return (
        <>
            <div style={{
                position:'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 9
            }}>
                {/* <NavBar
                mode="light"
                icon={<Icon type="left"/>}
                onLeftClick={() => console.log('onLeftClick')}
                
                rightContent={[
                    // <Icon key="0" type="search" />,
                    <Icon key="1" type="ellipsis" onClick={() => console.log('onRightClick')}/>,
                ]}
                style={!navLight?{
                    background: 'transparent'
                }: null}
                ></NavBar> */}
            </div>
                <Switch>
                {
                    routers.map((r, key) => (
                        <Route component={(r.component)}
                            exact={!!r.exact}
                            key={key}
                            path={r.path}
                        />
                    ))
                }
                </Switch>
            {/* <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
                >
                <TabBar.Item
                    title="Life"
                    key="Life"
                    icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selected={this.state.selectedTab === 'blueTab'}
                    badge={1}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'blueTab',
                    });
                    }}
                    data-seed="logId"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={
                    <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selectedIcon={
                    <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    title="Koubei"
                    key="Koubei"
                    badge={'new'}
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'redTab',
                    });
                    }}
                    data-seed="logId1"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={
                    <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selectedIcon={
                    <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    title="Friend"
                    key="Friend"
                    dot
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'greenTab',
                    });
                    }}
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    title="My"
                    key="my"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'yellowTab',
                    });
                    }}
                >
                </TabBar.Item>
                </TabBar>
            </div> */}
           </>
        )
    }
}








