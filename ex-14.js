const prompt = require('prompt-sync')();

let num;
let i = 0;
let soma = 0;

while (num !== 0) {
    num = Number(prompt('Digite um número: '));
    if (num !== 0) {
        i++;
        soma += num;
    }
}

let media = soma / i;

console.log(`Média = ${media}`);