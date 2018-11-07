#!/usr/bin/node

//解析URL


const http = require('http'),//请求http模块
      url  = require('url'),
      querystring= require('querystring'),
      lg   = console.log;
//创建http服务
http.createServer((req,res)=>{
  //打印http请求的url
  console.log('HTTP request URL:',req.url);

  //解析URL，调用parseURL()函数
  parseURL('http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f');
  
  //响应完成
  res.end('ok!');
}).listen(8080);

  //编写parseURL函数
function parseURL(strURL){
  var path = url.parse(strURL);

  lg('href:',path.href);//这是最初解析的完整的URL字符串，相当于url.toString()
  lg('protocol:',path.protocol);//请求协议
  lg('auth:',path.auth);//URL的身份认证信息，包括用户名和密码
  lg('hostname:',path.hostname);//主机的主机名，小写
  lg('port:',path.port);//主机的端口号
  lg('host:',path.host);//主机名＋端口号
  lg('pathname:',path.pathname);//URL的路径部分（包括最初的斜线，如果存在的话）
  lg('search:',path.search);//URL的查询字符串部分，包括前导的问号
  lg('query:',path.query);//要么是查询字符串中的参数部分，要么是含有查询字符串参数和值的解析后的对象。如果parseQueryString设置为true，那么就是解析后的对象，发送给http服务器的对象？？?查询字符串？？？不包括前面的问号
  lg('slashes:',path.slashes);//slashes:是否有双斜杠；需要两个双斜杠值为true
  lg('hash:',path.hash);//URL的散列部分,#后面部分，包括井号

  lg('URL parse:',path.pathname.split('/'));//用“/”把pathname分割成数组
  lg('QueryString parse:',querystring.parse(path.query));//

}
