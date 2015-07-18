var http = require('http');

var bodies = [];
var r = 0;
var i;

function printData(){
    bodies.forEach(function(body){
        console.log(body);
    });
}

function getData(index, callback) {
    http.get(process.argv[index+2], function(response){
        response.setEncoding('utf8');
        response.on('data', function(chunk) {
            bodies[index] += chunk;
        });
        response.on('error', console.error);
        response.on('end', function() {
            r++;
            if(r == 3)
                callback();
        });
    });
}

for(i = 0; i < 3; i++){
    bodies.push('');
    getData(i, printData);
}
