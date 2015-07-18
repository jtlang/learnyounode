var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

function filterByExt(fileList, fileExt){
    for(f in fileList){
        if(path.extname(fileList[f]) == fileExt){
            console.log(fileList[f]);
        }
    }
}

fs.readdir(dir, function(err, contents){
    if(err){
        return console.error("Error reading directory");
    }
    filterByExt(contents, ext);
});
