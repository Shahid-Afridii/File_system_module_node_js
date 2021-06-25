var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
    fs.open("new_file","w+",function(err){
        if(err)
        {
            return console.log(err)
        }
        res.write("File opened successfully");
        res.end();



    });



}).listen(8080);
