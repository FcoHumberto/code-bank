const iniciar = document.querySelector('button');

iniciar.addEventListener('click', () =>{
    function greet() {
        const username = window.prompt('Digite seu nome:');
        
        if (!username){
            if(username !== ''){
                return window.alert(`Operação cancelada.`);
            }

            window.location.href = './src/app.html';
            return window.alert(`Olá, seja bem-vindo.`);

        } else{
            window.alert(`Olá, ${username}! Seja bem-vindo.`);
            window.location.href = './src/app.html';
        }
    }

    greet();
});