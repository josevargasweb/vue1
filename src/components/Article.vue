<template>
    <div class="general">

        <div class="center">
            <section id="content">
                <article class="article-item article-detail" v-if="article">
                    <div class="image-wrap" v-if="article.image">
                        <img :src="url + 'get-image/' + article.image"
                             :alt="article.title"
                        >
                    </div>

                    <h1 class="subheader">{{article.title}}</h1>
                    <span class="date">
                    {{article.date | moment("from","now")}}
                </span>
                    <p>
                        {{article.content}}
                    </p>


                    <router-link :to="'/editar/'+article._id" class="btn btn-warning">Editar</router-link>
                    <a @click="deleteArticle(article._id)" class="btn btn-danger">ELiminar</a>

                    <div class="clearfix"></div>
                </article>
            </section>
            <Sidebar></Sidebar>
            <div class="clearfix"></div>


        </div>
    </div>
</template>

<script>
    import Sidebar from "./Sidebar";
    import axios from "axios";
    import swal from 'sweetalert';

    export default {
        name: "Article",
        components: {
            Sidebar
        },
        data() {
            return {
                url: this.Global,
                article: null
            }
        },
        mounted() {
            var articleId = this.$route.params.id;
            this.getArticle(articleId)
        },
        methods: {
            getArticle(articleId) {
                axios.get(this.url + 'article/' + articleId).then(res => {
                    if (res.data.status == 'success') {
                        this.article = res.data.article;
                    }
                });
            },
            deleteArticle(articleId){
                swal({
                    title: "¿Estas segudo de querer borrar este artículo?",
                    text: "Si lo borras no podras recuperarlo!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            axios.delete(this.url + 'article/' + articleId)
                                .then(response =>{
                                    console.log(response);
                                    swal(
                                        'Articulo borrado',
                                        'El articulo se ha borrado correctamente',
                                        'success'
                                    )

                                    this.$router.push('/blog');
                                });
                        } else {
                            swal("Uff casi no has borrado nada");
                        }
                    });


            }
        }
    }
</script>

<style scoped>

</style>