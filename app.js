let balance = 0;
const statement = [];
let loop = true;

function greet() {
    const username = window.prompt('Digite seu nome:');

    if (!username){
        if(username !== ''){
            loop = false;
            return window.alert(`Operação cancelada.`);
        } 
        
        return window.alert(`Olá, seja bem-vindo.`);
    }

    window.alert(`Olá, ${username}! Seja bem-vindo.`);
}

greet();

const operations = {
    check: () => alert(`Saldo atual: R$ ${balance}`),
    deposits: () => {
        const value = Number(prompt('Valor do depósito:'));

        if (value < 1){
            alert('Valor inválido para depósito.');
            return operations.deposits();
        } else if (isNaN(value)){
            alert('Valor inválido para depósito.');
            return operations.deposits();
        } else{
            balance += value;
    
            statement[statement.length] = {
                type: 'Depósito',
                value: Number(value)
            };
    
            alert(`Saldo atual: R$ ${balance}`);
        }   
    },
    cashout: () => {
        const value = Number(prompt('Valor do saque:'));

        if (value < 1){
            alert('Valor inválido para saque.');
            return operations.cashout();
        } else if(isNaN(value)){
            alert('Valor inválido para saque.');
            return operations.cashout();
        } else if(value > balance){
            alert('Saldo insuficiente');
            return operations.cashout();
        } else{
            balance -= value;
    
            statement[statement.length] = {
                type: 'Saque',
                value: Number(value)
            };
    
            alert(`Saldo atual: R$ ${balance}`);
        }
    },
    statement: () => {
        if(statement.length === 0) {
            return alert('Nenhuma transação realiazada.');
        }

        let text = 'Extrato:\n\n';

        for(let i = 0; i < statement.length; i++){
            text += `${statement[i].type} = R$${statement[i].value}\n`;
        }

        alert(text);
    },
    exit: () => {
        alert(`Agradecemos a preferência.`);
        loop = false;
    },
    invalid: () => alert('Número inválido')
}

while (loop === true){
    const operation = prompt('Escolha uma operação:\n1 - Consultar\n2 - Depositar\n3 - Sacar\n4 - Extrato\n5 - Sair');

    if (operation === null) {
        alert('Operação cancelada.');
        loop = false;
        continue;
    } else if (operation === '') {
        alert('Digite um número.');
        continue;
    } else if (isNaN(operation)) {
        alert('Operacao invalida. Por favor, digite um número válido.');
        continue;
    }/*else {
        switch (Number(operation)) {
            case 1: operations.check(); break;

            case 2: operations.deposits(); break;

            case 3: operations.cashout(); break;

            case 4: operations.exit(); break;

            default: operations.invalid();
        }
    }*/

    switch (Number(operation)) {
        case 1: operations.check(); break;

        case 2: operations.deposits(); break;

        case 3: operations.cashout(); break;

        case 4: operations.statement(); break;

        case 5: operations.exit(); break;

        default: operations.invalid();
    }
}