const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        index: './src/index.js', /* package.json已经配置start和build, 所以webpack还是默认打包src下面的文件 */
        // index2: './src/index2.js'  //多入口配置
    },
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'js/[name].[chunkhash].js'
    },
    devServer: {
       port: 3008,
       open: true,
       progress: true,
       /* contentBase: './dist', */ /* 指定静态资源访问目录 */
       proxy: {
           "/api": { /* 只要是'/api'开头的接口都代理到3001 */
                target: 'http://localhost:3001',
                changeOrigin: true,
                /* changeOrigin为true, devServer会起一个服务作为中层的代理，
               devServer也是node写的，相当于拿node写的中间件处理跨域，
               把拿到的数据返回给客户端。 */
                ws: true,
                pathRewrite: {
                    '^/api': '' /* 把/api转成空字符串 */
                }
            }
       }
    },
    module: {
        rules: [
        ]   
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['index']  
        })
    ]
}