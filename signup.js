document.querySelector('.cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const passwordconf = document.getElementById('passwordconf').value.trim();

    if(password === passwordconf){

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("passwordConfirm", passwordconf);

        window.location.href = 'home.html';
    } else {
        alert('Verifique se as 2 senhas são iguais.');
    }
});