/*
 *Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. 
 *Essa função deve retornar um boolean true/false.
 */

const users = [
    {
        name: 'Carlos',
        technology: [
            'HTML', 'CSS'
        ]
    },
    {
        name: 'Jasmine',
        technology: [
            'JavaScript', 'CSS'
        ]
    },
    {
        name: 'Tuane',
        technology: [
            'HTML', 'NodeJS'
        ]
    }
]

function checkIfUserUsesCSS(user){
    const technology = user.technology

    for(let i = 0; i < technology.length; i++){
        if(technology[i] == 'CSS'){
            return true
        } 
    }
    return false
}

/**
 * Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, 
 * se SIM, imprima em tela as informações do usuário.
 */

for(let i = 0; i < users.length; i++){
    const userWorksWithCSS = checkIfUserUsesCSS(users[i])
    if(userWorksWithCSS){
        console.log(`O usuário ${users[i].name} trabalha com CSS`)
    }
}