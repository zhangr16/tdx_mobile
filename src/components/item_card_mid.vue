<template>
  <div class="item_card_mid" @click="$router.push('/getSoon')">
    <!-- 图片 -->
    <img src="@/assets/404_images/404.png" alt />
    <!-- 内容部分 -->
    <main>
      <div class="title">
        <i v-if="!scored">需晒图</i>
        <span>纯棉加厚搜索棉袄</span>
      </div>
      <div v-if="scored" class="two_icons">
        <i>需晒图</i>
        <i>积分奖励100</i>
      </div>
      <div class="content">
        <div class="content_price">￥29.9</div>
        <div class="content_desc">
          <van-progress pivot-text color="#ff5500" :percentage="50" />
          <span class="word">
            已抢
            <i>20</i>件 共50件
          </span>
        </div>
      </div>
      <div class="btn">马上抢</div>
    </main>
  </div>
</template>
<script>
// 首页精选免单中卡片
export default {
  name: "item_card_mid",
  props: {
    scored: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scope>
.item_card_mid {
  width: 100%;
  & > img {
    width: 100%;
    height: calc((100vw - 4px) / 2);
    background: gainsboro;
  }
  & > main {
    width: calc((100vw - 4px) / 2);
    padding: 0 14px;
    .title {
      margin: 5px 0;
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: bold;
      i {
        font-weight: normal;
        display: inline-block;
        color: #fff;
        padding: 3px 5px;
        background: linear-gradient(-90deg, #ff0c46 0%, #ff797d 100%);
        border-radius: 3px;
        margin-right: 5px;
      }
      span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .two_icons {
      padding: 5px 0;
      i {
        display: inline-block;
        color: #fff;
        padding: 3px 5px;
        border-radius: 3px;
        margin-right: 10px;
      }
      & > i:first-child {
        background: linear-gradient(-90deg, #ff0c46 0%, #ff797d 100%);
      }
      & > i:last-child {
        background: linear-gradient(90deg, #769dff 0%, #316ded 100%);
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