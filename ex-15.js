const prompt = require('prompt-sync')();

let num;
let peso;
let media = 0;
let somaPeso = 0;

while (num !== 0) {
    num = Number(prompt('Digite um número: '));
    if (num !== 0) {
        peso = Number(prompt('Digite um peso númerico: '));
        media += num * peso;
        somaPeso += peso;
    }
}

let mediaPonderada = media / somaPeso;

console.log(`Média ponderada = ${mediaPonderada}`);