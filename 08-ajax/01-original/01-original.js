
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('hello home')
})

app.get('/server', (req, res) => {
    //设置响应头  设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    res.send('01-original_html.html');
})
app.all('/server', (req, res) => {
    //设置响应头  设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    res.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    res.send('02-original_html-post.html');
})
app.get('/server-json', (req, res) => {
    //设置响应头  设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    const data = { name: 'Ari' }
    let str = JSON.stringify(data)
    res.send(str);
})

//jquery
app.get('/jquery-server', (req, res) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    const data = { name: 'Ari' }
    let str = JSON.stringify(data)
    res.send(str);
})

//axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
});

//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
});


// corss-field: same orginal 
app.get('/home', (request, response)=>{
    //响应一个页面
    response.sendFile(__dirname + '/index.html');
});
app.get('/data', (request, response)=>{
    response.send('用户数据');
});




app.listen(9999, () => {
    console.log('server has started, port is 9999.....')
})