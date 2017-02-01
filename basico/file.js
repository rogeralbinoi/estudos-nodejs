/*
* Estudo sobre o modulo nativo fs
* Criado por Roger Albino em 01/02/2017
*/

const fs = require('fs');
const texto = `linha 1
linha 2
linha 3
linha 4`;

// escrever em um arquivo
fs.writeFile('data.txt', texto , function (err) {
    if (err) {
        throw err;
    }
});

// ler um arquivo
fs.readFile('data.txt', function (err, data) {
    if (err) {
        throw err;
    }

    console.log(data.toString('utf-8'));
});

// ler um diretório

fs.readdir('.', function (err, files) {
    if (err) {
        throw err;
    }

    for (let file of files) {
        console.log(file);
    }
});