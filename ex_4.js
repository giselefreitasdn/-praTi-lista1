/*Crie um menu interativo no console que oferece ao usuário a escolha de três opções. 
Utilize switch-case para implementar a lógica de cada opção selecionada.*/

const prompt = require('prompt-sync')();
//declaração de prompt.
console.log("Escolha uma das opções: ");
console.log("1. Calcular a soma de dois números.");
console.log("2. Calcular a divisão de dois números.");
console.log("3. Calcular a multiplicação de dois números.");
console.log("4. Sair.");

let escolha = parseInt(prompt("Digite o número da sua escolha:"));

switch (escolha) {
    case 1:
        let numero1 = parseInt(prompt("Digite o primeiro número:"));
        let numero2 = parseInt(prompt("Digite o segundo número:"));
     
        let soma = numero1 + numero2;
            console.log(`O resultado da soma de ${numero1} e ${numero2} é: ${soma}`);
    break;

    case 2:
        let num1 = parseInt(prompt("Digite o primeiro número:"));
        let num2 = parseInt(prompt("Digite o segundo número:"));
     
        let divisao = num1 / num2;
            console.log(`O resultado da divisão de ${num1} e ${num2} é: ${divisao}`);
    break;

    case 3:
        let number1 = parseInt(prompt("Digite o primeiro número:"));
        let number2 = parseInt(prompt("Digite o segundo número:"));
     
        let multiplicacao = number1 * number2;
            console.log(`O resultado da multiplicação de ${number1} e ${number2} é: ${multiplicacao}`);
    break;

    case 4:
        console.log("Você saiu.");
    break;
}