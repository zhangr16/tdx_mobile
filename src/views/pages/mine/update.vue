<template>
  <div class="update">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />更新说明
    </header>
    <main>
      <van-cell title="版本号">v 3.0</van-cell>
      <van-cell title="更新说明">
        <ul>
          <li>1.优化视觉和操作体验</li>
          <li>2.增加了商品分类</li>
          <!-- <li>3.新增熊抢购和限量免单底部tab</li> -->
          <li>3.修复已知bug</li>
        </ul>
      </van-cell>
    </main>
  </div>
</template> 
<script>
export default {
  // 更新说明
  name: "update",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scope>
.update {
  position: relative;
  width: 100%;
  padding-top: 50px;
  & > header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(-90deg, #fc5303 0%, #fa8e05 100%);
    text-align: center;
    color: #fff;
    font-size: 17px;
    .left_arrow {
      font-size: 20px;
      position: absolute;
      left: 15px;
      top: 10px;
    }
  }

  & > main {
    width: 100%;
    .van-cell {
      background: #fff;
      font-size: 14px;
      .van-cell__value {
        flex: 2.8;
        text-align: left;
      }
    }
  }
}
</style>