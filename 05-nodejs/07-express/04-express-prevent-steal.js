
const express = require('express')
const bodyParser = require('body-parser')


//create applicaton
const app = express()

/**
 * prevent steal chain 
 * 
 */

//declare
app.use((req,res,next) => {
    //check referer
    let referer = req.get('referer')
    if(referer){
        let url = new URL(referer)
        let hostname = url.hostname
        if(hostname !== '120.0.0.1'){
            res.status(404).send('<h1>404 Not Found</h1>')
            return
        }
    }

    next();
})

//static resource
app.use(express.static(__dirname+'/public'))

app.get('/home', (req, res) => {
    res.send('hello express')
})

app.listen(9000, () => {
    console.log('服务已经启动, 端口9000正在监听中....')
})
