var http=require("http");
var route=require("./about.js");
http.createServer((req,res)=>{ 
  if(req.url=="/"){
  	route.showIndex(req,res)
  }else if(req.url=="/about"){
  	route.showAbout(req,res)
  }else{
  	route.show404(req,res)
  }

}).listen(3000)