let balance = 0;
const statement = [];
let loop = true;

const operations = {
    check: () => alert(`Saldo atual: R$ ${balance}`),
    deposits: () => {
        const response = prompt('Valor do depósito:');

        if (response === null) {
            alert('Operação cancelada.');
            return;
        }

        const value = Number(response);

        if (value < 1) {
            alert('Valor inválido para depósito.');
            return operations.deposits();
        } else if (isNaN(value)) {
            alert('Valor inválido para depósito.');
            return operations.deposits();
        } else {
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

        if (response === null) {
            alert('Operação cancelada.');
            return;
        }

        const value = Number(response);

        if (value < 1) {
            alert('Valor inválido para saque.');
            return operations.cashout();
        } else if (isNaN(value)) {
            alert('Valor inválido para saque.');
            return operations.cashout();
        } else if (value > balance) {
            alert('Saldo insuficiente');
            return operations.cashout();
        } else {
            balance -= value;

            statement[statement.length] = {
                type: 'Saque',
                value: value
            };

            alert(`Saldo atual: R$ ${balance}`);
        }
    },
    statement: () => {
        if (statement.length === 0) {
            return alert('Nenhuma transação realiazada.');
        }

        let text = 'Extrato:\n\n';

        for (let i = 0; i < statement.length; i++) {
            text += `${statement[i].type} = R$${statement[i].value}\n`;
        }

        alert(text);
    },
    exit: () => {
        const response = confirm('Deseja realmente sair?');

        if (!response) return;

        const username = sessionStorage.getItem('username');

        if(!username){
            alert('Agradecemos a preferência.');
        } else{
            alert(`Agradecemos a preferência, ${username}.`);
        }

        exit.disabled = true;

        let text = exit.textContent = 'Saindo';
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

        async function animacao(){
            for (let c = 1; c <= 3; c++){
                await sleep (980);
                text += '.';
                exit.textContent = text;
            };
        };

        animacao();
        setTimeout(() => window.location.href = './login.html', 3000);
    },
}

const check = document.querySelector('#check');
check.addEventListener('click', () => operations.check());

const deposits = document.querySelector('#deposits');
deposits.addEventListener('click', () => operations.deposits());

const cashout = document.querySelector('#cashout');
cashout.addEventListener('click', () => operations.cashout());

const statements = document.querySelector('#statement');
statements.addEventListener('click', () => operations.statement());

const exit = document.querySelector('#exit');
exit.addEventListener('click', () => operations.exit());