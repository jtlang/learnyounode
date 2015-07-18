var net = require('net');
var port = process.argv[2];

net.createServer(function(socket) {
    var date = new Date();
    var fdate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON().replace('T', ' ').slice(0,16) + '\n';
    socket.end(fdate);
}).listen(port);
