const ler = require('readline-sync');

let frase = ler.question("Digite uma frase: ").toLowerCase();

let contadorVogais = 0;
let vogais = "aeiou";

for (let i = 0; i < frase.length; i++) {
    if (vogais.includes(frase[i])) {
        contadorVogais++;
    }
}

console.log(`A frase "${frase}" tem ${contadorVogais} vogais.`);
