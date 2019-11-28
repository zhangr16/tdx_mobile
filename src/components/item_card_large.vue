<template>
  <div class="item_card_large" @click="handleClick">
    <img :src="entity.img" alt />
    <main>
      <div class="title">{{entity.title}}</div>
      <div class="content">
        <!-- free -->
        <template v-if="entity.module_type == 'free'">
          <van-progress
            pivot-text
            color="#ff5500"
            :percentage="100 * (entity.remain_count/entity.task_count)"
          />
          <div class="content_word">
            已抢
            <i>{{entity.task_count - entity.remain_count}}</i>件 共
            <i>{{entity.task_count}}</i>件
          </div>
          <!-- <div class="content_price1"><span>商品价值:</span> 99元&nbsp;&nbsp;<span>剩余份数:</span> 1/9份</div> -->
          <div class="content_price2">
            <span>任务金额:</span>
            {{entity.price}}元&nbsp;&nbsp;
            <span>返还金额:</span>
            {{entity.price - entity.current_price}}元
          </div>
          <div class="content_time">
            <span>截止日期：{{entity.task_end}}</span>
          </div>
        </template>
        <!-- xqg -->
        <template v-else>
          <div class="xqg_num">
            剩余
            <i>{{entity.remain_count}}</i>
            份/
            限量 {{entity.task_count}} 份
          </div>
          <div class="xqg_price">
            最低价:
            <i>¥{{entity.current_price}}</i>
            <span>¥{{entity.price}}</span>
          </div>
          <div class="xqg_fanli">
            <span>返利30元</span>
          </div>
        </template>
        <div
          class="content_insure"
        >商家已存入保证金{{entity.activity_type == 1 ? entity.price*entity.order_number : entity.price - entity.current_price }}元平台担保返款</div>
        <div class="content_btn">
          <span>马上抢</span>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
// 马上抢大卡片
export default {
  name: "item_card_large",
  props: {
    entity: {
      default: {},
      type: Object
    },
    isFamily: {
      default: false,
      type: [Object, String]
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$router.push(
        "/purchase?t_id=" + this.entity.t_id + "&isFamily=" + this.isFamily
      );
    }
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
      font-weight: bold;
    }
    .content {
      width: 100%;
      font-size: 12px;
      & > div {
        width: 100%;
      }
      .xqg_price,
      .xqg_num,
      .xqg_fanli {
        margin-bottom: 5px;
        color: #999;
        font-size: 12px;
        i {
          font-weight: bold;
          color: #ff5500;
        }
      }
      .xqg_price {
        i {
          padding: 0 10px;
          font-size: 16px;
        }
        span {
          text-decoration: line-through;
        }
      }
      .xqg_fanli {
        margin-bottom: 0;
        span {
          display: inline-block;
          padding: 3px 7px;
          background: #ff5500;
          color: #fff;
          border-radius: 0 15px 15px 0;
        }
      }
      &_word {
        padding: 5px 0;
        color: #999;
        font-size: 12px;
        i {
          color: #ff464f;
        }
      }
      &_price1,
      &_price2 {
        font-size: 14px;
        padding: 3px 0;
        color: #ff5500;
      }
      &_price1 > span {
        font-size: 12px;
        color: #333;
      }
      &_price2 > span {
        font-size: 12px;
        color: #999;
      }
      &_time {
        margin-top: 5px;
        span {
          display: inline-block;
          color: #ff5500;
          // border: 1px solid #ff5500;
          // padding: 4px 6px;
          // border-radius:5px;
        }
      }
      &_insure {
        color: #999;
        padding: 7px 0;
      }
      &_btn {
        span {
          text-align: center;
          color: #fff;
          display: inline-block;
          width: 150px;
          height: 22px;
          line-height: 22px;
          border-radius: 5px;
          box-shadow: 0px 3px 1px 0px rgba(255, 201, 169, 0.43);
          background-image: linear-gradient(-90deg, #f95e26 0%, #fb9a0f 100%);
        }
      }
    }
  }
}
</style>