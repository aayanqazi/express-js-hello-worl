var express = require('express');
var app = express();
app.use('/home',function(req,res)
{
    res.send('Hello World');
})
app.use('/news',function(req,res)
{
    res.send('news');
})

app.listen(3000);
console.log("Server Running At http://localhost:3000");
module.exports = app
