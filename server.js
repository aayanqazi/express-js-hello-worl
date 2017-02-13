var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())

var studentSchema = new mongoose.Schema({
    name: String,
    rollNumber: Number,
    class: Number
})

var studentModel = mongoose.model("students", studentSchema);

app.post("/add", function (req, res, next) {
    var newStudent = new studentModel({
        name: req.body.names,
        rollNumber: req.body.rollNumber,
        class: req.body.class
    })

    newStudent.save(function (err, data) {
        if (!err) {
            console.log("Student is Saved !!")
        }
        else {
            console.log("Failedd !!!");
            res.send("Failed !!!")
        }
    })
})

app.get("/sub", function (req, res, next) {
    studentModel.find({}, function (err, data) {
        if (!err) {
            console.log(data)
            res.send(data)
        }
        else {
            console.log("Eror")
        }
    })

})
app.get("/del", function (req, res, next) {

    studentModel.find({name:"Arsalan Sabir"}).remove(function(err,data)
    {
        if(!err)
        {
            console.log(data)
        }
        else
        {
            console.log("ERROR")
        }
    })
})

var port = (process.env.PORT || 3000)
mongoose.connect('mongodb://aayanqazi:xp9999955555@ds151059.mlab.com:51059/hello-world')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log("Connected");
});


app.listen(port, () => {
    console.log("Server Running At http://localhost:" + port);
});