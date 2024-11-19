document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    
    if (username === storedUsername && password === storedPassword) {

        window.location.href = "home.html";

      } else {

        alert("Usuário ou senha incorretos!");
        
      }
});
