var express = require('express');
var app = express();

var port = (process.env.PORT || 3000)
app.use('/home',function(req,res)
{
    res.send('Hello World');
})
app.use('/news',function(req,res)
{
    res.send('news');
})

app.listen(port,()=>{
    console.log("Server Running At http://localhost:"+port);
});
