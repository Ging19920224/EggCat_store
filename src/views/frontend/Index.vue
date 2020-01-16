<template>
  <div>
    <div class="bg">
      <Navbar />
      <div class="container-fluid pd-0">
        <router-view />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/frontend/IndexNav.vue';
import Footer from '../../components/frontend/Footer.vue';

export default {
  data() {
    return {
      cartNum: 0,
    };
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
  .bg{
    font-family: "微軟正黑體", "sans-serif";
    background-color: rgb(243, 243, 243);
  }
  .pd-0{
    padding-left: 0;
    padding-right: 0;
  }
</style>
