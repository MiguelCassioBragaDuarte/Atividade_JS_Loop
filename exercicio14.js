const ler = require('readline-sync');

let votosCandidato1 = 0;
let votosCandidato2 = 0;
let votosCandidato3 = 0;
let votosBrancos = 0;
let votosNulos = 0;
let eleitoresCompareceram = 0;

while (true) {
    let voto = ler.questionInt("Digite o voto (1, 2, 3 para candidatos, 0 para branco, 4 para nulo, -1 para sair): ");

    if (voto === -1) {
        break;
    }

    switch (voto) {
        case 1:
            votosCandidato1++;
            break;
        case 2:
            votosCandidato2++;
            break;
        case 3:
            votosCandidato3++;
            break;
        case 0:
            votosBrancos++;
            break;
        case 4:
            votosNulos++;
            break;
        default:
            console.log("Voto inválido. Tente novamente.");
            continue;
    }

    eleitoresCompareceram++;
}

let candidatoVencedor = 0;
let maiorNumeroVotos = 0;

if (votosCandidato1 > maiorNumeroVotos) {
    candidatoVencedor = 1;
    maiorNumeroVotos = votosCandidato1;
}

if (votosCandidato2 > maiorNumeroVotos) {
    candidatoVencedor = 2;
    maiorNumeroVotos = votosCandidato2;
}

if (votosCandidato3 > maiorNumeroVotos) {
    candidatoVencedor = 3;
    maiorNumeroVotos = votosCandidato3;
}

console.log(`\nResultados da Eleição:`);
console.log(`Candidato Vencedor: Candidato ${candidatoVencedor}`);
console.log(`Número de votos em branco: ${votosBrancos}`);
console.log(`Número de votos nulos: ${votosNulos}`);
console.log(`Número de eleitores que compareceram: ${eleitoresCompareceram}`);
