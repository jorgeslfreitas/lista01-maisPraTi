const prompt = require('prompt-sync')();

const ladoA = Number(prompt('Digite o primeiro valor: '));
const ladoB = Number(prompt('Digite o segundo valor: '));
const ladoC = Number(prompt('Digite o terceiro valor: '));

const ehTriangulo = ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB);
const ehIsosceles = ladoA === ladoB || ladoA === ladoC || ladoB === ladoC;
const ehEscaleno = ladoA !== ladoB && ladoB !== ladoC;
const ehEquilatero = ladoA === ladoB && ladoB === ladoC;

if (ehTriangulo) {
    if (ehEquilatero) {
        console.log('O triângulo é equílatero!');
    } else if (ehEscaleno) {
        console.log('O triângulo é escaleno!');
    } else {
        console.log('O triângulo é isósceles5!');
    }
} else {
    console.log('Os valores digitados não formam um triângulo!');
}