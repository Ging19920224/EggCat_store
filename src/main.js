import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueI18n from 'vue-i18n';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import date from './filters/date';
import dateReplace from './filters/dateReplace';
import store from './store';

Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('date', date);
Vue.filter('dateReplace', dateReplace);

const i18n = new VueI18n({
  locale: 'zhTW',
});
Vue.use(VeeValidate, {
  events: 'input|blur',
  i18n,
  dictionary: {
    zhTW,
  },
});
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API_PATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
