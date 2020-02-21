const fs = require('fs');
const path = require('path');
var inputFileP = path.join(__dirname, 'a_input.txt');
var outputFileP = path.join(__dirname, 'output.txt');

var inputData="";
var outputData="";

// INPUT VARS
var tNoB, tLib, tDaysS; 
var scoreOrdr = [];
var lib=[]; //{numOB, timeToSignUp, booksPDay}
var bookId=[];


//OUTPUT VARS
var tLibChosenO, tNoBO
var libIdO; //{totalNoBooks,bookId}

function readFile(){
  return new Promise((resolve, reject)=>{
    fs.readFile(inputFileP,  {encoding: 'utf-8'}, function(err,data){
      if (err) {
        reject();
        return console.log(err);
      }
      inputData = data;
      resolve();
    });

  });

}

function writeFile(toWrite){

  fs.writeFile(outputFileP, toWrite, (err) => {
    if(err) {
      return console.log(err);
    }
    console.log(toWrite);
    console.log("The file was saved!");
  });

}

function parseDataToArr(inp){
  var lines = inp.split("\n");
  var items = [];
  var ddData = [];
  lines.forEach((l)=>{
    items = l.split(" ");
    if (items[0] != '' ){
      ddData.push(items); 
    }
  });
//  console.log(ddData);
  return ddData;
}

function assigVars(data){
  tNoB      = data[0][0];
  tLib      = data[0][1];
  tDaysS    = data[0][2];
  scoreOrdr = data[1];
  
  for(var i = 0; i<data.length; i++){
    if(i>1 && i%2==0){
      lib.push({
        lib: data[i],
        book: data[i+1],
        total: 0
      });
      //bookId.push(data[i+1]);    
    }
  }
}

function dataProc(){
  //tDaysS needs to be heigher than librarie's 2nd index
  var tmpTime = 0;
  libIdO = {
    totalNoLib: 0,
    bookId: "" 
  };
  lib.forEach((l)=>{
    
    for (var i = 0; i < l.book.length; i++) {
      l.total += parseInt(l.book[i],10);
    }

    if(tDaysS => l[1]){
      if(tDaysS => tmpTime){
        tmpTime += l.lib[1];
        libIdO.totalNoLib++ ;
        l.book.forEach((b)=>{
          libIdO.bookId += b+" ";
        });
      }
    }

  });
  console.log(libIdO);
  
}

function outptFormatter(){
  var output = "";

  output += libIdO.totalNoLib + "\n";
  lib.forEach((l,i)=>{
    output += i + " " + l.book.length + "\n"; 
    l.book.forEach((b)=>{
      output += b + " "; 
    });
    output += "\n";
  });
  console.log(output);
  writeFile(output); 

}

process.argv.forEach(function (val, index, array) {
  //console.log(index + ': ' +val);
  inputFileP = val;
  outputFileP = val+"_output.txt"
});

readFile().then(()=>{
  var ddData = parseDataToArr(inputData);
  assigVars(ddData);
  //console.log(lib);
  dataProc();
  outptFormatter();

});





