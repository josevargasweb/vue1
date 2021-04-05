<template>
    <header id="header">
        <div class="center">

            <!--menu-->
            <nav id="menu">
                <ul>
                    <li>
                        <router-link to="/home"  active-class="active">Inicio</router-link>
                    </li>
                    <li>
                        <router-link to="/blog" active-class="active">Blog</router-link>
                    </li>
                    <li>
                        <router-link to="/formulario" active-class="active">Formulario</router-link>
                    </li>
                    <li>
                        <router-link to="/peliculas" active-class="active">Peliculas</router-link>
                    </li>

                </ul>
            </nav>
            <div class="clearfix"></div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderComponent"
    }
</script>

<style scoped>

</style>