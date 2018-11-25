const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  console.log('hello!')
});
app.get('json',(req,res)=>{
  res.end();
})
app.listen('8080');
