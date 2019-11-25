<template>
  <div class="task">
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
      任务中心
      <span class="iconfont iconrili right_date" @click="isVisible = true"></span>
    </header>
    <main>
      <!-- 限量免单，熊抢购title -->
      <div class="top2">
        <span :class="{'is_active': isActive == 1}" @click="handleTabClick(1)">限量免单</span>
        <i></i>
        <span :class="{'is_active': isActive == 2}" @click="handleTabClick(2)">熊抢购</span>
      </div>
      <!-- tabber栏 -->
      <van-tabs v-model="activeTab">
        <van-tab title="全部"></van-tab>
        <van-tab title="已领取"></van-tab>
        <van-tab title="已提交"></van-tab>
        <van-tab title="待审核"></van-tab>
        <van-tab title="已完成"></van-tab>
        <van-tab title="售后"></van-tab>
      </van-tabs>
      <!-- 攻略 -->
      <div class="strategy">
        <i></i>
        <span @click="$router.push('/xsgl')" style="border-right:none">新手攻略</span>
        <span @click="$router.push('/dzpjgl')">定制评价攻略</span>
        <i></i>
      </div>
      <!-- 任务卡 -->
      <div class="no_data" v-if="isloading">
        <van-loading type="spinner" />
      </div>
      <ul class="ul_items" v-else-if="taskList.length > 0">
        <li v-for="(item, key) in taskList" :key="key">
          <itemTask :entity="item" @update="getData" />
        </li>
      </ul>
      <div v-else class="empty">
        <img src="@/assets/empty/img_renwuzhongxin@2x.png" alt="" />
      </div>
    </main>
  </div>
</template>

<script>
import itemTask from "@/components/item_task";
import { order_list } from "@/api/index";

export default {
  name: "task",
  components: { itemTask },
  data() {
    return {
      isloading: false,
      isActive: 1,
      activeTab: 0,
      isVisible: false,
      myDate: null,

      formData: {
        task_start: "",
        task_end: "",
        page_num: 100,
        page: 1,
        order_type: "1",
        status: "0"
      },
      taskList: []
    };
  },
  watch: {
    isActive: function(val) {
      if(val) this.formData.order_type = val + "";
    },
    activeTab: function(val) {
      this.formData.status = val;
      this.getData()
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    setChooseValue(param) {
      this.formData.task_start = param[0][3]
      this.formData.task_end = param[1][3]
      this.getData();
    },
    async getData() {
      this.isloading = true
      let res = await order_list(this.formData);
      if(res && res.error.errno == 200)  this.taskList = res.orderList || []
      this.isloading = false
    },
    handleTabClick(num) {
      if (num != this.isActive) {
        this.isActive = num;
        this.getData();
      }
    }
  }
};
</script>
<style lang="scss" scope>
.task {
  width: 100%;
  overflow: auto;
  position: relative;
  & > header {
    width: 100%;
    position: fixed;
    z-index: 999;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(-90deg, #fc5303 0%, #fa8f05 100%);
    text-align: center;
    color: #fff;
    font-size: 17px;
    .right_date {
      font-size: 20px;
      position: absolute;
      right: 15px;
    }
  }
  & > main {
    margin-top: 40px;
    width: 100%;
    padding: 10px 15px;
    .top2 {
      width: 100%;
      background: #fff;
      display: flex;
      font-size: 14px;
      align-items: center;
      margin-bottom: 10px;
      .is_active {
        border-top: 2px solid #ff5500;
      }
      span {
        flex: 1;
        text-align: center;
        padding: 8px 0;
      }
      i {
        width: 1px;
        height: 12px;
        background: #ccc;
      }
    }
    & > .van-tabs .van-tab {
      font-size: 14px;
    }
    .strategy {
      width: 100%;
      display: flex;
      color: #fb2742;
      background: #fff;
      padding: 15px 0;
      font-size: 14px;
      i {
        width: 10px;
      }
      span {
        flex: 1;
        height: 26px;
        line-height: 26px;
        text-align: center;
        border: 1px solid #fb2742;
      }
    }
    .ul_items {
      background-color: #fff;
      & > li {
        width: 100%;
        box-shadow: 0px 0px 9px 0px rgba(251, 103, 4, 0.17);
        margin-bottom: 15px;
      }
    }
  }
}
</style>
