// **************Start Filesystem******************
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('demo.html', function(err, data) {
        res.writeHead(200, { 'ContentType': 'text/html' });
        res.write(data)
        return res.end();
    })
}).listen(400);
// ***************End Filesystem********************