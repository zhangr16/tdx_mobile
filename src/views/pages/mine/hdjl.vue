<template>
  <div class="hdjl">
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
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />亲友团活动奖励明细
      <span class="iconfont iconrili right_date" @click="isVisible = true"></span>
    </header>
    <main>
      <nav>
        <van-tabs>
          <van-tab v-for="tab in tabs" :title="tab" :key="tab"></van-tab>
        </van-tabs>
      </nav>
      <ul class="table_ul">
        <li>
          <div class="time">日期</div>
          <div class="type">活动类型</div>
          <div class="order">订单号</div>
          <div class="amount">奖励金额</div>
        </li>
        <li v-for="item in 3" :key="item">
          <div class="time">2017-07-22</div>
          <div class="type">亲友团奖励</div>
          <div class="order">1232142134321</div>
          <div class="amount">¥12</div>
        </li>
      </ul>
    </main>
  </div>
</template> 
<script>
export default {
  // 资金明细
  name: "hdjl",
  components: {},
  data() {
    return {
      tabs: ['亲友团奖励', '派单奖励', '拉新奖励', '推荐奖励'],
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
.hdjl {
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
      .van-tab {
        color: #333;
        font-size: 14px;
      }
    }
    .table_ul {
      margin-top: 15px;
      width: 100%;
      background: #fff;
      font-size: 13px;
      li {
        color: #666;
        line-height: 1.5;
        padding: 10px 0;
        display: flex;
        &:first-child {
          color: #333;
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