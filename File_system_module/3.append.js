var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
    fs.appendFile("demo.txt","Thanks for watching",function(err){
        if(err)
        {
            return console.log(err)
        }
        res.write("appended successfully");
        res.end();



    });



}).listen(8080);
