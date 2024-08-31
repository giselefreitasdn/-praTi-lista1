/*Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) 
com base no valor fornecido, utilizando uma estrutura de controle if-else.*/

const prompt = require('prompt-sync')();
//declaração de prompt.
const idade = parseInt(prompt("Digite uma idade: "));

if(idade < 12) {
    console.log("Essa pessoa é uma criança.");
} else if(idade > 12 && idade < 18) {
    console.log("Essa pessoa é um adolescente.")
} else if(idade > 18 && idade < 65) {
    console.log("Essa pessoa é um adulto.")
} else {
    console.log("Essa pessoa é um idoso.")
}