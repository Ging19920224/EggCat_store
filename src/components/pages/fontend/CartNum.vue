<template>
  <div>
    <router-link to="/CartItem" class="cart mr-5 text-center">
      <span class="cart-num">
        {{ cartNum }}
      </span>
      <p class="mb-0"><i class="fas fa-shopping-cart"></i></p>
      <p class="text-centeer cart-title">購物車</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['cartNum'],
  data(){
    return{

    }
  },
}
</script>

<style scope>
  .cart{
    position: fixed;
    width: 70px;
    height: 70px;
    background-color: #fff;
    border-radius: 50%;
    bottom: 50px;
    right: 5px;
    padding: 5px 10px;
    color: rgb(40, 126, 140);
    border: 1px solid rgb(40, 126, 140);
    font-size: 25px;
    z-index: 9999;
  }
  .cart:hover{
    color: #fff;
    background-color: rgb(40, 126, 140);
    border: 1px solid #fff;
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
      right: -8px;
    }
  }
  @media screen and (max-width: 480px) {
    .cart{
      left: 10px;
      bottom: 90px;
      width: 50px;
      height: 50px;
    }
    .cart-title{
      display: none;
    }
  }
  @media screen and (max-width: 320px) {

  }
</style>