var http = require('http');
var url = require('url');

var port = process.argv[2];

http.createServer(function(req, resp) {
    if(req.method != 'GET'){
        return resp.end('Send only GET requests\n');
    }

    var reqUrl = url.parse(req.url, true);

    if(reqUrl.pathname.slice(0,4) != '/api'){
        return resp.end('Invalid path\n');
    }

    var timeIn;
    if(reqUrl.query.iso) {
        timeIn = new Date(reqUrl.query.iso);
    } else {
        return resp.end('No iso query string supplied\n');
    }

    var timeOut = new Object();
    if(reqUrl.pathname == '/api/parsetime') {
        // ISO
        timeOut.hour = timeIn.getHours();
        timeOut.minute = timeIn.getMinutes();
        timeOut.second = timeIn.getSeconds();
    } else if(reqUrl.pathname == '/api/unixtime') {
        // Unix
        timeOut.unixtime = timeIn.getTime();
    } else {
        return resp.end('Invalid endpoint');
    }

    resp.writeHead(200, { 'Content-Type': 'application/json'});
    resp.end(JSON.stringify(timeOut), null, '\t');
}).listen(port);
