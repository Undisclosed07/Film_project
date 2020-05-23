import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import PosterFilm from './components/PosterFilm.vue';
import AjoutFilm from './components/AjoutFilm.vue';
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/:id', name: 'Poster', component: PosterFilm , props: true },
  { path: '/add', name: 'add', component: AjoutFilm }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
