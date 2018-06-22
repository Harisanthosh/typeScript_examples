var http = require('http');

var server = http.createServer(function(request, response){
    response.end("From Node Server");
});


server.listen(5050,function(){
    console.log("user from 192.168.20.49:5050");
});