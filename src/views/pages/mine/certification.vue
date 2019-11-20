<template>
  <div class="certification">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />实名认证
    </header>
    <main>
      <van-field
        v-model.trim="entity.real_name"
        label="真实姓名"
        placeholder="请输入注册账户"
        clearable
        :disabled="!entity.is_submit"
      />
      <van-cell class="_exchanger" title="性别">
        <van-radio-group
          v-model="entity.gender"
          :checked-color="`#ff5500`"
          :disabled="!entity.is_submit"
        >
          <van-radio name="男">男</van-radio>
          <van-radio name="女">女</van-radio>
        </van-radio-group>
      </van-cell>
      <van-field
        v-model="entity.age"
        type="number"
        label="年龄"
        placeholder="请输入年龄"
        maxlength="3"
        clearable
        :disabled="!entity.is_submit"
      />
      <van-field
        v-model="entity.ww_name"
        label="淘宝会员名"
        placeholder="请输入会员名"
        clearable
        :disabled="!entity.is_submit"
      />
      <van-cell class="uploads" title="支付宝截图">
        <van-uploader
          :after-read="afterRead"
          :before-delete="beforeDel"
          v-model="fileList"
          :max-count="1"
          :disabled="!entity.is_submit"
        />
      </van-cell>
      <van-cell v-if="entity.is_submit">
        <div class="submit_btn" @click="handleSubmit">提交认证申请</div>
        <div class="_tips">打开手机支付宝登录支付宝 → 点击"我的" → 点击"昵称" → 截图(需要显示真实姓名和旺旺账号)</div>
      </van-cell>
    </main>
  </div>
</template> 
<script>
import { verifyProve } from "@/api/mine.js";
import { uploadImg, deleteUpload } from "@/api/index.js";

export default {
  // 实名认证
  name: "certification",
  components: {},
  data() {
    return {
      fileList: [],
      entity: {
        gender: "男"
      }
    };
  },
  async mounted() {
    let res = await verifyProve();
    if (res && res.error.errno == 200) {
      this.entity = res.data;
      if (this.entity.prove_img)
        this.fileList.push({ url: this.entity.prove_img });
    }
  },
  methods: {
    async afterRead(content) {
      let form = new FormData();
      form.append("img", content.file);
      let res = await uploadImg(form);
      if (res && res.error.errno == 200) {
        this.$toast.success("图片上传成功");
        content.url = res.url;
      }
    },
    async beforeDel(content) {
      if (!this.entity.is_submit) {
        this.$toast.fail("不可编辑");
        callback(false);
      } else {
        let res = await deleteUpload({
          url: content.url
        });
        if (res && res.error.errno == 200) {
          this.$toast.success("图片删除成功");
          return true;
        }
      }
    },

    async handleSubmit() {
      console.log(this.entity);
      if (this.fileList.length <= 0) {
        this.$toast.fail("请上传支付宝截图");
      } else if (!this.entity.real_name) {
        this.$toast.fail("请填写真实姓名");
      } else if (!this.entity.age) {
        this.$toast.fail("请填写年龄");
      } else if (!this.entity.ww_name) {
        this.$toast.fail("请填写淘宝会员名");
      } else {
        this.$dialog
          .confirm({
            message: "是否确认提交申请？"
          })
          .then(async () => {
            this.entity.prove_img = this.fileList[0].url;
            let res = await verifyProve(this.entity);
            if (res && res.error.errno == 200) {
              this.$toast.success("认证申请成功！");
              setTimeout(() => {
                this.$router.push("/mine");
              }, 500);
            }
          })
          .catch(() => {});
      }
    }
  }
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