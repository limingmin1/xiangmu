var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{ 
    if(req.url=="/"){
    	fs.readFile("./index.html",(err,data)=>{
    		if(err)throw err
    		res.end(data)
    	})
    }
}).listen(3000)