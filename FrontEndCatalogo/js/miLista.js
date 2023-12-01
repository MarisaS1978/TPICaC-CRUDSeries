const { createApp } = Vue;

createApp({
    data() {
        return {
            series: [],
            url: 'https://marisas1978.pythonanywhere.com/series',
            error: false,
            cargando: true,
        };
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.series = data;
                    this.cargando = false;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true;
                });
        },
    },
    created() {
        this.fetchData(this.url);
    },
}).mount('#mi-lista');






