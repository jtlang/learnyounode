var http = require('http');
var map = require('through2-map');
var port = process.argv[2];

var uppercaser = map(function(chunk) {
    return chunk.toString().toUpperCase();
});

http.createServer(function(request, response) {
    if(request.method != 'POST')
        return res.end('Send only POST requests\n');

    request.pipe(uppercaser).pipe(response);
}).listen(port);
