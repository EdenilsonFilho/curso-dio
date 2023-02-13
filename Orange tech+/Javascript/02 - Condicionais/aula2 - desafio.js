/*Faça um programa para calcular o valor de uma viagem

Você terá 5 variáveis sendo elas:

1 - Preço do etanol
2 - Preço do gasolina
3 - O tipo de combustível que está no seu carro
4 - Gasto médio de combutível do carro por KM
5 - Distância em KM da viagem
*/

const precoEtanol = 3.99;
const precoGasolina = 4.89;
const tipoCombustivel = 'Gasolina';
const gastoCarro = 10;
const distancia = 120;

const consumo = distancia / gastoCarro;

if (tipoCombustivel === 'Etanol') {
    const valorgasto = consumo * precoEtanol;
    console.log(valorgasto.toFixed(2));
} else {
    const valorgasto = consumo * precoGasolina;
    console.log(valorgasto.toFixed(2));
}

