<template>
  <div>
    <Navbar />
    <Alert />
    <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <main
          role="main"
          class="col-md-9 ml-sm-auto col-lg-10 px-4"
        >
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../../components/backend/Sidebar.vue';
import Navbar from '../../components/backend/Navbar.vue';
import Alert from '../../components/AlertMessage.vue';

export default {
  data() {
    return {};
  },
  components: {
    Sidebar,
    Navbar,
    Alert,
  },
};
</script>

<style>
</style>
