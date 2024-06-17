const ler = require('readline-sync');

let cont = 0, valormaior = 0, valormenor = 0 ;
let maior = "";menor = "";


for (let i = 0; i < 15; i++) {
    
    let prod = ler.question("Informe o Produto: ");
    let valor = ler.questionFloat("Informe o valor do Produto: ");

    cont += valor;

    if(i===0){
        maior = prod;
        valormaior = valor;
        menor = prod;
        valormenor = valor;
    }

    if(valor > valormaior){
        maior = prod;
        valormaior = valor;
    }

    if(valor < valormenor){
        menor = prod;
        valormenor = valor;
    }
  
}

console.log("O valor total dos produtos é: R$"+cont.toFixed(2));
console.log(`O produto mais caro é: ${maior} -  R$${valormaior.toFixed(2)}`);
console.log(`O produto menos caro é: ${menor} -  R$${valormenor.toFixed(2)}`);