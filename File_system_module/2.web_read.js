var fs=require("fs");
var http=require('http');

http.createServer(function(req,res){
    fs.readFile("demo.txt",function(err,data){
        if(err)
        {
            console.log(err);
        }
        res.write("success");
        res.end();


    });




}).listen(8080);