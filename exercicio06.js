const ler = require('readline-sync');

let cont = 0;
let mulher = 0;
let homem = 0;

while (true) {

    let nome = ler.question("Digite o nome ou insira 0 para sair: ");

    if(nome === '0'){
        break;
    }

    let sexo = ler.question("Informe o sexo com M(Masculino) ou F(Feminino): ").toLowerCase();

    if (sexo === "m") {
        homem ++;
        
    } else if(sexo ==="f"){
        mulher ++;
    }else{
        console.log("Informação de sexo invalida!");
    }
    cont ++;
}

let porcentagemH = (homem/cont)*100;
let porcentagemM = (mulher/cont)*100;

console.log(`\nTotal de usuários: ${cont}`);
console.log(`Porcentagem de homens: ${porcentagemH.toFixed(2)}%`);
console.log(`Porcentagem de mulheres: ${porcentagemM.toFixed(2)}%`);