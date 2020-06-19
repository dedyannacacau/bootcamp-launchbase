/* 
 *Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array).
 *Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários.
 */

const users = [
    {
        name: 'Carlos',
        technology: [
            'HTML', ' CSS'
        ]
    },
    {
        name: 'Jasmine',
        technology: [
            'JavaScript', ' CSS'
        ]
    },
    {
        name: 'Tuane',
        technology: [
            'HTML', ' NodeJS'
        ]
    }
]

function printInformation(users) {
    for(let i = 0; i < users.length; i++){
        console.log(`${users[i].name} trabalha com ${users[i].technology}.`)
    }
}

printInformation(users)
