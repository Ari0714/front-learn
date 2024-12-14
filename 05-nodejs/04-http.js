
/**
 * http module
 */

// url（uniform resource locator）： request line、header、blank、body

// http: url（uniform resource locator）： request line、header、blank、body
// 1.server
const http = require('http');
const url = require('url');
const fs = require('fs');
const { parse } = require('path');
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8'); //chinese random code

    //general
    // console.log(request.method)  //GET
    // console.log(request.url)  // /sdsd
    // console.log(request.httpVersion)  //1.1
    // console.log(request.headers.host)  //localhost:9000

    //set reponse body
    // response.end('hello http server, 你好')

    /**
     * get request body
     */
    // let body = '';
    // request.on('data', chunk => {
    //     body += chunk;
    // });
    // request.on('end', () =>{
    //     console.log(body);
    //     response.end('hello http');
    // });

    /**
     * get usr and query str
     */
    // let res = url.parse(request.url, true)
    // let pathname = res.pathname
    // let keyword = res.query.keyword
    // console.log('pathname:' + pathname)
    // console.log('keyword:' + keyword)
    // response.end('url')

    //m2
    // let url = new URL('/search?a=100&b=200', 'http://127.0.0.1:9000');
    // let url = new URL(request.url, 'http://127.0.0.1');
    // console.log(url.pathname);
    // console.log(url.searchParams.get('keyword'));
    // response.end('url new');

    //exercise
    // let r_method = request.method
    // let r_url = url.parse(request.url,true)
    // console.log(r_url.pathname)
    // if(r_method == 'GET'){
    //     if(r_url.pathname == '/login'){
    //         response.end('login web')
    //     } else if(r_url.pathname == '/reg'){
    //         response.end('register web')
    //     }
    // }


    /**
     * set reponse text
     */
    // statusCode
    // response.statusCode = 200
    // response.statusCode = 404
    // // statu (less set, align with statuCode)
    // response.statusMessage = 'suuscess'
    // // header
    // response.setHeader('content-type', 'text/html;charset=utf-8');
    // response.setHeader('Server', 'Node.js');
    // response.setHeader('myHeader', 'test test test');
    // response.setHeader('test', ['a', 'b', 'c']);
    // //body: all print show in browse, end-last dont run
    // response.write('i ')
    // response.write('love ')
    // response.write('you ')
    // response.end('...')
    // response.end('tttt')

    // exercise
    // response.end(`
    //     <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //       <meta charset="UTF-8">
    //       <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //       <title>Document</title>
    //       <style>
    //         td{
    //           padding: 20px 40px;
    //         }
    //         table tr:nth-child(odd){
    //           background: #aef;
    //         }
    //         table tr:nth-child(even){
    //           background: #fcb;
    //         }
    //         table, td{
    //           border-collapse: collapse;
    //         }
    //       </style>
    //     </head>
    //     <body>
    //       <table border="1">
    //         <tr><td></td><td></td><td></td></tr>
    //         <tr><td></td><td></td><td></td></tr>
    //         <tr><td></td><td></td><td></td></tr>
    //         <tr><td></td><td></td><td></td></tr>
    //       </table>
    //       <script>
    //         //获取所有的 td
    //         let tds = document.querySelectorAll('td');
    //         //遍历
    //         tds.forEach(item => {
    //           item.onclick = function(){
    //             this.style.background = '#222';
    //           }
    //         })
    //       </script>
    //     </body>
    //     </html>
    //   `); 
    //m2, hide in a html file
    // let html = fs.readFileSync('04-html-response.html')
    // response.end(html)


    /**
     * web introduce outside resource
     */
    // let r_url = url.parse(request.url,true)
    // let pathname = r_url.pathname
    // if(pathname === '/'){
    //     console.log('html')
    //     let html = fs.readFileSync('html/10_table.html')
    //     response.end(html)
    // }else if(pathname === '/index.css'){
    //     console.log('css')
    //     let css = fs.readFileSync('style/index.css')
    //     response.end(css)
    // }else if(pathname === '/index.js'){
    //     console.log('js')
    //     let js = fs.readFileSync('js/index.js')
    //     response.end(js)
    // }else{
    //     console.log('error')
    //     response.end('<h1>404</h1>')
    // }


    /**
     * web introduce outside resource, enhance read
     */
    var r_url = url.parse(request.url, true)
    let filepath = __dirname + '/page' + r_url.pathname
    console.log(filepath)
    fs.readFile(filepath, (err, data) => {
        if(err){
            response.statusCode = 500
            response.end('read file fail!')
            return;
        }else{
            response.end(data)
        }

    })



});
server.listen(9000, () => {
    console.log('server started')
})
