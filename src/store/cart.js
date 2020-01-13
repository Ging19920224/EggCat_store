import axios from 'axios';

export default {
  namespaced: true,
  strict: true,
  state: {
    cart: {},
    cartNum: 0,
    total: {},
    loadingItem: '',
    cartSuccess: false,
    couponSuccess: false,
  },
  mutations: {
    CART(state, payload) {
      state.cart = payload;
    },
    CARTNUM(state, payload) {
      state.cartNum = payload;
    },
    LOADINGITEM(state, payload) {
      state.loadingItem = payload;
    },
    TOTAL(state, payload) {
      state.total = payload;
    },
    CARTSUCCESS(state, payload) {
      state.cartSuccess = payload;
    },
    COUPONSUCCESS(state, payload) {
      state.couponSuccess = payload;
    },
  },
  actions: {
    getCart(context) {
      const url = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      context.commit('LOADING', true, { root: true });
      axios.get(url).then((response) => {
        context.commit('CART', response.data.data.carts);
        context.commit('CARTNUM', response.data.data.carts.length);
        context.commit('LOADING', false, { root: true });
        const obj = {
          total: response.data.data.total,
          final_total: response.data.data.final_total,
        };
        context.commit('TOTAL', obj);
      });
    },
    removeCartItem(context, id) {
      const url = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart/${id}`;
      context.commit('LOADING', true, { root: true });
      axios.delete(url).then(() => {
        context.dispatch('getCart');
        context.commit('LOADING', false, { root: true });
      });
    },
    addtoCart(context, { id, qty }) {
      const url = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      context.commit('LOADINGITEM', id);
      const cart = {
        product_id: id,
        qty,
      };
      axios.post(url, { data: cart }).then((response) => {
        if (response.data.success) {
          context.commit('CARTSUCCESS', 'success');
        } else {
          context.commit('CARTSUCCESS', 'failure');
        }
        context.commit('LOADINGITEM', '');
        context.dispatch('getCart');
      });
    },
    resetSuccess(context) {
      context.commit('CARTSUCCESS', false);
      context.commit('COUPONSUCCESS', false);
    },
    useCouponCode(context, code) {
      const url = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/coupon`;
      const coupon = {
        code,
      };
      context.commit('LOADING', true, { root: true });
      axios.post(url, { data: coupon }).then((response) => {
        if (response.data.success) {
          context.commit('COUPONSUCCESS', 'success');
        } else {
          context.commit('COUPONSUCCESS', 'failure');
        }
        context.dispatch('getCart');
        context.commit('LOADING', false, { root: true });
      });
    },
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    cartNum(state) {
      return state.cartNum;
    },
    loadingItem(state) {
      return state.loadingItem;
    },
    total(state) {
      return state.total;
    },
    cartSuccess(state) {
      return state.cartSuccess;
    },
    couponSuccess(state) {
      return state.couponSuccess;
    },
  },
};
