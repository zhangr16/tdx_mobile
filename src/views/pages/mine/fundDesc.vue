<template>
  <div class="fundDesc">
    <!-- 日历控件 -->
    <nut-calendar
      :is-visible="isVisible"
      :default-value="myDate"
      type="range"
      :start-date="null"
      :end-date="null"
      :animation="`nutSlideUp`"
      @close="isVisible = false"
      @choose="setChooseValue"
    ></nut-calendar>

    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />
      资金详情
      <span class="iconfont iconrili right_date" @click="isVisible = true"></span>
    </header>
    <main>
      <nav>
        总金额<span>¥10000</span>
      </nav>
      <ul class="table_ul">
        <li>
          <div class="time">日期</div>
          <div class="type">任务类型</div>
          <div class="order">订单号</div>
          <div class="amount">任务金额</div>
        </li>
        <li v-for="item in 4" :key="item">
          <div class="time">2017-07-22</div>
          <div class="type">免单任务</div>
          <div class="order">123214213421321</div>
          <div class="amount">¥1000</div>
        </li>
      </ul>
    </main>
  </div>
</template> 
<script>
export default {
  // 资金明细
  name: "fundDesc",
  components: {},
  data() {
    return {
      isVisible: false,
      myDate: null
    };
  },
  methods: {
    setChooseValue(param) {
      this.myDate = [...[param[0][3], param[1][3]]];
    }
  }
};
</script>
<style lang="scss" scope>
.fundDesc {
  position: relative;
  width: 100%;
  padding-top: 50px;
  min-height: 100vh;
  & > header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999999;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(-90deg, #fc5303 0%, #fa8e05 100%);
    text-align: center;
    color: #fff;
    font-size: 17px;
    .left_arrow {
      font-size: 20px;
      position: absolute;
      left: 15px;
      top: 10px;
    }
    .right_date {
      font-size: 20px;
      position: absolute;
      right: 15px;
    }
  }
  & > main {
    width: 100%;
    nav {
      padding: 0 0 15px 15px;
      font-size: 14px;
      span {
        font-weight: bold;
        margin-left: 10px;
      }
    }
    .table_ul {
      width: 100%;
      background: #fff;
      font-size: 13px;
      li {
        color: #666;
        line-height: 1.5;
        padding: 10px 0;
        display: flex;
        &:first-child {
          color:#333;
          font-weight: bold;
        }
        & > div {
          flex: 1;
          text-align: center;
        }
      }
    }
  }
}
</style>