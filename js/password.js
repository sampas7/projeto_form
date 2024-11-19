const passwordInput = document.getElementById('password');
const passwordDisplay = document.getElementById('password-display');
const passwordConfDisplay = document.getElementById('passwordconf-display');

// Armazena o valor real da senha em uma variável separada
let realPassword = "";

// Atualiza o campo real de senha e exibe os asteriscos ao digitar
passwordDisplay.addEventListener('input', () => {
    const lastChar = passwordDisplay.value.slice(-1); // Pega o último caractere digitado
    if (passwordDisplay.value.length > realPassword.length) {
        // Adiciona o último caractere digitado ao valor real da senha
        realPassword += lastChar;
    } else {
        // Remove o último caractere em caso de backspace
        realPassword = realPassword.slice(0, -1);
    }
    
    // Atualiza os campos
    passwordInput.value = realPassword; // Sincroniza com o campo real
    passwordDisplay.value = '*'.repeat(realPassword.length); // Exibe os asteriscos
});