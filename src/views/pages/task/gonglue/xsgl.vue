<template>
  <div class="xsgl">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />新手攻略
    </header>
    <main>
      <van-cell title="1、注册账号" />
      <van-cell title="2、实名认证" label="需要提供：真实姓名、淘宝账号、对应支付宝截图" is-link />
      <van-cell title="3、等待实名认证通过" />
      <van-cell title="4、进入宝贝大厅挑选商品" is-link to="index" />
      <van-cell title="5、商品详情页" />
      <van-cell title="6、商品详情页点击立即购买">
        <template slot="label">
          按照任务流程输入关键词，找到后加<i>购物车</i>并付款
        </template>
      </van-cell>
      <van-cell title="7、开始做任务" label="在淘宝订单页复制订单号并在平台提交" />
      <van-cell title="8、提交订单号">
        <template slot="label">
         等待<i>两天</i>后出现上传好评的入口
        </template>
      </van-cell>
      <van-cell title="9、等待买家发货" >
        <template slot="label">
         收到宝贝后对<i>任务宝贝</i>进行评价
        </template>
      </van-cell>
      <van-cell title="10、五星10字以上好评" />
      <van-cell title="11、等待商家审核" />
      <van-cell title="12、商家审核通过" />
      <van-cell title="13、系统返任务款">
        <template slot="label">
         系统将购物款返还到您平台的<i>账单</i>里
        </template>
      </van-cell>
      <van-cell title="14、绑定提现银行卡" is-link />
      <van-cell title="15、申请提现" is-link />
      <van-cell title="16、24:00前平台打款到银行卡" />
      <van-cell title="17、完成" />
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
    background: #fff;
    .van-cell {
      font-size: 13px;
      .van-cell__label {
        font-size: 12px;
        i {
          color:#fa2a44;
        }
      }
    }
  }
}
</style>