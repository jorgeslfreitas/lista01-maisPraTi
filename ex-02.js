const prompt = require('prompt-sync')();

const numEleitoresMunicipio = Number(prompt('Digite a quantidade de eleitores do município: '));
const votosBranco = Number(prompt('Quantidade de votos em branco: '));
const votosNulos = Number(prompt('Quantidade de votos nulos: '));
const votosValidos = Number(prompt('Quantidade de votos válidos: '));

const percenturalEleitores = (eleitores, branco, nulos, validos) => {
    const percentualBrancos = (branco / eleitores) * 100;
    const percentualNulos = (nulos / eleitores) * 100;
    const percentualValidos = (validos / eleitores) * 100;
    
    console.log(`Percentual de votos brancos: ${percentualBrancos}`);
    console.log(`Percentual de votos nulos: ${percentualNulos}`);
    console.log(`Percentual de votos válidos: ${percentualValidos}`);
}

percenturalEleitores(numEleitoresMunicipio, votosBranco, votosNulos, votosValidos);