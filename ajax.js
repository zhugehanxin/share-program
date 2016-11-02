//var http=require("http");
//var server=http.createServer(function(req,res){
//  if(req.url!=="/favicon.ico"){
//      //res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost:63342"});
//      res.statusCode=200;
//      res.sendDate=false;
//      res.setHeader("Content-Type","text/plain");
//      res.write('<head><meta charset="utf-8"/></head>');  
//			res.write('<h1>Node.js</h1>');  
//      res.setHeader("Access-Control-Allow-Origin","http://localhost:63342");
//      res.write("你好啊!");
//  }
//  res.end();
//});
//server.listen(1337,"localhost",function(){
//  console.log("开始监听...");
//});



//app.js   
  
var http = require('http');  
  
http.createServer(function(req, res) {  
  res.writeHead(200, {'Content-Type': 'text/html'});  
  res.write('<head><meta charset="utf-8"/></head>');  
  res.write('<h1>Node.js</h1>');  
  res.write('<b>亲爱的，你慢慢飞，小心前面带刺的玫瑰...</b>');  
  res.end('<p>Hello World</p>');  
    
}).listen(3000);  
  
console.log("HTTP server is listening at port 3000.");  