<template>
  <div class="suggestions">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />投诉与建议
    </header>
    <main>
      <van-cell title="投诉QQ">18986183589</van-cell>
      <van-cell title="工作时间">
        <ul>
          <li>工作日: 09:00 ~ 18:00</li>
          <li>周六: 10:00 ~ 18:00</li>
          <li>(法定节假日除外)</li>
        </ul>
      </van-cell>
      <van-cell title="投诉邮箱">tousu@taodaxiong.com</van-cell>
    </main>
  </div>
</template> 
<script>
export default {
  // 分享好友
  name: "suggestions",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scope>
.suggestions {
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