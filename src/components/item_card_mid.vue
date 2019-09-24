<template>
  <div class="item_card_mid" @click="$router.push('/getSoon')">
    <!-- 图片 -->
    <img src="@/assets/404_images/404.png" alt />
    <!-- 内容部分 -->
    <main>
      <div class="title">
        <i>需晒图</i>
        <span>纯棉加厚搜索棉袄</span>
      </div>
      <div class="content">
        <div class="content_price">￥29.9</div>
        <div class="content_desc">
          <van-progress pivot-text color="#ff5500" :percentage="50" />
          <span class="word">已抢20件共50件</span>
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
    text-align: center;
    padding: 0 14px;
    .title {
      margin: 5px 0;
      display: flex;
      align-items: center;
      i {
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
    .content {
      display: flex;
      // justify-content: space-between;
      align-items: center;
      &_price {
        font-size: 12px;
        color: #ff5500;
        text-decoration: line-through;
      }
      &_desc {
        display: flex;
        flex-direction: column;
        color: #999;
        margin-left: 8px;
        transform: scale(0.9);
        .word {
          flex: 1;
          padding-top: 5px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .btn {
      font-size: 12px;
      margin: 10px 0;
      padding: 4px 6px;
      width: calc(100%);
      // height: 20px;
      // line-height: 20px;
      color: #ff5500;
      border: 1px solid #ff5500;
      border-radius: 5px;
      box-shadow: 0px 3px 1px 0px rgba(255, 201, 169, 0.43);
    }
  }
}
</style>