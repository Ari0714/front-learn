
const express = require('express')
const homeRouter = require('./05-route-module/homeRouter');
const adminRouter = require('./05-route-module/adminRouter');

//create applicaton
const app = express()

/**
 * route module
 */

app.use(homeRouter)
app.use(adminRouter)

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

app.listen(9000, () => {
    console.log('服务已经启动, 端口9000正在监听中....')
})
