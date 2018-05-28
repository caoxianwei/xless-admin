import React from 'react'
import {Menu, Icon} from 'antd'
import {Link} from 'react-router-dom'

/**
 * 渲染子菜单项
 * @param key
 * @param title
 * @param icon
 * @param link
 * @param props
 */
const renderMenuItem =
    ({key, title, icon, link, ...props}) =>
        <Menu.Item
            key={key || link}
            {...props}
        >
            <Link to={link || key}>
                {icon && <Icon type={icon}/>}
                <span className="nav-text">{title}</span>
            </Link>
        </Menu.Item>;
/**
 * 渲染菜单项
 * @param key
 * @param title
 * @param icon
 * @param link
 * @param sub
 * @param props
 */
const renderSubMenuItem =
    ({key, title, icon, link, sub, ...props}) =>
        <Menu.SubMenu
            key={key || link}
            title={
                <span>
                    {icon && <Icon type={icon}/>}
                    <span className="nav-text">{title}</span>
                </span>
            }
            {...props}
        >
            {sub && sub.map(item => renderMenuItem(item))}
        </Menu.SubMenu>;
/**
 * 纯函数组合组件
 * @param menus
 * @param props
 */
export default ({menus, ...props}) => (
    <Menu {...props}>
        {menus && menus.map(
            item => item.sub && item.sub.length ?
                renderSubMenuItem(item) : renderMenuItem(item)
        )}
    </Menu>
)

