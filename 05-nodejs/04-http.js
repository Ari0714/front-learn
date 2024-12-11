
/**
 * http module
 */

// url（uniform resource locator）： request line、header、blank、body




// http: url（uniform resource locator）： request line、header、blank、body
// 1. server
const http = require('http');
const server = http.createServer((request,response) => {
    response.setHeader('Content-Type','text/html; charset=utf-8');
    response.end('hello http server, 你好')
});
server.listen(9000, () =>{
    console.log('server started')
})


// 3.append
// fs.appendFile('tmp_file/aa.txt','hello, im append content', err =>{
//     if(err){
//         console.log("write file fail");
//         return;
//     }
//     console.log('write file success');
// });

// 4.stream 
// const file_st = fs.createWriteStream('tmp_file/aa_stream.txt');
// file_st.write('111\n');
// file_st.write('222\n');
// file_st.write('332\n');
// file_st.close;

// 5.read
// fs.readFile('tmp_file/aa_stream.txt',(err,data) => {
//     if(err){
//         console.log("write file fail");
//         return;
//     }
//     console.log(data.toString())
// }
// );
// fs.readFileSync('tmp_file/aa_stream.txt',(err,data) => {
//     if(err){
//         console.log("write file fail");
//         return;
//     }
//     console.log(data.toString())
// }
// );
// const read_fs = fs.createReadStream('tmp_file/aa_stream.txt');
// read_fs.on('data', chunk => {
//     console.log(chunk.toString())
// })

// 6 copy
// let fs1 = fs.readFileSync('tmp_file/aa2.txt');
// fs.writeFileSync('tmp_file/aa2-copy.txt', fs1);

// const rs = fs.ReadStream('tmp_file/aa2.txt')
// const ws = fs.WriteStream('tmp_file/aa2-copy.txt')
// rs.on('data', chunk=>{
//     ws.write(chunk)
// })

// 7 rename. move
// fs.rename('tmp_file/aa-rename.txt', 'tmp_file/aa-rename2.txt' , err =>{
//     if(err){
//         console.log("rename fail")
//         return
//     }
//     console.log("rename success")
// })

// 9. delete: unlink,rm
// fs.rm('tmp_file/aa-rename2.txt', err =>{
//     if(err){
//         console.log("delete fail")
//         return
//     }
//     console.log("delete success")
// })

// 9. dir operation: mkdir, rmdir
// fs.mkdir('tmp_file/test-create-dir/a/b', {recursive:true} ,err => {
//     if(err){
//         console.log("mkdir fail")
//         return
//     }
//     console.log("mkdir success")
// })

// 10. resource status