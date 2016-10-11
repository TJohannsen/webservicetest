var http = require("http");
var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post("/newtext", function (req, res) {
    var text = req.body.text;
    console.log(text);
    res.send("Successful!");
});

app.get("/hello", function(req, res) {
    console.log("hi there!");
    res.send("Hey back!");
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});