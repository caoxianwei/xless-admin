import React, {Component} from 'react';
import {Layout, notification, Icon} from 'antd';
import './style/index.less';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import {receiveData} from './action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import Routes from './routes';
const {Content, Footer} = Layout;


class App extends Component {
    state = {
        collapsed: false,
    }

    componentWillMount() {
        const {receiveData} = this.props
        // console.log(this.props)
        // console.log(receiveData)
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(receiveData(user, 'auth'))
        user && receiveData(user, 'auth');//判断登录
        this.getClientWidth();
        window.onresize = () => {
            console.log('屏幕变化了');
            this.getClientWidth();
            // console.log(document.body.clientWidth);
        }
    }

    componentDidMount() {
        const openNotification = () => {
            notification.open({
                message: '博主',
                description: (
                    <div>
                        <p>
                            GitHub地址： <a href="https://github.com/" target="_blank" rel="noopener noreferrer">https://github.com/</a>
                        </p>
                        <p>
                            博客地址： <a href="https://github.io/" target="_blank" rel="noopener noreferrer">https://github.io/</a>
                        </p>
                    </div>
                ),
                icon: <Icon type="smile-circle" style={{ color: 'red' }} />,
                duration: 0,
            });
            localStorage.setItem('isFirst', JSON.stringify(true));
        };
        const isFirst = JSON.parse(localStorage.getItem('isFirst'));
        !isFirst && openNotification();
    }

    getClientWidth = () => {
        const clientWidth = document.body.clientWidth
        const {receiveData} = this.props
        console.log(clientWidth);
        receiveData({isMobile: clientWidth < 992}, 'responsive')
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        const {auth, responsive} = this.props
        console.log(auth)
        console.log(responsive)
        return (
            <Layout>
                {!responsive.data.isMobile && <SiderCustom collapsed={this.state.collapsed} />}
                <Layout style={{flexDirection: 'column'}}>
                    <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={auth.data || {}} />
                    {/*/!*<Content style={{ margin: '0 16px', overflow: 'initial' }}>*!/*/}
                        {/*/!*<Routes auth={auth} />*!/*/}
                    {/*/!*</Content>*!/*/}
                    {/*<Footer style={{ textAlign: 'center' }}>*/}
                        {/*React-Admin ©2017 Created by 865470087@qq.com*/}
                    {/*</Footer>*/}
                </Layout>

                {/* {
                    responsive.data.isMobile && (   // 手机端对滚动很慢的处理
                        <style>
                        {`
                            #root{
                                height: auto;
                            }
                        `}
                        </style>
                    )
                } */}
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    const {auth = {data: {}}, responsive = {data: {}}} = state.httpData;
    return {auth, responsive};
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
