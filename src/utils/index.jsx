export const queryString = () => {
    let _queryString = {}
    const _query = window.location.search.substr(1);
    const _vars = _query.split('&');
    console.log(_query)
    console.log(_vars)
    _vars.forEach((v, i) => {
        const _pair = v.split('=');
        if (!_queryString.hasOwnProperty(_pair[0])) {
            //不存在元素的时候加入
            _queryString[_pair[0]] = decodeURIComponent(_pair[1])
        } else if (typeof _queryString[_pair[0]] === 'string') {
            //存在相关元素
            let _arr = [_queryString[_pair[0]], decodeURIComponent(_pair[1])]
            _queryString[_pair[0]] = _arr
        } else {
            _queryString[_pair[0]].push(decodeURIComponent(_pair[1]))
        }
    })
    return _queryString
}