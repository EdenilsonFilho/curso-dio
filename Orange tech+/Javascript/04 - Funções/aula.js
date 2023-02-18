/* O IMC - Indece de Massa Corporal é um critério da Organização Munidal
de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = Peso / (altura * altura)

Elabora um algoritino que dado o peso e a altura de um adulto
Mostre sua condição de acordo com a table abaixo.

IMC em adultos condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade grave;
*/

function calcularImc (peso, altura){
    return peso / Math.pow(altura,2);
}

function classificacaoImc (imc){
    if (imc < 18.5){
        return 'Abaixo do Peso';
    } else if (imc >= 18.5 && imc < 25){
        return 'Peso Normal';
    }  else if (imc >= 25 && imc <= 30){
        return 'Acima do Peso';
    } else if (imc > 30 && imc <= 40){
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

function main (){
    const peso = 70;
const altura = 1.72;
const imc = calcularImc (peso, altura);
console.log(classificacaoImc(imc));
}

main();