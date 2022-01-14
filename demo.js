var http = require('http');
var uc = require('upper-case')
http.createServer(function(req, res) {
    res.write(uc.upperCase('Hi this is chandan.'));
    res.end();
}).listen(5000)