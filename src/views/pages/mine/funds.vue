<template>
  <div class="funds">
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
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />资金明细
      <span class="iconfont iconrili right_date" @click="isVisible = true"></span>
    </header>
    <main>
      <ul class="title_ul">
        <li>
          总收入
          <br />
          <span>¥{{topList.income}}</span>
        </li>
        <li class="mid">
          已提现
          <br />
          <span>¥{{topList.withdraw}}</span>
        </li>
        <li>
          余额
          <br />
          <span>¥{{topList.balance}}</span>
        </li>
      </ul>

      <nav>
        <van-field
          readonly
          clickable
          clearable
          label="资金类型"
          right-icon="arrow-down"
          :value="type_label"
          placeholder="请选择"
          @click="showType = true"
        />
        <van-field
          v-if="type_label == '提现记录'"
          readonly
          clickable
          clearable
          label="资金状态"
          right-icon="arrow-down"
          :value="status_label"
          placeholder="请选择"
          @click="showStatus = true"
        />
      </nav>

      <van-popup v-model="showType" position="bottom">
        <van-picker
          show-toolbar
          :default-index="4"
          :columns="[{text: '任务金额', value: 1}, {text: '定制金额', value: 2}, {text: '售后金额', value: 3}, {text: '提现记录', value: 4}]"
          @cancel="showType = false"
          @confirm="(val) => { type_label = val.text; queryForm.type = val.value; showType = false; getData() }"
        />
      </van-popup>
      <van-popup v-model="showStatus" position="bottom">
        <van-picker
          show-toolbar
          :default-index="0"
          :columns="[{text: '全部', value: 0}, {text: '待打款', value: 2}, {text: '已打款', value: 3}]"
          @cancel="showStatus = false"
          @confirm="(val) => { status_label = val.text; queryForm.status = val.value; showStatus = false; getData() }"
        />
      </van-popup>

      <div class="is_loading" v-if="isloading">
        <van-loading type="spinner" />
      </div>
      <ul class="item_ul" v-else-if="dataList.length > 0">
        <li v-for="(item, index) in dataList" :key="index" @click="goDesc(item.id)">
          <img src="@/assets/mine/money1.png" alt />
          <div>
            <span class="_title">
              <span>
                {{item.type}}<template v-if="queryForm.type == 4">--{{item.status}}</template>
              </span>
              <i>{{item.money > 0 ? '+' + item.money : item.money}}</i>
            </span>
            <span class="_desc" v-if="queryForm.type != 4">{{item.comment}}</span>
            <span class="_time">{{item.time}}</span>
          </div>
        </li>
      </ul>
      <div v-else class="empty">
        <img src="@/assets/empty/img_zijinmingxi@2x.png" alt />
      </div>
    </main>
  </div>
</template> 
<script>
import { transactionDetail, fundsummary } from "@/api/mine.js";

export default {
  // 资金明细
  name: "funds",
  components: {},
  data() {
    return {
      type_label: "提现记录",
      status_label: "全部",
      queryForm: {
        status: "0",
        type: "4",
        start_time: "",
        end_time: "",
        page_no: 1,
        page_size: 100
      },
      isloading: true,
      showStatus: false,
      showType: false,
      isVisible: false,
      myDate: null,

      topList: [],
      dataList: []
    };
  },
  async mounted() {
    this.getData();
    let res1 = await fundsummary();
    if (res1 && res1.error.errno == 200) this.topList = res1.data;
  },
  methods: {
    async getData() {
      this.isloading = true;
      let res = await transactionDetail(this.queryForm);
      if (res && res.error.errno == 200) this.dataList = res.data;
      this.isloading = false;
    },
    goDesc(val) {
      if(this.queryForm.type == 4) this.$router.push('/fundDesc?id=' + val)
    },
    setChooseValue(param) {
      this.queryForm.start_time = param[0][3];
      this.queryForm.end_time = param[1][3];
      this.getData();
    }
  }
};
</script>
<style lang="scss" scope>
.funds {
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
      margin: 15px 0;
      background: #fff;
      display: flex;
      & > .van-cell {
        width: 50%;
        // flex: 1;
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
          padding: 10px 0;
          & > span {
            padding: 1px 0;
          }
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