var express = require('express');
var mongoose = require('mongoose');
var app = express();

var port = (process.env.PORT || 3000)
mongoose.connect('mongodb://aayanqazi:xp9999955555@ds151059.mlab.com:51059/hello-world')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log("Connected");
});

app.use('/home', function (req, res) {
    res.send('Hello World');
})
app.use('/news', function (req, res) {
    res.send('news');
})

app.listen(port, () => {
    console.log("Server Running At http://localhost:" + port);
});