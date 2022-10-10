const http = require('http')
const hostname = "localhost"
const port = 9000;

function test(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('Hello');
    res.end()
}

const myServer = http.createServer(test)

myServer.listen(port, hostname)



// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(8080);

// var http = require('http');

// var app = http.createServer(function(req,res){
// res.setHeader('Content-Type', 'application/json');
// res.send(JSON.stringify({ a: 1 }, null, 3));
// });
// app.listen(3000);