function checkPassword() {
    var password = document.getElementById("password").value;

    if (password === "admin") {
        // Si la contraseña es correcta, lleva a home.html
        window.location.href = "home.html";
    } else {
        alert("Contraseña incorrecta. Inténtelo de nuevo.");
    }
}