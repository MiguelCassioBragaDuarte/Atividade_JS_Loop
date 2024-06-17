let alturaJorge = 1.72; // em metros
let alturaRoberto = 1.65; // em metros
const crescimentoJorge = 0.03; // 3 centímetros por ano
const crescimentoRoberto = 0.04; // 4 centímetros por ano
let anos = 0;

while (alturaRoberto <= alturaJorge) {
    alturaJorge += crescimentoJorge;
    alturaRoberto += crescimentoRoberto;
    anos++;
}

console.log(`Serão necessários ${anos} anos para que Roberto seja mais alto que Jorge.`);
