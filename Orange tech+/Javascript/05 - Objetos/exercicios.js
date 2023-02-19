/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class Carros {
    marca;
    cor;
    gastoMediPorKm;

    constructor(marca, cor, gastoMediPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMediPorKm = gastoMediPorKm;
    }

    calcularGasto(distancia, precoCombustivel){
        return (distancia / this.gastoMediPorKm) * precoCombustivel;
    }
}

const uno = new Carros('Fiat', 'Branca', 12);
console.log(uno.calcularGasto(76, 4.99));