const express = require('express')
const app = express()
app.listen(1002, _ => {
    console.log('ok')
})
app.use(express.static('./')) /* 处理静态资源文件请求，从当前根目录请求 */