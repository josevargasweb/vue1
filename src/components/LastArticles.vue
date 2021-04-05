<template>
    <div class="general">
        <Slider
        texto="Bienvenido al curso de Vue"
        home="true"
        ></Slider>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Últimos articulos</h2>

                <!--listado articulos-->
                <div id="articles">
                    <Articles :articles="articles"></Articles>
                </div>

            </section>
            <Sidebar></Sidebar>
            <div class="clearfix"></div>
        </div>
    </div>

</template>

<script>
    import axios from "axios"
    import Slider from "./Slider";
    import Sidebar from "./Sidebar";
    import Articles from "./Articles";

    export default {
        name: "LastArticles",
        components: {
            Slider,
            Sidebar,
            Articles
        },
        mounted() {
            this.getLastArticles();
        },
        data() {
            return {
                url:this.Global,
                articles:null
            }
        },
        methods: {
            getLastArticles() {
                axios.get(this.url+'articles/true')
                    .then(res => {
                        if (res.data.status == 'success') {
                            this.articles = res.data.articles;
                            console.log(this.articles);
                        }
                    });
            }
        }
    }
</script>

<style scoped>

</style>