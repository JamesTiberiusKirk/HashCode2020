const fs = require('fs');
const path = require('path');
var inputFileP = path.join(__dirname, 'input.txt');
var outputtFileP = path.join(__dirname, 'output.txt');

fs.readFile(inputFileP,  {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log('received data: ' + data);
    } else {
        console.log(err);
    }
});
