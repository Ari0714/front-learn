const fs = require('fs')
const util = require('util');

//async
async function main(params) {
    console.log(params)
}
// main('async func')


//await
async function main2(params) {
    console.log(params)
    const p = new Promise((reslove, reject) => {
        reject('err')
    })

    //1. 右侧为promise的情况
    // let res = await p;
    //2. 右侧为其他类型的数据
    // let res2 = await 20;
    //3. 如果promise是失败的状态
    try {
        let w3 = await p
    } catch (e) {
        console.log(e)
    }
}
// main2()



//combine
const mineReadFile = util.promisify(fs.readFile);
async function main3(params) {
    let data1 = await mineReadFile('../00-resource/1.html')
    let data2 = await mineReadFile('../00-resource/2.html')
    let data3 = await mineReadFile('../00-resource/3.html')
    console.log(data1 + data2 + data3)
}
main3()
