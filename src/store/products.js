import axios from 'axios';

export default {
  namespaced: true,
  strict: true,
  state: {
    allProducts: [],
    productData: '',
    productSuccess: false,
  },
  mutations: {
    ALLPRODUCTS(state, payload) {
      state.allProducts = payload;
    },
    PRODUCTDATA(state, payload) {
      state.productData = payload;
    },
    PRODUCTSUCCESS(state, payload) {
      state.productSuccess = payload;
    },
  },
  actions: {
    getAllProducts(context) {
      const url = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/products/all`;
      context.commit('LOADING', true, { root: true });
      axios.get(url).then((response) => {
        context.commit('ALLPRODUCTS', response.data.products);
        context.commit('LOADING', false, { root: true });
      });
    },
    getProductData(context, id) {
      const url = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/product/${id}`;
      context.commit('LOADING', true, { root: true });
      axios.get(url).then((response) => {
        if (response.data.success) {
          context.commit('PRODUCTDATA', response.data.product);
          context.commit('LOADING', false, { root: true });
        } else {
          context.commit('PRODUCTSUCCESS', 'failure');
          context.commit('LOADING', false, { root: true });
        }
      });
    },
    resetResponse(context) {
      context.commit('PRODUCTSUCCESS', false);
    },
  },
  getters: {
    allProducts(state) {
      return state.allProducts;
    },
    productData(state) {
      return state.productData;
    },
    productSuccess(state) {
      return state.productSuccess;
    },
  },
};
