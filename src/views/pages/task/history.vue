<template>
  <div class="history">
    <van-image-preview
      v-model="showImg"
      :images="['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569576294030&di=9b2fba7ac77d2fe494836ae231386d72&imgtype=0&src=http%3A%2F%2Fpic1.ymatou.com%2FG02%2Fshangou%2FM0B%2FE5%2F1E%2FCgvUBFjCY7-AG8bWAAKTQbIz480662_1_1_n_w_o.jpg']"
    />
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />协商历史
    </header>
    <main>
      <van-cell title="是否完结：否">
        <span slot="right-icon" class="slotter" @click="$router.push('/historyRecord?type=' + $route.query.type)">
          <span class="iconfont iconxiugaijilu"></span>
          <span>修改记录</span>
        </span>
      </van-cell>
      <van-cell>
        <ul class="fans_ul">
          <li>
            <span style="color:#ff5500">粉丝：15871700567</span>
            &nbsp;&nbsp;
            <span style="color:#999">申请时间：2019-07-07 00:00:00</span>
          </li>
          <li class="flex_li" v-if="$route.query.type == 0">
            <span>
              实拍金额：
              <i>¥3</i>
            </span>
            <span>
              任务金额：
              <i>¥2</i>
            </span>
            <span>
              差价：
              <i>¥1</i>
            </span>
          </li>
          <li>售后说明：此商品存在{{ historyTitle }}问题</li>
          <li class="img_li">
            <span>凭证截图：</span>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569576294030&di=9b2fba7ac77d2fe494836ae231386d72&imgtype=0&src=http%3A%2F%2Fpic1.ymatou.com%2FG02%2Fshangou%2FM0B%2FE5%2F1E%2FCgvUBFjCY7-AG8bWAAKTQbIz480662_1_1_n_w_o.jpg"
              alt
              @click="showImg = true"
            />
          </li>
        </ul>
      </van-cell>
      <van-cell>
        <ul class="sale_ul">
          <li>
            <span>商家：15871700567</span>
            &nbsp;&nbsp;
            <span style="color:#999">处理时间：2019-07-07 00:00:00</span>
          </li>
          <li class="flex_li" v-if="$route.query.type == 0">
            <span>
              实拍金额：
              <i>¥3</i>
            </span>
            <span>
              任务金额：
              <i>¥2</i>
            </span>
            <span>
              差 价：
              <i>¥1</i>
            </span>
          </li>
          <li v-if="$route.query.type != 0">处理内容：{{ historyTitle }}错误</li>
          <li>处理说明：问题已反馈</li>
        </ul>
      </van-cell>
    </main>
  </div>
</template> 
<script>
export default {
  // 好评截图
  name: "history",
  components: {},
  data() {
    return {
      showImg: false,
      form: { a: "", b: "" }
    };
  },
  mounted() {},
  computed: {
    historyTitle() {
      let _n = this.$route.query.type;
      return ["资金", "物流", "礼品", "其他"][_n];
    }
  },
  methods: {
    // 放大功能
    enlarge() {
      this.$ImagePreview(["@/assets/404_images/404.png"]);
    }
  }
};
</script>
<style lang="scss" scope>
.history {
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
    font-size: 12px;
    .slotter {
      display: flex;
      align-items: center;
      padding-right: 10px;
      i {
        font-size: 20px;
      }
    }
    .van-cell {
      padding-right: 0;
    }
    .fans_ul,
    .sale_ul {
      li {
        transform: scale(0.9);
        margin-left: -5%;
        padding: 4px 0;
      }
      .img_li {
        display: flex;
        align-items: flex-start;
        & > img {
          width: 67px;
          height: 67px;
        }
      }
      .flex_li {
        display: flex;
        justify-content: space-between;
        i {
          font-size: 18px;
          color: #ff5500;
        }
      }
    }
  }
}
</style>