var http = require('http');
var fs = require('fs');
const PORT = process.env.PORT || 3000;
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    fs.readFile('./index.html',null,function(error,data){
        if(error){
            res.writeHead(404);
            res.write('File not Found!')
        }else{
            res.write(data);

        }
        res.end();

    })
})