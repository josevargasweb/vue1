<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <h1 class="subheader">Peliculas</h1>

                <div class="mis-datos" v-if="misDatos">
               <p v-html="misDatos"></p>
                    <br>
                    {{web | mayusculas | concatenaYear('ESTE ES EL MEJOR AÑO')}}
                </div>
                <div class="favorita" v-if="favorita">
                    La pelicula marcada es:
                    <h3>{{favorita.title}}</h3>
                </div>
                <!--listado articulos-->
                <div id="articles">
                    <!---->
                    <!--añadir via js-->
                    <div v-for="(pelicula, index) in peliculasMayuscula" :key="index">
                        <Pelicula :pelicula="pelicula" @favorita="haLlegadoLaPelicula"></Pelicula>
                    </div>
                </div>
            </section>
            <Sidebar></Sidebar>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
    import Pelicula from "./Pelicula";
    import Sidebar from "./Sidebar";
    export default {
        name: "Peliculas",
        components: {
            Pelicula,
            Sidebar
        },
        methods:{
            haLlegadoLaPelicula(favorita){
             this.favorita = favorita;
            }

        },
        computed:{
          peliculasMayuscula(){
              var peliculasMod = this.peliculas;
              for (let i = 0; i < this.peliculas.length ; i++) {
                  peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
              }
              return peliculasMod;
          },
            misDatos(){
              return this.nombre+ ' ' + this.apellidos + '</br>' + '<strong>Sitio web:</strong> ' + this.web;
            }
        },
        filters:{
            mayusculas(value){
                return value.toUpperCase();
            },
            concatenaYear(value, message){
                let date = new Date();
                return value + ' ' + date.getFullYear() + ' ' + message;
            }
        },
        data() {
            return {
                nombre: 'José',
                apellidos:'Vargas',
                web:'joxweb',
                favorita: null,
                peliculas: [
                    {
                        title: 'Batman vs Superman',
                        year: 2017,
                        image: 'https://hipertextual.com/files/2016/03/batman-v-superman-8-scaled.jpg'
                    },
                    {
                        title: 'Gran Torino',
                        year: 2015,
                        image: 'https://2.bp.blogspot.com/-DR3U5R4aMY8/UQUgq14L7WI/AAAAAAAAAV0/e4eQkGO66Yw/s1600/descarga.jpg'
                    },
                    {
                        title: 'El Señor de los anillos',
                        year: 2003,
                        image: 'https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/11/19/Recortada/img_psola_20191119-085948_imagenes_lv_terceros_intro-1508529851-kOmC-U471748986885DQI-992x558@LaVanguardia-Web.jpg'
                    }
                ]
            }

        }
    }
</script>

<style scoped>

</style>