/*Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

const prompt = require('prompt-sync')();
//declaração de prompt.
let soma = 0;
let contador = 0;
let numero;

do {
  numero = parseFloat(prompt("Digite um número decimal (e 0 quando quiser parar): "));

  if (numero !== 0) {
    soma += numero;
    contador++;
  }

} while (numero !== 0);

if (contador > 0) {
  let mediaAritmetica = soma / contador;
  console.log(`A média aritmética desses números é: ${mediaAritmetica}`);
}