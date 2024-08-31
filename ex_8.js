/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

const prompt = require('prompt-sync')();
//declaração de prompt.

const num1 = parseInt(prompt('Digite o primeiro número: '));
const num2 = parseInt(prompt('Digite o segundo número: '));

if (num1 < num2) {
    console.log(`${num1}, ${num2}.`);
} else {
    console.log(`${num2}, ${num1}.`);
}