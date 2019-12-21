<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <ProductSideBar :category="category" :allProducts="allProducts" @emitCategory="changeProduct">
    </ProductSideBar>
    <Alert></Alert>
    <CartNum :cartNum="cartNum"></CartNum>
      <h1 class="text-center text-color pt-3 mb-3">
      <img class="title-img" src="../../../assets/images/title-L.png">
      商品分類
      <img class="title-img" src="../../../assets/images/title-R.png">
      </h1>
      <div class="product">
        <div class="row">
          <div class="col-xl-3 col-md-5 mb-4 mr-2 ml-5" 
          v-for="item in nowProduct" :key="item.id">
            <div class="card border-0 br-10 productCard-h">
              <div class="product-img"            
              :style="{'backgroundImage': `url(${item.imageUrl})`}">
                <a href="#" @click.prevent="watchProduct(item.id)" class="product-more">
                  <span class="more-text text-center">
                    <i class="fas fa-eye"></i><br/>
                    產品詳情
                  </span>
                </a>
              </div>
              <div class="card-body position-relative">
                <span class="badge badge-warning mb-2">
                  {{ item.category }}
                </span>
                <h5 class="card-title">
                  <a href="#" @click.prevent="watchProduct(item.id)" class="text-color">{{ item.title }}</a>
                </h5>
                <p class="card-text">{{ item.description }}</p>
                <span class="h5 text-danger ds-inline-block product-price" v-if="!item.price">網路價 {{ item.origin_price | currency }}</span>
                <del class="h6 product-orginprice">原價 {{ item.origin_price |currency }}</del>
                <span class="h5 text-danger product-price" v-if="item.price">網路價 {{ item.price | currency }}</span>
              </div>
              <div class="card-footer d-flex">
                <a href="#" @click.prevent="watchProduct(item.id)" class="col-6 text-center more-btn">
                  產品詳情
                </a>
                <div class="col-6 text-center cart-btn" @click="addtoCart(item.id)">
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                  加入購物車
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination :page="page" @emitPage="changePage" v-show="category === '0'"></Pagination>
    </div>
</template>

<script>
import ProductSideBar from './ProductSideBar';
import Pagination from './Pagination';
import CartNum from './CartNum';
import Alert from '../AlertMessage';
import $ from 'jquery';

export default {
  data(){
    return{
      allProducts: [],
      product: {},
      cart:{},
      cartNum: 0,
      isLoading: false,
      status: {
        loadingItem: '',
      },
      page: {
        nowPage: 1,
        total: 1
      },
      category: ''
    }
  },
  components:{
    ProductSideBar,
    Pagination,
    CartNum,
    Alert,
  },
  methods: {
    getAllProducts(){
      const vm = this;
      const url = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products/all`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.allProducts = response.data.products;
        // console.log(response.data);
        vm.isLoading = false;
      })
    },
    getProduct(id){
      const vm = this;
      const url = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then((response) => {
        vm.product = response.data.product;
        // console.log(response.data.product);
        $('#productModal').modal('show');
        vm.status.loadingItem = '';
      })
    },
    getCart(){
      const vm = this;
      const url = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.cartNum = response.data.data.carts.length;
        vm.cart = response.data.data.carts;
        vm.isLoading = false;
      })
    },
    addtoCart(id, qty = 1){
      const vm = this;
      const url = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(url, { data: cart }).then((response) => {
        // console.log(response.data);
        if(response.data.success){
          this.$bus.$emit('message:push','成功加入購物車', 'success');
        }else{
          this.$bus.$emit('message:push','加入購物車失敗', 'danger');
        }
        vm.status.loadingItem = '';
        vm.getCart();
      })
    },
    changeProduct(category){
      this.category = category;
    },
    watchProduct(id){
      const vm = this;
      vm.$router.push(`/productData/${id}`);
    },
    changePage(page){
      const vm = this;
      vm.page = page;
    }
  },
  computed: {
    nowCategory(){
      let num = this.category;
      if(num === 0){
        return 'all'
      }else if(num === '1'){
        return '貓窩/跳台'
      }else if(num === '2'){
        return '貓沙/沙盆'
      }else if(num === '3'){
        return '食具/水具'
      }else if(num === '4'){
        return '抓板/玩具'
      }else if(num === '5'){
        return '飼料/罐頭'
      }else if(num === '6'){
        return '零食/營養品'
      }
    },
    nowProduct(){
      const vm = this;
      const page = vm.page.nowPage;
      const totalPage = Math.ceil(vm.allProducts.length/9);
      vm.page.total = totalPage;
      const indexStr = page * 9 - 9;
      const indexEnd = page * 9 ; 
      const nowAllProduct = vm.allProducts.slice(indexStr, indexEnd);
      if(!vm.nowCategory){
        return nowAllProduct;
      }else{
        const result = vm.allProducts.reduce((prev, current) => {
          if(current.category === vm.nowCategory){
            prev.push(current);
          }
          return prev;
        },[]);
        return result;
      }
    }
  },
  created(){
    this.getAllProducts();
    this.getCart();
    this.category = this.$route.params.product;
  }
}
</script>

<style scope>
  .text-color{
    color: rgb(40, 126, 140)!important;
  }
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
  }
  .product .row{
    margin-left: 0;
    margin-right: 0;
  }
  .product-img{
    height: 180px; 
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-size: cover; 
    background-position: center;
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
  .br-10{
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgb(153, 153, 153);
  }
  .br-10:hover{
    box-shadow: 1px 1px 20px rgb(153, 153, 153);
  }
  @media screen and (max-width: 1200px) {
    .product{
      width: 75%;
      margin-left: 22%;
    }
  }
  @media screen and (max-width: 768px) {
    .product {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>