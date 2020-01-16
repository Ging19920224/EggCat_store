<template>
  <div>
    <CartNum :cart-num="cartNum" />
    <Alert />
    <div class="container pt-5 pb-5 mb-5 mt-72">
      <router-link
        class="back"
        to="/CustomerProduct/0"
      >
        <i class="fas fa-reply" />
        BACK
      </router-link>
      <div class="product-wrap row">
        <div class="col-lg-5 col-10 img-wrap mr-5 mb-5">
          <div
            class="img-thumbnail img"
            :style="{'backgroundImage': `url(${productData.imageUrl})`}"
          />
          <div class="mask" />
        </div>
        <div class="col-lg-6 col-12 data mt-5">
          <h2 class="mb-3 title text-color">
            {{ productData.title }}
          </h2>
          <span class="badge badge-warning mb-3">
            {{ productData.category }}
          </span>
          <p class="mb-3 description">
            {{ productData.description }}
          </p>
          <h5 class="text-content">
            【產品說明】
          </h5>
          <p>{{ productData.content }}</p>
          <p class="mt-5 price">
            <span class="h2 text-danger mr-3">NT$ {{ productData.price }}</span>
            <del class="h6 text-muted">NT$ {{ productData.origin_price }}</del>
          </p>
          <p class="pt-3">
            <button
              type="button"
              class="btn btn-info mr-2"
              @click="selectQty('del')"
            >
              -
            </button>
            <input
              type="text"
              class="qty"
              v-model="qty"
              disabled
            >
            <button
              type="button"
              class="btn btn-info ml-2"
              @click="selectQty('add')"
            >
              +
            </button>
            <span class="ml-2">{{ productData.unit }}</span>
            <button
              @click="addtoCart(productData.id, qty)"
              type="button"
              class="btn btn-info float-right"
            >
              加入購物車
            </button>
            <span class="total text-color float-right mt-2 mr-3">小計 NT$ {{ nowPrice }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CartNum from '../../components/frontend/CartNum.vue';
import Alert from '../../components/AlertMessage.vue';

export default {
  components: {
    CartNum,
    Alert,
  },
  data() {
    return {
      action: '',
      qty: 1,
      productId: '',
    };
  },
  computed: {
    nowPrice() {
      const vm = this;
      return vm.productData.price * vm.qty;
    },
    ...mapGetters('productsModules', ['productData']),
    ...mapGetters('cartModules', ['cart', 'cartNum', 'cartSuccess']),
  },
  watch: {
    cartSuccess: {
      handler: 'showMessage',
      immediate: true,
    },
  },
  created() {
    this.productId = this.$route.params.id;
    this.getCart();
    this.getProductData();
  },
  methods: {
    ...mapActions('productsModules', ['getAllProducts']),
    ...mapActions('cartModules', ['getCart', 'resetSuccess']),
    addtoCart(id, qty = 1) {
      this.$store.dispatch('cartModules/addtoCart', { id, qty });
    },
    selectQty(action) {
      if (action === 'add') {
        this.qty += 1;
      } else {
        if (this.qty <= 0) return;
        this.qty -= 1;
      }
    },
    getProductData() {
      const id = this.productId;
      this.$store.dispatch('productsModules/getProductData', id);
    },
    showMessage(val) {
      if (val === 'success') {
        this.$bus.$emit('message:push', '成功加入購物車', 'success');
        this.resetSuccess();
      } else if (val === 'failure') {
        this.$bus.$emit('message:push', '加入購物車失敗', 'danger');
        this.resetSuccess();
      }
    },
  },
};
</script>

<style scope>
  .product-wrap{
    margin-top: 3rem;
    min-height: 60vh;
  }
  .img-wrap{
    position: relative;
    height: 350px;
  }
  .img{
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 2;
  }
  .mask{
    position: absolute;
    bottom: -50px;
    right: -45px;
    width: 140%;
    height: 100%;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    background-color: rgb(40, 126, 140);
    z-index: 1;
  }
  .back{
    position: absolute;
    top: 100px;
    left: 30px;
    padding: 5px 5px;
    width: 100px;
    height: 55px;
    color: #fff;
    clip-path: polygon(100% 0, 0 0, 0 100%);
    background-color: rgb(40, 126, 140);
    z-index: 4;
  }
  .back:hover{
    color: #fff;
    text-shadow: 1px 1px 1px black;
    text-decoration: none;
    background-color: rgba(40, 126, 140, 0.7);
  }
  .data{
    min-height: 400px;
  }
  .title{
    position: relative;
  }
  .title::before{
    content: '';
    position: absolute;
    bottom: -8px;
    width: 73px;
    height: 2px;
    border-bottom: 3px solid rgb(119, 117, 117);
  }
  .description{
    color: rgb(85, 84, 84);
    position: relative;
  }
  .description::before{
    content: '';
    position: absolute;
    bottom: -8px;
    width: 100%;
    height: 2px;
    border-bottom: 1px dashed rgb(119, 117, 117);
  }
  .text-content{
    color: rgb(35, 124, 146);
  }
  .price{
    position: relative;
  }
  .price::after{
    content: '';
    position: absolute;
    bottom: -10px;
    left:0;
    width: 100%;
    height: 2px;
    border-bottom: 1px dashed rgb(119, 117, 117);
  }
  .qty{
    width: 60px;
    padding: 5px 5px;
    outline: none;
    border-radius: 5px;
    text-align: center;
  }
  .total{
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    .mask {
      width: 120%;
      right: -100px;
    }
  }
  @media screen and (max-width: 480px) {
    .img-wrap{
      height: 230px;
    }
    .back{
      left: 10px;
    }
    .mask {
      width: 110%;
      right: -40px;
    }
  }
  @media screen and (max-width: 320px) {
    .img-wrap{
      height: 200px;
    }
  }
</style>
