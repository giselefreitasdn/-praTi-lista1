/*Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

const prompt = require('prompt-sync')();
//declaração de prompt.
let numero = parseInt(prompt("Digite um número: "));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

console.log(`O fatorial do número ${numero} é ${fatorial}.`);