const ler = require('readline-sync');

let fora = 0, dentro = 0;

for (let i = 0; i < 20; i++) {
    let nome = ler.question("informe o nome: ");
    let cidade = ler.question("informe a sigla da cidade: ").toLowerCase();

    if(cidade ==="bh"){
        dentro ++;
    }else{
        fora ++;
    }
    
}

console.log(`Dentro de BH: ${dentro}, Fora ${fora}`);