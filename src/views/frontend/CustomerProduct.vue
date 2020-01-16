<template>
  <div>
    <ProductSideBar
      :category="category"
      :all-products="allProducts"
      @emitCategory="changeProduct"
    />
    <Alert />
    <CartNum :cart-num="cartNum" />
    <h1 class="text-center text-color pt-3 mb-0 mt-72">
      <img
        class="title-img"
        src="../../assets/images/title-L.png"
      >
      商品分類
      <img
        class="title-img"
        src="../../assets/images/title-R.png"
      >
    </h1>
    <div class="product">
      <div class="row justify-content-start">
        <div
          class="col-xl-3 col-md-5 product-item"
          v-for="item in nowProduct"
          :key="item.id"
        >
          <div class="card border-0 br-10 productCard-h">
            <div
              class="product-img"
              :style="{'backgroundImage': `url(${item.imageUrl})`}"
            >
              <a
                href="#"
                @click.prevent="watchProduct(item.id)"
                class="product-more"
              >
                <span class="more-text text-center">
                  <i class="fas fa-eye" /><br>
                  產品詳情
                </span>
              </a>
            </div>
            <div class="card-body position-relative">
              <span class="badge badge-warning mb-2">
                {{ item.category }}
              </span>
              <h5 class="card-title">
                <a
                  href="#"
                  @click.prevent="watchProduct(item.id)"
                  class="text-color"
                >{{ item.title }}</a>
              </h5>
              <p class="card-text">
                {{ item.description }}
              </p>
              <span
                class="h5 text-danger ds-inline-block product-price"
                v-if="!item.price"
              >網路價 {{ item.origin_price | currency }}</span>
              <del class="h6 product-orginprice">原價 {{ item.origin_price |currency }}</del>
              <span
                class="h5 text-danger product-price"
                v-if="item.price"
              >網路價 {{ item.price | currency }}</span>
            </div>
            <div class="card-footer d-flex">
              <a
                href="#"
                @click.prevent="watchProduct(item.id)"
                class="col-6 text-center more-btn"
              >
                產品詳情
              </a>
              <div
                class="col-6 text-center cart-btn"
                @click="addtoCart(item.id)"
              >
                <i
                  class="fas fa-spinner fa-spin"
                  v-if="loadingItem === item.id"
                />
                加入購物車
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination
      :page="page"
      @emitPage="changePage"
      v-show="category === '0'"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductSideBar from '../../components/frontend/ProductSideBar.vue';
import Pagination from '../../components/frontend/Pagination.vue';
import CartNum from '../../components/frontend/CartNum.vue';
import Alert from '../../components/AlertMessage.vue';

export default {
  components: {
    ProductSideBar,
    Pagination,
    CartNum,
    Alert,
  },
  data() {
    return {
      page: {
        nowPage: 1,
        total: 1,
      },
      category: '',
    };
  },
  computed: {
    nowCategory() {
      const num = this.category;
      let result = false;
      switch (num) {
        case '0':
          result = false;
          break;
        case '1':
          result = '貓窩/跳台';
          break;
        case '2':
          result = '貓沙/沙盆';
          break;
        case '3':
          result = '食具/水具';
          break;
        case '4':
          result = '抓板/玩具';
          break;
        case '5':
          result = '飼料/罐頭';
          break;
        case '6':
          result = '零食/營養品';
          break;
        default:
          break;
      }
      return result;
    },
    nowProduct() {
      const vm = this;
      const page = vm.page.nowPage;
      const allProduct = vm.allProducts;
      const totalPage = Math.ceil(allProduct.length / 12);
      vm.page.total = totalPage;
      const indexStr = page * 12 - 12;
      const indexEnd = page * 12;
      const nowAllProduct = allProduct.slice(indexStr, indexEnd);
      let result = [];
      if (!vm.nowCategory) {
        result = nowAllProduct;
      } else {
        const response = allProduct.reduce((prev, current) => {
          if (current.category === vm.nowCategory) {
            prev.push(current);
          }
          return prev;
        }, []);
        result = response;
      }
      return result;
    },
    ...mapGetters('productsModules', ['allProducts', 'productSuccess']),
    ...mapGetters('cartModules', ['cart', 'cartNum', 'loadingItem', 'cartSuccess']),
  },
  watch: {
    cartSuccess: {
      handler: 'showMessage',
      immediate: true,
    },
    productSuccess: {
      handler: 'productMessage',
      immediate: true,
    },
  },
  created() {
    this.getAllProducts();
    this.getCart();
    this.category = this.$route.params.product;
  },
  methods: {
    ...mapActions('productsModules', ['getAllProducts', 'resetResponse']),
    ...mapActions('cartModules', ['getCart', 'resetSuccess']),
    addtoCart(id, qty = 1) {
      this.$store.dispatch('cartModules/addtoCart', { id, qty });
    },
    changeProduct(category) {
      const vm = this;
      vm.category = category;
    },
    watchProduct(id) {
      const vm = this;
      vm.$router.push(`/productData/${id}`);
    },
    changePage(page) {
      const vm = this;
      vm.page = page;
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
    productMessage(val) {
      if (val === 'failure') {
        this.$bus.$emit('message:push', '產品未上架', 'danger');
        this.resetResponse();
      }
    },
  },
};
</script>

<style scope>
  .title-img{
    width: 50px;
    height: 50px;
  }
  .product{
    width: auto;
    margin-left: 250px;
    min-height: 70vh;
    padding-top: 20px;
    border-radius: 20px;
    margin-bottom: 50px;
  }
  .product .row{
    margin-left: 0;
    margin-right: 0;
  }
  .product-item{
    margin-top: 25px;
  }
  .product-img{
    height: 180px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }
  .productCard-h{
    height: 450px;
  }
  .product-price{
    position: absolute;
    bottom: 3px;
    right: 10px;
  }
  .product-orginprice{
    position: absolute;
    bottom: 3px;
    left: 15px;
  }
  .product-more{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    opacity: 0;
  }
  .card-footer{
    padding: 0 0;
  }
  .more-text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: #fff;
  }
  .product-more:hover{
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    opacity: 1;
  }
  .more-btn{
    border-right: 1px solid rgb(180, 171, 171);
    border-bottom-left-radius: 10px;
    padding: 10px 0;
    font-size: 16px;
    color: rgb(117, 115, 115);
  }
  .more-btn:hover{
    text-decoration: none;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .cart-btn{
    border-bottom-right-radius: 10px;
    padding: 10px 0;
    font-size: 16px;
    color: rgb(40, 126, 140);
    cursor: pointer;
  }
  .cart-btn:hover{
    color: #fff;
    background-color: rgb(40, 126, 140);
  }
  @media screen and (max-width: 1200px) {
    .product{
      width: 75%;
      margin-left: 22%;
    }
  }
  @media screen and (max-width: 768px) {
    .product {
      width: 95%;
      margin-left: auto;
      margin-right: auto;
    }
    .product-item {
      margin: 15px 30px;
    }
    .bgc-no {
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
  @media screen and (max-width: 480px) {
    .product {
      width: 100%;
      margin-right: 0;
      margin-left: 0;
    }
    .product-item {
      margin: 15px auto;
    }
    .cart {
      right: -30px;
    }
  }
</style>
