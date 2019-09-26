<template>
  <div class="viewAfter">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />售后类型
    </header>
    <main>
      <van-cell>粉丝发起</van-cell>
      <van-cell title="资金问题" is-link />
      <van-cell title="物流问题" is-link />
      <van-cell title="礼品问题" is-link />
      <van-cell title="其他" is-link />
    </main>
    <main style="margin-top:10px">
      <van-cell>商家发起</van-cell>
      <van-cell title="资金问题" is-link />
    </main>
  </div>
</template> 
<script>
export default {
  // 好评截图
  name: "viewAfter",
  components: {},
  data() {
    return {
      form: { a: "", b: "" }
    };
  },
  methods: {
  }
};
</script>
<style lang="scss" scope>
.viewAfter {
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
    font-size: 12px;
    .van-cell__value--alone {
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>