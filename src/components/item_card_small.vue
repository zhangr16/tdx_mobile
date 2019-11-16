<template>
  <div class="item_card_small" @click="handleClick">
    <van-image :src="entity.img">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
    <main>
      <div class="title">{{entity.title}}</div>
      <div class="content">
        <div class="content_price">￥{{entity.price}}</div>
        <div class="content_desc">
          <van-progress pivot-text color="#ff5500" :percentage="50" />
          <span class>已抢{{entity.order_count || 0}}件共{{entity.task_count || 1}}件</span>
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
  props: {
    entity: {
      default: {},
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      if(this.entity.task_number > 1) {
        this.$router.push('/getSoon?pa_id=' + this.entity.pa_id)
      } else {
        this.$router.push('/purchase?t_id=' + this.entity.t_id)
      }
    }
  },
};
</script>
<style lang="scss" scope>
.item_card_small {
  width: 100%;
  & > img {
    width: 100%;
    height: calc((100vw - 60px) / 3);
    background: gainsboro;
    border-radius: 5px;
  }
  & > main {
    width: calc((100vw - 60px) / 3);
    .title {
      font-size: 12px;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 5px 0;
      font-weight: bold;
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &_price {
        font-size: 14px;
        color: #ff5500;
        text-decoration: line-through;
      }
      &_desc {
        // display: flex;
        // flex-direction: column;
        transform: scale(0.75);
        margin-left: -8%;
        color: #999;
        & > span {
          display: block;
          margin: 5px 0;
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