/*Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.*/

const prompt = require('prompt-sync')();
//declaração de prompt.
let numero = parseInt(prompt("Digite um número de 1 a 10: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} * ${i} = ${numero * i}`);
  }