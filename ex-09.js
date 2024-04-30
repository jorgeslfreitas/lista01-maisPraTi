const prompt = require('prompt-sync')();

const codigoOrigemProduto = Number(prompt('Digite o código de origem do produto: '));

switch (true) {
    case codigoOrigemProduto === 1:
        console.log('Sul');
        break;
    case codigoOrigemProduto === 2:
        console.log('Norte');
        break;
    case codigoOrigemProduto === 3:
        console.log('Leste');
        break;
    case codigoOrigemProduto === 4:
        console.log('Oeste');
        break;
    case (codigoOrigemProduto === 5 || codigoOrigemProduto === 6 || codigoOrigemProduto >= 25 && codigoOrigemProduto <= 50):
        console.log('Nordeste');
        break;
    case (codigoOrigemProduto === 7 || codigoOrigemProduto ===  8 || codigoOrigemProduto ===  9):
        console.log('Sudeste');
        break;
    case (codigoOrigemProduto >= 10 && codigoOrigemProduto <= 20):
        console.log('Centro-Oeste');
        break;
    default:
        console.log('Fora dos intervalos - Produto importado');
        break;
}