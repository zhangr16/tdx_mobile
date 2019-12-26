<template>
  <div class="item_card_mid2" @click="handleClick">
    <!-- 图片 -->
    <img :src="entity.img " alt />
    <!-- 内容部分 -->
    <main>
      <div class="title">
        <span>{{entity.title}}</span>
      </div>
      <!-- xqg -->
      <div class="content2" v-if="isBearBuy">
        <div class="content2_price">
          <span>¥ {{entity.price}}</span>
          <div>
            <span>返利</span>
            <span>¥{{entity.price - entity.current_price}}</span>
          </div>
        </div>
        <div class="content2_desc">
          <span>
            最低价
            <i>{{entity.current_price}}</i>元
          </span>
          <img v-if="entity.shop_type == 1" src="@/assets/tianmao.png" alt />
          <img v-else src="@/assets/taobao.png" alt />
        </div>
      </div>
      <!-- free -->
      <template v-else>
        <div class="two_icons">
          <!-- <i class="two_icons_first" v-if="entity.is_img">需晒图</i> -->
          <!-- <i class="two_icons_last" v-if="entity.integral">积分奖励{{entity.integral}}</i> -->
        </div>
        <div class="content">
          <div class="content_price">￥{{entity.price}}</div>
          <div class="content_desc">
            <van-progress
              pivot-text
              color="#ff5500"
              :percentage="entity.task_count ? 100 * (1 - entity.order_count/entity.task_count) : 100"
            />
            <span class="word">
              已抢
              <i>{{entity.order_count}}</i>
              件 共{{entity.task_count}}件
            </span>
          </div>
        </div>
      </template>
      <div class="btn">马上抢</div>
    </main>
  </div>
</template>
<script>
// 限量免单、熊抢购中卡片
export default {
  name: "item_card_mid2",
  props: {
    entity: {
      default: {},
      type: Object
    },
    isFamily: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    isBearBuy() {
      return this.$route.name == "bearBuy";
    }
  },
  methods: {
    handleClick() {
      if (this.entity.task_number > 1) {
        this.$router.push(
          "/getSoon?pa_id=" + this.entity.pa_id + "&isFamily=" + this.isFamily
        );
      } else {
        this.$router.push(
          "/purchase?t_id=" + this.entity.t_id + "&isFamily=" + this.isFamily
        );
      }
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
        align-items: center;
        font-size: 12px;
        & > span {
          font-size: 16px;
          color: #ff464f;
          text-decoration: line-through;
        }
        & > div {
          margin-left: 10px;
          border: 1px solid #ff464f;
          & > span {
            display: inline-block;
            padding: 2px 5px;
          }
          & > span:first-child {
            background: #ff464f;
            color: #fff;
          }
          & > span:last-child {
            background: #fff;
            color: #ff464f;
          }
        }
      }
      &_desc {
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > span:first-child {
          color: #fff;
          background: #ff464f;
          border-radius: 0 15px 15px 0;
          padding: 4px 7px;
          font-size: 10px;
          i {
            font-size: 14px;
          }
        }
        & > img {
          width: 20px;
          color: #ff464f;
        }
      }
    }
    .two_icons {
      padding: 5px 0;
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
        margin: 0 20px;
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