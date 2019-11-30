<template>
  <div class="screenShots">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />
      <span v-if="isEdit">上传</span>
      <span v-else>查看</span>好评截图
    </header>
    <main>
      <van-cell-group>
        <van-field readonly v-model="form.user_ww" label="买家旺旺" placeholder="买家旺旺" />
        <van-field readonly v-model="form.order_sn" label="订单编号" placeholder="订单编号" />
        <van-cell v-if="isEdit" class="uploads" title="上传截图" label="（最多3张）">
          <van-uploader
            :after-read="afterRead"
            :before-delete="beforeDel"
            v-model="fileList"
            multiple
            :max-count="3"
          />
        </van-cell>
        <van-cell v-else class="uploads" title="好评截图">
          <img v-for="(item, key) in form.img" :key="key" :src="item" alt />
        </van-cell>
      </van-cell-group>
      <div class="submit_btn" v-if="isEdit" @click="handleSubmit">提交好评截图</div>
    </main>
  </div>
</template> 
<script>
import { order_action, uploadImg, deleteUpload } from "@/api/index";
export default {
  // 好评截图
  name: "screenShots",
  components: {},
  data() {
    return {
      isEdit: null,
      fileList: [],
      form: { user_ww: "", order_sn: "", img: [] }
    };
  },
  mounted() {
    if (this.$route.query.e) this.isEdit = true;
    this.getData();
  },
  methods: {
    async getData() {
      let res = await order_action({
        id: this.$route.query.id,
        type: 3
      });
      if (res && res.error.errno == 200) {
        this.form = {
          user_ww: res.user_ww,
          order_sn: res.order_sn,
          img: res.img
        };
      }
    },
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
      let res = await deleteUpload({
        url: content.url
      });
      if (res && res.error.errno == 200) {
        this.$toast.success("图片删除成功");
        return true;
      }
    },
    async handleSubmit() {
      let arr = [];
      this.fileList.map(el => {
        arr.push(el.url);
      });
      if (arr.length <= 0) return this.$toast.fail("请上传支付宝截图");
      
      let res = await order_action({
        type: 2,
        id: this.$route.query.id,
        img: arr
      });
      if (res && res.error.errno == 200) {
        this.$toast.success(res.error.usermsg);
        setTimeout(() => {
          this.$router.push("/task");
        }, 500);
      }
    }
  }
};
</script>
<style lang="scss" scope>
.screenShots {
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
      padding-right: 0;
    }
    .uploads {
      .van-cell__value {
        flex: 3;
        text-align: left;
      }
      img {
        width: 80px;
        height: 80px;
        margin: 0 5px 5px 0;
      }
    }
    .submit_btn {
      text-align: center;
      margin: 15px 0 15px 15px;
      font-size: 14px;
      color: #fff;
      width: 345px;
      height: 44px;
      line-height: 44px;
      background-color: #ff5500;
      border-radius: 22px;
    }
  }
}
</style>