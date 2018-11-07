#!/usr/bin/node

const http =require('http'),
      url  =require('url');

var addr=process.argv[2]|| 'http://www.baidu.com';
var options=url.parse(global.encodeURI(addr));

options.headers={
  'User-Agent':'01-my-curl.js'
};

http.get(options,(res)=>{
  console.log('HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}');
  console.log(res.headers);
  console.log('');

  res.pipe(process.stdout);
});
