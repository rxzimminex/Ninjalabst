// script.js organizado para login e cadastro com Firebase

// Exibe mensagens de erro na interface
function mostrarErro(msg) {
  const msgEl = document.getElementById("msg");
  if (msgEl) msgEl.innerText = "Erro: " + msg;
}

// Redireciona após login/cadastro
function redirecionarParaPainel() {
  window.location.href = "index.html";
}

// Login de usuário existente
function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!email || !senha) return mostrarErro("Preencha todos os campos.");

  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(redirecionarParaPainel)
    .catch(error => mostrarErro(error.message));
}

// Cadastro de novo usuário
function cadastrar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!email || !senha) return mostrarErro("Preencha todos os campos.");

  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(redirecionarParaPainel)
    .catch(error => mostrarErro(error.message));
}
