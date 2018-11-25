const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.end('Hello World!');
}).listen(8080);
