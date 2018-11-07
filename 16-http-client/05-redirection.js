#!/usr/bin/node

const http=require('http'),
      url=require('url'),
      log=console.log;

var addr=process.argv[2]||'http://www.sian.com/';

function getURL(addr){
  http.get(addr,(res)=>{
    if(res.statusCode>300 && res<400){
      var newAddr=res.headers['location'];
      getURL(newURL);
    }else{
      res.pipe(process.stdout)
    }
  });
}
