<template>
  <div class="home">
    <header>
      <div class="fixer">
        <div class="let_fixed" :class="{'white_background': isWhite}">
          <van-search placeholder="搜索你喜欢的宝贝" shape="round" v-model="value">
            <div slot="left-icon"></div>
            <div slot="right-icon" @click="onSearch">
              <span class="iconfont iconsousuo"></span>
            </div>
          </van-search>
          <van-tabs>
            <van-tab v-for="(item, index) in classicTabs" :title="item.short_name" :key="index"></van-tab>
          </van-tabs>
        </div>

        <div class="margin_top">
          <van-swipe
            class="banner"
            :initial-swipe="0"
            :autoplay="2000"
            :show-indicators="false"
            ref="swiper"
            @change="onChange"
          >
            <van-swipe-item>
              <img src="@/assets/banner1.png" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="@/assets/banner2.png" alt />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>

      <van-swipe class="bg_banner" :show-indicators="false" ref="swiper2">
        <van-swipe-item>
          <img src="@/assets/banner1_bg.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/banner2_bg.png" alt />
        </van-swipe-item>
      </van-swipe>

      <ul class="two_parts">
        <li @click="$router.push('/limitFree')">
          <img src="@/assets/sy_icon_xianliangmiandan@2x.png" alt />
          <span>限量免单</span>
        </li>
        <li @click="$router.push('/bearBuy')">
          <img src="@/assets/sy_icon_xiongqianggou@2x.png" alt />
          <span>熊抢购</span>
        </li>
      </ul>
      <van-notice-bar text="滚动播报淘大熊实时, 滚动播报淘大熊实时, 滚动播报淘大熊实时" background="#fff">
        <div slot="left-icon" class="notice_title">商城头条</div>
      </van-notice-bar>
    </header>

    <section>
      <ul class="top_ul">
        <li :class="{'is_active': active_type == 0}" @click="active_type = 0;queryData.w_type = 1;getData()">推荐好货</li>
        <li :class="{'is_active': active_type == 1}" @click="active_type = 1;queryData.w_type = 2;getData()">最新上线</li>
        <li :class="{'is_active': active_type == 2}" @click="active_type = 2;queryData.w_type = 3;getData()">新品预告</li>
      </ul>
      <div class="ul_wrapper">
        <ul v-if="topList.length > 0">
          <li v-for="(item, x) in topList" :key="x">
            <item-card-small :entity="item" />
          </li>
        </ul>
        <div class="no_data" v-else>
          暂无数据
        </div>
      </div>
    </section>
    <!-- 种类推荐 -->
    <section v-for="(cate, x) in cateList" :key="x">
      <div class="sy_banner">
        <img :src="cate.images_h5" @click="$router.push('/limitFree?p_id=' + cate.id)" />
      </div>
      <div class="ul_wrapper">
        <ul v-if="cate.activity_list.length > 0">
          <li v-for="(item, y) in cate.activity_list" :key="y">
            <item-card-small :entity="item" />
          </li>
        </ul>
        <div class="no_data" v-else>
          暂无数据
        </div>
      </div>
    </section>

    <!-- 精选免单 -->
    <section style="padding:0">
      <header>
        <span>精选免单</span>
      </header>
      <div class="ul_free">
        <ul>
          <li :class="{'margin_right': index%2 == 0}" v-for="(item, index) in topList" :key="index">
            <item-card-mid :scored="index > 1" :entity="item" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import itemCardSmall from "@/components/item_card_small";
import itemCardMid from "@/components/item_card_mid";
import { indexSearch, cateSearch } from "@/api";

export default {
  name: "home",
  components: { itemCardSmall, itemCardMid },
  data() {
    return {
      isWhite: false,
      active_type: 0,
      value: "",
      classicTabs: [],
      queryData: {
        type: 1,
        w_type: 1,
        module_type: 1,
        page_no: 1,
        page_size: 6
      },
      topList: [], //3个大块
      cateList: [] //分类列表
    };
  },
  methods: {
    async getData() {
      let res = await indexSearch(this.queryData);
      // let res2 = await indexSearch({
      //   status: 2,
      //   ...this.queryData
      // })
      if (res && res.error.errno == 200) this.topList = res.data;
      // if (res2 && res2.error.errno == 200) this.bottomList = res.data
    },
    async getCateData() {
      let res = await cateSearch();
      if (res && res.error.errno == 200) {
        this.cateList = res.data;
      }
    },
    onSearch() {
      this.$toast.success(this.value);
    },
    onChange(i, v) {
      this.$refs["swiper2"].swipeTo(i, { immediate: true });
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; // 滚动条偏移量
      this.isWhite = scrollTop > 0;
    }
  },
  mounted() {
    if(window.localStorage.getItem('invite_code')) {
      this.$router.push('/register?code=' + window.localStorage.getItem('invite_code'))
    }
    this.$nextTick(() => {
      window.addEventListener("scroll", this.handleScroll);
    });
    this.classicTabs = JSON.parse(window.localStorage.getItem('tpyeArr'))
    this.getData();
    this.getCateData()
  }
};
</script>
<style lang="scss" scope>
.home {
  width: 100%;
  overflow: auto;
  .margin_top {
    margin-top: 100px;
  }
  // 滚动变化样式
  .white_background {
    background: #fff;
    .van-tab {
      color: #7d7e80 !important;
    }
    .van-tabbar-item--active,
    .van-tab--active {
      color: #ff5500 !important;
    }
    .van-tabs__line {
      background-color: #ff5500 !important;
    }
  }
  & > header {
    position: relative;
    margin-bottom: 15px;
    background: #fff;
    // 底色轮播
    .bg_banner {
      width: 100%;
      text-align: center;
      img {
        width: 100%;
        height: 202px;
      }
    }
    // 轮播
    .banner {
      margin-left: 15px;
      margin-top: 5px;
      width: 345px;
      text-align: center;
      border-radius: 5px;
      img {
        width: 100%;
        height: 142px;
      }
    }
    // 限量免单+熊抢购
    .two_parts {
      height: 100px;
      margin-top: 50px;
      border-bottom: 1px solid #ccc;
      display: flex;
      font-size: 12px;
      background: #fff;
      li {
        text-align: center;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          display: block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin: 10px 0;
        }
        span {
          font-size: 14px;
          flex: 1;
        }
      }
    }
    // 滚动条
    .notice_title {
      border: 1px solid #ff5500;
      font-family: zcoolwenyiti;
      border-radius: 5px;
      padding: 0 2px;
      margin-right: 5px;
    }
  }

  & > section {
    position: relative;
    background: #fff;
    padding: 10px 15px;
    margin-bottom: 15px;
    // 三个选项卡
    .top_ul {
      width: 100%;
      overflow: hidden;
      margin-bottom: 10px;
      li {
        float: left;
        // width: 66px;
        // height: 22px;
        // line-height: 22px;
        font-size: 14px;
        padding: 5px 10px;
        margin-right: 10px;
        background: #f6f6f6;
        border-radius: 5px;
        text-align: center;
      }
      .is_active {
        background: #ff5500;
        color: #fff;
      }
    }
    .sy_banner {
      img {
        width: 345px;
        text-align: center;
        border-radius: 2px;
        height: 105px;
        margin-bottom: 10px;
      }
    }

    // 子项目item
    .ul_wrapper {
      width: calc(100vw - 30px);
      overflow-x: scroll;
      ul {
        overflow-x: scroll;
        display: flex;
        li {
          width: calc((100vw - 30px)/3);
          flex: 1;
          margin-right: 4px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }

    // 精选免单
    & > header {
      padding: 10px 15px;
      span {
        font-size: 16px;
        padding: 0 8px;
        font-weight: bold;
        border-left: 3px solid #ff5500;
      }
    }
    .ul_free {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          width: calc((100% - 6px) / 2);
          // height: 250px;
          margin-bottom: 5px;
        }
        .margin_right {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.home {
  .van-field__right-icon .van-icon {
    font-size: 19px;
  }
  .van-search {
    background: none !important;
    padding-right: 30px;
    padding-left: 30px;
  }
  .van-notice-bar__content {
    color: #333;
  }
  .van-tabs__nav {
    background: none !important;
  }
  .fixer {
    top: 0;
    width: 100%;
    z-index: 9999;
    position: absolute;
    .van-tab {
      color: #fff;
    }
    .van-tabs__line {
      background-color: #fff;
    }

    .van-tabbar-item--active,
    .van-tab--active {
      .van-ellipsis {
        font-size: 15px;
      }
    }
  }
}
</style>