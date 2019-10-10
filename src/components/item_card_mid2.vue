<template>
  <div class="item_card_mid2" @click="$router.push('/getSoon')">
    <!-- 图片 -->
    <img src="@/assets/404_images/404.png" alt />
    <!-- 内容部分 -->
    <main>
      <div class="title">
        <span>纯棉加厚搜索棉袄纯棉加厚搜索棉袄纯棉加厚搜索棉袄纯棉加厚搜索棉袄</span>
      </div>
      <div class="content2" v-if="isBearBuy">
        <div class="content2_price">
          <span>优惠价: ￥9.9</span>
          <span>原价: ￥9.9</span>
        </div>
        <div class="content2_desc">拍下平台返还3元</div>
      </div>
      <div class="content" v-else>
        <div class="content_price">￥12.9</div>
        <div class="content_desc">
          <van-progress pivot-text color="#ff5500" :percentage="50" />
          <span class="word">已抢<i>20</i>件 共50件</span>
        </div>
      </div>
      <div class="btn">马上抢</div>
    </main>
  </div>
</template>
<script>
// 限量免单、熊抢购中卡片
export default {
  name: "item_card_mid2",
  data() {
    return {};
  },
  mounted() {
  },
  computed: {
    isBearBuy() {
      return this.$route.name == 'bearBuy'
    }
  }
};
</script>
<style lang="scss" scope>
.item_card_mid2 {
  width: 100%;
  & > img {
    width: 100%;
    height: calc((100vw - 35px) / 2);
    background: gainsboro;
  }
  & > main {
    width: calc((100vw - 35px) / 2);
    // text-align: center;
    padding: 0 5px;
    .title {
      font-size: 12px;
      margin: 5px 0;
      display: flex;
      align-items: center;
      font-weight: bold;
      span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .content2 {
      &_price {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #ff5500;
        & > span:last-child {
          color: #999;
          text-decoration: line-through;
          font-size: 12px;
        }
      }
      &_desc {
        margin-top: 5px;
        display: inline-block;
        color: #fff;
        background: #ff464f;
        border-radius: 10px;
        padding: 4px 7px;
        font-size: 12px;
      }
    }
    .content {
      display: flex;
      align-items: center;
      &_price {
        font-size: 14px;
        color: #ff5500;
        text-decoration: line-through;
      }
      &_desc {
        flex: 1;
        display: flex;
        flex-direction: column;
        color: #999;
        margin-left: 5px;
        .van-progress {
          height: 5px;
        }
        .word {
          text-align: left;
          transform: scale(0.9);
          margin-left: -5%;
          flex: 1;
          padding-top: 5px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          i {
            color: #ff464f;
          }
        }
      }
    }
    .btn {
      text-align: center;
      font-size: 13px;
      margin: 10px 0;
      padding: 5px 6px;
      width: calc(100%);
      color: #ff5500;
      border: 1px solid #ff5500;
      border-radius: 5px;
      box-shadow: 0px 3px 1px 0px rgba(255, 201, 169, 0.43);
    }
  }
}
</style>