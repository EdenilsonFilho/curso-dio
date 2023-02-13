/*Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis sendo elas:

1 - Preço do combustível
2 - Gasto médio de combutível do carro por KM
3 - Distância em KM da viagem
*/

const precoCombustivel = 4.98;
const gastoCarro = 10;
const distancia = 120;

const consumo = distancia/gastoCarro;
const valorgasto = consumo*precoCombustivel;

console.log(valorgasto.toFixed(2));
