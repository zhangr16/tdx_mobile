<template>
  <div class="index">
    <transition name="fade-transform" mode="out-in">
      <router-view style="margin-bottom:50px" />
    </transition>

    <van-tabbar route>
      <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/limitFree" icon="star-o">限量免单</van-tabbar-item>
      <van-tabbar-item replace to="/bearBuy" icon="like-o">熊抢购</van-tabbar-item>
      <van-tabbar-item replace to="/taskCenter" icon="coupon-o">任务中心</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  // components: {
  //   [tabbar.name]: tabbar,
  // },
  name: "index",
  data() {
    return {
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
.index {
  position: relative;
  width: 100%;
  overflow: auto;
  height: 100%;
}
</style>
