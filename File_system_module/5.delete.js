var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
    fs.unlink("demo.txt",function(err){
        if(err)
        {
            return console.log(err)
        }
        res.write("File deleted successfully");
        res.end();



    });



}).listen(8080);
