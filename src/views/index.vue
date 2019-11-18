<template>
  <div class="index">
    <!-- 回到顶部 -->
    <nut-backtop :duration="1000" :bottom="60"></nut-backtop>
    <!-- 路由 -->
    <transition name="fade-transform" mode="out-in">
      <router-view style="margin-bottom:50px" />
    </transition>
    <!-- 底部tab栏 -->
    <van-tabbar route class="bottom_tabs">
      <van-tabbar-item replace to="/index">
      <span slot="icon" class="iconfont iconshouye-xianxing"></span>
        首页
      </van-tabbar-item>
      <van-tabbar-item to="/limitFree">
        <span slot="icon" class="iconfont iconfudaihoutai_miandanguanli"></span>
        限量免单
      </van-tabbar-item>
      <van-tabbar-item replace to="/bearBuy">
        <span slot="icon" class="iconfont iconxiongqianggou"></span>
        熊抢购
      </van-tabbar-item>
      <van-tabbar-item replace to="/task">
        <span slot="icon" class="iconfont iconrenwuzhongxin"></span>
        任务中心
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine">
        <span slot="icon" class="iconfont iconwode"></span>
        我的
      </van-tabbar-item>
      
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      loading: true
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
.index {
  position: relative;
  width: 100%;
  overflow: auto;
  min-height: 100vh;
  .bottom_tabs {
    // display: none;
    .iconfont {
      font-size: 18px;
    }
  }
}
</style>
