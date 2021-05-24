import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import config from '../config.js';
import VeeValidate from 'vee-validate';
import moment from 'moment';
// import VueAlertify from 'vue-alertify';
import axios from './plugins/axios.js';
import alertSweet from './components/AlertSweet.js';

import './assets/theme/css/custom_styles.css';

export const Bus = new Vue();

Vue.prototype.$axios     = axios;
Vue.prototype.$lang      = config.lang;
Vue.prototype.$moment    = moment;
Vue.prototype.$alertSweet    = alertSweet;
Vue.config.productionTip = false;
Vue.use(VeeValidate);
// Vue.use(VueAlertify, require('./plugins/configAlertify'));

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
