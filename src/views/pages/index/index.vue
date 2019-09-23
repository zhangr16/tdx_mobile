<template>
  <div class="home">
    <header style="margin-bottom:15px">
      <van-search placeholder="搜索你喜欢的宝贝" shape="round" v-model="value">
        <div slot="left-icon"></div>
        <div slot="right-icon" @click="onSearch">
          <van-icon name="search" />
        </div>
      </van-search>
      <van-tabs>
        <van-tab v-for="index in types" :title="index" :key="index"></van-tab>
      </van-tabs>
      <van-swipe class="banner" :autoplay="3000">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <ul class="two_parts">
        <li>
          <img src alt />
          <span>限量免单</span>
        </li>
        <li>
          <img src alt />
          <span>熊抢购</span>
        </li>
      </ul>
      <van-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。" background="#fff">
        <div slot="left-icon" class="notice_title">商城头条</div>
      </van-notice-bar>
    </header>

    <section>
      <ul class="top_ul">
        <li :class="{'is_active': active_type == 0}" @click="active_type = 0">推荐好货</li>
        <li :class="{'is_active': active_type == 1}" @click="active_type = 1">最新上线</li>
        <li :class="{'is_active': active_type == 2}" @click="active_type = 2">新品预告</li>
      </ul>
      <div class="ul_wrapper">
        <ul v-if="active_type == 0">
          <li v-for="item in 6" :key="item">
            <item-card-small />
          </li>
        </ul>
      </div>
    </section>

    <section>
      <img src="@/assets/404_images/404.png" alt="" />
      <div class="ul_wrapper">
        <ul>
          <li v-for="item in 6" :key="item">
            <item-card-small />
          </li>
        </ul>
      </div>
    </section>

    <section style="padding:0">
      <header><span>精选免单</span></header>
      <div class="ul_free">
        <ul>
          <li :class="{'margin_right': index%2 == 0}" v-for="(item, index) in 4" :key="index">
            <item-card-mid />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import { Toast } from "vant";
import itemCardSmall from "@/components/item_card_small"
import itemCardMid from "@/components/item_card_mid"

export default {
  name: "home",
  components: { itemCardSmall, itemCardMid },
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
        "居家",
        "鞋包",
        "美食",
        "文体",
        "家电",
        "其他"
      ]
    };
  },
  methods: {
    onSearch() {
      Toast.success(this.value);
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scope>
.home {
  & > header {
    // 轮播
    .banner {
      width: 100%;
      background: skyblue;
      text-align: center;
      height: 142px;
      line-height: 142px;
    }
    // 限量免单+熊抢购
    .two_parts {
      height: 100px;
      border-bottom: 1px solid #ccc;
      display: flex;
      font-size: 12px;
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
          border: 1px solid red;
          border-radius: 50%;
          margin: 10px 0;
        }
        span {
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
        width: 62px;
        height: 20px;
        line-height: 20px;
        font-size: 13px;
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
    // 类别大图
    & > img {
      width: 100%;
      background: red;
      height: 105px;
      margin-bottom: 10px;
    }
    
    // 子项目item
    .ul_wrapper {
      width: calc(100vw - 30px);
      overflow-x: scroll;
      ul {
        width: 200%;
        overflow-x: scroll;
        display: flex;
        li {
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
        font-size: 14px;
        padding: 0 8px;
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
          width: calc((100% - 6px)/2);
          // height: 250px;
          margin-bottom: 5px;
        }
        .margin_right {
          margin-right: 5px 
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
    padding-right: 30px;
    padding-left: 30px;
  }
  .van-notice-bar__content {
    color: #333;
  }
}
</style>