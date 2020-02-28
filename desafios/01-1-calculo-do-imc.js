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

////////////////////////////////////////////////////

console.log('Cálculo de Aposentadoria')

const nome = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

const calculoParaSeAposentar = idade + contribuicao;

const tempoParaMulherSeAposentar = (sexo == 'F' && contribuicao >= 30 && calculoParaSeAposentar >= 85);
const tempoParaHomemSeAposentar = (sexo == 'M' && contribuicao >= 35 && calculoParaSeAposentar >= 95)

if(tempoParaMulherSeAposentar || tempoParaHomemSeAposentar){
    console.log(`${nome}, você pode se aposentar!`);
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
}