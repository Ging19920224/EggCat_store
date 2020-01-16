<template>
  <div>
    <h1 class="text-center text-color mt-72 pt-2 mb-1">
      <img
        class="title-img"
        src="../../assets/images/title-L.png"
      >
      超值優惠卷
      <img
        class="title-img"
        src="../../assets/images/title-R.png"
      >
    </h1>
    <div
      class="container text-center
    mt-4 img-thumbnail rounded pt-3 pb-3 position-relative knowledge"
    >
      <h1 class="text-light">
        考驗你的貓咪小知識
      </h1>
      <h3 class="text-light mt-3">
        <i class="far fa-grin-squint" /> 答對越多 優惠就越多！！
      </h3>
      <h6 class="text-light mt-3">
        <i class="far fa-lightbulb" />小秘訣：可先至貓奴小知識瀏覽提高答對率唷！
      </h6>
      <h2 class="text-light mt-5">
        <i class="fas fa-angle-double-down" />
        快來挑戰看看吧 <i class="fas fa-angle-double-down" />
      </h2>
      <img
        src="../../assets/images/cat.jpeg"
        class="position-absolute cat-one"
      >
      <img
        src="../../assets/images/cat2.jpg"
        class="position-absolute cat-two"
      >
    </div>
    <div class="container text-center mb-5 question-warp">
      <div class="row">
        <div class="card col-md-5 col-12 question">
          <div class="card-header bg-qustion text-white h6 pt-3 pb-3 pl-3 pr-3  border">
            一、下列何者能提供最貓咪高能量的來源？
          </div>
          <div class="card-body bg-white border">
            <div class="radio">
              <label>
                <input
                  type="radio"
                  name="optradio1"
                  value="1"
                  v-model="answer1"
                > 蛋白質
              </label>
            </div>
            <div class="radio">
              <label><input
                type="radio"
                name="optradio1"
                value="2"
                v-model="answer1"
              > 脂肪</label>
            </div>
            <div class="radio">
              <label><input
                type="radio"
                name="optradio1"
                value="3"
                v-model="answer1"
              > 碳水化合物</label>
            </div>
            <img
              src="../../assets/images/cat3.jpg"
              class="question-img"
            >
          </div>
        </div>
        <div class="card col-md-5 col-12 question">
          <div class="card-header bg-qustion text-white h6 pt-3 pb-3 pl-3 pr-3  border">
            二、若要幫助貓咪發育及維持增強肌肉活動功能必須補充什麼營養呢？
          </div>
          <div class="card-body bg-white border">
            <div class="radio">
              <label>
                <input
                  type="radio"
                  name="optradio2"
                  value="1"
                  v-model="answer2"
                > 蛋白質
              </label>
            </div>
            <div class="radio">
              <label><input
                type="radio"
                name="optradio2"
                value="2"
                v-model="answer2"
              > 葡萄糖</label>
            </div>
            <div class="radio">
              <label><input
                type="radio"
                name="optradio2"
                value="3"
                v-model="answer2"
              > 鈣質</label>
            </div>
            <img
              src="../../assets/images/cat4.png"
              class="question-img"
            >
          </div>
        </div>
        <div class="card col-md-5 col-12 question">
          <div class="card-header bg-qustion text-white h6 pt-3 pb-3 pl-3 pr-3  border">
            三、貓咪長期缺水雖然不會死亡，但卻會造成何種器官負擔變重呢？
          </div>
          <div class="card-body bg-white border">
            <div class="radio">
              <label>
                <input
                  type="radio"
                  name="optradio3"
                  value="1"
                  v-model="answer3"
                > 心臟
              </label>
            </div>
            <div class="radio">
              <label><input
                type="radio"
                name="optradio3"
                value="2"
                v-model="answer3"
              > 肝臟</label>
            </div>
            <div class="radio">
              <label><input
                type="radio"
                name="optradio3"
                value="3"
                v-model="answer3"
              > 腎臟</label>
            </div>
            <img
              src="../../assets/images/cat5.jpeg"
              class="question-img"
            >
          </div>
        </div>
        <div class="card col-md-5 col-12 question">
          <div class="card-header bg-qustion text-white h6 pt-3 pb-3 pl-3 pr-3 border">
            四、當貓咪發出高音急促喵聲，可能感到何種心理狀態呢？
          </div>
          <div class="card-body bg-white border">
            <div class="radio">
              <label>
                <input
                  type="radio"
                  name="optradio4"
                  value="1"
                  v-model="answer4"
                > 焦慮不安
              </label>
            </div>
            <div class="radio">
              <label><input
                type="radio"
                name="optradio4"
                value="2"
                v-model="answer4"
              > 生氣</label>
            </div>
            <div class="radio">
              <label><input
                type="radio"
                name="optradio4"
                value="3"
                v-model="answer4"
              > 非常放鬆</label>
            </div>
            <img
              src="../../assets/images/cat6.jpeg"
              class="question-img"
            >
          </div>
        </div>
        <div class="card col-md-5 col-12 question">
          <div class="card-header bg-qustion text-white h6 pt-3 pb-3 pl-3 pr-3 border">
            五、當貓咪不斷黏著主人，在主人身邊發出渴望的「喵～喵～」聲時，可能是想表什麼呢？
          </div>
          <div class="card-body bg-white border">
            <div class="radio">
              <label>
                <input
                  type="radio"
                  name="optradio5"
                  value="1"
                  v-model="answer5"
                > 希望主人能陪牠玩
              </label>
            </div>
            <div class="radio">
              <label><input
                type="radio"
                name="optradio5"
                value="2"
                v-model="answer5"
              > 想睡覺</label>
            </div>
            <div class="radio">
              <label><input
                type="radio"
                name="optradio5"
                value="3"
                v-model="answer5"
              > 想咬人</label>
            </div>
            <img
              src="../../assets/images/cat7.png"
              class="question-img"
            >
          </div>
        </div>
        <div class="card col-md-5 col-12 question">
          <div class="card-header bg-qustion text-white h6 pt-3 pb-3 pl-3 pr-3  border">
            六、貓咪何時會發出滿足的咕嚕聲呢？
          </div>
          <div class="card-body bg-white border">
            <div class="radio">
              <label>
                <input
                  type="radio"
                  name="optradio6"
                  value="1"
                  v-model="answer6"
                > 覺得很滿足、很舒服時
              </label>
            </div>
            <div class="radio">
              <label><input
                type="radio"
                name="optradio6"
                value="2"
                v-model="answer6"
              > 肚子餓時</label>
            </div>
            <div class="radio">
              <label><input
                type="radio"
                name="optradio6"
                value="3"
                v-model="answer6"
              > 想睡覺時</label>
            </div>
          </div>
          <img
            src="../../assets/images/cat8.jpeg"
            class="question-img"
          >
        </div>
      </div>
      <button
        type="button"
        class="answer text-center mb-5"
        @click="checkAnswer"
      >
        <img
          src="../../assets/images/cathand.png"
          class="answer-img"
        > 送出答案
      </button>
    </div>
    <div
      class="modal fade"
      id="answer"
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
          <div class="modal-header bg-qustion text-white">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >
              <span>貓奴小知識問答結果</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="restAnswer"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center pt-5 pb-5 position-relative">
            <span
              class="text-success h6"
              v-if="result > 2"
            >
              恭喜您答對了 {{ result }} 題 !<br>
              獲得{{ couponTitle }}，優惠卷代碼：{{ coupon }}
            </span>
            <span
              class="text-danger h6"
              v-else
            >可惜，您只答對了 {{ result }} 題～<br>可以先去貓奴小知識補充知識喲！</span>
            <img
              v-if="result > 2"
              src="../../assets/images/catGood.jpeg"
              class="position-absolute answerCat"
            >
            <img
              v-else
              src="../../assets/images/catGG.jpg"
              class="position-absolute answerCat"
            >
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-info"
              @click="clocseResult"
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      answer5: '',
      answer6: '',
      check: [],
      result: '',
      coupon: '',
      couponTitle: '',
    };
  },
  methods: {
    checkAnswer() {
      const vm = this;
      if (vm.answer1 === '2') {
        vm.check.push(true);
      } else {
        vm.check.push(false);
      }
      if (vm.answer2 === '1') {
        vm.check.push(true);
      } else {
        vm.check.push(false);
      }
      if (vm.answer3 === '3') {
        vm.check.push(true);
      } else {
        vm.check.push(false);
      }
      if (vm.answer4 === '1') {
        vm.check.push(true);
      } else {
        vm.check.push(false);
      }
      if (vm.answer5 === '1') {
        vm.check.push(true);
      } else {
        vm.check.push(false);
      }
      if (vm.answer6 === '1') {
        vm.check.push(true);
      } else {
        vm.check.push(false);
      }
      const result = vm.check.reduce((prev, current) => {
        if (current) {
          prev.push(current);
        }
        return prev;
      }, []);
      vm.result = result.length;
      vm.Coupon();
      $('#answer').modal('show');
    },
    restAnswer() {
      const vm = this;
      vm.answer1 = '';
      vm.answer2 = '';
      vm.answer3 = '';
      vm.answer4 = '';
      vm.answer5 = '';
      vm.answer6 = '';
      vm.check = [];
      vm.result = '';
    },
    clocseResult() {
      $('#answer').modal('hide');
      this.restAnswer();
    },
    Coupon() {
      const vm = this;
      switch (vm.result) {
        case 6:
          vm.coupon = '123ern3k';
          vm.couponTitle = '75折優惠';
          break;
        case 5:
          vm.coupon = 'jvijori666';
          vm.couponTitle = '8折優惠';
          break;
        case 4:
          vm.coupon = 'jfijwi4';
          vm.couponTitle = '85折優惠';
          break;
        case 3:
          vm.coupon = 'a3fkk2';
          vm.couponTitle = '9折優惠';
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scope>
  .title-img{
    width: 50px;
    height: 50px;
  }
  .cat-one{
    width: 130px;
    height: 130px;
    top: 50%;
    left: 120px;
    transform: translateY(-50%) rotate(-20deg);
    border-radius: 10px
  }
  .cat-two{
    width: 130px;
    height: 130px;
    top: 50%;
    right: 120px;
    transform: translateY(-50%) rotate(20deg);
    border-radius: 50%;
  }
  .knowledge, .bg-qustion{
    background-color: rgb(40, 126, 140);
  }
  .question{
    background-color: transparent!important;
    border: none;
    margin: 25px auto;
    position: relative;
  }
  .question-warp{
    padding: 30px 80px;
    background-image: url(../../assets/images/bg.jpg);
    background-repeat: repeat;
    background-size: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .answer{
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
    color: #fff;
    font-size: 24px;
    background-color: rgb(40, 126, 140);
    border:1px solid #fff;
    border-radius: 8px;
  }
  .answer:hover{
    transform: scale(1.2);
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }
  .question-img{
    position: absolute;
    width: 100px;
    height: 100px;
    bottom: 20px;
    left: 30px;
    border-radius: 50%;
  }
  .answerCat{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top:50%;
    left: 10px;
    transform: translateY(-50%);
  }
  .answer-img{
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: 823px) {
    .question-warp {
        padding: 10px 30px;
      }
    .cat-one {
      width: 100px;
      height: 100px;
      left: 50px;
    }
    .cat-two {
      width: 100px;
      height: 100px;
      right: 50px;
    }
    .question-img{
      width: 60px;
      height: 60px;
      left: 30px;
    }
    @media screen and (max-width: 480px) {
      .question-warp {
        padding: 5px 20px;
      }
      .cat-one {
        display: none;
      }
      .cat-two {
        display: none;
      }
      .knowledge{
        padding-left: 1px;
        padding-right: 1px;
      }
    }
  }
</style>
