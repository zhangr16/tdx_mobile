<template>
  <div class="dzpjgl">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />定制评价攻略
    </header>
    <main>
      <van-cell>
        1、收到定制评价的短信提醒后进入
        <i>任务中心</i>
        <img class="dzz" src="@/assets/dzpjgl/dzz1.png" alt="" />
      </van-cell>
      <van-cell>
        2、点击
        <i>已提交</i>，找到下方有一行红字的任务
        <img class="dzz" src="@/assets/dzpjgl/dzz2.png" alt="" />
      </van-cell>
      <van-cell>3、收到礼品后，
        <i>点击红字</i>查看商家定制文字及图片，按照要求评价</van-cell>
        <img class="dzz" src="@/assets/dzpjgl/dzz3.png" alt="" />
      <van-cell>
        4、评价完之后点击
        <i>提交好评截图</i>
        <img class="dzz" src="@/assets/dzpjgl/dzz4.png" alt="" />
      </van-cell>
      <van-cell>
        5、商家确认无误后审核通过，平台奖励
        <i>1元</i>到您的余额供您提现，可在<i>定制金返款</i>查询记录
        <img class="dzz" src="@/assets/dzpjgl/dzz5.png" alt="" />
        <img class="dzz" src="@/assets/dzpjgl/dzz6.png" alt="" />
      </van-cell>
      <van-cell>
        <div>6、温馨提示</div>
        <ul class="tips">
          <li>① 如未按商家要求评价，评价将被商家退回并取消奖励金</li>
          <li>② 如定制评价任务超过<i>10天</i>仍未完成将无法继续抢单哦</li>
        </ul>
      </van-cell>
      <van-cell>
        <span class="scale">如有问题，可随时联系小熊客服人员！</span>
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
  .dzz {
    width: 100%;
  }
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
      position: absolute;
      left: 15px;
      top: 10px;
      font-size: 20px;
    }
  }
  & > main {
    width: 100%;
    .van-cell {
      background: #fff;
      margin-bottom: 10px;
      font-size: 14px;
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