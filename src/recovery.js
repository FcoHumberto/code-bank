const email = document.querySelector('#email');
const novaSenha = document.querySelector('#novasenha');
const confirmacao = document.querySelector('#confirmacao');

const redefinir = document.querySelector('#redefinir');
const voltar = document.querySelector('#voltar');

const getDatas = JSON.parse(sessionStorage.getItem('database')) || [];

redefinir.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const novaSenhaValue = novaSenha.value;
    const confirmacaoValue = confirmacao.value;

    if (emailValue === '' || novaSenhaValue === '' || confirmacaoValue === '') {
        return window.alert('Todos os campos precisam ser preenchidos.');
    }

    if (novaSenhaValue !== confirmacaoValue) {
        return window.alert('As senhas não coincidem.')
    }

    for (let i = 0; i < getDatas.length; i++) {
        if (getDatas[i].email === emailValue) {
            getDatas[index].senha = novaSenhaValue;
            sessionStorage.setItem('database', JSON.stringify(getDatas));
            alert('Senha redefinida com sucesso.');
            return window.location.href= "./login.html"
        };
    };

    window.alert("Email não encontrado.");
});

voltar.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.href = './login.html'
});
