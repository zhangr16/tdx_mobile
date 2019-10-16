<template>
  <div class="score">
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
      积分明细
      <span class="iconfont iconrili right_date" @click="isVisible = true"></span>
    </header>
    <main>
      <ul class="title_ul">
        <li>
          总积分
          <br />
          <span>10000</span>
        </li>
        <li class="mid">
          已消耗积分
          <br />
          <span>5000</span>
        </li>
        <li>
          积分余额
          <br />
          <span>5000</span>
        </li>
      </ul>
      <nav>
        <van-field
          readonly
          clickable
          clearable
          label="积分类型"
          right-icon="arrow-down"
          :value="form.type"
          placeholder="请选择"
          @click="showType = true"
        />
        <van-cell></van-cell>
      </nav>
      <van-popup v-model="showType" position="bottom">
        <van-picker
          show-toolbar
          :default-index="0"
          :columns="['全部' ,'消耗积分', '积分奖励']"
          @cancel="showType = false"
          @confirm="(val) => { form.type = val; showType = false }"
        />
      </van-popup>
      <ul class="item_ul">
        <li>
          <img src="@/assets/mine/score1.png" alt />
          <div>
            <span class="_title">
              <span>消耗积分-返利任务兑换</span>
              <i style="color:#333">- 12.00</i>
            </span>
            <span class="_desc">订单号：1234567890123456</span>
            <span class="_time">2019-08-13 00:00:00</span>
          </div>
        </li>
        <li>
          <img src="@/assets/mine/score2.png" alt />
          <div>
            <span class="_title">
              <span>奖励积分-返利任务兑换</span>
              <i>+ 12.00</i>
            </span>
            <span class="_desc">订单号：1234567890123456</span>
            <span class="_time">2019-08-13 00:00:00</span>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template> 
<script>
export default {
  // 资金明细
  name: "score",
  components: {},
  data() {
    return {
      form: {
        type: "全部",
      },
      showType: false,
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
.score {
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
    .title_ul {
      display: flex;
      padding: 10px 0;
      background: #fff;
      .mid {
        border-left: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
      }
      li {
        line-height: 1.5;
        font-size: 14px;
        flex: 1;
        text-align: center;
        span {
          font-weight: bold;
        }
      }
    }
    nav {
      padding: 15px 0;
      display: flex;
      & > .van-cell {
        padding: 10px;
        .van-field__label {
          width: 70px;
        }
        .van-field__control {
          font-weight: bold;
          text-align: center
        }
      }
    }
    .item_ul {
      width: 100%;
      background: #fff;
      li {
        font-size: 14px;
        color: #666;
        line-height: 1.5;
        padding: 0 15px;
        display: flex;
        & > img {
          width: 30px;
          height: 30px;
          margin: 15px 10px 0 0;
        }
        & > div {
          flex: 1;
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid #e5e5e5;
          padding: 15px 0;
          ._title {
            color: #333;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            i {
              color: #fa2a44;
            }
          }
          ._desc {
            font-size: 12px;
            padding: 5px 0;
            color: #666;
          }
          ._time {
            color: #999;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>