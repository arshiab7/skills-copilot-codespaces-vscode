//Create web server
var http = require('http');



//Create web server
var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end("Hello, World!");
} ); 