document.addEventListener("DOMContentLoaded", function () {
var cerrarSesionBtn = document.getElementById("cerrarSesionBtn");
    if (cerrarSesionBtn) {
        cerrarSesionBtn.addEventListener("click", function () {
            
            window.location.href = "index.html";
        });
    }
});
cad = `<nav class="navbar navbar-expand-sm navbar-light bg-warning">
<div class="container">
    <a class="navbar-brand" href="index.html">Fan Series</a>
    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link active" href="index.html" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.imdb.com/" target="_blank">IMDb</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Administrar</a>

                <div class="dropdown-menu" aria-labelledby="dropdownId">
                    <a class="dropdown-item" href="series.html">Gestor de Series</a>
                    <a class="dropdown-item" href="miLista.html">Mi Lista</a>
                </div>
            </li>
        </ul>
    </div>
    <button id="cerrarSesionBtn" class="btn btn-danger">Cerrar Sesión</button>
</div>
</nav>
`
document.querySelector("header").innerHTML = cad