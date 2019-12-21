<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th>Email</th>
          <th width="200">購買款項</th>
          <th width="120">應付金額</th>
          <th width="100">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orderData.orders" :key="item.id">
          <td>{{ item.create_at | date }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <div v-for="(product, index) in item.products" :key="index">
              {{ product.product.title }} 數量：{{ product.qty }} {{ product.product.unit }}
            </div>
          </td>
          <td class="text-right">{{ item.total | currency }}</td>
          <td>
            <span class="text-success" v-if="item.is_paid">已付款</span>
            <span class="text-secondary" v-else>尚未付款</span>
          </td>
          
        </tr>
      </tbody>
      <!-- <Pagination :pageData="pagination" @emitpage="getProducts"></Pagination> -->
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      orderData:[],
      isLoading: false,
    }
  },
  methods: {
    getOrder(page = 1){
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/orders?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        // console.log(response.data);
        vm.orderData = response.data;
        vm.isLoading = false;
      });
    }
  },
  created(){
    this.getOrder();
  }
}
</script>

<style>

</style>