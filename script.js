
function alternar() {
  const nomeInput = document.getElementById("nome");
  const title = document.getElementById("title");
  const btn = document.querySelector("button");
  const toggle = document.querySelector(".toggle");

  if (nomeInput.style.display === "none") {
    nomeInput.style.display = "block";
    title.innerText = "Cadastro";
    btn.innerText = "Cadastrar";
    toggle.innerText = "Já tem conta? Faça login";
  } else {
    nomeInput.style.display = "none";
    title.innerText = "Login";
    btn.innerText = "Entrar";
    toggle.innerText = "Não tem conta? Cadastre-se";
  }
}

function submitForm() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const nome = document.getElementById("nome").value.trim();
  const msg = document.getElementById("msg");

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (document.getElementById("nome").style.display !== "none") {
    // Cadastro
    if (usuarios.find(u => u.email === email)) {
      msg.innerText = "Email já cadastrado!";
      return;
    }
    usuarios.push({ nome, email, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("usuarioLogado", JSON.stringify({ nome, email }));
    window.location.href = "index.html";
  } else {
    // Login
    const user = usuarios.find(u => u.email === email && u.senha === senha);
    if (!user) {
      msg.innerText = "Email ou senha incorretos!";
      return;
    }
    localStorage.setItem("usuarioLogado", JSON.stringify(user));
    window.location.href = "index.html";
  }
}
