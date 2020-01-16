<template>
  <div>
    <div class="container text-center mt-5 mb-5">
      <div
        class="circle"
        :class="{'p-active':step === 1 || step === 2 || step === 3}"
      >
        1
        <span
          class="step"
          :class="{'p-active-font':step === 1 || step === 2 || step === 3}"
        >確認購物清單</span>
      </div>
      <div
        class="circle-line"
        :class="{'p-active':step === 2 || step === 3}"
      />
      <div
        class="circle"
        :class="{'p-active':step === 2 || step === 3}"
      >
        2
        <span
          class="step"
          :class="{'p-active-font':step === 2 || step === 3}"
        >金流付款</span>
      </div>
      <div
        class="circle-line"
        :class="{'p-active':step === 3}"
      />
      <div
        class="circle"
        :class="{'p-active':step === 3}"
      >
        3
        <span
          class="step"
          :class="{'p-active-font':step === 3}"
        >完成</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: Number,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scope>
  .circle{
    position: relative;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #FFF;
    background-color: rgb(131, 130, 130);
    border-radius: 50%;
    color: #FFF;
    display: inline-block;
    margin-right: -5.5px;
  }
  .step{
    position: absolute;
    width: 100px;
    bottom: -35px;
    left: 50%;
    font-size: 16px;
    transform: translateX(-50%);
    color: rgb(131, 130, 130);;
  }
  .circle-line{
    width: 80px;
    height: 3px;
    display: inline-block;
    background-color: #FFF;
    margin-right: -5.5px;
  }
  .p-active{
    background-color: rgb(40, 126, 140);
  }
  .active-font{
    color: rgb(40, 126, 140);
  }
</style>
