<template>
  <div class="item_card_mid2" @click="$router.push('/getSoon')">
    <!-- 图片 -->
    <img src="@/assets/404_images/404.png" alt />
    <!-- 内容部分 -->
    <main>
      <div class="title">
        <span>纯棉加厚搜索棉袄纯棉加厚搜索棉袄纯棉加厚搜索棉袄纯棉加厚搜索棉袄</span>
      </div>
      <div class="content">
        <div class="content_price">￥2.9</div>
        <div class="content_desc">累计已抢<i>1</i>份 累计剩余<i>2</i>份</div>
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
    text-align: center;
    padding: 0 14px;
    .title {
      margin: 5px 0;
      display: flex;
      align-items: center;
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
        color: #999;
        transform: scale(0.9);
        i {
          color: red;
        }
      }
    }
    .btn {
      font-size: 12px;
      margin: 10px 0;
      padding: 4px 6px;
      width: calc(100%);
      color: #ff5500;
      border: 1px solid #ff5500;
      border-radius: 5px;
      box-shadow: 0px 3px 1px 0px rgba(255, 201, 169, 0.43);
    }
  }
}
</style>