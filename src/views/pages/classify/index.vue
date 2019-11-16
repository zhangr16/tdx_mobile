<template>
  <div class="classify">
    <header class="let_fixed">
      <van-search placeholder="搜索你喜欢的宝贝" shape="round" v-model="searchValue">
        <div slot="left-icon"></div>
        <div slot="right-icon" @click="getData()">
          <span class="iconfont iconsousuo"></span>
        </div>
      </van-search>
      <van-tabs>
        <van-tab v-for="(item, index) in classicTabs" :title="item.short_name" :key="index"></van-tab>
      </van-tabs>
    </header>
    <header>
      <van-search placeholder shape="round">
        <div slot="left-icon"></div>
        <div slot="right-icon">
          <span class="iconfont iconsousuo"></span>
        </div>
      </van-search>
      <van-tabs>
        <van-tab></van-tab>
      </van-tabs>
    </header>
    <section>
      <ul class="top_ul">
        <li :class="{'is_active': active_type == 0}" @click="active_type = 0">全 部</li>
        <li :class="{'is_active': active_type == 1}" @click="active_type = 1">进行中</li>
        <li :class="{'is_active': active_type == 2}" @click="active_type = 2">明日预告</li>
      </ul>
    </section>

    <section>
      <ul class="ul_free">
        <li :class="{'margin_right': index%2 == 0}" v-for="(item, index) in cardList" :key="index">
          <item-card-mid2 :entity="item" />
        </li>
      </ul>
      <div class="no_more" v-if="isloading">
        <van-loading type="spinner" />
      </div>
      <div class="no_more" v-else>没有更多了</div>
    </section>
  </div>
</template>
<script>
import itemCardMid2 from "@/components/item_card_mid2";
import { indexSearch } from "@/api";

export default {
  name: "classify",
  components: { itemCardMid2 },
  data() {
    return {
      isloading: false,
      isfinished: false,

      topH: 0,
      cardList: [],
      active_type: 0,
      searchValue: "",
      classicTabs: [],
      total_count: 0,
      queryData: {
        type: 2,
        module_type: 0, //1免单 2熊抢购
        page_no: 1,
        page_size: 10
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.handleScroll);
    });
    this.queryData.module_type = this.isBearbuy ? 2 : 1;
    this.classicTabs = JSON.parse(window.localStorage.getItem("tpyeArr"));
    this.getData();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  computed: {
    isBearbuy() {
      return this.$route.name == "bearBuy";
    }
  },
  watch: {
    $route: function(newV, oldv) {
      this.queryData.page_size = 10;
      this.isfinished = false;
      this.queryData.module_type = newV.name == "bearBuy" ? 2 : 1
      this.getData();
    }
  },
  methods: {
    async getData() {
      this.isloading = true;
      let res = await indexSearch(this.queryData);
      if (res && res.error.errno == 200) {
        this.cardList = res.data;
        this.total_count = res.total_results;
      }
      this.isloading = false;
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; // 滚动条偏移量
      let innerHeight = document.querySelector(".ul_free").clientHeight;

      if (innerHeight <= 470 + scrollTop) {
        // 触发加载方法
        if (this.total_count > this.queryData.page_size) {
          this.queryData.page_size += 10;
          this.getData();
        } else {
          this.isfinished = true;
          this.isloading = false;
        }
      }
    }
  }
};
</script>
<style lang="scss" scope>
.classify {
  width: 100%;
  overflow: auto;
  & > header {
    width: 100%;
    background: #fff;
    margin-bottom: 15px;
  }
  & > section {
    // 三个选项卡
    .top_ul {
      width: 100%;
      overflow: hidden;
      padding-bottom: 10px;
      padding-left: 15px;
      li {
        float: left;
        padding: 5px 9px;
        font-size: 14px;
        margin-right: 25px;
        border-radius: 5px;
        text-align: center;
        border: 1px solid #666;
        color: #666;
      }
      .is_active {
        border: 1px solid #ff5500;
        color: #ff5500;
      }
    }
    .ul_free {
      width: 100%;
      background: #fff;
      display: flex;
      flex-wrap: wrap;
      padding: 10px 15px;
      li {
        width: calc((100vw - 35px) / 2);
        // height: calc((100% - 35px) / 2);
        margin-bottom: 5px;
      }
      .margin_right {
        margin-right: 5px;
      }
    }
  }
}
</style>