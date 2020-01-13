<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex
            justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>管理員</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/products">
                  <i class="fas fa-box-open mr-2"></i>
                  <span data-feather="file-text">產品列表</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/orderList">
                  <i class="far fa-list-alt mr-2"></i>
                  <span data-feather="file-text">訂單列表</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/coupons">
                  <i class="fas fa-ticket-alt mr-2"></i>
                  <span data-feather="file-text">優惠卷</span>
                </router-link>
              </li>
            </ul>
            <h6 class="sidebar-heading d-flex
            justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>模擬功能</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/CustomerOrder">
                  <i class="fas fa-shopping-cart mr-2"></i>
                  <span data-feather="file-text">模擬訂單</span>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>
