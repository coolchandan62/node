//***************Start Nodemon*********************
var http = require('http');
http.createServer(function(req, res) {
        res.write('Hello nodemon');
        res.end();
    }).listen(5000)
    //***************End Nodemon**********************