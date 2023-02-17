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

const peso = 115;
const altura = 1.72;
const imc = peso / Math.pow(altura,2);

if (imc < 18.5){
    console.log('Abaixo do Peso');
} else if (imc >= 18.5 && imc < 25){
    console.log('Peso Normal');
}  else if (imc >= 25 && imc <= 30){
    console.log('Acima do Peso');
} else if (imc > 30 && imc <= 40){
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}