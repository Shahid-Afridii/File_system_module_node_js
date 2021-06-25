var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
    fs.rename("demo.txt","demo1.txt",function(err){
        if(err)
        {
            return console.log(err)
        }
        res.write("File renamed successfully");
        res.end();



    });



}).listen(8080);
