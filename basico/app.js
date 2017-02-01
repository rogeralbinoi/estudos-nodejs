/*
* Estudo sobre o modulo nativo http
* Criado por Roger Albino em 01/02/2017
*/

const http = require('http');
const port = 3000;
const handle = require('./handle');
const events = require('events');
const emiter = new events.EventEmitter();

function say () {
    console.log('Aeeee!!');
}
emiter.on('say', say);

emiter.emit('say');


var server = http.createServer(handle);

server.listen(port, function () {
    console.log(`Server is listening at port ${port}`);
});