

//create applicaton
const app = express()

/**
 * generator code quickly
 * 1.
 * 
 * 
 * 2.express -e 07-generator
 * 
 */

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

app.listen(9000, () => {
    console.log('服务已经启动, 端口9000正在监听中....')
})
