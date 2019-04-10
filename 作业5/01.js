var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{ 
  if(req.url=="/"){
  	fs.readFile("./red.html",(err,data)=>{
  		res.end(data)
  	})
  }else if(req.url=="/green"){
  	fs.readFile("./green.html",(err,data)=>{
  		res.end(data)
  	})
//	路由
  }else if(req.url=="/aa.css"){
  	fs.readFile("./aa.css",(err,data)=>{
  		res.end(data)
  	})
  }else if(req.url=='/bg2.jpg'){
		fs.readFile('./img/bg2.jpg',(err,data)=>{
			if(err) throw err
			res.end(data)
		})
	}


}).listen(3000)