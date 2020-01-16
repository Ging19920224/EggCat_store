<template>
  <div class="mb-5">
    <Progress
      :step="step"
      class="mt-72 pt-2"
    />
    <div class="container row m-auto">
      <div class="col-md-7 col-12 mb-5">
        <form
          class="col-md-12"
          @submit.prevent="createOrder"
        >
          <div class="form-group">
            <label
              for="username"
              class="text-color"
            ><i class="fas fa-user" /> 收件人姓名</label>
            <span
              class="text-danger"
              v-if="errors.has('name')"
            >姓名必須輸入</span>
            <input
              type="text"
              class="form-control"
              name="name"
              id="username"
              v-model="form.user.name"
              placeholder="輸入姓名"
              v-validate="'required'"
              :class="{'is-invalid': errors.has('name')}"
            >
          </div>
          <div class="form-group">
            <label
              for="usertel"
              class="text-color"
            ><i class="fas fa-phone-alt" /> 收件人電話</label>
            <span
              class="text-danger"
              v-if="errors.has('tel')"
            >電話欄位不得留空</span>
            <input
              type="tel"
              class="form-control"
              id="usertel"
              name="tel"
              v-model="form.user.tel"
              placeholder="請輸入電話"
              v-validate="'required'"
              :class="{'is-invalid': errors.has('tel')}"
            >
          </div>
          <div class="form-group">
            <label
              for="useremail"
              class="text-color"
            ><i class="fas fa-envelope" /> Email</label>
            <span
              class="text-danger"
              v-if="errors.has('email')"
            >
              {{ errors.first('email') }}
            </span>
            <input
              type="email"
              class="form-control"
              name="email"
              id="useremail"
              v-model="form.user.email"
              placeholder="請輸入 Email"
              v-validate="'required|email'"
              :class="{'is-invalid': errors.has('email')}"
            >
          </div>
          <div class="form-group">
            <label
              for="useraddress"
              class="text-color"
            >
              <i class="fas fa-map-marker-alt" /> 收件人地址</label>
            <span
              class="text-danger"
              v-if="errors.has('address')"
            >地址欄位不得留空</span>
            <input
              type="text"
              class="form-control"
              name="address"
              id="useraddress"
              v-model="form.user.address"
              placeholder="請輸入地址"
              v-validate="'required'"
              :class="{'is-invalid': errors.has('address')}"
            >
          </div>
          <div class="form-group">
            <label
              for="comment"
              class="text-color"
            ><i class="fas fa-comment-dots" /> 留言(選填)</label>
            <textarea
              name=""
              id="comment"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            />
          </div>
          <div class="text-center">
            <button class="btn btn-info">
              前往付款 <i class="fas fa-caret-right" />
            </button>
          </div>
        </form>
      </div>
      <div class="col-md-5 col-12 cart-list">
        <h4 class="text-center text-dark">
          購物清單 <span class="badge badge-danger ml-3">
            {{ cartNum }}
          </span>
          件
        </h4>
        <div
          class="cart-item mb-2"
          v-for="(item, index) in cart"
          :key="index"
        >
          <button
            type="button"
            class="btn-delete mr-1"
            @click="removeCartItem(item.id)"
          >
            <i class="far fa-trash-alt" />
          </button>
          <img
            :src="item.product.imageUrl"
            class="cart-itemImg mr-1"
          >
          <span class="item-title text-color">
            {{ item.product.title }}
          </span>
          <span class="item-price">NT {{ item.final_total | currency }}</span>
          <span class="item-qty">{{ item.qty }}/{{ item.product.unit }}</span>
        </div>
        <div class="cart-item mb-3 text-center bg-total">
          <span class="item-total">總額 <span
            class="text-success"
            v-if="total.final_total !== total.total"
          >
            折扣價 </span>NT {{ total.final_total | currency }}</span>
        </div>
        <div class="input-group mb-3 ml-4">
          <div class="input-group-prepend">
            <button
              type="botton"
              class="btn btn-info"
              @click="useCouponCode"
            >
              送出
            </button>
          </div>
          <input
            type="text"
            class="input-code"
            placeholder="請輸入優惠碼"
            v-model="coupon_code"
          >
        </div>
      </div>
    </div>
    <Alert />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Progress from '../../components/frontend/Progress.vue';
import Alert from '../../components/AlertMessage.vue';

export default {
  components: {
    Progress,
    Alert,
  },
  data() {
    return {
      step: 1,
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  computed: {
    ...mapGetters('cartModules', ['cart', 'cartNum', 'total', 'couponSuccess']),
    ...mapGetters('orderModules', ['createOrderRes', 'orderID']),
  },
  watch: {
    couponSuccess: {
      handler: 'showMessage',
      immediate: true,
    },
    createOrderRes: {
      handler: 'orderMessage',
      immediate: true,
    },
  },
  created() {
    this.getCart();
  },
  methods: {
    ...mapActions('cartModules', ['getCart', 'resetSuccess']),
    ...mapActions('orderModules', ['resetRes']),
    removeCartItem(id) {
      this.$store.dispatch('cartModules/removeCartItem', id);
    },
    useCouponCode() {
      const code = this.coupon_code;
      this.$store.dispatch('cartModules/useCouponCode', code);
      this.coupon_code = '';
    },
    showMessage(val) {
      if (val === 'success') {
        this.$bus.$emit('message:push', '優惠卷使用成功', 'success');
        this.resetSuccess();
      } else if (val === 'failure') {
        this.$bus.$emit('message:push', '優惠卷號碼錯誤', 'danger');
        this.resetSuccess();
      }
    },
    orderMessage(val) {
      const order = this.orderID;
      if (val === 'success') {
        this.$bus.$emit('message:push', '訂單建立成功', 'success');
        this.resetRes();
        this.$router.push(`CartPay/${order}`);
      } else if (val === 'failure') {
        this.$bus.$emit('message:push', '訂單建立失敗', 'danger');
        this.resetRes();
      }
    },
    createOrder() {
      const vm = this;
      const order = vm.form;
      if (vm.cartNum === 0) {
        vm.$bus.$emit('message:push', '購物車內無商品！', 'danger');
        return;
      }
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.$store.dispatch('orderModules/createOrder', order);
        } else {
          vm.$bus.$emit('message:push', '表單填寫不完整！', 'danger');
        }
      });
    },
  },
};
</script>

<style scope>
  .cart-list{
    min-height: 420px;
  }
  .btn-delete{
    color: red;
    background-color: transparent;
    border: none;
    font-size: 14px;
    border-radius: 50%;
    padding: 2px 7px;
  }
  .btn-delete:hover{
    color: #fff;
    background-color: red;
  }
  .btn-delete:focus{
    outline: none;
  }
  .cart-item{
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    padding: 10px 10px;
    border: 1px solid rgb(40, 126, 140);
    border-radius: 40px;
  }
  .cart-itemImg{
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
  .item-title{
    width: 55%;
    font-size: 15px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-price{
    position: absolute;
    bottom: -7px;
    right: 15px;
    transform: translateY(-50%);
    color: rgb(18, 116, 196);
    font-size: 18px;
  }
  .item-qty{
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
  }
  .item-total{
    font-size: 20px;
    font-weight: 700;
    color: rgb(18, 116, 196);
  }
  .input-code{
    width: 70%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    text-align: center;
  }
</style>
