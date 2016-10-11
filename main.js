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
    console.log("Ping requested.");
    res.end("Hey back!");
});

app.get("", function(req, res) {
    var viewmsg = "";
    fs.access("mystr.txt", fs.F_OK, function(err) {
        if (!err) {
            fs.readFile('mystr.txt', function (err, data) {
                if (err) {
                    console.log(err);
                    viewmsg = "Datei konnte nicht gelesen werden.";
                } else {
                    var mytext = data.toString();
                    console.log("Current text: '" + mytext + "'");
                    viewmsg = "Der derzeitige Anzeigetext ist: '" + mytext + "'";
                }
            });
        } else {
            console.log("File not created yet.");
            viewmsg = "Kein Text hinterlegt.";
        }
    });
    res.end(viewmsg);
});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});