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
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />积分明细
      <span class="iconfont iconrili right_date" @click="isVisible = true"></span>
    </header>
    <main>
      <ul class="title_ul">
        <li>
          总积分
          <br />
          <span>{{topList.integral_total}}</span>
        </li>
        <li class="mid">
          已消耗积分
          <br />
          <span>{{topList.integral_use}}</span>
        </li>
        <li>
          积分余额
          <br />
          <span>{{topList.integral}}</span>
        </li>
      </ul>
      <nav>
        <van-field
          readonly
          clickable
          clearable
          label="积分类型"
          right-icon="arrow-down"
          :value="label_status"
          placeholder="请选择"
          @click="showType = true"
        />
        <van-cell></van-cell>
      </nav>
      <van-popup v-model="showType" position="bottom">
        <van-picker
          show-toolbar
          :default-index="0"
          :columns="[{
            text: '全部',
            value: 0
          } ,{
            text: '消耗积分',
            value: 1
          }, {
            text: '积分奖励',
            value: 2
          }]"
          @cancel="showType = false"
          @confirm="(val) => {
            label_status = val.text;
            queryForm.status = val.value
            showType = false;
            getData();
          }"
        />
      </van-popup>

      <div class="is_loading" v-if="isloading">
        <van-loading type="spinner" />
      </div>
      <ul class="item_ul" v-else-if="dataList.length > 0">
        <li v-for="(item, index) in dataList" :key="index">
          <img src="@/assets/mine/score1.png" alt />
          <div>
            <span class="_title">
              <span>{{item.type}}-{{item.comment}}</span>
              <i :class="{'positive_num': item.integral_num > 0}">
                {{item.integral_num > 0 ? '+'+item.integral_num : item.integral_num}}
              </i>
            </span>
            <span class="_desc">订单号：{{item.order_sn}}</span>
            <span class="_time">{{item.create_time}}</span>
          </div>
        </li>
        <!-- <li>
          <img src="@/assets/mine/score2.png" alt />
          <div>
            <span class="_title">
              <span>奖励积分-返利任务兑换</span>
              <i>+ 12.00</i>
            </span>
            <span class="_desc">订单号：1234567890123456</span>
            <span class="_time">2019-08-13 00:00:00</span>
          </div>
        </li>-->
      </ul>
      <div v-else class="empty">
        <img src="@/assets/empty/img_jifenmingxi@2x.png" alt="" />
      </div>
    </main>
  </div>
</template> 
<script>
import { integraldetail, fundsummary } from "@/api/mine.js";

export default {
  // 资金明细
  name: "score",
  components: {},
  data() {
    return {
      label_status: '全部',
      queryForm: {
        status: "0",
        start_time: "",
        end_time: "",
        page_no: 1,
        page_size: 100
      },
      dataList: [],
      topList: [],

      isloading: false,
      showType: false,
      isVisible: false,
      myDate: null
    };
  },
  async mounted() {
    this.getData();
    let res1 = await fundsummary();
    if (res1 && res1.error.errno == 200) this.topList = res1.data;
  },
  methods: {
    async getData() {
      this.isloading = true
      let res = await integraldetail(this.queryForm);
      if (res && res.error.errno == 200) this.dataList = res.data;
      this.isloading = false
    },
    setChooseValue(param) {
      this.queryForm.start_time = param[0][3]
      this.queryForm.end_time = param[1][3]
      this.getData()
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
          text-align: center;
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
            .positive_num {
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