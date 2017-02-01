/*
* Estudo sobre o modulo nativo http
* Criado por Roger Albino em 01/02/2017
*/

const http = require('http');
const port = 3000;

function handle(request, response) {
    response.end('Hello from http module');
}

var server = http.createServer(handle);

server.listen(port, function () {
    console.log(`Server is listening at port ${port}`);
});