<template>
  <div class="item_card_large" @click="$router.push('/purchase')">
    <img src="@/assets/404_images/404.png" alt />
    <main>
      <div class="title">童装女童吊带连衣裙夏装新款韩...童装女童吊带连衣裙夏装新款韩...</div>
      <div class="content">
        <div class="content_price1"><span>商品价值:</span> 99元&nbsp;&nbsp;<span>剩余份数:</span> 1/9份</div>
        <div class="content_price2"><span>任务金额:</span> 99元&nbsp;&nbsp;<span>返还金额:</span> 99元</div>
        <div class="content_time">
          <span>截止日期：2019-07-07 00:00:00</span>
        </div>
        <div class="content_insure">商家已存入保证金99元平台担保返款</div>
        <div class="content_btn">
          <span>抢购</span>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
// 马上抢大卡片
export default {
  name: "item_card_large",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scope>
.item_card_large {
  width: 100%;
  display: flex;
  padding: 10px 15px;
  & > img {
    width: 130px;
    height: 130px;
    border-radius: 5px;
    background-color: #ffb240;
    margin-right: 10px;
  }
  & > main {
    width: calc(100% - 140px);
    .title {
      width: 100%;
      font-size: 15px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 5px;
    }
    .content {
      width: 100%;
      font-size: 12px;
      & > div {
        width: 100%;
      }
      &_price1,
      &_price2 {
        font-size: 12px;
        padding: 3px 0;
        color: #ff5500;
      }
      &_price1 > span {
        color: #333;
      }
      &_price2 > span {
        color: #999;
      }
      &_time {
        margin-top: 5px;
        span {
          display: inline-block;
          color: #ff5500;
          border: 1px solid #ff5500;
          padding: 4px 6px;
          border-radius:5px;
        }
      }
      &_insure {
        color: #999;
        margin: 7px 0;
      }
      &_btn {
        text-align: center;
        span {
          color: #fff;
          display: inline-block;
          width: 92px;
          height: 20px;
          line-height: 20px;
          border-radius:5px; 
          box-shadow: 0px 3px 1px 0px rgba(255, 201, 169, 0.43);
          background-image: linear-gradient(-90deg, #f95e26 0%, #fb9a0f 100%);
        }
      }
    }
  }
}
</style>