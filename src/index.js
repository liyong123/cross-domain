/* webapck中可以写es6的语法 */
import axios from 'axios'
/* 前端发起请求 */
axios.get('/getTest').then(res => {
    console.log(res)
}).catch(error => {
    console.log(error.message)
})