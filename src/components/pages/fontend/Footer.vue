<template>
  <div>
    <footer class="footer-bgc">
      <div class="container">
        <div class="row pt-3 pb-3">
          <div class="col-12 col-md-3 text-right">
            <h5 class="text-light mb-3">聯絡我們</h5>
            <p>
              <a href="tel:+866-2-2228-9999" class="text-light">
                <i class="fas fa-phone"></i> (02)2228-9999
              </a>
            </p>
            <p>
              <a href="mailto:eggCat@gmail.com" class="text-light">
                <i class="far fa-envelope"></i> eggCat@gmail.com
              </a>
            </p>
          </div>
          <div class="col-12 col-md-6 text-center pt-4">
            <h5 class="text-light">Copyright © EggCat Designed by Ging</h5>
          </div>
          <div class="col-12 col-md-3 text-left pt-4">
            <a href="javascript:;" class="icon mr-3">
              <i class="fab fa-line"></i>
            </a>
            <a href="javascript:;" class="icon mr-3">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="javascript:;" class="icon">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scope>
  .footer-bgc{
    width: 100%;
    background-color: rgba(40, 126, 140, 1.0)!important;
    z-index: 9!important;
  }
  .icon{
    color: #fff;
    font-size: 35px;
  }
  .icon:hover{
    color: #fff;
    text-shadow: 1px 1px 5px black;
  }
  @media screen and (max-width: 480px) {
    .row .text-right, .row .text-left{
      text-align: center!important;
    }
    .pt-4 h5{
      font-size: 16px;
    }
  }
  @media screen and (max-width: 320px) {
    .pt-4 h5{
      font-size: 12px;
    }
  }
</style>