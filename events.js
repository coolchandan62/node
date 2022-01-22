//Event Start############################
var fs = require('fs')
var rs = fs.createReadStream('demo.html')
rs.on('open', function() {
    console.warn('File has been opened');
})

var event = require('events')
var eventEmitter = new event.EventEmitter();
eventEmitter.on('speak', function(name) {
    console.log(name, " is speaking.")
})
eventEmitter.emit("speak", "Chandan");
//Event End############################