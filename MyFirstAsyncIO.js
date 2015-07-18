var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, function cb(err, fileBuf){
    var numBreaks = fileBuf.toString().split('\n').length - 1;
    console.log(numBreaks);
});
