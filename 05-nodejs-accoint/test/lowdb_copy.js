//导入 lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json');
//获取 db 对象
const db = low(adapter);

//init data
// db.defaults({ posts: [], user: {} }).write()

//add data
// db.get('posts').push({'id':111,'name':'coco'}).write()
// db.get('posts').unshift({'id':123,'name':'Ari'}).write()

//get single data
//cosnt d1 = db.get('posts').find({'id':111}).value()
// console.log(d1)
//get data
// d1 = db.get('posts').value()
// console.log(d1)

//delete
// const del = db.get('posts').remove({'id':111}).write()
// console.log(del)  //return del data

//update
const upd = db.get('posts').find({'id':123}).assign({'name':'Ari update'}).write()
console.log(upd)  //return update data


