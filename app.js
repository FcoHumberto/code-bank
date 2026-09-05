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
        const response = prompt('Valor do depósito:');

        if (response === null){
            alert('Operação cancelada.');
            return;
        }

        const value = Number(response);

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
                value: value
            };
    
            alert(`Saldo atual: R$ ${balance}`);
        }   
    },
    cashout: () => {
        const response = prompt('Valor do saque:');

        if (response === null){
            alert('Operação cancelada.');
            return;
        }

        const value = Number(response);

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
                value: value
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
        const response = confirm('Deseja realmente sair?');

        if(!response) return;

        alert(`Agradecemos a preferência.`);
        loop = false;
    },
    invalid: () => alert('Número inválido')
}

while (loop === true){
    const operation = prompt('Escolha uma operação:\n1 - Consultar\n2 - Depositar\n3 - Sacar\n4 - Extrato\n5 - Sair');

    if (operation === null) {
        const response = confirm('Deseja realmente cancelar?');

        if (!response) continue
        
        alert('Operação cancelada.');
        loop = false;
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