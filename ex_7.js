/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, 
e R$0,25 se forem compradas pelo menos doze. 
Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.*/

const prompt = require('prompt-sync')();
//declaração de prompt.

const quantidade = parseInt(prompt('Digite o número de maçãs que foram compradas: '));

let total = 0;

if (quantidade < 12) {
    total = quantidade * 0.3;
} else {
    total = quantidade * 0.25;
}

console.log(`A compra de ${quantidade} maçãs custou R$${total.toFixed(2).replace('.', ',')}.`);