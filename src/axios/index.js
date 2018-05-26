import axios from 'axios'
import {get, post} from './tool'
import * as mock from './mock'


// easy-mock数据交互
// 管理员权限获取
export const admin = () => get({url: mock.MOCK_AUTH_ADMIN});

// 访问权限获取
export const guest = () => get({url: mock.MOCK_AUTH_VISITOR});