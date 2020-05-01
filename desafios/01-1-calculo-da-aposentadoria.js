//Crie um programa para calcular a aposentadoria de uma pessoa.

console.log('Cálculo de Aposentadoria')

const name = 'Silvana'
const sex = 'F'
const age = 60
const contribution = 30

const minimumContributionTimeWomen = 30
const minimumContributionTimeMen = 35
const contributionTime = age + contribution

const canRetireWomen = (sex == 'F' && contributionTime >= 85 && contribution >= minimumContributionTimeWomen)
const canRetireMen = (sex == 'M' && contributionTime >= 95 && contribution >= minimumContributionTimeMen)

if(canRetireWomen || canRetireMen) {
    console.log(`${name}, você pode se aposentar!`)
} else {
    console.log(`${name}, você não pode se aposentar!`)
}