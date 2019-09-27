<template>
  <div class="dzpjgl">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />定制评价攻略
    </header>
    <main>
      <van-cell>
        1、收到定制评价的短信提醒后进入
        <i>任务中心</i>
      </van-cell>
      <van-cell>
        2、点击
        <i>定制任务</i>，找到需要定制评价的订单
      </van-cell>
      <van-cell>3、查看评价内容，按商家要求填写评价及晒图</van-cell>
      <van-cell>
        4、评价完之后提交
        <i>评价截图</i>
      </van-cell>
      <van-cell>
        5、卖家确认无误后，平台奖励
        <i>1元</i>到您的账户中供您提现
      </van-cell>
      <van-cell>
        <div>6、温馨提示</div>
        <ul class="tips">
          <li>① 如未按卖家要求评价，评价将被商家退回并取消奖励金</li>
          <li>② 如果定制评价任务超过<i>10天</i>仍未完成将无法抢单哦</li>
        </ul>
      </van-cell>
      <van-cell>
        <span class="scale">如有问题可以随时联系我们的客服人员！</span>
      </van-cell>
    </main>
  </div>
</template> 
<script>
export default {
  // 定制评价攻略
  name: "dzpjgl",
  components: {},
  data() {
    return {
      fileList: [],
      form: { a: "", b: "" }
    };
  },
  methods: {
    afterRead(v) {
      console.log(v);
    }
  }
};
</script>
<style lang="scss" scope>
.dzpjgl {
  position: relative;
  width: 100%;
  padding-top: 50px;
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
    font-size: 15px;
    .left_arrow {
      position: absolute;
      left: 15px;
      top: 13px;
    }
  }
  & > main {
    width: 100%;
    .van-cell {
      background: #fff;
      margin-bottom: 10px;
      font-size: 13px;
      i {
        color: #fa2a44;
      }
      .scale {
        font-size: 12px;
        color: #fa2a44;
      }
      .tips {
        li {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>