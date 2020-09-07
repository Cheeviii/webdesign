var logado = false;

if (localStorage.getItem("acesso") == "true"){
    logado = true;
    console.log("Cliente Entrou");
}

if (logado !== true) {
    console.log("Cliente não autenticado!");
    window.location.href="login.html"
}