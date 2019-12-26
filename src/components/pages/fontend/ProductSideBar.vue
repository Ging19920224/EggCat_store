<template>
  <div>
    <button class="side-btn" @click="openSide">
      <i class="fas fa-list-ul"></i>
    </button>
    <nav class="side text-center pt-5">
      <ul class="sideBar">
        <li class="sideBar-item text-center position-relative" 
        @click="changeProduct('0')"
        :class="{'side-active':category === '0'}">
          全部商品 ({{ allNum }})
          <img src="../../../assets/images/cathand.png"
          class="side-img" v-if="category === '0'">
        </li>
        <li class="sideBar-item text-center position-relative" 
        @click="changeProduct('1')"
        :class="{'side-active':category === '1'}">
          貓窩/跳台 ({{ categoryNum[0] }})
          <img src="../../../assets/images/cathand.png"
          class="side-img" v-if="category === '1'">
        </li>
        <li class="sideBar-item text-center position-relative"
        @click="changeProduct('2')"
        :class="{'side-active':category === '2'}">
          貓沙/沙盆 ({{ categoryNum[1] }})
          <img src="../../../assets/images/cathand.png"
          class="side-img" v-if="category === '2'">
        </li>
        <li class="sideBar-item text-center position-relative"
        @click="changeProduct('3')"
        :class="{'side-active':category === '3'}">
          食具/水具 ({{ categoryNum[2] }})
          <img src="../../../assets/images/cathand.png"
          class="side-img" v-if="category === '3'">
        </li>
        <li class="sideBar-item text-center position-relative"
        @click="changeProduct('4')"
        :class="{'side-active':category === '4'}">
          抓板/玩具 ({{ categoryNum[3] }})
          <img src="../../../assets/images/cathand.png"
          class="side-img" v-if="category === '4'">
        </li>
        <li class="sideBar-item text-center position-relative"
        @click="changeProduct('5')"
        :class="{'side-active':category === '5'}">
          飼料/罐頭 ({{ categoryNum[4] }})
          <img src="../../../assets/images/cathand.png"
          class="side-img" v-if="category === '5'">
        </li>
        <li class="sideBar-item text-center position-relative"
        @click="changeProduct('6')"
        :class="{'side-active':category === '6'}">
          零食/營養品 ({{ categoryNum[5] }})
          <img src="../../../assets/images/cathand.png"
          class="side-img" v-if="category === '6'">
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  props: {
    'category': {
      type: String,
    },
    'allProducts': {
      type: Array,
    }
    ,
  },
  data(){
    return{
      isOpen: false,
      allCategory:[
        '貓窩/跳台',
        '貓沙/沙盆',
        '食具/水具',
        '抓板/玩具',
        '飼料/罐頭',
        '零食/營養品'
      ]
    }
  },
  methods:{
    openSide(){
      const vm = this;
      vm.isOpen = !vm.isOpen;
      if(vm.isOpen){
        $('.side').css('width','250px').css('border-color','rgb(40, 126, 140)');
      }else{
        $('.side').css('width','0px').css('border-color','#fff');;
      }
    },
    changeProduct(category){
      const vm = this;
      vm.$emit('emitCategory', category);
    },
  },
  computed:{
    allNum(){
      const vm = this;
      return vm.allProducts.length;
    },
    categoryNum(){
      const vm = this;
      const arr = [];
      vm.allCategory.forEach(item => {
        const result = vm.allProducts.reduce((prev, current) => {
          if(current.category === item){
            prev.push(current);
          }
          return prev;
        },[]);
        const length = result.length;
        arr.push(length);
        });
        return arr;
    },
  },
}
</script>

<style scope>
  .side-btn{
    position: fixed;
    padding: 0px 10px;
    top: 20px;
    left: 30px;
    font-size: 20px;
    color: rgb(40, 126, 140);
    border: 1px solid rgb(40, 126, 140);
    border-radius: 5px;
    background-color: #fff;
    z-index: 10;
    display: none;
  }
  .side-btn:focus{
    outline: none;
  }
  .side{
    position: fixed;
    border: 1px dashed rgb(40, 126, 140);
    border-top: none;
    border-bottom: none;
    border-left-color: transparent;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    z-index: 3;
    overflow: hidden;
    transition: all 0.5s;
  }
  .sideBar{
    list-style: none;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
  }
  .sideBar-item{
    width: 180px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: rgb(40, 126, 140);
    border: 1px solid rgb(40, 126, 140);
    border-radius: 30px;
    background-color: transparent;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .sideBar-item:hover{
    color: rgb(36, 106, 235);
    text-shadow: none;
    text-decoration: none;
    background-color: rgba(105, 207, 233, 0.3);
    transform: translate(-2%, -2%);
    -webkit-transform: translate(-2%, -2%);
  }
  .side-active{
    color: rgb(250, 250, 250)!important;
    border: none!important;
    text-shadow: none!important;
    text-decoration: none!important;
    background-color: rgb(40, 126, 140)!important;
  }
  .side-img{
    width: 25px;
    height: 25px;
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media screen and (max-width: 830px) {
    .side-btn{
      display: block;
    }
    .side{
      width: 0;
      border-color: #fff;
      background-color: rgb(250, 249, 249);
    }
  }
  @media screen and (max-width: 480px) {
    .side-btn {
      left: 105px;
    }
  }
  @media screen and (max-width: 320px) {
    .sideBar-item{
      height: 40px;
      line-height: 40px;
    }
  }
</style>