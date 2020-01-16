<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-info flex-md-nowrap p-0 shadow  ">
      <a
        class="navbar-brand col-sm-3 col-md-2 mr-0 text-center"
        href="javascript:;"
      >
        <img
          class="nav-logo"
          src="../../assets/images/logo.png"
        >
        蛋蛋小貓寵物店
      </a>
      <ul class="navbar-nav px-3 ">
        <li class="nav-item text-nowrap">
          <a
            class="nav-link"
            href="#"
            @click.prevent="signout"
          ><i class="fas fa-sign-out-alt" /> 登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    data() {
      return {};
    },
    signout() {
      const vm = this;
      const url = `${process.env.VUE_APP_API_PATH}/logout`;
      this.$http.post(url).then((response) => {
        if (response.data.success) {
          vm.$router.push('/login');
        }
      });
    },
  },
};
</script>

<style scope>
  .nav-logo{
    padding: 2px 2px;
    background-color: #fff;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
</style>
