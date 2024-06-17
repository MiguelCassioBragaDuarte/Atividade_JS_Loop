const ler = require('readline-sync');

let numero = ler.questionInt("Digite um número inteiro positivo: ");

console.log(`Divisores de ${numero}:`);
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(i);
    }
}