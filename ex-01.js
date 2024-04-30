const prompt = require('prompt-sync')();

const tempCelsius = prompt('Digite uma temperatura em graus Celsius para conversão em graus Fahrenheit: ');

const converseTemp = (temp) => {
    return (temp * 1.8) + 32;
};

const tempFahrenheit = converseTemp(tempCelsius);

console.log(`Temperatura convertida: ${tempFahrenheit}°F`);

