/*Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa 
e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.*/

const prompt = require('prompt-sync')();
//declaração de prompt.

const peso = (prompt("Digite seu peso, em quilogramas: "));
const altura = (prompt("Digite sua altura, em metros: "));

const imc = peso / (altura * altura);
//fórmula para calcular o IMC.

if (imc < 18.4) {
    console.log("Você está com baixo peso.");
} else if (imc > 18.5 && imc < 24.9) {
    console.log("Você está eutrófico.")
} else if (imc > 25 && imc < 29.9) {
    console.log("Você está com sobrepeso.")
} else {
    console.log("Você está com obesidade.")
}