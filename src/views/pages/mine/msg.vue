<template>
  <div class="_msg">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />消 息
    </header>
    <ul>
      <li v-for="item in 5" :key="item">
        <img src="@/assets/mine/msg.png" alt="" />
        <div>
          <span class="_title">奖励金打款通知</span>
          <span class="_desc">订单号为1234567890123456在任务中使用花呗，注意不要违规</span>
          <span class="_time">2019-08-13 00:00:00</span>
        </div>
      </li>
    </ul>
  </div>
</template> 
<script>
export default {
  // 定制评价攻略
  name: "msg",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scope>
._msg {
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
  }

  & > ul {
    li {
      background: #fff;
      color: #666;
      line-height: 1.5;
      padding: 15px;
      border-bottom: 1px solid #e5e5e5;
      display: flex;
      & > img {
        width: 30px;
        height: 30px;
        margin-right: 5px;
      }
      & > div {
        flex: 1;
        display: flex;
        flex-direction: column; 
        ._title {
          color:#333;
          font-size: 14px;
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
</style>