// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueI18n from 'vue-i18n';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import date from './filters/date';
import dateReplace from './filters/dateReplace';

Vue.use(VueAxios, axios);
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zhTW'
})
Vue.use(VeeValidate, {
  events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
})
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('date', date);
Vue.filter('dateReplace', dateReplace);

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) =>{
  if(to.meta.requiresAuth){
    console.log('需要驗證');
    const api = `${process.env.API_PATH}/api/user/check`;
    axios.post(api).then((response) => {
      console.log(response.data);
      if(response.data.success){
        next();
      }else{
        next({
          path: '/login'
        });
      }
    })
  }else{
    next();
  }
})
