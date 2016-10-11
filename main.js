var http = require("http");
var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post("/newtext", function (req, res) {
    var text = req.body.text;
    var answertext = "";
    fs.writeFile("mystr.txt", text, function(err) {
        if(err) {
            console.log(err);
            answertext = "Konnte den Text nicht abspeichern.";
        } else {
            console.log("New text: '" + text + "'");
            answertext = "Der neue Text ist nun: '" + text + "'";
        }
    }); 
    res.end(answertext);
});

app.get("/hello", function(req, res) {
    console.log("hi there!");
    res.end("Hey back!");
});

app.get("", function(req, res) {
    var viewmsg = "";
    fs.readFile('mystr.txt', function (err, data) {
        if (err) {
            console.log(err);
            viewmsg = "Text nicht vorhanden oder konnte nicht gelesen werden.";
        } else {
            var mytext = data.toString();
            viewmsg = "Der derzeitige Anzeigetext ist: '" + mytext + "'";
        }
    });
    res.end(viewmsg);
});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});