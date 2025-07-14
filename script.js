// script.js

// FunÃ§Ã£o de login
function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(() => {
      window.location.href = "index.html"; // Redireciona apÃ³s login
    })
    .catch(error => {
      document.getElementById("msg").innerText = "Erro: " + error.message;
    });
}

// FunÃ§Ã£o de cadastro
function cadastrar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(() => {
      window.location.href = "index.html"; // Redireciona apÃ³s cadastro
    })
    .catch(error => {
      document.getElementById("msg").innerText = "Erro: " + error.message;
    });
