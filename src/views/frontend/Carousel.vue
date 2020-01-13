<template>
  <div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <h1 class="text-center text-color mb-3">
        <img class="title-img" src="../../assets/images/title-L.png">
        蛋蛋小貓寵物用品屋
        <img class="title-img" src="../../assets/images/title-R.png">
      </h1>
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleControls" data-slide-to="1"></li>
        <li data-target="#carouselExampleControls" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <a class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button" data-slide="prev">
          <i class="fas fa-chevron-left"></i>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next"
        href="#carouselExampleControls"
        role="button" data-slide="next">
          <i class="fas fa-chevron-right"></i>
          <span class="sr-only">Next</span>
        </a>
        <div class="carousel-item active position-relative">
          <img src="../../assets/images/banner-1.jpg"
          class="d-block banner img-thumbnail m-auto">
          <p class="text-center mt-2">
            <a href="#" @click.prevent="goProduct('1')"
            class="more more-border text-center"
            title="前往產品">前往貓跳台</a>
          </p>
        </div>
        <div class="carousel-item">
          <img src="../../assets/images/banner-2.jpg"
          class="d-block banner img-thumbnail m-auto">
          <p class="text-center mt-2">
            <a href="#" @click.prevent="goProduct('3')"
            class="more more-border text-center"
            title="前往產品">前往飲水器</a>
          </p>
        </div>
        <div class="carousel-item">
          <img src="../../assets/images/banner-3.jpg"
          class="d-block banner img-thumbnail m-auto">
          <p class="text-center mt-2">
            <a href="#" @click.prevent="goProduct('2')"
            class="more more-border text-center"
            title="前往產品">前往貓砂盆</a>
          </p>
        </div>
      </div>
    </div>
    <section class="page-section info">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-lower text-light">
                  經營理念
                </span>
              </h2>
              <p class="mb-0 text-light about">
                秉持著能讓平凡人成為一位合格貓奴的信念，使貓奴為主子獻上至高無上的服務!!
              </p>
              <p class="mt-2 text-light about">
                我們只想做好一件事，提供喵星人『 一生幸福快樂的生活 』。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page-section clearfix">
      <div class="container">
        <div class="intro text-center">
          <img class="intro-img img-fluid mb-3 img-thumbnail rounded"
          src="../../assets/images/banner-4.png">
          <div class="intro-text bg-theme p-5 rounded img-thumbnail text-center">
            <h2 class="section-heading mb-4 text-light">
              <span class="section-heading-lower">
              關於蛋蛋小貓
              </span>
            </h2>
            <p class="mb-3 text-justify text-light intro-content">
              24小時貓奴用品線上購物，提供您上萬種商品選擇，WDJ推薦、主食罐、貓零食、外出用品等，喵星人的最愛應有盡有。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {};
  },
  methods: {
    goProduct(product) {
      const vm = this;
      const url = `CustomerProduct/${product}`;
      vm.$router.push(url);
    },
  },
  mounted() {
    $('.carousel').carousel({
      interval: 3000,
    });
  },
};
</script>

<style scope>
.title-img{
  width: 50px;
  height: 50px;
}
.carousel{
  margin-top: 72px;
  padding-top: 10px;
}
.carousel-indicators{
  bottom: -50px;
}
.carousel-indicators li {
  background-color: rgb(40, 126, 140);
}
.carousel-control-prev,
.carousel-control-next{
  color: rgba(40, 126, 140, 0.8)!important;
  font-size: 30px;
}
.carousel-control-prev:hover,
.carousel-control-next:hover{
  color: rgba(40, 126, 140, 1.0)!important;
  transform: scale(1.2);
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}
.banner{
  width: 840px;
  height: 480px;
  border-radius: 10px;
}
.page-section{
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.section-heading{
  margin-top: 10px;
}
.section-heading-lower{
  font-size: 2.5rem;
  line-height: 4rem;
  font-weight: 900;
}
.about, .intro-content{
  letter-spacing: 3px;
}
.intro{
  position: relative;
}
.intro-text{
  position: absolute;
  left: 0;
  width: 40%;
  margin-top: 2rem;
  margin-left: 2rem;
  line-height: 2;
}
.intro-img{
  float: right;
  width: 75%;
}
.info{
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: rgba(40, 126, 140, 0.8)!important;
}
.more{
  padding: 3px 5px;
  font-size: 20px;
  font-weight: bold;
  min-width: 120px;
  color:rgb(40, 126, 140);
}
.more-border{
  border: 2px solid rgba(40, 126, 140, 0.5);
  border-radius: 5px;
}
.more:hover{
  text-decoration: none;
  border: 2px solid rgba(40, 126, 140, 1.0);
  border-radius: 30px;
  background-color: rgba(40, 126, 140, 1.0);
  color: #fff!important;
  padding: 3px 15px;
  transition: border-top 0.1s ease 0.2s,
              border-right 0.2s ease 0.3s,
              border-bottom 0.3s ease 0.4s,
              border-left 0.4s ease 0.5s,
              background-color 0.55s ease 0.6s,
              padding 0.6s,
              color 0.55s ease 0.6s,;
  -webkit-transition: border-top 0.1s ease 0.2s,
                      border-right 0.2s ease 0.3s,
                      border-bottom 0.3s ease 0.4s,
                      border-left 0.4s ease 0.5s,
                      background-color 0.5s ease 0.6s,
                      padding 0.5s,
                      color 0.5s ease 0.6s,;
}
@media screen and (max-width: 830px) {
  .intro-text {
    width: 55%;
  }
}
@media screen and (max-width: 740px) {
  .intro-text{
    position: relative;
    width: 75%;
    margin-top: -5rem;
    margin-left: auto;
    margin-right: auto;
    line-height: 2;
  }
  .intro-img{
    float: none;
    width: 90%;
  }
  .info h5{
    font-size: 1.1rem;
  }
}
@media screen and (max-width: 480px) {
  .intro-text {
    width: 85%;
    margin-top: 1rem;
  }
  .section-heading-lower{
    font-size: 26px;
    line-height: 2rem;
    font-weight: 900;
  }
  .display-4 {
    font-size: 3.0rem;
  }
  .banner {
    height: 300px;
  }
  .text-left {
    text-align: center !important;
  }
  .p-5 {
    padding: 1.5rem !important;
  }
  .carousel h1{
    font-size: 30px;
  }
}
@media screen and (max-width: 375px) {
  .carousel h1{
    font-size: 26px;
  }
  .banner {
    height: 260px;
  }
}
@media screen and (max-width: 320px) {
  .carousel h1{
    font-size: 22px;
  }
  .title-img {
    width: 40px;
    height: 40px;
  }
  .banner {
    height: 240px;
  }
  .intro-text{
    width: 90%;
    margin-top: 0.2rem;
  }
  .display-4 {
    font-size: 2.4rem;
  }
  .p-5 h5{
    font-size: 18px;
  }
}
</style>
