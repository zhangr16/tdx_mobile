<template>
  <div class="classify">
    <header class="let_fixed">
      <van-search placeholder="搜索你喜欢的宝贝" shape="round" v-model="value">
        <div slot="left-icon"></div>
        <div slot="right-icon" @click="onSearch">
          <span class="iconfont iconsousuo"></span>
        </div>
      </van-search>
      <van-tabs>
        <van-tab v-for="index in types" :title="index" :key="index"></van-tab>
      </van-tabs>
    </header>

    <header>
      <van-search placeholder="搜索你喜欢的宝贝" shape="round">
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
        <li :class="{'margin_right': index%2 == 0}" v-for="(item, index) in 7" :key="index">
          <item-card-mid2 />
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import itemCardMid2 from "@/components/item_card_mid2";

export default {
  name: "classify",
  components: { itemCardMid2 },
  data() {
    return {
      active_type: 0,
      value: "",
      types: [
        "全部",
        "女装",
        "男装",
        "内衣",
        "母婴",
        "彩妆",
        "家居",
        "鞋包",
        "美食",
        "文体",
        "家电",
        "其他"
      ]
    };
  },
  methods: {
    onSearch() {}
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
    // padding: 10px 15px;
    margin-bottom: 15px;
    // 三个选项卡
    .top_ul {
      width: 100%;
      overflow: hidden;
      margin-bottom: 10px;
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