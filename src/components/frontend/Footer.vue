<template>
  <div>
    <footer class="footer-bgc">
      <div class="container">
        <div class="row pt-3 pb-3 justify-content-center">
          <div class="col-12 col-md-3 text-left">
            <h5 class="text-light mb-3">
              聯絡我們
            </h5>
            <p>
              <a
                href="tel:+866-2-2228-9999"
                class="text-light"
              >
                <i class="fas fa-phone" /> (02)2228-9999
              </a>
            </p>
            <p>
              <a
                href="mailto:eggCat@gmail.com"
                class="text-light"
              >
                <i class="far fa-envelope" /> eggCat@gmail.com
              </a>
            </p>
          </div>
          <div class="col-12 col-md-6 text-right">
            <a
              href="javascript:;"
              class="icon mr-3"
            >
              <i class="fab fa-line" />
            </a>
            <a
              href="javascript:;"
              class="icon mr-3"
            >
              <i class="fab fa-facebook-square" />
            </a>
            <a
              href="javascript:;"
              class="icon"
            >
              <i class="fab fa-instagram" />
            </a>
            <h5 class="text-light mt-3">
              Copyright © EggCat Designed by Ging
            </h5>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
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
  @media screen and (max-width: 768px) {
    .col-md-6 h5{
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 480px) {
    .row .text-right, .row .text-left{
      text-align: center!important;
    }
  }
  @media screen and (max-width: 320px) {
    .col-md-6 h5{
      font-size: 12px;
    }
  }
</style>
