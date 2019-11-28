<template>
  <div class="share">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />推荐好友
    </header>
    <ul>
      <li>
        <div class="title">1、复制链接分享给好友或朋友圈</div>
        <div>http://106.54.237.151/uh5/#/register?code={{invite_code}}</div>
      </li>
      <li>
        <div class="title">2、长按二维码保存到手机分享给好友或朋友圈</div>
        <div class="qr_code">
          <qrcode
            v-show="showing"
            :wid="150"
            :hei="150"
            :url="'http://106.54.237.151/uh5/#/register?code=' + invite_code"
          ></qrcode>
          <div id="qrcode">
            <img :src="image_src" alt="" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template> 
<script>
import qrcode from "vue_qrcodes";

export default {
  // 分享好友
  name: "share",
  components: { qrcode },
  data() {
    return {
      showing: true,
      image_src: null
    };
  },
  mounted() {
    let canvas = document.getElementsByTagName("canvas")[0];
    this.canvasToImage(canvas);
  },
  computed: {
    invite_code() {
      return this.$store.state.user.name.invite_code || "";
    }
  },
  methods: {
    canvasToImage(canvas) {
      // canvas.toDataURL 返回的是一串Base64编码的URL
      this.image_src = canvas.toDataURL("image/png");
      this.showing = false
    }
  },
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
      top: 10px;
    }
  }
  & > ul {
    width: 100%;
    background: #fff;
    li {
      width: 100%;
      font-weight: bold;
      font-size: 12px;
      padding: 15px;
      line-height: 1.5;
      .title {
        font-size: 14px;
      }
      & > div {
        overflow: hidden;
      }
      .qr_code {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 25px 0;
        .logoimg {
          background: #fff;
        }
      }
    }
  }
}
</style>