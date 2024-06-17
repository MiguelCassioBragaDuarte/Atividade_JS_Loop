const ler = require('readline-sync');

let somaNegativos = 0;
let numero;

do {
    numero = ler.questionInt("Digite um número inteiro (ou 0 para sair): ");

    if (numero < 0) {
        somaNegativos += numero;
    }

} while (numero !== 0);

console.log(`O somatório dos números negativos é: ${somaNegativos}`);