/**
 *Crie um programa para realizar operações bancárias na conta de um usuário.
 *Comece criando um objeto com o nome do usuário, suas transações e saldo.
 *As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).
 */

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

//Add transactions
function createTransaction (transaction) {
    if (transaction.type === 'credit') {
        user.balance += transaction.value;
        user.transactions.push(transaction);
    } else if (transaction.type === 'debit') {
        user.balance -= transaction.value;
        user.transactions.push(transaction);
    }
}


 //Verifications
function getHigherTransactionByType (type) { //type - credit/debit
    let higherTransaction;
    let higherValue = 0;

    for (let transaction of user.transactions) { 
        if (transaction.type === type && transaction.value > higherValue) {
            higherValue = transaction.value;
            higherTransaction = transaction;
        }
    }

    return higherTransaction;
}

function getAverageTransactionValue (value) {
    let sum = 0;

    for (let transaction of user.transactions) {
        sum += transaction.value;
    }

    const averageValue = sum / user.transactions.length; 
   
    return averageValue;
}

function getTransactionsCount () {
    let count = {
        credit: 0,
        debit: 0
    }

    for (let transaction of user.transactions) {
        if (transaction.type === 'credit') {
            count.credit++;
        } else if (transaction.type === 'debit') {
            count.debit++;
        }
    }

    return count;
}

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });

console.log(user.balance); 

console.log(getHigherTransactionByType('credit')); 
console.log(getHigherTransactionByType('debit'));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());