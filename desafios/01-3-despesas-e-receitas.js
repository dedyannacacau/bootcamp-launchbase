/**
 *Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).
 *Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as 
 *receitas e despesas do usuário
 */

console.log('Soma de despesas e receitas');

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

/**
 *Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo 
 * que recebe como parâmetro as receitas e despesas do usuário:
 */
for (let i = 0; i < usuarios.length; i++) {
  const usuario = usuarios[i];
  let saldo = calculaSaldo(usuario.receitas, usuario.despesas);
}

function calculaSaldo (receitas, despesas) {
  const somaReceitas = somaNumeros(receitas);
  const somaDespesas = somaNumeros(despesas);
  
  const saldo = somaReceitas - somaDespesas;

  return saldo;
}

/*
 *Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma 
 *deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:
 */
function somaNumeros (numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}
 
/**
 * No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:
 */
for (let i = 0; i < usuarios.length; i++) {
  const usuario = usuarios[i];
  let saldo = calculaSaldo(usuario.receitas, usuario.despesas);
 
  if (saldo > 0) {
    console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo}`);
  } else {
    console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo}`);
  }
}