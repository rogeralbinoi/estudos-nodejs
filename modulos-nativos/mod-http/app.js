/*
* Estudo sobre o modulo nativo http
* Criado por Roger Albino em 01/02/2017
*/

const http = require('http');
const port = 3000;

function handle(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    response.write('<!DOCTYPE html>');
    response.write('<h1> Hello HTML </h1>');

    response.end('Hello from http module');
}

var server = http.createServer(handle);

server.listen(port, function () {
    console.log(`Server is listening at port ${port}`);
});