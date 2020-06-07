/* 客户端请求 */
$.ajax({
    url: 'http://127.0.0.1:3000/list',
    method: 'get',
    dataType: 'jsonp', // => 执行的是JSONP的请求,jquery默认创建一个全局函数callback
    success: res => {
        console.log(res);
    }
})