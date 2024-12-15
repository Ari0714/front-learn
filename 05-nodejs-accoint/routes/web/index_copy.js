var express = require('express');
var router = express.Router();
//导入 lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../../data/db_copy.json');
const db = low(adapter);
//导入 shortid
const shortid = require('shortid')
//导入 moment
const moment = require('moment');
//import model
const AccountModel = require('../../models/AccountModel');
//导入中间件检测登录
const checkLoginMiddleware = require('../../middlewares/checkLoginMiddleware');


//测试
// console.log(moment('2023-02-24').toDate())
//格式化日期对象
// console.log(moment(new Date()).format('YYYY-MM-DD'));

//记账本的列表
router.get('/account', checkLoginMiddleware, (req, res, next) => {
  // let db_accounts = db.get('accounts').value()
  // res.render('list', { accounts: db_accounts})

  //读取集合信息
  AccountModel.find().sort({ time: -1 }).exec((err, data) => {
    if (err) {
      res.status(500).send('读取失败~~~');
      return;
    }
    //响应成功的提示
    res.render('list', { accounts: data, moment: moment });
  })

})

//添加记录
router.get('/account/create', checkLoginMiddleware, (req, res, next) => {
  // res.send('add item')
  res.render('create')
})

//post新增记录
router.post('/account', checkLoginMiddleware, (req, res, next) => {
  console.log(req.body)
  // let id = shortid.generate();
  // db.get('accounts').unshift({ id: id, ...req.body }).write();
  // res.render('success', { msg: '添加成功哦~~~', url: '/account' })

  //插入数据库
  AccountModel.create({
    ...req.body,
    //修改 time 属性的值
    time: moment(req.body.time).toDate()
  }, (err, data) => {
    if (err) {
      res.status(500).send('插入失败~~');
      return
    }
    //成功提醒
    res.render('success', { msg: '添加成功哦~~~', url: '/account' });
  })

})


//删除记录
router.get('/account/:id', checkLoginMiddleware, (req, res, next) => {
  // db.get('accounts').remove({ id: req.params.id }).write()
  // res.render('success', { msg: '删除成功~~~', url: '/account' })

  //获取 params 的 id 参数
  let id = req.params.id;
  //删除
  AccountModel.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).send('删除失败~');
      return;
    }
    //提醒
    res.render('success', { msg: '删除成功~~~', url: '/account' });
  })

})


module.exports = router;
