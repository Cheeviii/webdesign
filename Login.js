function logar() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if (username.value == "admin" && password.value == "admin") {
        localStorage.setItem("acesso", true);
        window.location.href = "index.html"
    } else {
        alert("Usuario ou senha invalidas!");
    }
 
}