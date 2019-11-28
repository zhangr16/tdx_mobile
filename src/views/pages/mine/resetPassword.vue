<template>
  <div class="resetPassword">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />修改密码
    </header>
    <main>
      <van-field
        clearable
        v-model.trim="userForm.old_pwd"
        type="password"
        label="原始密码"
        placeholder="请输入原始密码"
        @input="validateOldpassword"
        :error-message="validateMsg.old_pwd"
      />
      <van-field
        clearable
        v-model.trim="userForm.new_pwd"
        type="password"
        label="新登录密码"
        placeholder="请输入新登录密码"
        @input="validatePassword"
        :error-message="validateMsg.new_pwd"
      />
      <van-field
        clearable
        v-model.trim="userForm.re_pwd"
        type="password"
        label="确认密码"
        placeholder="请确认密码"
        @input="validateRepassword"
        :error-message="validateMsg.re_pwd"
      />
      <van-cell>
        <div class="submit_btn" @click="handleSubmit">提交修改</div>
      </van-cell>
    </main>
  </div>
</template> 
<script>
import { modifypwd } from "@/api/mine.js";

export default {
  // 重置密码
  name: "resetPassword",
  components: {},
  data() {
    return {
      userForm: {
        old_pwd: "",
        new_pwd: "",
        re_pwd: "",
        platform: "2c"
      },
      validateMsg: {
        old_pwd: "",
        new_pwd: "",
        re_pwd: ""
      }
    };
  },
  methods: {
    // 验证原始密码
    validateOldpassword() {
      if (
        this.userForm.old_pwd.length < 5 ||
        this.userForm.old_pwd.length > 13
      ) {
        this.validateMsg.old_pwd = "原密码长度不能小于5位或大于13位";
      } else if (escape(this.userForm.old_pwd).indexOf("%u") >= 0) {
        this.validateMsg.old_pwd = "原密码不能有中文";
      } else {
        this.validateMsg.old_pwd = "";
        return true;
      }
    },
    validatePassword() {
      if (
        this.userForm.new_pwd.length < 5 ||
        this.userForm.new_pwd.length > 13
      ) {
        this.validateMsg.new_pwd = "新密码长度不能小于5位或大于13位";
      } else if (escape(this.userForm.new_pwd).indexOf("%u") >= 0) {
        this.validateMsg.new_pwd = "新密码不能有中文";
      } else if(this.userForm.new_pwd == this.userForm.old_pwd) {
        this.validateMsg.new_pwd = "新旧密码不能相同";
      } else {
        if (this.userForm.re_pwd != "") {
          this.validateRepassword();
        }
        this.validateMsg.new_pwd = "";
        return true;
      }
    },
    validateRepassword() {
      if (this.userForm.re_pwd.length < 5 || this.userForm.re_pwd.length > 13) {
        this.validateMsg.re_pwd = "密码长度不能小于5位或大于13位";
      } else if (escape(this.userForm.re_pwd).indexOf("%u") >= 0) {
        this.validateMsg.re_pwd = "密码不能有中文";
      } else {
        if (this.userForm.re_pwd != this.userForm.new_pwd) {
          this.validateMsg.re_pwd = "两次输入密码不一致";
        } else {
          this.validateMsg.re_pwd = "";
          return true;
        }
      }
    },
    async handleSubmit() {
      this.validateOldpassword();
      this.validatePassword();
      this.validateRepassword();
      if (
        this.validateMsg.old_pwd == "" &&
        this.validateMsg.new_pwd == "" &&
        this.validateMsg.re_pwd == ""
      ) {
        let res = await modifypwd(this.userForm);
        if (res && res.error.errno == 200) {
          this.$toast.success("密码修改成功！请重新登录");
          this.$store
            .dispatch("LogOut")
            .then(res => {
              if (res) this.$router.push({ path: "/login?type=user" });
            })
            .catch(err => {});
        }
      }
    }
  }
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
      font-size: 20px;
    }
  }
  & > main {
    width: 100%;
    background: #fff;
    .van-cell {
      .van-field__label {
        padding: 10px 0;
      }
      .van-field__body > input {
        padding: 10px 20px;
      }
    }
    .submit_btn {
      margin: 10px 0;
      color: #fff;
      text-align: center;
      height: 44px;
      line-height: 44px;
      background: linear-gradient(-90deg, #fc5303 0%, #fa8c05 100%);
      border-radius: 22px;
    }
  }
}
</style>