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
  { path: "/vue1/home", component: LastArticles },
  { path: "/vue1/blog", component: Blog },
  { path: "/vue1/crear-articulo", component: CreateArticle },
  { path: "/vue1/articulo/:id", name: "article", component: Article },
  { path: "/vue1/editar/:id", name: "edit", component: EditArticle },
  { path: "/vue1/formulario", component: Formulario },
  { path: "/vue1/pagina/:id?", name: "pagina", component: Pagina },
  { path: "/vue1/peliculas", component: Peliculas },
  { path: "/vue1/ultimos-articulos", component: LastArticles },
  { path: "/vue1/buscador/:searchString", component: Search },
  { path: "/vue1/redirect/:searchString", component: Redirect },
  { path: "/vue1/mi-componente", component: MiComponente },
  { path: "/vue1/hola-mundo", component: HelloWorld },
  { path: "/vue1", component: LastArticles },
  { path: "*", component: ErrorComponent },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
