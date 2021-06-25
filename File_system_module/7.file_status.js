var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
    fs.stat("demo1.txt",function(err,stats){
        if(err)
        {
            return console.log(err)
        }
        console.log(stats)
        res.write("Is It file:"+stats.isFile());
        res.write("Is It Directory:"+stats.isDirectory());
        res.end();



    });



}).listen(8000);
