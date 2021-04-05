<template src="./CreateArticle.html">

</template>

<script>
    import Sidebar from "./Sidebar";
    import Article from "../models/Article";
    import axios from "axios";
    import {required} from 'vuelidate/lib/validators';
    import swal from 'sweetalert';

    export default {
        name: "EditArticle",
        components: {
            Sidebar
        },
        data() {
            return {
                url: this.Global,
                file: '',
                article: new Article('', '', null, ''),
                submitted: false,
                isEdit:true
            }
        },
        validations: {
            article: {
                title: {
                    required
                },
                content: {
                    required
                }
            }
        },
        mounted() {
            var articleId = this.$route.params.id;
            this.getArticle(articleId);
        },
        methods: {
            fileChange() {
                this.file = this.$refs.file.files[0];
            },
            getArticle(articleId) {
                axios.get(this.url + 'article/' + articleId).then(res => {
                    if (res.data.status == 'success') {
                        this.article = res.data.article;
                    }
                });
            },
            save() {
                this.submitted = true;
                var articleId = this.$route.params.id;

                this.$v.$touch();
                if (this.$v.$invalid) {
                    return false;
                } else {
                    axios.put(this.url + 'article/' + articleId, this.article)
                        .then(response => {
                            if (response.data.status == 'success') {
                                //subida de archivo
                                if (this.file != null && this.file != undefined && this.file != '') {
                                    const formData = new FormData();
                                    formData.append(
                                        "file0",
                                        this.file,
                                        this.file.name
                                    );
                                    var articleId = response.data.article._id;

                                    axios.post(this.url + 'upload-image/' + articleId,formData)
                                        .then(response => {
                                            if (response.data.article) {

                                                swal(
                                                    'Artículo Editado',
                                                    'El Articulo se ha editado correctamente',
                                                    'success'
                                                )

                                                this.article = response.data.article;
                                                this.$router.push('/articulo/'+this.article._id);
                                            } else {
                                                // mostrar alerta de error
                                                swal(
                                                    'Creación fallida',
                                                    'El Articulo no se ha editado',
                                                    'error'
                                                )
                                            }
                                        })
                                        .catch(error => {
                                            console.log(error);
                                        });
                                }else{
                                    swal(
                                        'Artículo Editado ',
                                        'El Articulo se ha editado correctamente',
                                        'success'
                                    )

                                    this.article = response.data.article;
                                    this.$router.push('/articulo/'+this.article._id);
                                }

                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            }
        }
    }
</script>

<style scoped>

</style>

