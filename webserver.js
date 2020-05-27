const http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Hello');
}).listen(1337,'127.0.0.1');
const zipcode = require('zipcode');
console.log(zipcode.lookup('39002'));