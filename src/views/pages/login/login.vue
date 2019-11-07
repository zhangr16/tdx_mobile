<template>
  <div class="login">
    <div class="login_wrapper">
      <header>
        <div class="icon">
          <van-icon name="arrow-left" @click="$router.push('/mine')" />
        </div>
        <div class="text">登 录</div>
      </header>
      <section>
        <div class="login_main">
          <van-field v-model.trim="form.user" placeholder="请输入账号" />
          <van-field v-model.trim="form.pwd" placeholder="请输入密码" type="password">
            <template slot="right-icon">
              <span class="tips">忘记密码</span>
            </template>
          </van-field>
          <div class="l_btn" @click="handleLogin">登 录</div>
          <div class="r_btn" @click="$router.push('/register')">注 册</div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import {Toast} from 'vant';

// 登录
export default {
  name: "login",
  data() {
    return {
      form: {
        user: "18827035411",
        pwd: "123456",
        platform: '2c'
      }
    };
  },
  methods: {
    handleLogin() {
      this.$store.dispatch("Login", this.form).then(res => {
        if (res) {
          this.$router.push({ path: "/" });
          Toast.success("登录成功！");
        }
      });
    }
  }
};
</script>
<style lang="scss" scope>
.login {
  width: 100%;
  background: #fff;
  .login_wrapper {
    background-image: url("../../../assets/mine/login_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 40%;
    min-height: 100vh;
    & > header {
      color: #fff;
      .icon {
        font-size: 20px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 5px 15px;
      }
      .text {
        font-size: 24px;
        height: 60px;
        line-height: 60px;
        text-align: center;
      }
    }
    & > section {
      display: flex;
      justify-content: center;
      align-items: center;
      & > .login_main {
        width: 345px;
        background-color: #fff;
        box-shadow: 0px 1px 16px 0px rgba(211, 69, 82, 0.2);
        border-radius: 20px;
        padding: 10px 30px;
        // 忘记密码
        .tips {
          font-size: 12px;
          color: #ff5500;
        }
        .van-cell {
          padding-top: 20px;
          &::after {
            position: absolute;
            box-sizing: border-box;
            content: " ";
            pointer-events: none;
            right: 0;
            bottom: 0;
            left: 0.42667rem;
            border-bottom: 0.02667rem solid #ebedf0;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
          }
        }
        .l_btn,
        .r_btn {
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 18px;
          border-radius: 25px;
        }
        .l_btn {
          margin-top: 45px;
          color: #fff;
          background: linear-gradient(-90deg, #ff763b 0%, #ffa06b 100%);
        }
        .r_btn {
          margin: 20px 0;
          border: solid 1px #dddddd;
        }
      }
    }
  }
}
</style>