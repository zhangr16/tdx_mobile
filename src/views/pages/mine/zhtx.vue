<template>
  <div class="zhtx">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />账户提现
    </header>
    <main>
      <van-field v-model="form.a" label="可提现金额" placeholder readonly />
      <van-cell class="_exchanger" title="提现方式">
        <van-radio-group v-model="form.b" :checked-color="`#ff5500`">
          <van-radio name="1">银行卡</van-radio>
        </van-radio-group>
      </van-cell>
      <van-field v-model="form.b" label="姓名" placeholder="请输入姓名" />
      <van-field v-model="form.c" label="所属银行" placeholder="请输入所属银行" />
      <van-field v-model="form.d" label="银行卡号" placeholder="请输入银行卡号" />
      <van-field v-model="form.e" label="提现金额" placeholder="请输入提现金额" />
      <van-cell>
        <div class="submit_btn">提交申请</div>
      </van-cell>
    </main>
    <ul>
      <li>用户提现相关说明</li>
      <li>1、平台暂时只支持提现到银行卡账户</li>
      <li>2、在国家法定节假日和双休日期间，用户可以申请提现，但会在假期后第一个工作日予以处理。由此造成的不便，请多多谅解</li>
      <li>3、提现需要2-3个工作日安排提现打款</li>
      <li>4、提现金额不得低于1元，提现的所有手续费均由平台承担</li>
      <li>5、如有相关问题，请联系平台客服咨询</li>
    </ul>
  </div>
</template> 
<script>
export default {
  // 定制评价攻略
  name: "zhtx",
  components: {},
  data() {
    return {
      form: { a: "", b: "", c: "", d: "", e: "" }
    };
  },
  methods: {}
};
</script>
<style lang="scss" scope>
.zhtx {
  position: relative;
  width: 100%;
  padding-top: 50px;
  min-height: 100vh;
  background: #fff;
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
      position: absolute;
      left: 15px;
      top: 10px;
      font-size: 20px;
    }
  }
  & > main {
    width: 100%;
    background: #fff;
    ._exchanger {
      display: flex;
      .van-cell__value {
        flex: 2.8;
        .van-radio-group {
          display: flex;
          .van-radio {
            flex: 1;
          }
        }
      }
    }
    .submit_btn {
      margin: 10px 0;
      color: #fff;
      text-align: center;
      height: 44px;
      line-height: 44px;
      background-image: linear-gradient(-90deg, #fc5403 0%, #fa8e05 100%);
      border-radius: 22px;
    }
  }

  & > ul {
    background-color: #fff8f4;
    padding: 10px 15px;
    li {
      font-size: 12px;
      color: #666;
      line-height: 1.5;
      padding-bottom: 10px;
      &:first-child {
        font-size: 13px;
        font-weight: bold;
      }
    }
  }
}
</style>