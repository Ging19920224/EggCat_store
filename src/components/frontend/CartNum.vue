<template>
  <div>
    <Alert />
    <a
      @click="goPay"
      class="cart mr-5 text-center"
    >
      <span class="cart-num">
        {{ cartNum }}
      </span>
      <p class="mb-0"><i class="fas fa-shopping-cart" /></p>
      <p class="text-centeer cart-title">購物車</p>
    </a>
  </div>
</template>

<script>
import Alert from '../AlertMessage.vue';

export default {
  props: {
    cartNum: {
      type: Number,
      default: Number,
    },
  },
  components: {
    Alert,
  },
  data() {
    return {};
  },
  methods: {
    goPay() {
      if (this.cartNum !== 0) {
        this.$router.push('/CartItem');
      } else {
        this.$bus.$emit('message:push', '購物車內無商品', 'danger');
      }
    },
  },
};
</script>

<style scope>
  .cart{
    position: fixed;
    width: 70px;
    height: 70px;
    background-color: rgb(40, 126, 140);
    border-radius: 50%;
    bottom: 50px;
    right: 5px;
    padding: 5px 10px;
    color: #fff!important;
    border: 1px solid #fff;
    font-size: 25px;
    z-index: 9999;
    cursor: pointer;
  }
  .cart:hover{
    color: rgb(40, 126, 140)!important;
    background-color: #fff;
    border: 1px solid rgb(40, 126, 140);
    text-decoration: none;
  }
  .cart-num{
    position: absolute;
    top: 1px;
    right: 1px;
    width: 20px;
    height: 20px;
    font-size: 8px;
    background-color: rgb(199, 54, 54);
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
  }
  .cart-title{
    font-size: 8px;
  }
  @media screen and (max-width: 768px) {
    .cart{
      width: 65px;
      height: 65px;
    }
  }
  @media screen and (max-width: 480px) {
    .cart{
      width: 50px;
      height: 50px;
    }
    .cart-title{
      display: none;
    }
    .cart-num {
      top: -5px;
      right: -5px;
      font-size: 10px;
    }
  }
  @media screen and (max-width: 320px) {
    .cart{
      right: 60px;
    }
  }
</style>
