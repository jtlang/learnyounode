var filterDirByExt = require('./myModule');

var dir = process.argv[2];
var ext = process.argv[3];

filterDirByExt(dir, ext, function(err, list){
    if(err)
        return console.error("Error filtering directory");
    list.forEach(function(file){
        console.log(file);
    });
});
