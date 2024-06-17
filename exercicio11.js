const ler = require('readline-sync');

let cont = 0;
let soma = 0;
let numero;

do {
    cont++;
    numero = ler.questionInt("Digite um número inteiro (ou 0 para sair): ");
    soma += numero
    
} while (numero !== 0);

let media = soma/cont;

console.log(`A medias dos numeros digitados é: ${media}`);