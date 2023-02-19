/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para
dizer o valor do seu IMC; */


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc(peso, altura){
        return this.peso / (this.altura * this.altura);
    }
    classificacaoImc(){
        const valorImc =  this.imc();
        if (valorImc < 18.5){
            return 'Abaixo do Peso';
        } else if (valorImc >= 18.5 && valorImc < 25){
            return 'Peso Normal';
        }  else if (valorImc >= 25 && valorImc <= 30){
            return 'Acima do Peso';
        } else if (valorImc > 30 && valorImc <= 40){
            return 'Obeso';
        } else {
            return 'Obesidade Grave';
        }
    }
 
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.imc(70, 1.75));
console.log(jose.classificacaoImc());
