/* Crie um programa que seja capaz de percorrer uma lista de números
e imprima cada número par encontrado. */

const numeros = [0, 2, 5, 7, 10, 18, 244, 359, 886, 900];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}