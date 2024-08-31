/*Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.*/

const prompt = require('prompt-sync')();
//declaração de prompt.
let soma = 0;

for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt(`Digite o ${i + 1}° número: `));
    soma += numero;
}

console.log(`A soma dos números é: ${soma}`);