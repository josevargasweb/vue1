<template>
    <section id="content">
        <h2 class="subheader">{{titulo}}</h2>
        <hr>
        <h1>Este es mi componente</h1>
        <h2>{{subtitulo}}</h2>
        <hr>
    </section>
</template>

<script>
    export default {
        name: "MiComponente",
        data() {
            return {
                titulo: 'Mi componente',
                subtitulo: 'Soy el subtitulo de mi componente'
            }
        }
    }
</script>

<style scoped>

</style>