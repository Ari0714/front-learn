
const express = require('express')
const fs = require('fs')
const path = require('path')

//create applicaton
const app = express()

/**
 * 中间件的作用 就是 使用函数封装公共操作，简化代码
 * all-affect & route-affect
 * 针对 /home  /admin 的请求, 要求 URL 携带 code=504 参数, 如未携带提示『暗号错误』  
 */
//declare middleware
function recodeMiddle (req,res,next) {
    if(req.query.code == '504'){
        next()
    }else{
        res.send('passwd is wrong')
    }
}

app.get('/home', recodeMiddle, (req, res) => {
    res.send('hello express')
})

app.get('/admin',  recodeMiddle, (req, res) => {
    res.send('admin express')
})

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})


app.listen(9000, () => {
    console.log('服务已经启动, 端口9000正在监听中....')
})
