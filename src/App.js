import React, { Component } from 'react';
import { Layout, notification, Icon } from 'antd';
import './style/index.less';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import { receiveData } from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Routes from './routes';
const { Content, Footer } = Layout;


class App extends Component {
    render() {
        return (
            <Nav/>
        );
    }
}

export default App;
