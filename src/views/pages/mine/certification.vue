<template>
  <div class="certification">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />实名认证
    </header>
    <main>
      <van-field v-model="form.a" label="注册账户" placeholder="请输入注册账户" />
      <van-cell class="_exchanger" title="性别">
        <van-radio-group v-model="form.b" :checked-color="`#ff5500`">
          <van-radio name="1">男</van-radio>
          <van-radio name="2">女</van-radio>
        </van-radio-group>
      </van-cell>
      <van-field v-model="form.c" label="年龄" placeholder="请输入年龄" />
      <van-field v-model="form.d" label="淘宝会员名" placeholder="请输入会员名" />
      <van-cell class="uploads" title="支付宝截图">
        <van-uploader v-model="fileList" multiple :max-count="1" />
      </van-cell>
      <van-cell>
        <div class="submit_btn">提交认证申请</div>
        <div class="_tips">打开手机支付宝登录支付宝 → 点击"我的" → 点击"昵称" → 截图(需要显示真实姓名和旺旺账号)</div>
      </van-cell>
    </main>
  </div>
</template> 
<script>
export default {
  // 实名认证
  name: "certification",
  components: {},
  data() {
    return {
      fileList: [],
      form: { a: "", b: "", c: "", d: "", e: "" }
    };
  },
  methods: {}
};
</script>
<style lang="scss" scope>
.certification {
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
        flex: 2.7;
        .van-radio-group {
          display: flex;
          .van-radio {
            flex: 1;
          }
        }
      }
    }
    .uploads {
      .van-cell__value {
        flex: 3;
        text-align: left;
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
    ._tips {
      font-size: 12px;
      color: #fa3950;
    }
  }
}
</style>