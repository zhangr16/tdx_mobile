<template>
  <div class="index">
    <!-- 回到顶部 -->
    <nut-backtop :duration="1000" :bottom="60"></nut-backtop>
    <!-- 路由 -->
    <transition name="fade-transform" mode="out-in">
      <router-view style="margin-bottom:50px" />
    </transition>
    <!-- 底部tab栏 -->
    <van-tabbar route>
      <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/limitFree" icon="star-o">限量免单</van-tabbar-item>
      <van-tabbar-item replace to="/bearBuy" icon="like-o">熊抢购</van-tabbar-item>
      <van-tabbar-item replace to="/task" icon="orders-o">任务中心</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
      
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
}
</style>
