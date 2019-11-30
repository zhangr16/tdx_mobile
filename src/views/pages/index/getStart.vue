<template>
  <div class="getStart">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />开始任务
    </header>
    <nav>禁止联系卖家咨询任务相关情况，如有疑问请联系平台客服</nav>
    <!-- 注意事项 -->
    <section>
      <header>注意事项</header>
      <ul class="note">
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
    <!-- 流程 -->
    <section>
      <ul class="step">
        <li>
          <header>
            <span>1</span>搜索宝贝
          </header>
          <article>
            <ul>
              <li style="color:#666">
                请打开淘宝APP使用账号<i style="color:#f7687c">小熊</i>登录。如果已登录请点击“我的淘宝”“头像”，确认会员名是否一致
              </li>
              <li>* 复制关键词切换到淘宝APP搜索</li>
              <li>
                * 关键词：
                <span class="change_keyword" @click="changeKeyword">更换关键词</span>
              </li>
              <li class="copy_wrapper">
                <input type="text" class="inp" readonly v-model="key_word" />
                <span class="search1" @click="handleCopykeyword">复 制</span>
              </li>
              <li>
                找不到商品?
                <span class="report" @click="showDialog = true">举报</span>
              </li>
            </ul>
          </article>
        </li>
        <li>
          <header>
            <span>2</span>同类对比
          </header>
          <article>
            <ul>
              <li style="color:#666">货比三家，每个商品页从上到下浏览三分钟左右</li>
            </ul>
          </article>
        </li>
        <li>
          <header>
            <span>3</span>核对宝贝
          </header>
          <article style="border:none">
            <ul>
              <li style="color:#666">货比三家，每个商品页从上到下浏览三分钟左右</li>
              <li>* 店铺名称：{{entity.shop_name}}</li>
              <li>* 商品价格：合计{{entity.price*entity.order_number}}元（{{entity.price + '元/*' + entity.order_number + '件'}}）</li>
              <li>* 发货地：{{entity.area}}</li>
              <li>* 价格区间：{{entity.price_start}}~{{entity.price_end}}元</li>
              <li>* 注意事项：麻烦货比三家后下单。海外，港澳台，新疆，西藏，内蒙，青海，海南，宁夏不发。</li>
              <li>
                * 商品主图：
                <img class="main_img" :src="entity.img" alt />
              </li>
              <template v-if="entity.verify_url < 0">
                <li>* 核对宝贝，请提交宝贝链接或淘口令</li>
                <li>
                  <van-icon
                    v-if="checkUrl.length > 0"
                    name="clear"
                    class="_del"
                    @click="checkUrl = ''"
                  />
                  <input type="text" class="inp" v-model.trim="checkUrl" />
                  <span class="search2" @click="handleConfirm">验 证</span>
                </li>
                <li class="scale_li">1、获取链接方法：长按宝贝标题获取宝贝链接</li>
                <li class="scale_li">2、淘口令获取方法：宝贝标题右边点击“分享”-左下角点击复制链接-粘贴至空格点击验证</li>
              </template>
            </ul>
          </article>
        </li>
      </ul>
    </section>
    <!-- 3tip -->
    <section>
      <ul class="tips">
        <li>* 进店浏览至少三款其他宝贝，每个宝贝浏览2分钟左右。</li>
        <li>* 回到主宝贝，仔细浏览至少5分钟，收藏宝贝和店铺。</li>
        <li>* 再次确认后付款并提交订单号到后台。</li>
      </ul>
    </section>
    <!-- 注意 -->
    <section>
      <div class="attention">注意 ：收到货后再确认收货，五星好评，然后上传好评截图到平台，等待商家审核之后申请提现返款</div>
    </section>
    <!-- 活动信息 -->
    <section class="active_info" v-if="entity.verify_url > 0">
      <header>活动信息</header>
      <van-cell-group>
        <van-field v-model="activityForm.user_ww" label="接手旺旺" placeholder readonly />
        <van-field
          v-model.trim="activityForm.pay_amount"
          type="number"
          label="实际支付金额"
          placeholder="请输入实际支付金额"
        />
        <van-cell class="_exchanger" title="积分抵换" v-if="entity.module_type == 'xqg'">
          <van-radio-group v-model="is_integral" :checked-color="`#ff5500`">
            <van-radio name="1">是</van-radio>
            <van-radio name="2">否</van-radio>
          </van-radio-group>
        </van-cell>
        <van-field
          v-if="is_integral == 1 && entity.module_type == 'xqg'"
          type="number"
          v-model.trim="activityForm.integral"
          label="积分兑换数量"
          placeholder="请输入积分兑换数量"
        />
        <van-field
          v-model.trim="activityForm.order_sn"
          label="订单编号"
          placeholder="请输入订单编号"
          maxlength="18"
          clearable
        />
        <van-field
          v-model.trim="activityForm.user_comment"
          label="买家备注"
          placeholder="20字以内(可不填)"
          maxlength="20"
        />
      </van-cell-group>
      <div style="text-align:center;margin-top:15px">
        <van-button
          color="linear-gradient(-90deg, #fa2440 0%, #f7697d 100%)"
          square
          size="large"
          type="primary"
          @click="handleSubmit"
        >提 交</van-button>
      </div>
    </section>

    <van-dialog v-model="showDialog" title="举报内容" show-cancel-button @confirm="handleInform">
      <van-radio-group v-model="informRadio">
        <van-cell-group>
          <van-cell title="任务价格不一致" clickable @click="informRadio = '任务价格不一致'">
            <van-radio slot="right-icon" checked-color="#ff5500" name="任务价格不一致" />
          </van-cell>
          <van-cell title="淘宝找不到宝贝" clickable @click="informRadio = '淘宝找不到宝贝'">
            <van-radio slot="right-icon" checked-color="#ff5500" name="淘宝找不到宝贝" />
          </van-cell>
          <van-cell title="任务图片不一致" clickable @click="informRadio = '任务图片不一致'">
            <van-radio slot="right-icon" checked-color="#ff5500" name="任务图片不一致" />
          </van-cell>
          <van-cell title="没有指定规格的宝贝" clickable @click="informRadio = '没有指定规格的宝贝'">
            <van-radio slot="right-icon" checked-color="#ff5500" name="没有指定规格的宝贝" />
          </van-cell>
          <van-cell title="商家有运费" clickable @click="informRadio = '商家有运费'">
            <van-radio slot="right-icon" checked-color="#ff5500" name="商家有运费" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-dialog>
  </div>
</template>
<script>
import itemCardLarge from "@/components/item_card_large";
import { oDetail, oFeedback, oUrlcheck, oSubmit } from "@/api";

export default {
  name: "getStart",
  components: { itemCardLarge },
  data() {
    return {
      entity: {
        user_ww: ""
      },
      key_word: "",
      showDialog: false,
      informRadio: "",
      checkUrl: "",

      is_integral: "1",
      activityForm: {
        user_ww: "", // 接手旺旺
        pay_amount: "",
        integral: "",
        order_sn: "",
        user_comment: ""
      }
    };
  },
  mounted() {
    this.getData();
  },
  watch: {
    is_integral: function(val) {
      if (val == 2) delete this.activityForm.integral;
    }
  },
  methods: {
    async getData() {
      let res = await oDetail({ order_id: this.$route.query.o_id });
      if (res && res.error.errno == 200) {
        this.entity = res.data;
        this.key_word = this.entity.keyword;
        this.activityForm.user_ww = this.entity.user_ww;
      }
    },
    changeKeyword() {
      this.key_word =
        this.key_word == this.entity.keyword2
          ? this.entity.keyword
          : this.entity.keyword2;
    },
    handleCopykeyword() {
      this.$copyText(this.key_word).then(
        () => this.$toast.success("成功复制关键词到剪贴板！"),
        e => this.$toast.success(e)
      );
    },
    // 验证
    async handleConfirm() {
      if (this.checkUrl) {
        let res = await oUrlcheck({
          order_id: this.$route.query.o_id,
          product_url: this.checkUrl
        });
        if (res && res.error.errno == 200) {
          this.$toast.success("验证成功, 请填写下方活动信息");
          this.entity.verify_url = 1;
        }
      } else {
        this.$toast.fail("请填写宝贝链接或淘口令");
      }
    },
    // 举报
    async handleInform() {
      let res = await oFeedback({
        order_id: this.$route.query.o_id,
        type: this.entity.module_type == "free" ? 1 : 2,
        reason: this.informRadio
      });
      if (res && res.error.errno == 200) this.$toast.success("举报成功！");
    },
    async handleSubmit() {
      if (!this.activityForm.pay_amount) {
        this.$toast.fail("请输入支付金额");
      } else if (
        this.activityForm.pay_amount !=
        this.entity.price * this.entity.order_number
      ) {
        this.$toast.fail("实际支付金额不一致");
      } else if (
        this.is_integral == 1 &&
        !this.activityForm.integral &&
        this.entity.module_type == "xqg"
      ) {
        this.$toast.fail("请输入积分兑换数量");
      } else if (!this.activityForm.order_sn) {
        this.$toast.fail("请输入订单编号");
      } else if (this.activityForm.order_sn.length != 18) {
        this.$toast.fail("请订单编号输入18位订单编号");
      } else {
        let res = await oSubmit({
          order_id: this.$route.query.o_id,
          ...this.activityForm
        });
        if (res && res.error.errno == 200) {
          this.$toast.success("提交成功！");
          this.$router.push("/task");
        }
      }
    }
  }
};
</script>
<style lang="scss" scope>
.getStart {
  position: relative;
  & > header {
    width: 100%;
    position: fixed;
    z-index: 999999;
    height: 40px;
    line-height: 40px;
    background: #fff;
    text-align: center;
    font-size: 17px;
    .left_arrow {
      position: absolute;
      left: 15px;
      top: 10px;
      font-size: 20px;
    }
  }
  & > nav {
    color: #fff;
    padding-top: 40px;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    background: linear-gradient(-90deg, #fc5303 0%, #fa8f05 100%);
  }
  & > section {
    padding: 10px 15px;
    background: #fff;
    margin-top: 10px;
    & > header {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: bold;
    }
    // 注意事项
    & > .note {
      li {
        line-height: 1.5;
        font-size: 14px;
        color: #666;
        margin-bottom: 10px;
        i {
          color: #ff5500;
        }
      }
    }
    .scale {
      line-height: 1.5;
      font-size: 12px;
    }
    // 步骤
    & > .step {
      li {
        font-size: 16px;
        & > header {
          display: flex;
          align-items: center;
          font-weight: bold;
          span {
            font-weight: normal;
            margin-right: 5px;
            font-size: 12px;
            width: 14px;
            height: 14px;
            line-height: 14px;
            border-radius: 50%;
            border: 1px solid #333;
            text-align: center;
          }
        }
        & > article {
          padding: 5px 0 5px 12px;
          margin-left: 6.5px;
          border-left: 1px dashed #999;
          li {
            position: relative;
            padding: 5px 0;
            line-height: 1.5;
            font-size: 14px;
            .main_img {
              width: 100%;
            }
            ._del {
              color: #999;
              font-size: 16px;
              position: absolute;
              right: 100px;
              top: 16px;
            }
            .inp {
              width: 245px;
              height: 40px;
              padding: 0 40px 0 15px;
              line-height: 40px;
              border: 1px solid #ccc;
              border-right: 0;
              outline: none;
              border-radius: 0;
              color: #929292;
            }
            .search1 {
              display: inline-block;
              text-align: center;
              background: linear-gradient(-90deg, #fc5504 0%, #fa8d05 100%);
              color: #fff;
              width: 50px;
              height: 40px;
              line-height: 40px;
              font-size: 14px;
            }
            .search2 {
              display: inline-block;
              text-align: center;
              background: linear-gradient(-90deg, #fb243f 0%, #f7687c 100%);
              color: #fff;
              width: 50px;
              height: 40px;
              line-height: 40px;
              font-size: 14px;
            }
            .change_keyword {
              padding: 5px;
              color: #fff;
              background: linear-gradient(-90deg, #fc5403 0%, #fa8e05 100%);
              border-radius: 5px;
            }
            .report {
              padding: 1px 3px;
              color: #4178ee;
              border-radius: 5px;
              border: solid 1px #4178ee;
            }
          }
          .scale_li {
            padding: 0;
            line-height: 1.5;
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
    // tips
    & > .tips {
      line-height: 1.8;
      font-size: 12px;
    }
    // 注意
    & > .attention {
      line-height: 1.5;
      font-size: 14px;
    }
  }
}
</style>
<style lang="scss">
.active_info {
  .van-cell {
    padding: 15px 0 !important;
  }
  .van-field {
    border-bottom: 1px solid #ebedf0; 
  }
  .van-cell:not(:last-child)::after {
    border: none;
  }
  .van-field__control {
    padding-left: 8px;
  }
  
  ._exchanger {
    display: flex;
    .van-cell__value {
      flex: 2.7;
      .van-radio-group {
        display: flex;
        .van-radio {
          flex: 1;
        }
      }
    }
  }
}
</style>