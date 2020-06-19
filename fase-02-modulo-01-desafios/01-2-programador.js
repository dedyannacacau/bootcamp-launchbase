//Crie um programa com um objeto para armazenar dados de um programador

const userData = {
    name: 'Carlos',
    age: 32, 
    technology: [
        {
            name: 'C++',
            specialty: 'Desktop'
        },
        {
            name: 'Python',
            specialty: 'Data Science'
        },
        {
            name: 'JavaScript',
            especialidade: 'Web/Mobile'
        }
    ]
}

console.log(`O usuário ${userData.name} tem ${userData.age} e usa a tecnologia ${userData.technology[0].name} com especialidade em ${userData.technology[0].specialty}`)