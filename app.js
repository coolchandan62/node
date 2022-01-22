const express = require("express");
const app = express();
app.get('/', function(req, res) {
    res.send("<h1>This is Home Page</h1>");
})

app.get('/about', function(req, res) {
    res.send("<h1>This is About Page</h1>");
})

app.get('/login', function(req, res) {
    res.send("<h1>This is Login Page</h1>");
})

app.listen('5100')