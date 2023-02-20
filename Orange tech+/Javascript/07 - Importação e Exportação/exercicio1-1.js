const entradas = [5, 50, 10, 2, 23, 0, 76, 99];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};