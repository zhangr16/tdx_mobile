<template>
  <div class="share">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />推荐好友
    </header>
    <ul>
      <li>
        <div>1、复制链接分享给好友或朋友圈</div>
        <div>http://www.taodaxiong.com/Mobile/MobileRegister?code=79217450</div>
      </li>
      <li>
        <div>2、长按二维码保存到手机分享给好友或朋友圈</div>
        <div class="qr_code">
          <span></span>
        </div>
      </li>
    </ul>
  </div>
</template> 
<script>
export default {
  // 分享好友
  name: "share",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scope>
.share {
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
    background: linear-gradient(-90deg, #fc5303 0%, #fa8e05 100%);
    text-align: center;
    color: #fff;
    font-size: 17px;
    .left_arrow {
      font-size: 20px;
      position: absolute;
      left: 15px;
      top: 12px;
    }
  }
  & > ul {
    width: 100%;
    background: #fff;
    li {
      width: 100%;
      font-weight: bold;
      font-size: 13px;
      padding: 15px;
      line-height: 1.5;
      & > div {
        overflow: hidden;
      }
      .qr_code {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        & > span {
          width: 100px;
          height: 100px;
          background: #fa8e05;
        }
      }
    }
  }
}
</style>