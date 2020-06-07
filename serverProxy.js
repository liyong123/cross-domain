const express = require('express')
const app = express()
const CONFIG = require('./config')

app.listen(3001, _ => {
    console.log('ok')
})
/* 响应axios请求 */
app.get('/getTest', (req, res) => {
    const data = {
        code: 0,
        data: 'Got a GET request!'
    }
    res.send(`${JSON.stringify(data)}`)
});