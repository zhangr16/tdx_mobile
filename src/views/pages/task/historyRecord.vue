<template>
  <div class="historyRecord">
    <van-image-preview
      v-model="showImg"
      :images="tempImg"
    />
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />修改记录历史
    </header>
    <main>
      <van-cell :title="'是否完结：' + (is_finish > 0 ? '是': '否') " />
      <van-cell v-for="(item, key) in items" :key="key">
        <ul class="fans_ul">
          <li>
            <span style="color:#ff5500">修改人：15871700567</span>
            &nbsp;&nbsp;
            <span style="color:#999">修改时间：2019-07-07 00:00:00</span>
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
          <li>售后说明：{{item.comment}}</li>
          <li class="img_li">
            <span>凭证截图：</span>
            <img
              v-for="(img, _k) in item.apply_img" :key="_k"
              :src="img"
              alt
              @click="enlarge(item.apply_img)"
            />
          </li>
        </ul>
      </van-cell>
    </main>
  </div>
</template> 
<script>
import {saleApplyHistory} from "@/api/index"

export default {
  // 修改历史记录
  name: "historyRecord",
  components: {},
  data() {
    return {
      showImg: false,
      is_finish: null,
      items: [],
      tempImg: []
    };
  },
  async mounted() {
    let res = await saleApplyHistory({id: this.$route.query.id})
    if(res && res.error.errno == 200) {
      this.is_finish = res.is_finish
      this.items = res.saleupdatelog
    }
  },
  methods: {
    // 放大功能
    async enlarge(val) {
      if(val) {
        this.showImg = true
        await this.$nextTick()
        this.tempImg = val;
      }
    }
  }
};
</script>
<style lang="scss" scope>
.historyRecord {
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

    .van-cell {
      padding-right: 0;
      margin-bottom: 15px;
    }
    .fans_ul,
    .sale_ul {
      li {
        &:first-child {
          display: flex;
          justify-content: space-between;
        }
        transform: scale(0.9);
        margin-left: -5%;
        padding: 4px 0;
      }
      .img_li {
        display: flex;
        align-items: flex-start;
        & > img {
          width: 90px;
          height: 90px;
          margin-right: 10px;
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