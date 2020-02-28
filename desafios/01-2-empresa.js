//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.

console.log('Lidando com objetos e vetores');

console.log('Construção e impressão de objetos');

const dadosEmpresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
};

console.log(`A empresa ${dadosEmpresa.nome} está localizada em ${dadosEmpresa.endereco.rua}, ${dadosEmpresa.endereco.numero}`);