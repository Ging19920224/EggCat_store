<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light nav-bgc">
      <router-link class="bgc-no" to="/">
        <img class="w-65" src="../../../assets/images/logo.png" alt="蛋蛋小貓商標">
      </router-link>
      <button class="navbar-toggler btn-color" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav m-auto">
          <router-link class="nav-item nav-link fz-20 mr-2 text-center" to="/CustomerProduct/0">
            <i class="fab fa-product-hunt"></i>
            商品分類
          </router-link>
          <router-link class="nav-item nav-link fz-20 mr-2 text-center" to="/QuestionCoupons">
            <i class="fas fa-ticket-alt"></i>
            超值優惠卷
          </router-link>
          <router-link class="nav-item nav-link fz-20 mr-2 text-center" to="/Knowledge">
            <i class="far fa-lightbulb"></i>
            貓奴小知識
          </router-link>
          <a href="#" @click.prevent="openSearch" class="nav-item nav-link fz-20 mr-2 text-center">
            <i class="fas fa-search"></i>
            訂單查詢
          </a>
        </div>
      </div>
      <router-link class="bgc-no" to="/" id="logo">
        <img class="w-65" src="../../../assets/images/logo.png" alt="蛋蛋小貓商標">
      </router-link>
    </nav>
    <div class="modal fade" id="search" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header search-bg text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <img src="../../../assets/images/cathand.png" class="cathand">
              <span>訂單查詢</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="請輸入訂單編號" v-model="orderid">
              <div class="search btn btn-info" @click="searchOrder">
                <i class="fas fa-search"></i> 查詢
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Alert></Alert>
  </div>
</template>

<script>
import $ from 'jquery';
import Alert from '../AlertMessage';

export default {
  data(){
    return{
      orderid: ''
    }
  },
  methods:{
    openSearch(){
      $('#search').modal('show');
    },
    searchOrder(){
      const vm = this;
      const id = vm.orderid;
      const url = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/order/${id}`;
      vm.$http.get(url).then((response) => {
        // console.log(response.data.order !== null);
        if(response.data.order !== null){
          vm.$router.push(`CartPay/${id}`);
          $('#search').modal('hide');
          vm.orderid = '';
        }else{
          vm.$bus.$emit('message:push','無此訂單', 'danger');
          $('#search').modal('hide');
          vm.orderid = '';
        }
      })
    }
  },
  components:{
    Alert
  }
}
</script>

<style scope>
  .bgc-no{
    background-color: transparent;
    box-shadow: 0 0 0 ;
  }
  .w-65{
    width: 65px;
    height: 65px;
  }
  .nav-bgc{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 3px 145px!important;
    border-bottom: 1px solid rgb(40, 126, 140);
    background-color: rgb(250, 249, 249);
    z-index: 9;
  }
  .fz-20{
    font-size: 20px;
  }
  .btn-color{
    padding: 5px 10px;
    border-color: rgb(40, 126, 140)!important;
    color: rgb(40, 126, 140)!important;
  }
  .nav-item{
    color: rgb(40, 126, 140)!important;
  }
  .nav-item:hover{
    border-bottom: 1px solid rgb(40, 126, 140);
  }
  .search{
    cursor: pointer;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .search-bg{
    background-color: rgb(40, 126, 140);
  }
  .cathand{
    padding: 5px 5px;
    width: 35px;
    height: 35px;
    background-color: rgb(40, 126, 140);
    border-radius: 50%;
  }
  @media (max-width: 992px) { 
    #logo{
      display: none;
    }
  }
  @media (max-width: 480px) { 
    .fz-20 {
      font-size: 17px;
    }
    .nav-bgc {
      padding: 3px 25px!important;
    }
  }
  @media (max-width: 375px) { 
    .nav-bgc {
      width: 375px;
    }
  }
  @media (max-width: 360px) { 
    .nav-bgc {
      width: 360px;
    }
  }
  @media (max-width: 320px) { 
    .nav-bgc {
      width: 320px;
    }
  }
</style>