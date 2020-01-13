import Vue from 'vue';
import Vuex from 'vuex';
import productsModules from './products';
import cartModules from './cart';
import orderModules from './order';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    success: false,
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
  },
  getters: {
  },
  modules: {
    productsModules,
    cartModules,
    orderModules,
  },
});
