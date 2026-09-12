const iniciar = document.querySelector('button');

function greet() {
        const username = window.prompt('Digite seu nome:');
        
        if (!username){
            if(username !== ''){
                return window.alert(`Operação cancelada.`);
            }

            window.location.href = './src/app.html';
            sessionStorage.setItem('username', username);
            return window.alert(`Olá, seja bem-vindo.`);

        } else{
            window.alert(`Olá, ${username}! Seja bem-vindo.`);
            sessionStorage.setItem('username', username);
            window.location.href = './src/app.html';
        }
}

iniciar.addEventListener('click', () => window.location.href = './src/login.html');