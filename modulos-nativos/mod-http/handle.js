function handle(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    response.write('<!DOCTYPE html>');
    response.write('<h1> Hello HTML </h1>');

    response.end();
}

module.exports = handle;