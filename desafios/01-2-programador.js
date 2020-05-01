//Crie um programa com um objeto para armazenar dados de um programador

console.log('Lidando com objetos e vetores');

console.log('Vetores e objetos');

const dadosUsuario = {
    nome: 'Carlos',
    idade: 32, 
    tecnologias: [
        {
            nome: 'C++',
            especialidade: 'Desktop'
        },
        {
            nome: 'Python',
            especialidade: 'Data Science'
        },
        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile'
        }

    ]
};

console.log(`O ${dadosUsuario.nome} tem ${dadosUsuario.idade} e usa a tecnologia ${dadosUsuario.tecnologias[0].nome} com especialidade em ${dadosUsuario.tecnologias[0].especialidade}`);