<template>
  <div class="xsgl">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />新手攻略
    </header>
    <main>
      <van-cell title="1、注册账号" label="邀请码需介绍人提供，在介绍人的会员中心可以看到" />
      <van-cell title="2、实名认证" label="会员中心-“实名认证”模块里填写实名，需要提供：真实姓名、淘宝账号、对应支付宝截图" is-link to="certification" />
      <van-cell title="3、联系客服等待实名认证通过" />
      <van-cell title="4、绑定银行卡" label="会员中心-绑定银行卡模块填写对应信息" is-link to="bindCard" />
      <van-cell title="5、通过审核选取任务" label="进入首页领取任务，限量免单模块为免单任务；熊抢购模块为真实购买" is-link to="index" />
      <van-cell title="6、任务中心点击“开始任务”" label="查看任务流程及注意事项，将提供的关键词复制到淘宝首页搜索，找不到对应商品联系客服可更换关键词" />
      <van-cell title="7、验证链接" label="找到对应宝贝后复制宝贝链接在平台验证" />
      <van-cell title="8、淘宝付款" label="验证成功后浏览宝贝，拍下与平台价格一致的商品，价格不一致可按照任务金额提交后在平台申请售后" />
      <van-cell title="9、提交订单号" label="将淘宝的订单编号复制，粘贴到平台验证链接的下方，填写金额，点击提交" />
      <van-cell title="10、收货好评" label="收到礼品后，在淘宝收货好评" />
      <van-cell title="11、上传好评截图" label="在任务中心-“已提交”-点击“上传好评截图”" />
      <van-cell title="12、等待商家审核" label="审核时间最长为36小时" />
      <van-cell title="13、返本金及提现" label="审核完成，返还本金到余额，点击申请提现" />
      <van-cell title="14、对本操作有任何疑问均可联系淘小熊客服哦"  />
    </main>
  </div>
</template> 
<script>
export default {
  // 定制评价攻略
  name: "xsgl",
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
.xsgl {
  position: relative;
  width: 100%;
  padding-top: 50px;
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
    background: #fff;
    .van-cell {
      font-size: 14px;
      display: flex;
      align-items: center;
      min-height: 55px;
      padding: 5px 15px;
      .van-cell__label {
        font-size: 12px;
        margin-top: 0;
        i {
          color: #fa2a44;
        }
      }
    }
  }
}
</style>