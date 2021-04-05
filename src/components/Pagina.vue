<template>
    <div class="general">
        <Slider texto="Página de pruebas"></Slider>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Pagina de pruebas</h2>
                <h3>{{id_desde_url}}</h3>
            </section>
            <Sidebar></Sidebar>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
    import Slider from "./Slider";
    import Sidebar from "./Sidebar";

    export default {
        name: "Pagina",
        components: {
            Slider,
            Sidebar,
        },
        mounted() {
            this.id_desde_url = this.$route.params.id;
        },
        data() {
            return {
                id_desde_url: null
            }
        }
    }
</script>

<style scoped>

</style>