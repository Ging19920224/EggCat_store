<template>
  <div>
    <nav aria-label="Page navigation example" class="page mt-3">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled': page.nowPage <= 1}">
          <a class="page-link" href="#"
          @click.prevent="changePage(page.nowPage - 1)">
            <i class="fas fa-chevron-left"></i>
          </a>
        </li>
        <li class="page-item"
        v-for="item in page.total" :key="item" :class="{'disabled': page.nowPage === item}">
          <a class="page-link" href="#" @click.prevent="changePage(item)"
          :class="{'page-active': page.nowPage === item }">
            {{ item }}
          </a>
        </li>
        <li class="page-item" :class="{'disabled': page.nowPage == page.total}">
          <a class="page-link" href="#" @click.prevent="changePage(page.nowPage + 1)">
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['page'],
  data() {
    return {};
  },
  methods: {
    changePage(page) {
      const newpage = {
        nowPage: page,
        total: this.page.total,
      };
      this.$emit('emitPage', newpage);
    },
  },
};
</script>

<style scope>
  .page{
    display: inline-block;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .page-link{
    color: rgb(40, 126, 140)!important;
  }
  .page-link:hover{
    color: #fff!important;
    background-color: rgb(40, 126, 140)!important;
  }
  .page-active{
    color: rgb(255, 255, 255)!important;
    background-color: rgb(40, 126, 140)!important;
  }
</style>
