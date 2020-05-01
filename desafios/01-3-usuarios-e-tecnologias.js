/* 
 *Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array).
 *Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários.
 */

console.log('Users and Technologies');
console.log('//////////////////////////////////')

const users = [
    {
        name: 'Carlos',
        technologies: [
            'HTML', ' CSS'
        ]
    },
    {
        name: 'Jasmine',
        technologies: [
            'JavaScript', ' CSS'
        ]
    },
    {
        name: 'Tuane',
        technologies: [
            'HTML', ' Node.js'
        ]
    }
];

function printInformation(users) {
    for(let i = 0; i < users.length; i++){
       console.log(`${users[i].name} trabalha com ${users[i].technologies}`);
    }
}

printInformation(users);