const name = document.querySelector('input[type="text"]');
const email = document.querySelector('input[type="email"]');
const senha = document.querySelector('input[type="password"]');
const create = document.querySelector('#create');
const voltar = document.querySelector('#voltar');

const getDatas = JSON.parse(sessionStorage.getItem('database')) || [];

const datas = [...getDatas];

create.addEventListener('click', (event) => {
    event.preventDefault();

    const nameValue = name.value;
    const emailValue = email.value;
    const senhaValue = senha.value;

    if (emailValue === '' || senhaValue === ''){
        return window.alert('Os cmapos de email e/ou senha precisam estar preenchidos.');
    }

    for (let i = 0; i < datas.length; i++) if (datas[i].email === email.value) return alert("Este email já está cadastrado.");

    datas[datas.length] = {
        name: nameValue || 'usuário',
        email: emailValue,
        senha: senhaValue
    };

    sessionStorage.setItem('database', JSON.stringify(datas));
    window.alert('Cadastro realizado com sucesso.');

    window.location.href = './login.html';
});

voltar.addEventListener('click', (event) => {
    event.preventDefault();
    
    window.location.href = '../index.html'
});