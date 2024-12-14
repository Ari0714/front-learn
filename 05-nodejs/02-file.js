
/**
 * Buffer
 */

// console.log("hello nodejs");
// let buf = Buffer.alloc(10);
// console.log(buf);



/**
 * file
 */
// 1. normal
const fs = require('fs');
// fs.writeFile('tmp_file/aa.txt','hello, im first file', err =>{
//     if(err){
//         console.log("write file fail");
//         return;
//     }
//     console.log('write file success');
// })

// 2.sync, async
// fs.writeFileSync('tmp_file/aaSync.txt','hello, im first file', err =>{
//     if(err){
//         console.log("write file fail");
//         return;
//     }
//     console.log('write file success');
// })

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
fs.stat('tmp_file/aa.txt' ,(err, data) => {
    if(err){
        console.log("status fail")
        return
    }
    console.log(data)
})