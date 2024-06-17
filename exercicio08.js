const ler = require('readline-sync');

let soma = 0; 

for (let i = 1; i < 19; i++) {
    let num = ler.questionInt(i+ ". Digite um numero: ")
    soma+=num;
}

if (soma>500){
    soma = soma-100;
    console.log("A soma dos numeros passou de 500 vamos subitrair 100: "+soma)
}else{
    console.log("A soma dos numeros é: "+soma)
}

