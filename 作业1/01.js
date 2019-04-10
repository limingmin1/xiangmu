//加载http模块
var http=require('http');
//获取地址栏参数     get提交
var url=require("url");
http.createServer((req,res)=>{ 
//  console.log(req,url)

//  解决图片以及输出多余undefined的问题
    if(req.url=="/favicon.ico"){
    	return
    }
//  解决字体的兼容性问题
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
//  //url.parse 字符串     true转换为对象
    var query=url.parse(req.url,true).query
    console.log(query)
    console.log(query.username)
    console.log(query.password)
    //  相当与数据库
    var data={"username":"tom","password":"123456"}
    if(data.username==query.username&&data.password==query.password){
    	res.end('登录成功')
    }else{
    	res.end('登录失败')
    }
    res.end() 
}).listen(3000)
