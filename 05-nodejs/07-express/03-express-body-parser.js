
const express = require('express')
const bodyParser = require('body-parser')


//create applicaton
const app = express()

/**
 * body-parser
 * 
 */

//json
const jsonParser = bodyParser.json()

//解析 querystring 格式请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extends: false })

app.get('/home', (req, res) => {
    res.send('hello express')
})

//post规则: add [body] to [req] after middleware end run
app.post('/login', urlencodedParser, (req, res) => {
    //获取 用户名 和 密码
    console.log(req.body);  //{ username: '232', password: '1231' }
    // console.log(req.username);
    // console.log(req.password);
    res.send('获取用户的数据')
});


app.listen(9000, () => {
    console.log('服务已经启动, 端口9000正在监听中....')
})
