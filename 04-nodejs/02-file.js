
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
fs.readFile('tmp_file/aa_stream.txt',(err,data) => {
    if(err){
        console.log("write file fail");
        return;
    }
    console.log(data.toString())
}
);
