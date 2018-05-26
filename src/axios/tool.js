/*请求工具封装*/

import axios from 'axios'
import {message} from 'antd'

/**
 * get 请求
 * @param url
 * @param msg
 * @param hearder
 */
export const get = ({url, msg = 'get api error', header}) => {
    axios.get(url, header).then(res => res.data).catch(err => {
        console.error(err)
        message.error(msg)
    })
}

/**
 * post 请求封装
 * @param url
 * @param data
 * @param msg
 * @param header
 */
export const post = ({url, data, msg = 'post api error', header}) => {
    axios.post(url, data, header).then(res => res.data).catch(err => {
        console.error(err)
        message.error(msg)
    })
}