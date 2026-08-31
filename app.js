let balance = 0;
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
    depoists: () => {
        const value = Number(prompt('Valor do depósito:'));
        balance += value;
        alert(`Saldo atual: R$ ${balance}`);
    },
    cashout: () => {
        const value = Number(prompt('Valor do saque:'));
        balance -= value;
        alert(`Saldo atual: R$ ${balance}`);
    },
    exit: () => {
        alert(`Agradecemos a preferência.`);
        loop = false;
    },
    invalid: () => alert('Número inválido')
}

while (loop === true){
    const operation = prompt(
        `Escolha uma operação: 
        
        1 - Consultar
        2 - Depositar
        3 - Sacar
        4 - Sair`
    );

    if (operation === null) {
        alert('Operação cancelada.');
        loop = false;
    } else if (operation === '') {
        alert('Digite um número.');
        continue;
    } else if (isNaN(operation)) {
        alert('Operacao invalida. Por favor, digite um número válido.');
        continue;
    }

    console.log(Number(operation))

    switch (Number(operation)) {
        case 1: operations.check(); break;

        case 2: operations.depoists(); break;

        case 3: operations.cashout(); break;

        case 4: operations.exit(); break;

        default: operations.invalid();
    }
}