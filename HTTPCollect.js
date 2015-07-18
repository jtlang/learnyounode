var http = require('http');

var url = process.argv[2];
var str = '';

http.get(url, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(chunk) {
        str += chunk;
    });
    response.on('error', console.error);
    response.on('end', function() {
        console.log(str.length);
        console.log(str);
    });
});
