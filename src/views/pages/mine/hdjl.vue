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
        <van-tabs v-model="activeTab">
          <van-tab v-for="tab in tabs" :title="tab" :key="tab"></van-tab>
        </van-tabs>
      </nav>
      <div class="is_loading" v-if="isloading">
        <van-loading type="spinner" />
      </div>
      <ul class="table_ul" v-else-if="entity.length > 0">
        <li>
          <div class="time">日期</div>
          <div class="type">活动类型</div>
          <div class="order">订单号</div>
          <div class="amount">奖励金额</div>
        </li>
        <li v-for="(item, index) in entity" :key="index">
          <div class="time">{{item.time}}</div>
          <div class="type">{{item.type}}</div>
          <div class="order">{{item.order_sn}}</div>
          <div class="amount">¥{{item.price}}</div>
        </li>
      </ul>
      <div v-else style="text-align:center">
        <img src="@/assets/empty/img_qinyoutuanrenwu@2x.png" alt="" />
      </div>
    </main>
  </div>
</template> 
<script>
import { activityAward } from "@/api/mine.js";

export default {
  // 活动奖励
  name: "hdjl",
  components: {},
  data() {
    return {
      isloading: false,
      activeTab: 0,
      tabs: ["亲友团奖励", "派单奖励", "拉新奖励", "推荐奖励"],
      isVisible: false,
      queryForm: {
        type: 1,
        start_time: "",
        end_time: ""
      },
      myDate: null,
      entity: {}
    };
  },
  mounted() {
    this.getData();
  },
  watch: {
    activeTab: function(val) {
      console.log(val);
      this.queryForm.type = val + 1;
      this.getData();
    }
  },
  methods: {
    async getData() {
      this.isloading = true
      let res = await activityAward(this.queryForm);
      if (res && res.error.errno == 200) this.entity = res.data;
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
.hdjl {
  position: relative;
  width: 100%;
  padding-top: 50px;
  min-height: 100vh;
  & > header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
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