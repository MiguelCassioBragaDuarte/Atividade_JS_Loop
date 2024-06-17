const ler = require('readline-sync');
let maior = 0, menor = 0;

for (let i = 1; i < 11; i++) {
    let num = ler.questionInt(i+". Informe um numero: ");
    if(num > 5){
        maior ++;
    }else{
        menor ++;
    }   
}

console.log(`a quantidade de numeros maiores que 5 são: ${maior}, os menonores são: ${menor}` );