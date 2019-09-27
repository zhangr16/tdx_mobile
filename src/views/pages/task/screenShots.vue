<template>
  <div class="screenShots">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />上传好评截图
    </header>
    <main>
      <van-cell-group>
        <van-field v-model="form.a" label="买家旺旺" placeholder="请输入买家旺旺" />
        <van-field v-model="form.b" label="订单编号" placeholder="请输入订单编号" />
        <van-cell class="uploads" title="上传截图">
          <van-uploader v-model="fileList" multiple :max-count="3" />
        </van-cell>
      </van-cell-group>
      <div class="submit_btn">提交评论</div>
    </main>
  </div>
</template> 
<script>
export default {
  // 好评截图
  name: "screenShots",
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
      padding-right: 0;
    }
    .uploads {
      .van-cell__value {
        flex: 3;
        text-align: left;
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
      background-color: #51c757;
      border-radius: 22px;
    }
  }
}
</style>