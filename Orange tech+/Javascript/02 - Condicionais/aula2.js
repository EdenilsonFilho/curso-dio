const numero = 10;
const numeroPar = (numero % 2) === 0;

if (numero === 0){
    console.log('O número é inválido');
} else if (numeroPar){
    console.log('Par');
} else {
    console.log('Impar');
}