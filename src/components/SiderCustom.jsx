import React, {Component} from 'react';
import {Layout} from 'antd';
import {withRouter} from 'react-router-dom';
import {menus} from '../constants/menus';
import SiderMenu from './SiderMenu';

const {Sider} = Layout;

class SiderCustom extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey: '',
        firstHide: true,        // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
    };

    menuClick = e => {
        console.log(e)
        this.setState({
            selectedKey: e.key
        })
    }
    openMenu = e => {
        console.log(e)
    }

    render() {
        console.log(menus)

        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsed={this.props.collapsed}
                style={{overflowY: 'auto'}}
            >
                <div className="logo"/>
                <SiderMenu
                    menus={menus}
                    onClick={this.menuClick}
                    // theme="dark"
                    mode="inline"
                    selectedKeys={[this.state.selectedKey]}
                    // openKeys={this.state.firstHide ? null : [this.state.openKey]}
                    onOpenChange={this.openMenu}
                />
            </Sider>
        )
    }
}

export default withRouter(SiderCustom);