
const express = require('express')

//create applicaton
const app = express()

/**
 * create route (various route)
 */
app.get('/home', (req, res) => {
    res.send('hello express')
})

//home
app.get('/', (req, res) => {
    res.send('home page')
})

//post
app.post('/', (req, res) => {
    res.send('post page')
})

//all method
app.all('/search', (req, res) => {
    res.send('all method response')
})

//all 404
// app.all('*', (req,res) =>{
//     res.send('<h1>404<h1>')
// })


/**
 * get request param
 */
app.get('/param', (req, res) => {

    //header
    console.log(req.url)     //param
    console.log(req.method)  //GET
    console.log(req.httpVersion) //1.1
    // console.log(req.header)

    //express exclusive method
    console.log(req)
    console.log(req.query)  //{}
    console.log(req.get('host')) //localhost:9000

    res.send('get request param')
})

/**
 * get route param
 */
app.get('/:id.html', (req, res) => {
    console.log(req.params)
    res.send('商品详情, 商品 id 为' + req.params.id)
})

//exercise
const {singers} = require('./json/singers.json')
app.get('/singer/:id.html', (req, res) => {
    let id = req.params.id
    console.log('id: '+ id)

    //find id data in array
    let result = singers.find(item => {
        if(item.id === Number(id)){
          return true;
        }
      });

    //null check
    if (!result) {
        res.statusCode = 404;
        res.end(`<h1>404 Not Found</h1>`)
        return;
    };

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          <h2>${result.singer_name}</h2>
          <img src='${result.singer_pic}' />
        </body>
        </html>`);

})


/**
 * response
 */
app.get('/response', (req,res) => {
    //express compatible http 
    // res.statusCode = 404
    // res.statusMessage = 'xxx'
    // res.setHeader('abc','xyz')
    // res.write('aabbcc')
    // res.end('response test')

    //express method
    // res.status(500)
    // res.set('xxx','yyy')
    // res.send('无法将')
    // res.status(500).set('xxx','yyy').send('无法将')

    //other
    // res.redirect('http://jd.com')
    // res.download('./package.json')
    // res.json({'aa':11, 'bb':22})
    res.sendFile(__dirname+'/01-express-helloworld.js')

})



app.listen(9000, () => {
    console.log('服务已经启动, 端口9000正在监听中....')
})
