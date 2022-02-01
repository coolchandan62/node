const express = require("express")
var app = express()
app.set("view engine", "ejs")
app.get("/profile", function(req, res) {
    //res.sendFile(__dirname + "/views/profile.ejs")
    var data = { name: "Chandan Singh", designation: "Software Developer", profile_image: "https://www.w3schools.com/w3images/team2.jpg", place: "Ghaziabad, Uttar Pradesh" }
    res.render("profile", data)
}).listen(5100);