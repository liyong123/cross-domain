const express = require('express')
const app = express()
const CONFIG = require('./config')

app.listen(3000, _ => {
    console.log('ok')
})
/* node中间件 */
app.use((req, res, next) => {
    const {
       ALLOW_ORIGIN,
       CREDENTIALS,
       HEADERS,
       ALLOW_METHODS
    } = CONFIG.CORS
    res.header('Access-Control-Allow-Origin', ALLOW_ORIGIN);
    res.header('Access-Control-Allow-Methods', ALLOW_METHODS);
    res.header('Access-Control-Allow-Headers', HEADERS);
    res.header('Access-Control-Allow-Credentials',CREDENTIALS);
    /* req.method === 'OPTIONS'? res.send('SUPPORT CROSS DOMAIN'): next() // 每次cors请求之前的试探性请求 */
    if (req.method === 'OPTIONS') {
        res.send('SUPPORT CROSS DOMAIN')
        return
    }
    next()
})



/* 响应JSONP请求，JSONP解决跨域 */
app.get('/list', (req, res) => {
    // 获取请求路径?后面的参数：req.query
    const {
        callback = Function.prototype  // callback 默认值
    } = req.query
    const data = { // 返回给客户端的数据
        code: 0,
        message: '你好'
    }
    res.send(`${callback}(${JSON.stringify(data)})`) //data转化为字符串

})
/* 响应axios的get请求 */
app.get('/getTest', (req, res) => {
    const data = {
        code: 0,
        data: 'Got a GET request!'
    }
    res.send(`${JSON.stringify(data)}`)
})
/* 响应axios的post请求 */
app.post('/postTest', (req, res) => {
    const data = {
        code: 0,
        data: 'Got a post request!'
    }
    res.send(`${JSON.stringify(data)}`)
})