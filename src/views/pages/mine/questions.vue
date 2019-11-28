<template>
  <div class="questions">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />问题集
    </header>
    <main>
      <van-collapse v-model="activeNames">
        <van-collapse-item name="1">
          <template slot="title">
            <span></span>注意事项
          </template>
          <ul class="content_ul">
            <li>
              1、下单禁止使用
              <i>淘宝客、淘金币、红包、集分宝、花呗、信用卡、代付</i>；如用以上方式下单，产生的费用将由会员自行承担，拒不承担的，平台有权冻结账号并停止返款；
            </li>
            <li>
              2、只能使用实名认证的淘宝号下单，抢到任务尽快下单，2小时内订单号登记超时自动退单，每天
              <i>0点</i>停止抢单，
              <i>0点</i>未提交的任务自动退单；
            </li>
            <li>3、免单活动的内容全部咨询淘大熊客服，商品物流问题可以咨询商家，跟商家沟通时，不允许提及免单，好评返现等不相干问题；</li>
            <li>4、任意两人的收货地址不得完全相同，任意两人的收货人姓名及电话不得相同；</li>
            <li>5、无特殊情况不要申请退款，如有问题需退款必须经淘大熊客服同意；</li>
            <li>
              6、打款银行支持：
              <i>招商银行、交通银行、中国工商银行、中国建设银行、中国农业银行、中国银行</i>；没有的亲们麻烦提前准备哦。
            </li>
            <li class="_bold">* 请大家严格按照任务流程下单，不得互相分享宝贝链接！发现分享宝贝链接者和商家反映不按要求下单者，一经发现，冻结账号！</li>
          </ul>
        </van-collapse-item>
        <van-collapse-item name="2">
          <template slot="title">
            <span></span>平台介绍
          </template>
          <ul class="content_ul">
            <li>
              平台分有两个板块，
              <i>限量免单和熊抢购</i>，粉丝可以自由领取免单任务做单获得相应的产品奖励及积分奖励，
              熊抢购：是商家的真实商品哦，属于淘宝真实购买！
              可以使用积分抵扣，100积分抵扣1元，积分越多，抵扣越多，最高可抵扣到免费购买。
            </li>
          </ul>
        </van-collapse-item>
        <van-collapse-item name="3">
          <template slot="title">
            <span></span>限量免单问题集
          </template>
          <ul class="question_ul">
            <li>
              <div class="_ask">问：每天能做几单任务？</div>
              <div class="_answer">
                <span class="_ask">答：</span>30个自然日内可以抢15单，
                <i>每天最多可以抢2单</i>，如果抢满
                系统会自动提示下次抢单时间
              </div>
            </li>
            <li>
              <div class="_ask">问：怎么做单？</div>
              <div class="_answer _flex">
                <span class="_ask">答：</span>
                <ul>
                  <li>1、首页领取任务</li>
                  <li>
                    2、下单提交订单号（先验证链接，核对任务金额下单）平台放单暂时分两种：
                    <ul style="margin-left:15px">
                      <li>① 有关键词的，打开淘宝搜索关键词（严格按照任务要求流程下单），货比三家，找到对应的商品拍下；</li>
                      <li>② 有淘口令的，复制打开淘宝弹出窗口领券下单。</li>
                    </ul>
                  </li>
                  <li>3、收到货之后确认收货上传好评截图（评价必须填写）</li>
                  <li>4、商家36小时内审核（超过36小时系统自动审核）</li>
                  <li>5、审核成功后任务金额返还到余额里</li>
                </ul>
              </div>
            </li>
            <li>
              <div class="_ask">问：需在多长时间内在平台提交订单号？</div>
              <div class="_answer">
                <span class="_ask">答：</span>自领取任务后，
                <i>2小时内需要在平台提交淘宝订单号</i>，2小时后未提交，该任务自动撤销。
              </div>
            </li>
            <li>
              <div class="_ask">问：找不到商品怎么办？</div>
              <div class="_answer">
                <span class="_ask">答：</span>筛选宝贝价格区间仍然找不到请联系淘大熊客服处理。
              </div>
            </li>
            <li>
              <div class="_ask">问：找到产品链接价格不对怎么办？</div>
              <div class="_answer">
                <span class="_ask">答：</span>先验证链接，如链接验证失败说明找错产品，验证成功但是
                价格不对，只要不是运费原因差额不大的可以先在淘宝付款，付
                款后按照任务金额提交到平台，提交后发订单号和付款截图给淘
                大熊客服，客服可以改成实付金额，按照这个金额返款。
              </div>
            </li>
            <li>
              <div class="_ask">问：是否可以使用花呗、信用卡下单？</div>
              <div class="_answer">
                <span class="_ask">答：</span>
                下单禁止使用
                <i>淘宝客、淘金币、红包、集分宝、花呗、信用卡、代付</i>；如用以上方式下单，
                产生的费用将由会员自行承担，拒不承担的平台有权冻结账号并停止返款
                <i>（其中，使用花呗、信用卡产生的手续费为付款金额的1%）</i>
              </div>
            </li>
            <li>
              <div class="_ask">问：做任务的时候能不能联系商家？</div>
              <div class="_answer">
                <span class="_ask">答：</span>
                可以在淘宝上和商家沟通，但是不能再沟通过程中涉及到做任务，礼品样式等敏感词语！这些是不能的！
              </div>
            </li>
            <!-- 111111 -->
            <li>
              <div class="_ask">问：用了错误的旺旺号怎么办？</div>
              <div class="_answer">
                <span class="_ask">答：</span>用错旺旺号有一定的可能导致商家发成真货，用错旺旺号一定要在第一时间！
                联系淘大熊客服微信，如造成商家发成真货，粉丝需寄回真货并承担来回运费。
              </div>
            </li>
            <li>
              <div class="_ask">问：商家不发货怎么办？</div>
              <div class="_answer">
                <span class="_ask">答：</span>联系淘大熊客服，发订单号和物流截图，客服会联系商家催发货。
              </div>
            </li>
            <li>
              <div class="_ask">问：下单后忘记提交订单号？</div>
              <div class="_answer">
                <span class="_ask">答：</span>联系淘大熊客服，发订单号和淘宝订单截图，
                淘大熊客服确认是否发货，如造成商家发成真货，粉丝需寄回真货并承担来回运费。
              </div>
            </li>
            <li>
              <div class="_ask">问：收到的礼品有问题怎么办？</div>
              <div class="_answer">
                <span class="_ask">答：</span>务必保留凭证后联系客服，不然可能无法处理，凭证包括
                <i>礼品照片，快递面单（快递包裹上面白色的单子）和订单号</i>。
              </div>
            </li>
            <li>
              <div class="_ask">问：忘记评价截图了？</div>
              <div class="_answer">
                <span class="_ask">答：</span>我的淘宝我的评价里面有。
              </div>
            </li>
            <li>
              <div class="_ask">问：好评截图上传错误怎么做？</div>
              <div class="_answer">
                <span class="_ask">答：</span>在会员中心待审核模块可以找到对应的任务，
                点击查看好评截图，重新修改为正确的截图。
              </div>
            </li>
            <li>
              <div class="_ask">问：确认收货后评价需要注意什么？</div>
              <div class="_answer">
                <span class="_ask">答：</span>所有任务都需要
                <i>五星好评+文字</i>。
              </div>
            </li>

            <li>
              <div class="_ask">问：定制评价如何处理？</div>
              <div class="_answer">
                <span class="_ask">答：</span>定制评价是指商家设定了文字和图片，需要特殊评价的，
                <i>会有额外的1元奖励</i>，找到对应任务，点击下方的红色字体内容，
                里面有商家提供的文字和图片，必须评价商家规定的内容，没有按照规定的，
                <i>作废定制评价</i>。
              </div>
            </li>
            <li>
              <div class="_ask">问：怎么绑定银行卡？</div>
              <div class="_answer">
                <span class="_ask">答：</span>会员中心绑定实名的银行卡
                （打款银行支持：招商银行、交通银行、中国工商银行、中国建设银行、中国农业银行、中国银行）。
              </div>
            </li>
            <li>
              <div class="_ask">问：提交好评截图后多长时间可以返款？</div>
              <div class="_answer">
                <span class="_ask">答：</span>首先
                <i>核对下银行卡信息是否正确</i>，银行卡信息包括：持卡人与开户所属人是否一致。
                填写的所属行是否为支持的打款银行，银行卡是否被银行限制，需修改银行卡记得联系淘大熊客服!
                一切正常可以进手机银行APP查看流水，部分到账信息是没有短信提醒的哦！
              </div>
            </li>
          </ul>
        </van-collapse-item>

        <van-collapse-item name="4">
          <template slot="title">
            <span></span>熊抢购问题集
          </template>
          <ul class="question_ul">
            <li>
              <div class="_ask">问：熊抢购是什么？</div>
              <div class="_answer">
                <span class="_ask">答：</span>
                熊抢购里面的是商家的真实商品，属于淘宝真实购买！不是
                返还全部本金,但是可以使用积分抵扣，100积分抵扣1元，最多
                抵扣到免费拿真货！！！例如在充话费和购买商品时可以抵扣现
                金使用，比如充50话费，有5000积分可以抵扣五十元哦，就是免
                费充50元话费哦！！！在您确认收货上传好评截图后，抵扣的积
                分会折现和返还金额一起返还到您的余额中，之后自行提现就可以。
              </div>
            </li>
            <li>
              <div class="_ask">问：如何得到积分？积分有什么用？</div>
              <div class="_answer">
                <span class="_ask">答：</span>
                <i>
                  在限量免单任务中，标题上带有积分字样的，在得到礼品的
                  同时还会获得相应的积分，100积分=1元，积分不能直接折合为
                </i>
                现金，但积分可以在熊抢购抵扣金额使用。
              </div>
            </li>
            <li>
              <div class="_ask">问：对平台有些建议，想留言怎么留言？</div>
              <div class="_answer">
                <span class="_ask">答：</span>淘大熊平台——会员中心——意见反馈，或者联系淘大熊客
                服述说登记记录。
              </div>
            </li>
          </ul>
        </van-collapse-item>
      </van-collapse>
    </main>
  </div>
</template> 
<script>
export default {
  // 问题集
  name: "questions",
  components: {},
  data() {
    return {
      activeNames: ["1", "2", "3", "4"]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scope>
.questions {
  position: relative;
  width: 100%;
  padding-top: 50px;
  min-height: 100vh;
  & > header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999999;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(-90deg, #fc5303 0%, #fa8e05 100%);
    text-align: center;
    color: #fff;
    font-size: 17px;
    .left_arrow {
      position: absolute;
      left: 15px;
      top: 10px;
      font-size: 20px;
    }
  }
  & > main {
    .van-cell__title {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 16px;
      & > span {
        width: 3px;
        height: 14px;
        background: #ff5500;
        margin-right: 5px;
      }
    }
    .van-cell__right-icon {
      color: #000;
      font-size: 18px;
    }
    .van-collapse-item {
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0; 
      }
    }
    .van-collapse-item__content {
      padding: 10px 15px;
    }
    // 注意事项+平台介绍
    .content_ul {
      & > li {
        font-size: 14px;
        color: #666;
        line-height: 1.7;
        margin-bottom: 7px;
        i {
          color: #fa2a44;
        }
      }
      ._bold {
        font-weight: bold;
        font-size: 12px;
      }
    }
    // 问题集
    .question_ul {
      & > li {
        font-size: 14px;
        line-height: 1.7;
        padding: 10px 0;
        border-bottom: 1px dashed #e5e5e5;
        &:last-child {
          border: none;
        }
        ._ask {
          color: #333;
          font-weight: bold;
        }
        & > ._answer {
          color: #666;
        }
        i {
          color: #fa2a44;
        }
        & > ._flex {
          display: flex;
        }
      }
    }
  }
}
</style>