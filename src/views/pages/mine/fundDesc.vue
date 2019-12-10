<template>
  <div class="fundDesc">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />提现记录详情
    </header>
    <main>
      <nav>
        总金额
        <span>¥{{entitys.amount}}</span>
      </nav>
      <div class="is_loading" v-if="isloading">
        <van-loading type="spinner" />
      </div>
      <ul class="table_ul" v-else-if="entitys.data.length > 0">
        <li>
          <div class="time">日期</div>
          <div class="type">任务类型</div>
          <div class="order">订单号</div>
          <div class="amount">任务金额</div>
        </li>
        <li v-for="(item, index) in entitys.data" :key="index">
          <div class="time">{{item.create_time}}</div>
          <div class="type">{{item.type}}</div>
          <div class="order" @click="showOrderSn(item.order_sn)">{{item.order_sn}}</div>
          <div class="amount">{{item.money}}</div>
        </li>
      </ul>
      <div v-else class="empty">
        <img src="@/assets/empty/img_zijinmingxi@2x.png" alt />
      </div>
    </main>

    <van-popup v-model="showDetail">{{content}}</van-popup>
  </div>
</template> 
<script>
import { withdrawdetail } from "@/api/mine.js";

export default {
  // 资金明细
  name: "fundDesc",
  components: {},
  data() {
    return {
      isloading: false,
      showDetail: false,
      content: "",
      entitys: {
        data: [],
        amount: 0
      }
    };
  },
  async mounted() {
    this.isloading = true
    let res = await withdrawdetail({
      id: this.$route.query.id,
      page_no: 1,
      page_size: 100
    });
    if(res && res.error.errno == 200) this.entitys = res
    this.isloading = false
  },
  methods: {
    showOrderSn(val) {
      if(val.length > 10) {
        this.showDetail = true
        this.content = val
      }
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
          color: #333;
          font-weight: bold;
        }
        & > div {
          flex: 1;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;/*文字隐藏后添加省略号*/
          white-space: nowrap;/*强制不换行*/
        }
      }
    }
  }

  .van-popup {
    padding: 50px;
    font-size: 16px;
  }
}
</style>