//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

console.log('Primeiros passos com JS');

console.log('Cálculo de IMC')

const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

if(imc >= 30){
    console.log('Carlos, você está acima do peso');
} else {
    console.log('Carlos, você não está acima do peso');
}