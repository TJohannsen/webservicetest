var http = require("http");
var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post("/newtext", function (req, res) {
    var text = req.body.text;
    console.log(text);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Successful!");
});

app.get("/hello", function(req, res) {
    console.log("hi there!");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hey back!");
});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});