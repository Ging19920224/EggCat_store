import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/fontend/Index'
import Carousel from '@/components/pages/fontend/Carousel'
import CustomerProduct from '@/components/pages/fontend/CustomerProduct'
import ProductData from '@/components/pages/fontend/ProductData'
import CartItem from '@/components/pages/fontend/CartItem'
import CartPay from '@/components/pages/fontend/CartPay'
import Knowledge from '@/components/pages/fontend/Knowledge'
import QuestionCoupons from '@/components/pages/fontend/QuestionCoupons'

import Login from '@/components/pages/backend/login'
import Dashboard from '@/components/pages/backend/Dashboard'
import Products from '@/components/pages/backend/Products'
import OrderList from '@/components/pages/backend/OrderList'
import Coupons from '@/components/pages/backend/Coupons'
import CustomerOrder from '@/components/pages/backend/CustomerOrders'
import CustomerCheckout from '@/components/pages/backend/CustomerCheckout'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path: '',
          name: 'Carousel',
          component: Carousel,
        },
        {
          path: 'CustomerProduct/:product',
          name: 'CustomerProduct',
          component: CustomerProduct,
        },
        {
          path: 'productData/:id',
          name: 'ProductData',
          component: ProductData,
        },
        {
          path: 'CartItem',
          name: 'CartItem',
          component: CartItem,
        },
        {
          path: 'CartPay/:orderId',
          name: 'CartPay',
          component: CartPay,
        },
        {
          path: 'Knowledge',
          name: 'Knowledge',
          component: Knowledge,
        },
        {
          path: 'QuestionCoupons',
          name: 'QuestionCoupons',
          component: QuestionCoupons,
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children:[
        {
          path: 'orderList',
          name: 'OrderList',
          component: OrderList,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'CustomerOrder',
          name: 'CustomerOrder',
          component: CustomerOrder,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'Customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout,
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
  ]
})
