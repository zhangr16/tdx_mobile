<template>
  <div class="friendShip">
    <header class="let_fixed">
      <van-icon class="_left_" name="arrow-left" @click="$router.go(-1)" />
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
      <div class="_title">
        亲友团任务
      </div>
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

// 亲友团
export default {
  name: "friendShip",
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
.friendShip {
  width: 100%;
  overflow: auto;
  & > header {
    margin-bottom:15px;
    ._left_ {
      font-size: 20px;
      left: 15px;
      top: 18px;
      position: absolute;
    }
  } 

  & > section {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0 
    }
    ._title {
      margin-left: 15px;
      font-size: 14px;
    }
    .ul_free {
      width: 100%;
      background: #fff;
      display: flex;
      flex-wrap: wrap;
      padding: 10px 15px;
      li {
        width: calc((100vw - 35px) / 2);
        margin-bottom: 5px;
      }
      .margin_right {
        margin-right: 5px;
      }
    }
  }
}
</style>