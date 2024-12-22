const fs = require('fs')

const util = require('util');
//引入 fs 模块
const fsU = require('fs');
const { rejects } = require('assert');

/**
 * basic 
 */
const p = new Promise((resolve, reject) => {
    fs.readFile('../00-resource/content.txt', (err, data) => {
        if (err) reject(err)
        resolve(data.toString())
    })
})

// p.then((value) =>{
//     console.log(value)
// },(reason)=>{
//     console.log(reason)
// })


/**
 * packed 
 */
function myReadFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err)
            resolve(data.toString())
        })
    })
}
// myReadFile('../00-resource/content.txt')
// .then((value)=>{
//     console.log(value)
// },(reason)=>{
//     console.log(reason)
// })


/**
 *  util
 */
const ut = util.promisify(fsU.readFile)

ut('../00-resource/content.txt')
    .then((value) => {
        console.log(value.toString())
    }, (reason) => {
        console.log(err)
    })


/**
 * api: catch
 */
const p2 = new Promise((resolve, rejects) => {

})

p2.then((value) => {

}, (reason) => {

})

p.catch(reason => {
    console.log(reason)
})


/**
 * api: all: return all result array
 */
const p31 = new Promise((resolve, rejects) => {
})
const p32 = new Promise.reject('err')
const p33 = new Promise.resolve('ok')

const t3 = new Promise.all([p31, p32, p33])
console.log(t3)

/**
 * api: race, p42 => p43 => p41
 */
const p41 = new Promise((resolve, rejects) => {
    setTimeout(() => {
        resolve(ok)
    }, 1000)
})
const p42 = new Promise.reject('err')
const p43 = new Promise.resolve('ok')

const t4 = new Promise.race([p31, p32, p33])
console.log(t3)


/**
 * critical issue:
 */
//adjust state
const p51 = new Promise((resolve, reject) => {
    resolve('ok')
    reject('err')
    throw 'err'
})

//one promise can multiple invoke
p51.then(value => console.log(value))
p51.then(value => console.log(value))


//then vs setState who is priority: check setState(timeEvent) is sync or not

//then return: 1.not promise(string...), 2.Promise, 3.err

//link multiple task
p51.then(value => {
    return new Promise((resolve, reject) => {
        resolve("success");
    });
})
    .then(value => console.log(value))
    .then(value => console.log(value))

//err pierce(penetrate): err only catch in last 
p51.then(value => {
    return new Promise((resolve, reject) => {
        resolve("success");
    });
})
    .then(value => console.log(value))
    .then(value => console.log(value))
    .catch(reason => {
        console.log(reason)
    })

//stop link invoke
p51.then(value => {
    console.log('111')
    //only has one method
    return new Promise(() => { });
})
    .then(value => console.log(value))
    .then(value => console.log(value))