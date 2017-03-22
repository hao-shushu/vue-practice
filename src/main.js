import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import axios from 'axios';

Vue.use(VueRouter);
Vue.prototype.$http = axios;
const router = new VueRouter(require('./router'))

new Vue({
	el: '#app',
	router: router,
	render: h => h(App)
})