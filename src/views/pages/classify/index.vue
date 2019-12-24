<template>
  <div class="classify">
    <header class="let_fixed">
      <van-icon v-if="isFamily" class="_left_" name="arrow-left" @click="$router.go(-1)" />
      <van-search :class="{'padding_left': !isFamily}" placeholder="搜索你喜欢的宝贝" shape="round" v-model="queryData.keywords">
        <div slot="left-icon"></div>
        <div slot="right-icon">
          <span class="iconfont iconsousuo"></span>
        </div>
      </van-search>
      <van-tabs v-model="activeTab" @click="handleTabClick">
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
        <li
          v-for="(item, index) in ['全部', '进行中', '明日预告']"
          :key="index"
          :class="{'is_active': active_type == index}"
          @click="active_type = index"
        >{{item}}</li>
      </ul>
    </section>

    <section>
      <ul v-if="cardList.length > 0" class="ul_free">
        <li :class="{'margin_right': index%2 == 0}" v-for="(item, index) in cardList" :key="index">
          <item-card-mid2 :entity="item" :isFamily="isFamily" />
        </li>
        <div class="no_more" v-if="isfinished">没有更多数据了</div>
      </ul>
      <div v-if="!isloading && cardList.length <= 0" class="no_data">暂无数据</div>

      <div v-if="isloading" class="no_data">
        <van-loading type="spinner" />
      </div>
      
    </section>
  </div>
</template>
<script>
import itemCardMid2 from "@/components/item_card_mid2";
import { indexSearch } from "@/api";

export default {
  // 限量免单 + 熊抢购 + 亲友团
  name: "classify",
  components: { itemCardMid2 },
  data() {
    return {
      isloading: false,
      isfinished: false,
      timer: null, // 防抖计时器

      topH: 0,
      cardList: [],
      active_type: 0, //全部，进行中，明日预告
      activeTab: 0,

      classicTabs: [],
      total_count: 0,
      queryData: {
        type: 2,
        is_family: null,
        module_type: 0, //1免单 2熊抢购
        page_no: 1,
        page_size: 10,
        keywords: ""
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.handleScroll);
    });

    this.queryData.module_type = this.isBearbuy ? 2 : 1;
    this.queryData.is_family = this.isFamily ? 1 : null;
    this.classicTabs = JSON.parse(window.sessionStorage.getItem("tpyeArr"));

    if (this.$route.query.cid) {
      this.queryData.cid = this.$route.query.cid;
      this.classicTabs.find((el, i) => {
        if (el.id == this.queryData.cid) {
          this.activeTab = i;
        }
      });
    }
    if (this.$route.query.keyword)
      this.queryData.keywords = this.$route.query.keyword;
    this.getData();
  },
  // 离开时销毁监听scroll
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    isBearbuy() {
      return this.$route.name == "bearBuy";
    },
    isFamily() {
      return this.$route.name == "friendShip";
    }
  },
  watch: {
    $route: function(newV, oldv) {
      this.queryData.page_size = 10;
      this.isfinished = false;
      this.active_type = 0;
      this.queryData.module_type = newV.name == "bearBuy" ? 2 : 1;
      this.getData();
    },
    active_type: function(val) {
      if (val || val == 0) {
        this.cardList = []
        this.queryData.status = val;
        this.getData();
      }
    },
    // input防抖
    "queryData.keywords": function(val) {
      this.queryData.keywords = val;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getData();
      }, 500);
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
    handleTabClick(index, name) {
      let _target = this.classicTabs.find(el => el.short_name == name);
      this.queryData.cid = _target.id;
      this.getData();
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; // 滚动条偏移量
      let innerHeight = document.querySelector(".classify").clientHeight; // 滚动ul的高度
      let viewHeight = window.innerHeight; // 视口高度

      if ((scrollTop + viewHeight >= innerHeight) && !this.isloading) {
        if (this.total_count > this.queryData.page_size) {
          this.queryData.page_size += 10;
          this.getData();
        } else {
          this.isfinished = true
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
    ._left_ {
      font-size: 20px;
      left: 15px;
      top: 18px;
      position: absolute;
    }
    .padding_left {
      padding-left: 30px; 
    }
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
      .no_more {
        width: 100%;
      }
    }
  }
}
</style>