<template>
  <div class="purchase">
    <!-- 回退按钮 -->
    <i class="backBtn" @click.passive="$router.push('/')">
      <van-icon class="left_arrow" name="arrow-left" />
    </i>
    <img class="main_img" :src="entity.img" alt="" />
    <!-- <van-image :src="entity.img">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image> -->

    <van-cell-group v-if="isloading">
      <van-skeleton title :row="2" />
    </van-cell-group>
    <!-- 抢购信息 -->
    <section v-else class="purchase_info">
      <!-- 顶部 -->
      <div class="_top">
        <div class="title">{{entity.title}}</div>
      </div>
      <!-- 中部 -->
      <div class="_mid">
        <template v-if="entity.module_type == 'free'">
          <div class="num">
            <span>任务金额:</span>
            &nbsp;{{entity.price * entity.order_number}}元&nbsp;&nbsp;&nbsp;
            <span>返还金额:</span>
            &nbsp;{{entity.price * entity.order_number}}元
          </div>
          <div class="num">
            <span>商品价值:</span>
            &nbsp;{{entity.price * entity.order_number}}元&nbsp;&nbsp;&nbsp;
            <span>剩余份数:</span>
            &nbsp;{{entity.remain_count}}/{{entity.task_count}}份
          </div>
        </template>
        <template v-else>
          <div class="xqg">
            剩余
            <i>{{entity.remain_count}}</i>
            份/
            限量
            <i>{{entity.task_count}}</i> 份
          </div>
          <div class="xqg fanli">
            <span>任务金额: {{entity.price}}元</span>
            <div>
              <span>返利</span>
              <span>¥ {{entity.price - entity.current_price}}</span>
            </div>
          </div>
          <div class="xqg">
            <span>
              最低价:
              <i>{{entity.current_price}}元</i>
            </span>
          </div>
        </template>
        <div class="time">
          <span>截止日期：{{entity.end_time}}</span>
        </div>
      </div>
      <!-- 底部 -->
      <div
        class="_bottom"
        v-if="entity.module_type == 'free'"
      >商家已存入保证金{{entity.price * entity.order_number}}元平台担保返款</div>
      <div class="_bottom2" v-else>熊抢购非免单任务，返款金额 = 任务金额 - 最低价 + 积分金额</div>
    </section>
    <!-- 任务流程 -->
    <section class="purchase_flow">
      <header>
        <span class="iconfont iconrenwuliucheng"></span> 任务流程
      </header>
      <ul>
        <li>1、点击“立即领取”,获取免单资格</li>
        <li>2、点击"开始任务",按照任务提示，以￥{{entity.price * entity.order_number}}元价格去指定平台</li>
        <li>3、复制宝贝链接，点击验证通过之后，填写订单号，并提交任务</li>
        <li>4、卖家发货→收到快递后到淘宝确认收货→给予五星好评并上传好评截图到平台→等待卖家确认</li>
        <li>5、卖家确认无误后，平台返款￥{{ entity.module_type == 'free' ? entity.price * entity.order_number : entity.price - entity.current_price}}元到您的账户中供您提现</li>
      </ul>
    </section>
    <!-- 注意事项 -->
    <section class="purchase_note">
      <header>
        <span class="iconfont iconzhuyi"></span> 注意事项
      </header>
      <ul>
        <li>
          1、与商家旺旺聊天时禁止提及
          <i>“淘大熊、试客、试单、刷单”</i>等信息，否则取消平台任务合作机会!
        </li>
        <li>
          2、禁止使用
          <i>信用卡、花呗、淘金币、优惠券、红包、天猫积分</i>等淘宝商家使用的官方优惠渠道
        </li>
        <li>
          3、禁止通过
          <i>淘客网、返利网、-淘</i>等返现返利链接下单!
        </li>
      </ul>
      <div class="scale">
        <span>* 以上由于买家违规下单所产生的费用，由买家承担。淘大熊有权冻结其帐号,限制提现操作，IP列入黑名单。</span>
      </div>
    </section>
    <!-- 温馨提示 -->
    <section class="purchase_tip" style="margin-bottom:50px">
      <header>
        <span class="iconfont iconwenxintishi"></span> 温馨提示
      </header>
      <ul>
        <li>1、用户获取免单资格后，请根据时间提示及时下单并提交订单号</li>
        <li>2、若因未按时提交任务信息而被系统取消任务资格，平台概不负责！</li>
      </ul>
    </section>
    <!-- 立即领取 -->
    <footer>
      <div class="_s" @click="$router.push('/index')">
        <span class="iconfont iconshouye-mashangqiangdangeshangpin"></span> 首页
      </div>
      <div class="_s" @click="showService = true">
        <span class="iconfont iconkefu"></span> 客服
      </div>
      <div class="_l" @click="showConfirm = true">立即领取</div>
    </footer>

    <!-- 确认弹窗 -->
    <van-dialog
      v-model="showConfirm"
      title="商品信息"
      :closeOnClickOverlay="true"
      @confirm="handleConfirm()"
    >
      <van-cell title="商品名称" :value="entity.title" />
      <van-cell title="商品价格" :value="'¥' + entity.price" />
      <ul>
        <li>注：1.领取任务后，2小时有效，超过2小时，任务自动退回，请在自动时间内完成任务！</li>
        <li>2.每天00:00平台停止抢单，00:00没有提交任务的订单将会自动退单，请及时完成任务</li>
      </ul>
    </van-dialog>
    <!-- 服务弹窗 -->
    <van-dialog v-model="showService" title="客服信息" :closeOnClickOverlay="true">
      <ul>
        <li style="font-size:14px">注：如有疑问，请及时联系淘大熊客服（晴天或熊大）</li>
      </ul>
    </van-dialog>
  </div>
</template>
<script>
import { tDetail, tReceive } from "@/api";

export default {
  name: "purchase",
  data() {
    return {
      isloading: false,
      showService: false,
      showConfirm: false,
      entity: {}
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.isloading = true;
      let res = await tDetail({ t_id: this.$route.query.t_id });
      if (res && res.error.errno == 200) this.entity = res.data;
      this.isloading = false;
    },
    async handleConfirm() {
      sessionStorage.setItem('t_id', this.$route.query.t_id)

      let res = await tReceive({
        t_id: this.$route.query.t_id,
        is_family: this.$route.query.isFamily == "true" ? 1 : null
      });
      if (res && res.error.errno == 200) {
        this.$router.push("/getStart?o_id=" + res.order_id);
      }
    },
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
    width: 35px;
    height: 35px;
    color: #fff;
    position: absolute;
    z-index: 9999;
    top: 15px;
    left: 15px;
    background: #666;
    border-radius: 50%;
    opacity: 0.5;
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
      padding: 5px 0;
    }
  }
  // 图片样式
  .main_img{
    display: block;
    width: 100vw;
  }

  &_info {
    & > div {
      padding: 10px 15px;
    }
    & > ._top {
      .title {
        font-weight: 600;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    & > ._mid {
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      .xqg {
        & > span {
          color: #333;
        }
        margin-bottom: 10px;
        i {
          font-size: 16px;
          color: #fa2742;
        }
      }
      .fanli {
        display: flex;
        align-items: center;
        & > div {
          margin-left: 10px;
          border: 1px solid #fa2742;
          & > span {
            display: inline-block;
            padding: 2px 5px;
          }
          & > span:first-child {
            background: #fa2742;
            color: #fff;
          }
          & > span:last-child {
            background: #fff;
            color: #fa2742;
          }
        }
      }
      span {
        color: #999;
        font-size: 14px;
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
      font-size: 14px;
      color: #999;
    }
    & > ._bottom2 {
      font-size: 12px;
      color: #fa2742;
    }
  }

  &_flow,
  &_note,
  &_tip {
    padding: 10px 15px;

    & > header {
      font-size: 16px;
      margin-bottom: 10px;
      font-weight: 500;
      & > .iconfont {
        color: #fa2440;
      }
    }
    & > ul {
      li {
        line-height: 1.5;
        font-size: 14px;
        color: #666;
        margin-bottom: 10px;
        i {
          color: #fa2742;
        }
      }
    }
    .scale {
      line-height: 1.5;
      font-size: 12px;
    }
  }
  footer {
    z-index: 999;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    font-size: 14px;
    box-shadow: 0px 0px 9px 2px rgba(229, 229, 229, 0.36);
    ._s {
      width: 60px;
      font-size: 14px;
      color: #666;
      text-align: center;
      background: #fff;
      &:first-child {
        border-right: 1px solid #e5e5e5;
      }
    }
    ._l {
      text-align: center;
      color: #fff;
      flex: 1;
      font-size: 16px;
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
  .van-swipe__indicator--active {
    background-color: #fa2742;
  }
}
</style>