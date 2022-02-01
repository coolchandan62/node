const express = require("express");
const { sendfile } = require("express/lib/response");
const res = require("express/lib/response");
const app = express();

function getContent(filepath) {
    var fs = require('fs');
    fs.readFile(filepath, function(err, data) {
        return data;
    })
}

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/views/login.html');
})

app.listen('5100')