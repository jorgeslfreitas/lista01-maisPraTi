const prompt = require('prompt-sync')();

const numMacas = Number(prompt('Digite a quantidade de maças que queira comprar: '));

if (numMacas < 12) {
    const precoTotalMacas = numMacas * 0.30;
    console.log(`Nesta quantidade o valor unitário da maça será de R$0,30 e o total de sua compra será de R$${precoTotalMacas.toFixed(2)}`);
} else {
    const precoTotalMacas = numMacas * 0.25;
    console.log(`Nesta quantidade o valor unitário da maça será de R$0,25 e o total de sua compra será de R$${precoTotalMacas.toFixed(2)}`);
}