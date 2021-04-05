<template src="./CreateArticle.html">

</template>

<script>
    import Sidebar from "./Sidebar";
    import Article from "../models/Article";
    import axios from "axios";
    import {required} from 'vuelidate/lib/validators';
    import swal from 'sweetalert';

    export default {
        name: "CreateArticle",
        components: {
            Sidebar
        },
        data() {
            return {
                url: this.Global,
                file: '',
                article: new Article('', '', null, ''),
                submitted: false
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
            console.log(this.article);
        },
        methods: {
            fileChange() {
                this.file = this.$refs.file.files[0];
            },
            save() {
                this.submitted = true;

                this.$v.$touch();
                if (this.$v.$invalid) {
                    return false;
                } else {
                    axios.post(this.url + 'save', this.article)
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
                                                    'Artículo Creado',
                                                    'El Articulo se ha creado correctamente',
                                                    'success'
                                                )

                                                this.article = response.data.article;
                                                this.$router.push('/blog')
                                            } else {
                                                // mostrar alerta de error
                                                swal(
                                                    'Creación fallida',
                                                    'El Articulo no se ha guardado',
                                                    'error'
                                                )
                                            }
                                        })
                                        .catch(error => {
                                            console.log(error);
                                        });
                                }else{
                                    swal(
                                        'Artículo Creado',
                                        'El Articulo se ha creado correctamente',
                                        'success'
                                    )

                                    this.article = response.data.article;
                                    this.$router.push('/blog');
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