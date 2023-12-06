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
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                this.series = data;
                this.cargando = false;
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                this.error = true;
            });
    },
    },
    created() {
        this.fetchData(this.url);
    },
}).mount('#mi-lista');






