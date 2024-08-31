/*Ler três valores para os lados de um triângulo: A, B e C. 
Verificar se os lados fornecidos formam realmente um triângulo. 
Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.*/

const prompt = require('prompt-sync')();
//declaração de prompt.

const a = parseFloat(prompt('Digite o lado A: '));
const b = parseFloat(prompt('Digite o lado B: '));
const c = parseFloat(prompt('Digite o lado C: '));

if (a < b + c && b < a + c && c < a + b) {
    if (a == b || a == c || b == c) {
        console.log('Esse é um triângulo isósceles.');
    } else if (a != b && b != c) {
        console.log('Esse é um triângulo escaleno.');
    } else if (a === b && b === c) {
        console.log('Esse é um triângulo equilátero.');
    }
} else {
    console.log('Os valores não formam um triângulo.');
}