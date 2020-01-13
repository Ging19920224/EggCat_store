import axios from 'axios';

export default {
  namespaced: true,
  strict: true,
  state: {
    createOrderRes: false,
    order: {},
    orderID: '',
    payRes: false,
  },
  mutations: {
    CREATEORDERRES(state, payload) {
      state.createOrderRes = payload;
    },
    ORDER(state, payload) {
      state.order = payload;
    },
    ORDERID(state, payload) {
      state.orderID = payload;
    },
    PAYRES(state, payload) {
      state.payRes = payload;
    },
  },
  actions: {
    createOrder(context, order) {
      const url = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/order`;
      axios.post(url, { data: order }).then((response) => {
        context.commit('LOADING', true, { root: true });
        if (response.data.success) {
          context.commit('ORDERID', response.data.orderId);
          context.commit('CREATEORDERRES', 'success');
          context.commit('LOADING', false, { root: true });
        } else {
          context.commit('CREATEORDERRES', 'failure');
          context.commit('LOADING', false, { root: true });
        }
      });
    },
    getOrder(context, orderID) {
      const url = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/order/${orderID}`;
      context.commit('LOADING', true, { root: true });
      axios.get(url).then((response) => {
        context.commit('ORDER', response.data.order);
        context.commit('LOADING', false, { root: true });
      });
    },
    payOrder(context, orderId) {
      const url = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/pay/${orderId}`;
      context.commit('LOADING', true, { root: true });
      axios.post(url).then((response) => {
        if (response.data.success) {
          context.commit('PAYRES', 'success');
          context.dispatch('getOrder', orderId);
        } else {
          context.commit('PAYRES', 'failure');
        }
        context.commit('LOADING', false, { root: true });
      });
    },
    resetRes(context) {
      context.commit('CREATEORDERRES', false);
      context.commit('PAYRES', false);
    },
  },
  getters: {
    createOrderRes(state) {
      return state.createOrderRes;
    },
    order(state) {
      return state.order;
    },
    orderID(state) {
      return state.orderID;
    },
    payRes(state) {
      return state.payRes;
    },
  },
};
