var fs=require("fs");
fs.readFile("demo.txt",function(err,data)
{
    if(err){
        return console.log(err);
    }
    console.log("Aysnc data:"+data.toString());
});

var data=fs.readFileSync("demo.txt");
console.log("Sysnc data :"+data.toString());
console.log("Program end");