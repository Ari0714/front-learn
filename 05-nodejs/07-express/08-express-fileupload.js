
const express = require('express')
const { formidable } = require('formidable')  //must use {}


//create applicaton
const app = express()
const router = express.Router()

/**
 * file upload
 * 
 */

//处理文件上传
app.post('/upload', (req, res) => {
    //创建 form 对象
    const form = formidable({ 
      multiples: true ,
      //设置上传文件的保存目录
      uploadDir: __dirname + '/../public/images',
      //保持文件后缀
      keepExtensions: true
    });
    //解析请求报文
    form.parse(req, (err, fields, files) => {
      if (err) {
        // next(err);
        return;
      }
      console.log(fields);// text  radio  checkbox  select
      console.log(files); // file
      
      //服务器保存该图片的访问 URL
      // /images/8ad3d5e36012212ba7642c000.jpg
      let url = '/images/' + files.portrait.newFilename;// 将来将此数据保存在数据库中
      
      res.send(url);
    });
  });

// app.all('*', (req, res) => {
//     res.send('<h1>404 Not Found</h1>')
// })

app.listen(9000, () => {
    console.log('服务已经启动, 端口9000正在监听中....')
})
