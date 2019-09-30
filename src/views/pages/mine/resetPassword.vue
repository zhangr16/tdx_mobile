<template>
  <div class="resetPassword">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />修改密码
    </header>
    <main>
      <van-field v-model="form.b" type="password" label="原始密码" placeholder="请输入原始密码" />
      <van-field v-model="form.c" type="password" label="新登录密码" placeholder="请输入新登录密码" />
      <van-field v-model="form.d" type="password" label="确认密码" placeholder="请确认密码" />
      <van-cell>
        <div class="submit_btn">提交修改</div>
      </van-cell>
    </main>
  </div>
</template> 
<script>
export default {
  // 定制评价攻略
  name: "resetPassword",
  components: {},
  data() {
    return {
      form: { b: "", c: "", d: "", e: "" }
    };
  },
  methods: {}
};
</script>
<style lang="scss" scope>
.resetPassword {
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
    background: #fff;
    text-align: center;
    font-size: 17px;
    .left_arrow {
      position: absolute;
      left: 15px;
      top: 10px;
      font-size: 20px
    }
  }
  & > main {
    width: 100%;
    background: #fff;
    .van-cell {
      padding: 20px 25px;
    }
    .submit_btn {
      margin: 10px 0;
      color: #fff;
      text-align: center;
      height: 44px;
      line-height: 44px;
      background-color: #76cf7b;
      border-radius: 22px;
    }
  }
}
</style>