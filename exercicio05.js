const ler = require('readline-sync');

let cont = 0,soma=0;
let idade = 0;

do {
    cont++;
    soma += idade;
    let idade = ler.questionInt("Informe a idade ou digite -1 para sair: ");
    

} while (idade > 0);

let media = soma/cont;

console.log("A media das idades é: "+media)