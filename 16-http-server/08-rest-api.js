#!/usr/bin/node

const http = require('http'),
      qs   = require('querystring');

var items = [];

http.createServer((req, res) => {
    console.log('HTTP request method:', req.method);

    switch(req.method) {
        case 'GET':
            select(req, res);
            break;
        case 'POST':
             create(req, res);
             break;
        case 'PUT':
             update(req, res);
             break;
        case 'DELETE':
             remove(req, res);
             break;
        default:
             res.end('Something Wrong!');              
    }
}).listen(8080);

function select(req, res) {
    //send(res);
    var msg = JSON.stringify(items);
    console.log(msg);
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.serHeader('Content-Type',Buffer.byteLength(msg));
}

function create(req, res) {
    //send(res);
    var 
}

function update(req, res) {
    //send(res);
    res.end(req.method);

}

function remove(req, res) {
    //send(res);
  if(req.url==='/'){
    items = [];
  }else{
    var id = url.parse((req.url).query).id;
    //console.log('ID:',id);
  }
}

function send(res) {
    res.end('OK!');
}
