/* Uma sala contem 5 alunos e para cada aluno foi sorteado um número 
de 1 - 100. Faça um programa que receba os números sorteados para cada
aluno e mostrar o maior número sorteado

Dados entrada:
5
50
10
98
23

Saída:
98 */

const {gets, print} = require('./exercicio1-1');
const quantidadeAlunos = gets();
let maiorValorencontrado = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
    const numerosSorteado = gets();
    if (numerosSorteado > maiorValorencontrado) {
        maiorValorencontrado = numerosSorteado;
    }
}

print(maiorValorencontrado);