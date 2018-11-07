#!/usr/bin/node

const http=require('http'),
      lg  =console.log;

http.createServer((req,res)=>{
  //打印请求头
  lg(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  //打印请求头
  lg(req.headers);
  //打印空行
  lg('');

  
 lg('\nUser-Agent:', req.headers['user-agent']);
 lg('Host:', req.headers.host);
 lg('Content-Type:', req.headers['content-type']);
 lg('');


 req.pipe(process.stdout);
 res.end('OK!');
}).listen(8080);
