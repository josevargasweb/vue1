import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Vuelidate from 'vuelidate';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/es';
import Global from "./Global";
import LastArticles from "./components/LastArticles";
import MiComponente from "./components/MiComponente";
import HelloWorld from "./components/HelloWorld";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
import Pagina from "./components/Pagina";
import ErrorComponent from "./components/ErrorComponent";
import Peliculas from "./components/Peliculas";
import Search from "./components/Search";
import Redirect from "./components/Redirect";
import Article from "./components/Article";
import CreateArticle from "./components/CreateArticle";
import EditArticle from "./components/EditArticle";



Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);


Vue.use(VueMoment,{
  moment
});
Vue.prototype.Global = Global.url;

const routes = [
  {path: '/home', component: LastArticles},
  {path: '/blog', component: Blog},
  {path: '/crear-articulo', component: CreateArticle},
  {path: '/articulo/:id', name: 'article', component: Article},
  {path: '/editar/:id', name: 'edit', component: EditArticle},
  {path: '/formulario', component: Formulario},
    {path: '/pagina/:id?', name:'pagina', component: Pagina},
    {path: '/peliculas', component: Peliculas},
    {path: '/ultimos-articulos', component: LastArticles},
    {path: '/buscador/:searchString', component: Search},
    {path: '/redirect/:searchString', component: Redirect},
    {path: '/mi-componente', component: MiComponente},
  {path: '/hola-mundo', component: HelloWorld},
  {path: '/', component: LastArticles},
  {path: '*', component: ErrorComponent},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
