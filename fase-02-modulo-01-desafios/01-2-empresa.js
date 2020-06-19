//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.

const companyData = {
    name: 'Rocketseat',
    color: 'Purple',
    focus: 'Programação', 
    address: {
        street: 'Guilherme Guembala',
        number: 260
    }
}

console.log(`A empresa ${companyData.name} está localizada em ${companyData.address.street}, ${companyData.address.number}`)