
const express = require('express')
const fs = require('fs')
const path = require('path')

//create applicaton
const app = express()

/**
 * 中间件的作用 就是 使用函数封装公共操作，简化代码
 * all-affect & route-affect
 * 
 */

//static resource middleware: (prior depend on sequence(order))
app.use(express.static(__dirname + '/public'));

//declare middleware
function recodeMiddle(req,res,next){
    let {url,ip} = req
    fs.appendFileSync('access-log/access.log',`${url}  ${ip}\r\n`)
    next()
}
//use middleware
app.use(recodeMiddle)

app.get('/home', (req, res) => {
    res.send('hello express')
})

app.get('/admin', (req, res) => {
    res.send('admin express')
})

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})


app.listen(9000, () => {
    console.log('服务已经启动, 端口9000正在监听中....')
})
