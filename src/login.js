const email = document.querySelector('#email');
/* tbm poderia ser ('input[type="email"]') */

const senha = document.querySelector('#senha');
/* tbm poderia ser ('input[type="password"]') */

const button = document.querySelector('button');

const user = {
    email: 'admin@gmail.com',
    senha: 'admin'
}

button.addEventListener('click', (event) =>{
    event.preventDefault();

    const emailValue = email.value;
    const senhaValue = senha.value;

    if (emailValue === '' || senhaValue === ''){
        return window.alert('Todos os campos precisam ser preenchidos.');
    }

    if (emailValue !== user.email || senhaValue !== user.senha){
        return window.alert('Email e/ou senha incorretos.');
    }

    window.alert('Acesso permitido.');

    window.location.href = './app.html';
})