/*Implemente um programa que recebe uma nota de 0 a 10 
e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/

const prompt = require('prompt-sync')();
//declaração de prompt.
const nota = parseInt(prompt("Digite uma nota de 0 a 10: "));

if (nota >= 6) {
    console.log("Você foi aprovado.")
} else if (nota >= 4 && nota < 6) {
    console.log("Você está de recuperação.")
} else {
    console.log("Você foi reprovado, se esforçe mais.")
} 