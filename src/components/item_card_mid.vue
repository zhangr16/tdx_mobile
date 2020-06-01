<template>
  <div class="item_card_mid" @click="handleClick">
    <!-- 图片 -->
    <img :src="entity.img" alt />
    <!-- 内容部分 -->
    <main>
      <div class="title">
        <span>{{entity.title}}</span>
      </div>
      <div class="two_icons">
        <i class="two_icons_first" v-if="entity.is_remote > 0">偏远地区不发货</i>
        <i class="two_icons_last" v-else style="color:white">偏远地区不发货</i>
        <!-- <i class="two_icons_last" v-if="entity.integral">积分奖励{{entity.integral}}</i> -->
      </div>
      <div class="content">
        <div class="content_price">¥{{entity.price}}</div>
        <div class="content_desc">
          <van-progress
            pivot-text
            color="#ff5500"
            :percentage="entity.task_count ? 100 * (1 - entity.order_count/entity.task_count) : 100"
          />
          <span class="word">
            已抢<i>{{entity.order_count}}</i>件 共{{entity.task_count}}件
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
    entity: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      if (this.entity.task_number > 1) {
        this.$router.push("/getSoon?pa_id=" + this.entity.pa_id);
      } else {
        this.$router.push("/purchase?t_id=" + this.entity.t_id);
      }
    }
  }
};
</script>
<style lang="scss" scope>
.item_card_mid {
  width: 100%;
  & > img {
    width: 100%;
    height: calc((100vw - 36px) / 2);
    background: gainsboro;
  }
  & > main {
    width: 100%;
    padding: 0 10px;
    .title {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: bold;
      i {
        font-weight: normal;
        display: inline-block;
        color: #fff;
        padding: 3px 5px;
        text-align: center;
        background: linear-gradient(-90deg, #ff0c46 0%, #ff797d 100%);
        border-radius: 3px;
      }
      span {
        flex: 1;
        padding-top: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .two_icons {
      padding: 3px 0;
      i {
        display: inline-block;
        color: #fff;
        padding: 3px 5px;
        border-radius: 3px;
        &:first-child {
          margin-right: 8px;
        }
      }
      &_first {
        background: linear-gradient(-90deg, #ff0c46 0%, #ff797d 100%);
      }
      &_last {
        // background: linear-gradient(90deg, #769dff 0%, #316ded 100%);
      }
    }
    .content {
      display: flex;
      align-items: center;
      &_price {
        font-size: 18px;
        color: #ff5500;
        text-decoration: line-through;
        width: 70px;
      }
      &_desc {
        flex: 1;
        display: flex;
        flex-direction: column;
        color: #999;
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
      width: 100%;
      color: #ff5500;
      border: 1px solid #ff5500;
      border-radius: 5px;
      box-shadow: 0px 3px 1px 0px rgba(255, 201, 169, 0.43);
    }
  }
}
</style>