<template>
  <div class="login">
    <div class="login_wrapper">
      <header>
        <div class="icon">
          <van-icon name="arrow-left" @click="$router.push('/index')" />
        </div>
        <div class="text">登 录</div>
      </header>
      <section>
        <div class="login_main">
          <van-field
            clearable
            v-model.trim="userForm.user"
            placeholder="请输入用户名"
            @input="validateMobile"
            :error-message="validateMsg.user"
          />
          <van-field
            clearable
            v-model.trim="userForm.pwd"
            placeholder="请输入密码"
            type="password"
            @input="validatePassword"
            :error-message="validateMsg.pwd"
          >
            <template slot="right-icon">
              <span class="tips" @click="$router.push('/findPwd')">忘记密码</span>
            </template>
          </van-field>
          <div class="l_btn" @click="handleLogin()">登 录</div>
          <div class="r_btn" @click="$router.push('/register')">注 册</div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
// 登录
export default {
  name: "login",
  data() {
    return {
      userForm: {
        user: "",
        pwd: "",
        platform: "2c"
      },
      validateMsg: {
        user: "",
        pwd: ""
      }
    };
  },
  methods: {
    validateMobile() {
      if (this.userForm.user == "") {
        this.validateMsg.user = "请输入用户名";
      } else {
        this.validateMsg.user = "";
        return true;
      }
    },
    validatePassword() {
      if (this.userForm.pwd.length < 5 || this.userForm.pwd.length > 13) {
        this.validateMsg.pwd = "密码长度不能小于5位或大于13位";
      } else if (escape(this.userForm.pwd).indexOf("%u") >= 0) {
        this.validateMsg.pwd = "密码不能有中文";
      } else {
        this.validateMsg.pwd = "";
        return true;
      }
    },
    handleLogin() {
      this.validateMobile();
      this.validatePassword();
      if (this.validateMsg.user == "" && this.validateMsg.pwd == "") {
        this.$store.dispatch("Login", this.userForm).then(res => {
          if (res) {
            this.$router.push({ path: "/" });
            this.$toast.success("登录成功！");
          }
        });
      }
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
          padding-left: 10px;
          font-size: 14px;
          color: #ff5500;
        }
        .van-cell {
          padding-right: 0;
          input {
            padding: 10px 0;
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