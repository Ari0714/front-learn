const fs = require('fs');

const p2 = new Promise(function (resolve, reject) {
    fs.readFile('./resources/为学.md', (err, data) => {
        if (err) reject(err)
        resolve(data)
    })
})

p2.then(function (value) {
    (
        console.log(value.toString()))
}, function (reason) {
    console.log(reason)
})