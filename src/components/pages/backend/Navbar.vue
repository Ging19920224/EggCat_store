<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-info flex-md-nowrap p-0 shadow  ">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0 text-center" href="#">
        <img class="nav-logo" src="../../../assets/images/logo.png">
        蛋蛋小貓寵物店
      </a>
      <ul class="navbar-nav px-3 ">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signout"><i class="fas fa-sign-out-alt"></i> 登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    signout(){
      const vm = this;
      const url = `${process.env.API_PATH}/logout`;
      this.$http.post(url).then((response) => {
        console.log(response.data);
        if(response.data.success) {
          vm.$router.push('/login');
        }
      })
    }
  }
}
</script>

<style scope>
  .bg-nav{
    background: -webkit-linear-gradient(bottom right,rgb(131, 86, 88),rgba(63,33,34,1.00));
    background: -o-linear-gradient(bottom right,rgb(131, 86, 88),rgba(63,33,34,1.00));
    background: -moz-linear-gradient(bottom right,rgb(131, 86, 88),rgba(63,33,34,1.00));
    background: linear-gradient(to bottom right,rgb(131, 86, 88),rgba(63,33,34,1.00));
    z-index: 9;
  }
  .nav-logo{
    width: 35px;
    height: 35px;
  }
</style>