var express = require("express");
var app = express();

const getUrl = function(req, res, next) {
    console.log("Current url is ", req.originalUrl)
    next();
}

app.use(getUrl);

app.get("/", function(req, res) {
    res.send("<h1>Hi This is Home Page</h1>")
})

app.get("/about", function(req, res) {
    res.send("<h1>Hi This is About Page</h1>")
})

app.get("/login", function(req, res) {
    res.send("<h1>Hi This is Login Page</h1>")
})


app.listen(5101)