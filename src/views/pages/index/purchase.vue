<template>
  <div class="purchase">
    <!-- 回退按钮 -->
    <i class="backBtn">
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />
    </i>
    <img src="@/assets/404_images/404.png" alt />
    <!-- 抢购信息 -->
    <section class="purchase_info">
      <!-- 顶部 -->
      <div class="_top">
        <div class="title">童装女童吊带连衣裙夏装新款韩童装女童吊带连衣裙夏装新款韩...</div>
        <div class="num">
          <span style="color:#333">商品价值:</span>&nbsp;99元&nbsp;&nbsp;&nbsp;
          <span style="color:#333">剩余份数:</span>&nbsp;1/9份
        </div>
      </div>
      <!-- 中部 -->
      <div class="_mid">
        <div class="num">
          <span style="color:#999">任务金额:</span>&nbsp;99元&nbsp;&nbsp;&nbsp;
          <span style="color:#999">返还金额:</span>&nbsp;999元
        </div>
        <div class="time">
          <span>截止日期：2019-07-07 00:00:00</span>
        </div>
      </div>
      <!-- 底部 -->
      <div class="_bottom">商家已存入保证金99元平台担保返款</div>
    </section>
    <!-- 任务流程 -->
    <section class="purchase_flow">
      <header>任务流程</header>
      <ul>
        <li>1、点击“立即领取”,获取免单资格</li>
        <li>2、点击"开始任务",按照任务提示，以￥99.00元价格去指定平台</li>
        <li>3、填写店铺名称，点击验证通过之后，填写订单号，并提交任务</li>
        <li>4、卖家发货→收到快递后到淘宝确认收货→给予五星好评并上传好评截图到平台→等待卖家确认</li>
        <li>5、卖家确认无误后，平台返款￥10.00元到您的账户中供您提现</li>
      </ul>
    </section>
    <!-- 注意事项 -->
    <section class="purchase_note">
      <header>注意事项</header>
      <ul>
        <li>1、与商家旺旺聊天时禁止提及“淘大熊、试客、试单、刷单”等信息，否则取消平台任务合作机会!</li>
        <li>2、禁止使用信用卡、花呗、淘金币、优惠券、红包、天猫积分等淘宝商家使用的官方优惠渠道</li>
        <li>3、禁止通过淘客网、返利网、-淘等返现返利链接下单!</li>
      </ul>
      <div class="scale">
        <span>* 以上由于买家违规下单所产生的费用，由买家承担。淘大熊有权冻结其帐号,限制提现操作，IP列入黑名单。</span>
      </div>
    </section>
    <!-- 温馨提示 -->
    <section class="purchase_tip" style="margin-bottom:0">
      <header>温馨提示</header>
      <ul>
        <li>1、用户获取免单资格后，请根据时间提示及时下单并提交订单号</li>
        <li>2、若因未按时提交任务信息而被系统取消任务资格，平台概不负责！</li>
      </ul>
    </section>
    <!-- 立即领取 -->
    <footer>
      <div class="_s" @click="$router.push('/index')">首页</div>
      <div class="_s">客服</div>
      <!-- $router.push('/getStart') -->
      <div class="_l" @click="showConfirm = true">立即领取</div>
    </footer>

    <!-- 确认弹窗 -->
    <van-dialog v-model="showConfirm" title="商品信息" @confirm="handleConfirm">
      <van-cell title="商品名称" value />
      <van-cell title="商品价格" value />
      <ul>
        <li>注：1.领取任务后，2小时有效，超过2小时，任务自动退回，请在自动时间内完成任务！</li>
        <li>2.每天00:00平台停止抢单，00:00没有提交任务的订单将会自动退单，请及时完成任务</li>
      </ul>
    </van-dialog>
  </div>
</template>
<script>
export default {
  name: "purchase",
  data() {
    return {
      showConfirm: false
    };
  },
  methods: {
    handleConfirm() {
      this.showConfirm = false
      setTimeout(() => {
        this.$router.push('/getStart')
      }, 200);
    }
  }
};
</script>
<style lang="scss">
.purchase {
  position: relative;
  .backBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    color: #fff;
    position: absolute;
    top: 10px;
    left: 15px;
    background: #666;
    border-radius: 50%;
    opacity: 0.25;
    i {
      font-size: 14px;
    }
  }
  & > section {
    background: #fff;
    margin-bottom: 10px;
    .num {
      color: #fa2742;
      font-size: 12px;
    }
  }
  // 图片样式
  & > img {
    display: block;
    width: 100vw;
    height: 100vw;
    background: greenyellow;
  }

  &_info {
    & > div {
      padding: 10px 15px;
    }
    & > ._top {
      .title {
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 10px;
      }
    }
    & > ._mid {
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      span {
        color: #999;
      }
      .time {
        margin-top: 10px;
        span {
          display: inline-block;
          color: #fa2742;
          border: 1px solid #fa2742;
          padding: 4px 8px;
          border-radius: 5px;
        }
      }
    }
    & > ._bottom {
      color: #999;
    }
  }

  &_flow,
  &_note,
  &_tip {
    padding: 10px 15px;

    & > header {
      font-size: 13px;
      margin-bottom: 10px;
    }
    & > ul {
      li {
        line-height: 2;
        font-size: 12px;
        color: #666;
        margin-bottom: 10px;
      }
    }
    .scale {
      line-height: 1.5;
      transform: scale(0.9);
      margin-left: calc(-10vw + 20px);
    }
  }
  footer {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    box-shadow: 0px 0px 9px 2px rgba(229, 229, 229, 0.36);
    ._s {
      width: 60px;
      font-size: 12px;
      color: #666;
      text-align: center;
      &:first-child {
        border-right: 1px solid #e5e5e5;
      }
    }
    ._l {
      text-align: center;
      color: #fff;
      flex: 1;
      background: linear-gradient(-90deg, #fa2440 0%, #f7697d 100%);
    }
  }
}
</style>
<style lang="scss">
.purchase {
  .van-dialog__content {
    ul {
      padding: 10px 15px;
      li {
        font-size: 12px;
        line-height: 1.5;
      }
    }
  }
}
</style>