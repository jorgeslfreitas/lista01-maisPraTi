/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

const prompt = require('prompt-sync')();

let n1 = Number(prompt('Digite o primeiro número: '));
let n2 = Number(prompt('Digite o segundo número: '));

while (n1 === n2) {
    console.log('O segundo número deve ser diferente do primeiro!');
    n2 = Number(prompt('Digite o segundo número novamente: '));
}

if (n1 > n2) {
    console.log(`${n2} e ${n1}`);
} else {
    console.log(`${n1} e ${n2}`)
}
