<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button class="btn btn-info" data-toggle="modal" @click="openModel(true)">建立新的優惠卷</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th width="120">折扣百分比</th>
          <th width="120">到期日</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.due_date | dateReplace}}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm"
            @click="openModel(false, item)">
              編輯
            </button>
            <button class="btn btn-outline-danger btn-sm"
            @click="openDeleteModel(item)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
      <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-m" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠卷</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label for="title">名稱</label>
                  <input type="text" class="form-control" id="title"
                    v-model="tempCoupon.title"
                    placeholder="請輸入名稱">
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="percent">折扣百分比</label>
                    <input type="number" class="form-control" id="percent"
                      v-model="tempCoupon.percent"
                      placeholder="請輸入折扣百分比">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="due_date">到期日</label>
                    <input type="date" class="form-control" id="due_date"
                      v-model="tempCoupon.due_date"
                      placeholder="請輸入到期日">
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <label for="code">折扣碼</label>
                  <input type="text" class="form-control" id="code"
                      v-model="tempCoupon.code"
                      placeholder="請輸入折扣碼">
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                      :true-value="1"
                      :false-valuee="0"
                      v-model="tempCoupon.is_enabled"
                      id="is_enabled">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary"
            @click="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="delCouponModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠卷(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary"
            @click="deleteCoupon(false)">取消</button>
            <button type="button" class="btn btn-danger" @click="deleteCoupon(true)"
              >確認刪除</button>
          </div>
        </div>
      </div>
    </div>
    <Pagination :pageData="pagination" @emitpage="getCoupons"></Pagination>
    </table>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '../../components/backend/Pagination.vue';

export default {
  data() {
    return {
      coupons: [],
      isLoading: false,
      tempCoupon: {},
      isNew: false,
      isDelete: false,
      pagination: {},
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getCoupons(page = 1) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/coupons?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.isLoading = false;
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
      });
    },
    updateCoupon() {
      let api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/coupon`;
      let httpMethod = 'post';
      const vm = this;
      if (!vm.isNew) {
        api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = 'put';
      }
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then((response) => {
        if (response.data.success) {
          $('#couponModal').modal('hide');
          vm.getCoupons();
        } else {
          $('#couponModal').modal('hide');
          vm.getCoupons();
        }
      });
    },
    openModel(isNew, item) {
      if (isNew) {
        this.tempCoupon = {};
        this.isNew = true;
      } else {
        this.tempCoupon = Object.assign({}, item);
        this.isNew = false;
      }
      $('#couponModal').modal('show');
    },
    openDeleteModel(item) {
      $('#delCouponModal').modal('show');
      this.tempCoupon = item;
    },
    deleteCoupon(isDelete) {
      const vm = this;
      if (isDelete) {
        const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/coupon/${vm.tempCoupon.id}`;
        this.$http.delete(api).then((response) => {
          if (response.data.success) {
            vm.tempCoupon = {};
            $('#delCouponModal').modal('hide');
            vm.getCoupons();
          } else {
            vm.tempCoupon = {};
            $('#delCouponModal').modal('hide');
          }
        });
      } else {
        vm.tempCoupon = {};
        $('#delProductModal').modal('hide');
      }
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>

<style>
</style>
