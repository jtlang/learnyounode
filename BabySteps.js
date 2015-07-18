var s = 0,
    l = process.argv.length;
var i;
for(i = 2; i < l; i++){
    s += Number(process.argv[i]);
}
console.log(s);
