console.log(location.search)     // lee los argumentos pasados a este formulario
var id = location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            id: null,
            titulo: "",
            genero:"",
            temporadas:0,
            clasificacion: "",
            anio:0,
            imagen: "",
            url: 'http://localhost:5000/series/' + id,
            error:false
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.titulo = data.titulo
                    this.genero = data.genero
                    this.temporadas = data.temporadas
                    this.clasificacion = data. clasificacion
                    this.anio = data.anio
                    this.imagen = data.imagen
                    
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let serie = {
                titulo: this.titulo,
                genero: this.genero,
                temporadas: this.temporadas,
                clasificacion: this.clasificacion,
                anio: this.anio,
                imagen: this.imagen
            }
            var options = {
                body: JSON.stringify(serie),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./series.html"; // navega a productos.html          
                })
                .catch(err => {
                    console.error(err);
                    this.error = true; 
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
