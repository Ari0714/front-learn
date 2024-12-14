
/**
 * ejs: detach html and data
 */
const ejs = require('ejs');
const fs = require('fs');


/**
 * render data
 */
//2.定义数据
let person = ['张三','李四','王二麻子'];
//3.ejs解析模板返回结构
//<%= %> 是ejs解析内容的标记，作用是输出当前表达式的执行结构
let html = ejs.render('<%= person.join(",") %>', {person:person});
//4.输出结果
console.log(html);


/**
 * render html page
 */
//字符串
let china = '中国';
// let str = `我爱你 ${china}`;
let weather = '今天天气不错~';

//声明变量
let str = fs.readFileSync('./01_html.html').toString();

//使用 ejs 渲染
let result = ejs.render(str, {china: china, weather});

// console.log(result)
