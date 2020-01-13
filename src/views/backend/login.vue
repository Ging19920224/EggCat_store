<template>
  <div class="login-bg">
    <form class="form-signin text-center" @submit.prevent="signin">
      <h1 class="h3 mb-3 font-weight-normal text-color">蛋蛋小貓寵物用品屋</h1>
      <h2 class="h3 mb-3 font-weight-normal text-color">後台管理系統</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail"
      class="form-control" placeholder="Email address" required autofocus v-model="user.username">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword"
      class="form-control" placeholder="Password"  v-model="user.password" required>
      <button class="btn btn-lg btn-info btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; EggCat</p>
      <img class="login-logo" src="../../assets/images/logo.png">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_API_PATH}/admin/signin`;
      const vm = this;
      this.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          vm.$router.push('/admin/products');
        }
      });
    },
  },
};
</script>

<style scoped>
  html,
  body {
    height: 100%;
  }
  body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .text-color{
    color: rgb(40, 126, 140)!important;
  }
  .form-signin {
    width: 100%;
    max-width: 430px;
    padding: 20px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: relative;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .login-bg{
    font-family: "微軟正黑體", "sans-serif";
    height: 100vh;
    padding: 100px 0 0 0;
  }
  .login-logo{
    position: absolute;
    bottom: 10px;
    left: 20px;
    width: 80px;
    height: 80px;
  }
</style>
