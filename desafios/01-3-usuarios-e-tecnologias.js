/* 
 *Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array).
 *Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários.
 */

console.log('Funções e estruturas de repetição');
console.log('Usuários e tecnologias');
console.log('//////////////////////////////////')

const usuarios = [
    {
        nome: 'Carlos',
        tecnologias: [
            'HTML', ' CSS'
        ]
    },
    {
        nome: 'Jasmine',
        tecnologias: [
            'JavaScript', ' CSS'
        ]
    },
    {
        nome: 'Tuane',
        tecnologias: [
            'HTML', ' Node.js'
        ]
    }
];

function imprimirInformacoes(usuarios) {
    for(let i = 0; i < usuarios.length; i++){
       console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`);
    }
}

imprimirInformacoes(usuarios);