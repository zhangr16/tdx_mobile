<template>
  <div class="item_card_small" @click="$router.push('/getSoon')">
    <img src="@/assets/404_images/404.png" alt />
    <main>
      <div class="title">纯棉加厚搜索棉袄</div>
      <div class="content">
        <div class="content_price">￥9.9</div>
        <div class="content_desc">
          <van-progress
            pivot-text=""
            color="#ff5500"
            :percentage="50"
          />
          <span class="">已抢20件共50件</span>
        </div>
      </div>
      <div class="btn">马上抢</div>
    </main>
  </div>
</template>
<script>
// 首页推荐小卡片
export default {
  name: "item_card_small",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scope>
.item_card_small {
  width: 100%;
  & > img {
    width: 100%;
    height: calc((100vw - 46px) / 3);
    background: gainsboro;
    border-radius: 5px;
  }
  & > main {
    width: calc((100vw - 46px) / 3);
    .title {
      font-size: 12px;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 5px 0;
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &_price {
        font-size: 14px;
        color: #ff5500;
        text-decoration: line-through;
        margin-right: 5px;
      }
      &_desc {
        display: flex;
        flex-direction: column;
        transform: scale(0.8);
        margin-left: -10%;
        color: #999;
        span {
          padding-top: 5px; 
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .btn {
      text-align: center;
      font-size: 12px;
      margin: 10px 0;
      width: calc(100% - 20px);
      margin-left: 10px;
      height: 20px;
      line-height: 20px;
      color: #fff;
      border-radius: 5px; 
      background-image: linear-gradient(-90deg, #f95e26 0%, #fb9a0f 100%);
      box-shadow: 0px 3px 1px 0px rgba(255, 201, 169, 0.43);
    }
  }
}
</style>