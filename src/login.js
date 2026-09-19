const email = document.querySelector('#email');
/* tbm poderia ser ('input[type="email"]') */

const senha = document.querySelector('#senha');
/* tbm poderia ser ('input[type="password"]') */

const user = {};

const login = document.querySelector('#login');

const voltar = document.querySelector('#voltar');

login.addEventListener('click', (event) =>{
    event.preventDefault();

    const emailValue = email.value;
    const senhaValue = senha.value;

    if (emailValue === '' || senhaValue === ''){
        return window.alert('Todos os campos precisam ser preenchidos.');
    }

    for (let i = 0; i < users.length; i ++){
        if (users[i].email === emailValue && users[i].senha === senhaValue){
            user.name = users[i].name;
            user.email = users[i].email;
            user.senha = users[i].senha;
        }
    }

    if (!user.email || !user.senha){
        return window.alert('Email e/ou senha incorretos.');
    } 
    window.alert('Acesso permitido.');

    window.location.href = './app.html';
});

voltar.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.href = '../index.html'
});

const users = JSON.parse(sessionStorage.getItem('database'));