import * as type from './type'
import * as http from '../axios/index'

/**
 * 请求数据 Action
 * @param category
 */
export const requestData = category => ({
    type: type.REQUEST_DATA,
    category
})

/**
 * 接受数据 Action
 * @param data
 * @param category
 */
export const receiveData = (data, category) => ({
    type: type.RECEIVE_DATA,
    data,
    category
})

/**
 * 请求数据 抽取的Action
 * @param funcName
 * @param params
 * @param stateName
 */
export const fetchData = ({funcName, params, stateName}) => dispatch => {
    !stateName && (stateName = funcName);
    dispatch(requestData(stateName))
    return http[funcName](params).then(res => (dispatch(receiveData(res, stateName))))
}
