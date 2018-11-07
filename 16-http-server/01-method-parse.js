#!/usr/bin/node
//http方法解析

const http = require('http');

http.createServer((req,res)=>{
  console.log('HTTP request method:',req.method);

  switch(req.method){
    case 'GET':
      select(req,res);
      break;

    case 'POST':
      add(req,res);
      break;

    case 'PUT':
      updata(req,res);
      break;

    case 'DELETE':
      remove(req,res);
      break;

    default:
      res.end('SOomething Wrong!');
  }
}).listen(8080);

function select(req,res){
  send(res);
}
function add(req,res){
  send(res);
}
function updata(req,res){
  send(res);
}
function remove(req,res){
  send(res);
}

function send(res){
  res.end('OK!');
}

