import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'index',
    component: () => import('./../views/frontend/Index.vue'),
    children: [
      {
        path: '',
        name: 'Carousel',
        component: () => import('./../views/frontend/Carousel.vue'),
      },
      {
        path: 'CustomerProduct/:product',
        name: 'CustomerProduct',
        component: () => import('./../views/frontend/CustomerProduct.vue'),
      },
      {
        path: 'productData/:id',
        name: 'ProductData',
        component: () => import('./../views/frontend/ProductData.vue'),
      },
      {
        path: 'CartItem',
        name: 'CartItem',
        component: () => import('./../views/frontend/CartItem.vue'),
      },
      {
        path: 'CartPay/:orderId',
        name: 'CartPay',
        component: () => import('./../views/frontend/CartPay.vue'),
      },
      {
        path: 'Knowledge',
        name: 'Knowledge',
        component: () => import('./../views/frontend/Knowledge.vue'),
      },
      {
        path: 'QuestionCoupons',
        name: 'QuestionCoupons',
        component: () => import('./../views/frontend/QuestionCoupons.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./../views/backend/login.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('./../views/backend/Dashboard.vue'),
    children: [
      {
        path: 'orderList',
        name: 'OrderList',
        component: () => import('./../views/backend/OrderList.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('./../views/backend/Products.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('./../views/backend/Coupons.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'CustomerOrder',
        name: 'CustomerOrder',
        component: () => import('./../views/backend/CustomerOrders.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'Customer_checkout/:orderId',
        name: 'CustomerCheckout',
        component: () => import('./../views/backend/CustomerCheckout.vue'),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
