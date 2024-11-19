const storedUsername = localStorage.getItem("username");

document.getElementById("username").textContent = storedUsername || "Usuário";