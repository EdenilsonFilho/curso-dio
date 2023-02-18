/* Elabore um algoritimo que calcule o que deve ser pago por um produto,
considerando o preço nomal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento
escolhido e efetuar o cálculo adequado.

Código condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

valorProduto = 100;
 // 1 - Débito / 2 - Dinheito e PIX / 3 - 2x sem Juros / 4 - 3x acima mais 10% juros.

function tipoPagamento(formaPagamento){
    if (formaPagamento === 1){
        valorProduto = valorProduto * 0.9;
        return valorProduto;
    } else if (formaPagamento === 2){
        valorProduto = (valorProduto - (valorProduto * 0.15));
        return valorProduto;
    } else if (formaPagamento === 3){
        return valorProduto;
    } else if (formaPagamento === 4){
        valorProduto = (valorProduto + (valorProduto * 0.1));
        return valorProduto;
    } else {
        console.log();
    }
    
}

function main(){
    console.log(tipoPagamento(2));
}

main();