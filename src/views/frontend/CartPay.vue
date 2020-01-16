<template>
  <div>
    <Progress
      :step="step"
      class="mt-72 pt-2 mb-3"
    />
    <div class="container text-center mt-3 mb-5 pt-3">
      <h2 class="mb-4">
        訂單資訊
      </h2>
      <h3
        class="text-success"
        v-if="order.is_paid"
      >
        (已付款)
      </h3>
      <h6 class="mb-3">
        訂單日期 : {{ order.create_at | date }}
      </h6>
      <h6 class="mb-3">
        訂單編號 : {{ order.id }}
      </h6>
      <div class="row text-center mt-5">
        <table class="table table-striped col-md-6 col-12 mr-5 border rounded ">
          <thead class="bg-theme text-light">
            <tr>
              <th width="100">
                <i class="fas fa-list-alt" /> 購買資料
              </th>
              <th>品名</th>
              <th>數量</th>
              <th>金額</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in order.products"
              :key="index"
            >
              <td>
                <img
                  :src="order.products[index].product.imageUrl"
                  class="cart-itemImg"
                >
              </td>
              <td>{{ order.products[index].product.title }}</td>
              <td>
                {{ order.products[index].product.num }}/
                {{ order.products[index].product.unit }}
              </td>
              <td>{{ order.products[index].product.price | currency }}</td>
            </tr>
            <tr class="table-secondary">
              <td />
              <td />
              <td><h5>總額</h5></td>
              <td><h5>{{ order.total | currency }}</h5></td>
            </tr>
          </tbody>
        </table>
        <table class="table table-striped col-md-5 col-12 border rounded">
          <thead class="bg-theme text-light">
            <tr>
              <th width="150">
                <i class="fas fa-user" /> 個人資訊
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>姓名</td>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <td>電話</td>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <td>地址</td>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr class="table-secondary">
              <td><h6>付款狀態</h6></td>
              <td>
                <h6
                  class="text-danger"
                  v-if="!order.is_paid"
                >
                  尚未付款
                </h6>
                <h6
                  class="text-success"
                  v-else
                >
                  付款完成
                </h6>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        v-if="!order.is_paid"
        @click="payOrder"
        class="btn btn-danger"
      >
        確認付款 <i class="fas fa-caret-right" />
      </button>
      <router-link
        to="/CustomerProduct/0"
        v-else
        class="btn btn-primary"
      >
        繼續購物 <i class="fas fa-shopping-cart" />
      </router-link>
    </div>
    <div
      class="modal fade"
      id="paySuccess"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header table-bg text-white">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              <span>付款狀態</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body position-relative">
            <img
              src="../../assets/images/cat3Q.jpg"
              class="answerCat"
            >
            <span class="h6 text-color">付款成功！！非常感謝您的購買～喵</span>
            <img
              src="../../assets/images/cathand.png"
              class="ml-3 cathand"
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="payFailure"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              <span>付款狀態</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body position-relative">
            <img
              src="../../assets/images/catSorry.png"
              class="answerCat"
            >
            <span class="h6 text-danger">對不起！伺服器出現問題導致付款失敗！</span>
            <img
              src="../../assets/images/cathand.png"
              class="ml-3 cathand"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import $ from 'jquery';
import Progress from '../../components/frontend/Progress.vue';

export default {
  components: {
    Progress,
  },
  data() {
    return {
      step: 2,
      orderId: '',
    };
  },
  computed: {
    ...mapGetters('orderModules', ['order', 'payRes']),
  },
  watch: {
    payRes: {
      handler: 'payMesssage',
      immediate: true,
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
  methods: {
    ...mapActions('orderModules', ['resetRes']),
    getOrder() {
      const orderID = this.orderId;
      this.$store.dispatch('orderModules/getOrder', orderID);
    },
    payOrder() {
      const orderID = this.orderId;
      this.$store.dispatch('orderModules/payOrder', orderID);
    },
    payMesssage(val) {
      if (val === 'success') {
        this.step = 3;
        this.getOrder();
        this.resetRes();
        $('#paySuccess').modal('show');
        this.hideMessage();
      } else if (val === 'failure') {
        $('#payFailure').modal('show');
        this.resetRes();
        this.hideMessage();
      }
    },
    hideMessage() {
      setTimeout(() => {
        $('#paySuccess').modal('hide');
        $('#payFailure').modal('hide');
      }, 3000);
    },
  },
};
</script>

<style scope>
  .table-bg{
    background-color: rgb(40, 126, 140);
  }
  .cart-itemImg{
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  .answerCat{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .cathand{
    padding: 5px 5px;
    width: 35px;
    height: 35px;
    background-color: rgb(40, 126, 140);
    border-radius: 50%;
  }
</style>
