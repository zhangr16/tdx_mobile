<template>
  <div class="findPwd">
    <div class="register_wrapper">
      <header>
        <div class="icon"></div>
        <div class="text">找回密码</div>
      </header>
      <section>
        <div class="register_main">
          <van-field
            clearable
            v-model="userForm.mobile"
            placeholder="请输入手机号"
            @input="validateMobile"
            :error-message="validateMsg.mobile"
          />
          <van-field v-model="userForm.sms_code" clearable placeholder="验证码">
            <van-button
              v-if="showCount"
              class="tips"
              slot="button"
              size="small"
              type="primary"
              @click="handleSendVerify"
            >获取验证码</van-button>
            <van-button
              v-else
              class="tips"
              slot="button"
              size="small"
              type="primary"
            >重新发送({{countNum}}s)</van-button>
          </van-field>
          <van-field
            clearable
            type="password"
            v-model="userForm.pwd"
            placeholder="请输入密码"
            @input="validatePassword"
            :error-message="validateMsg.pwd"
          />
          <van-field
            clearable
            type="password"
            v-model="userForm.re_password"
            placeholder="再次输入登录密码"
            @input="validateRepassword"
            :error-message="validateMsg.re_password"
          />
          <div class="l_btn" @click="handleSubmit()">找回密码</div>
          <div class="r_btn" @click="$router.go(-1)">取 消</div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { sendVerify } from "@/api/index.js";
import { findPwd } from "@/api/mine.js";
// 找回密码
export default {
  name: "findPwd",
  data() {
    return {
      timer: null,
      countNum: "", // 倒计时
      showCount: true,

      userForm: {
        mobile: "",
        pwd: "",
        re_password: "",
        platform: "2c"
      },
      validateMsg: {
        mobile: "",
        pwd: "",
        re_password: ""
      }
    };
  },
  methods: {
    // 倒计时计算
    countVerifyNum() {
      if (!this.timer) {
        this.countNum = 60;
        this.showCount = false;
        this.timer = setInterval(() => {
          if (this.countNum > 1 && this.countNum <= 60) {
            this.countNum--;
          } else {
            this.showCount = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    validateMobile() {
      if (this.userForm.mobile == "") {
        this.validateMsg.mobile = "请输入手机号码";
      } else if (!/^1[3456789]\d{9}$/.test(this.userForm.mobile)) {
        this.validateMsg.mobile = "请输入11位手机号码";
      } else {
        this.validateMsg.mobile = "";
        return true;
      }
    },
    validatePassword() {
      if (this.userForm.pwd.length < 5 || this.userForm.pwd.length > 13) {
        this.validateMsg.pwd = "密码长度不能小于5位或大于13位";
      } else if (escape(this.userForm.pwd).indexOf("%u") >= 0) {
        this.validateMsg.pwd = "密码不能有中文";
      } else {
        if (this.userForm.re_password != "") {
          this.validateRepassword();
        }
        this.validateMsg.pwd = "";
        return true;
      }
    },
    validateRepassword() {
      if (
        this.userForm.re_password.length < 5 ||
        this.userForm.re_password.length > 13
      ) {
        this.validateMsg.re_password = "密码长度不能小于5位或大于13位";
      } else if (escape(this.userForm.re_password).indexOf("%u") >= 0) {
        this.validateMsg.re_password = "密码不能有中文";
      } else {
        if (this.userForm.re_password != this.userForm.pwd) {
          this.validateMsg.re_password = "两次输入密码不一致";
        } else {
          this.validateMsg.re_password = "";
          return true;
        }
      }
    },
    async handleSendVerify() {
      this.validateMobile();

      if (this.validateMsg.mobile == "") {
        let queryObj = {
          mobile: this.userForm.mobile,
          platform: "2c",
          is_repeat: "false",
          type: 3
        };
        let res = await sendVerify(queryObj);
        if (res && res.error.errno == 200) {
          this.$toast.success("验证码发送成功！请查看");
          this.countVerifyNum();
        }
      }
    },
    async handleSubmit() {
      this.validateMobile();
      this.validatePassword();
      this.validateRepassword();
      if (
        this.validateMsg.mobile == "" &&
        this.validateMsg.pwd == "" &&
        this.validateMsg.re_password == ""
      ) {
        let res = await findPwd(this.userForm);
        if (res && res.error.errno == 200) {
          this.$toast.success("找回密码成功！");
          setTimeout(() => {
            this.$router.push("/login");
          }, 500);
        }
      }
    }
  }
};
</script>
<style lang="scss" scope>
.findPwd {
  width: 100%;
  background: #fff;
  .register_wrapper {
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
      & > .register_main {
        width: 345px;
        background-color: #fff;
        box-shadow: 0px 1px 16px 0px rgba(211, 69, 82, 0.2);
        border-radius: 20px;
        padding: 10px 30px;
        // 忘记密码
        .tips {
          background-color: #ff5500;
          border: none;
        }
        .van-cell {
          input {
            padding: 10px 0;
          }
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
          margin-top: 25px;
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