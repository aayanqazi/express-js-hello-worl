var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(bodyParser.json())
app.use(cors());
var studentSchema = new mongoose.Schema({
    name: String
})

var studentModel = mongoose.model("students", studentSchema);

app.get("/sub", function (req, res, next) {
    studentModel.find({}, function (err, data) {
        if (!err) {
            console.log(data)
            res.send(data)
        }
        else {
            console.log("Error")
        }
    })

})
app.post("/sub",function(req,res,next)
{
    var newAdd = new studentModel({
        name: req.body.name
    })
    newAdd.save(function(err,data)
    {
        if(!err)
        {
            console.log("Saved");
        }
        else
        {
            console.log("Error");
        }
    });
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