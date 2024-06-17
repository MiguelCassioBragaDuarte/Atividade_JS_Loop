const ler = require('readline-sync');

let n = ler.questionInt("Digite a quantidade de números que vão ser lidos: ");

for (let x = 1; x <= n; x++) {
    let numero = ler.questionInt(`Digite o número ${x}: `);
    let fatorial = 1;

    for (let i = numero; i >= 1; i--) {
        fatorial *= i;
    }

    console.log(`O fatorial do número ${numero} é: ${fatorial}`);
}