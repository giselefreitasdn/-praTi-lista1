/*Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

const numeros = 10;

let sequenciaFibonacci = [1, 1];

for (let i = 2; i < numeros; i++) {
    // O próximo número é a soma dos dois anteriores
    sequenciaFibonacci[i] = sequenciaFibonacci[i - 1] + sequenciaFibonacci[i - 2];
  }
  
console.log(`Esses são os ${numeros} primeiros números da sequência de Fibonacci:`);

for (let i = 0; i < numeros; i++) {
    console.log(sequenciaFibonacci[i]);
}