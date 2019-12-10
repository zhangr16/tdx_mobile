<template>
  <div class="mine">

    <header>
      <div class="msg">
        <span class="iconfont iconxiaoxi" @click="$router.push('/msg')"></span>
        <span @click="$router.push('/msg')">({{entity.un_msg_num || 0}})</span>
      </div>
      <van-skeleton v-if="isloading" title avatar :row="1" />
      <!-- <div v-if="isloading">
        <van-loading type="spinner" />
      </div> -->
      <div v-else class="desc">
        <div class="img">
          <van-image :src="entity.avatar" use-error-slot>
            <span slot="error" class="iconfont iconmorentouxiang"></span>
          </van-image>
        </div>
        <div class="text">
          <div class="desc_top">用户名:{{entity.account}}</div>
          <div class="desc_bottom">
            <span>邀请码：{{invited_code}}</span>
            <span>免单30天总单量：{{entity.order_month_num || 0}}单</span>
          </div>
        </div>
      </div>
      
      <div class="nums">
        <span>账户余额：{{entity.balance || 0}}</span>
        <span>积分：{{entity.integral || 0}}</span>
      </div>
    </header>
    <main>
      <section>
        <div class="tabs">
          <span :class="{'is_active': is_active == 0}" @click="is_active = 0">免单任务</span>
          <span :class="{'is_active': is_active == 1}" @click="is_active = 1">熊抢购任务</span>
        </div>
        <div class="states" v-if="is_active == 0">
          <span>
            <span style="font-weight:500" class="iconfont iconyilingqu"></span>
            <a>
              已领取
              <i>({{entity.order_num.free.received_num}})</i>
            </a>
          </span>
          <span>
            <span class="iconfont iconyitijiao"></span>
            <a>
              已提交
              <i>({{entity.order_num.free.submitted_num}})</i>
            </a>
          </span>
          <span>
            <span class="iconfont icondaishenhe"></span>
            <a>
              待审核
              <i>({{entity.order_num.free.pending_review_num}})</i>
            </a>
          </span>
          <span>
            <span class="iconfont iconyiwancheng"></span>
            <a>
              已完成
              <i>({{entity.order_num.free.completed_num}})</i>
            </a>
          </span>
          <span>
            <span class="iconfont iconshouhou"></span>
            <a>
              售后
              <i>({{entity.order_num.free.after_sale_num}})</i>
            </a>
          </span>
        </div>
        <div class="states" v-else-if="is_active == 1">
          <span>
            <span style="font-weight:500" class="iconfont iconyilingqu"></span>
            <a>
              已领取
              <i>({{entity.order_num.xqg.received_num}})</i>
            </a>
          </span>
          <span>
            <span class="iconfont iconyitijiao"></span>
            <a>
              已提交
              <i>({{entity.order_num.xqg.submitted_num}})</i>
            </a>
          </span>
          <span>
            <span class="iconfont icondaishenhe"></span>
            <a>
              待审核
              <i>({{entity.order_num.xqg.pending_review_num}})</i>
            </a>
          </span>
          <span>
            <span class="iconfont iconyiwancheng"></span>
            <a>
              已完成
              <i>({{entity.order_num.xqg.completed_num}})</i>
            </a>
          </span>
          <span>
            <span class="iconfont iconshouhou"></span>
            <a>
              售后
              <i>({{entity.order_num.xqg.after_sale_num}})</i>
            </a>
          </span>
        </div>
      </section>
      <section>
        <div class="fans">
          <div>
            <span>
              <span class="iconfont iconfensi"></span>&nbsp;
              <span>粉丝</span>
            </span>
            <span class="_numbers">{{entity.fan_num}}</span>
          </div>
          <div>
            <span>
              <span class="iconfont iconmiandanzongshu"></span>&nbsp;
              <span>免单总数</span>
            </span>
            <span class="_numbers">{{free_total}}</span>
          </div>
        </div>
      </section>
      <section style="padding:0">
        <ul class="icons_ul">
          <li @click="$router.push('/zhtx')">
            <img src="@/assets/mine/wd_icon_zhanghutixian@2x.png" alt />
            <span>账户提现</span>
          </li>
          <li @click="$router.push('/bindCard')">
            <img src="@/assets/mine/yinhangkabangding@2x.png" alt />
            <span>绑定银行卡</span>
          </li>
          <li class="br_none" @click="$router.push('/funds')">
            <img src="@/assets/mine/wd_icon_zijinmingxi@2x.png" alt />
            <span>资金明细</span>
          </li>
          <li @click="$router.push('/score')">
            <img src="@/assets/mine/wd_icon_jifenmingxi@2x.png" alt />
            <span>积分明细</span>
          </li>
          <li @click="$router.push('/share')">
            <img src="@/assets/mine/wd_icon_fenxianghaoyou@2x.png" alt />
            <span>分享给好友</span>
          </li>
          <li class="br_none" @click="entity.verified_status == 2 ? $router.push('/kefuInfo') : $router.push('/certification')">
            <img src="@/assets/mine/wd_icon_shimingrenzheng@2x.png" alt />
            <span>实名认证</span>
          </li>
          <li @click="$router.push('/personal')">
            <img src="@/assets/mine/wd_icon_jibenziliao@2x.png" alt />
            <span>基本资料</span>
          </li>
          <li @click="$router.push('/questions')">
            <img src="@/assets/mine/wd_icon_wentiji@2x.png" alt />
            <span>问题集</span>
          </li>
          <li class="br_none" @click="$router.push('/suggestions')">
            <img src="@/assets/mine/wd_icon_tousujianyi@2x.png" alt />
            <span>投诉与建议</span>
          </li>
          <li @click="$router.push('/resetPassword')">
            <img src="@/assets/mine/wd_icon_xiugaimima@2x.png" alt />
            <span>修改密码</span>
          </li>
          <li v-if="entity.is_family > 0" @click="$router.push('/friendShip')">
            <img src="@/assets/mine/wd_icon_qinyoutuan@2x.png" alt />
            <span>亲友团</span>
          </li>
          <li :class="{'br_none': entity.is_family > 0}" @click="$router.push('/hdjl')">
            <img src="@/assets/mine/wd_icon_huodongjiangli@2x.png" alt />
            <span>活动奖励</span>
          </li>
          <li :class="{'br_none': entity.is_family < 0}" @click="$router.push('/update')">
            <img src="@/assets/mine/wd_icon_gengxin@2x.png" alt />
            <span>更新说明</span>
          </li>
        </ul>
      </section>
    </main>
    <footer>
      <div class="logout" @click="handleLogout">退出登录</div>
    </footer>
  </div>
</template> 
<script>
import { userIndex } from "@/api";

export default {
  name: "mine",
  data() {
    return {
      isloading: false,
      is_active: 0,
      free_total: 0,
      entity: {
        order_num: {
          free: {},
          xqg: {}
        }
      }
    };
  },
  computed: {
    invited_code() {
      if(this.$store.state.user.name) {
        return this.$store.state.user.name.invite_code 
      } else {
        return ''
      }
    }
  },
  async mounted() {
    this.isloading = true
    let res = await userIndex();
    if (res && res.error.errno == 200) {
      this.entity = res.data;
      // 计算免单
      let sum = 0
      Object.keys(this.entity.order_num.free).map(el => {
        if(el != 'after_sale_num') sum += this.entity.order_num.free[el]
      })
      this.free_total = sum
    }
    this.isloading = false
  },
  methods: {
    handleLogout() {
      this.$dialog
        .confirm({
          message: "是否确认退出登录？"
        })
        .then(() => {
          this.$store
            .dispatch("LogOut")
            .then(res => {
              if (res) {
                this.$router.push({ path: "/" });
                this.$toast.success("登出成功！");
              }
            })
            .catch(err => {});
        })
        .catch(() => {});
    }
  }
};
</script>
<style lang="scss" scope>
.mine {
  width: 100%;
  & > header {
    background: linear-gradient(-90deg, #fc5303 0%, #fa8e05 100%);
    // height: 120px;
    padding: 5px 15px;
    color: #fff;
    .msg {
      align-items: center;
      text-align: right;
      font-size: 14px;
      padding: 5px 0;
      & > span:first-child {
        font-size: 16px;
        vertical-align: middle;
      }
    }
    .desc {
      display: flex;
      align-items: center;
      padding-right: 30px;
      & > .img {
        width: 50px;
        height: 50px;
        .van-image {
          width: 100%;
          height: 100%;
          background: #fff;
        }
        .iconmorentouxiang {
          font-size: 48px;
        }
      }
      & > .text {
        padding: 5px 10px;
        flex: 1;
        .desc_top {
          font-size: 14px;
        }
        .desc_bottom {
          margin-top: 5px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .nums {
      padding: 15px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 14px;
        background-color: #fb7704;
        border-radius: 5px;
        border: 1px solid #fff;
        text-align: center;
        padding: 5px 15px;
      }
    }
  }
  & > main {
    & > section {
      background: #fff;
      margin-top: 15px;
      .tabs {
        display: flex;
        font-size: 14px;
        .is_active {
          border-bottom: 2px solid #fb6e04;
        }
        & > span {
          text-align: center;
          padding: 10px 0;
          flex: 1;
          &:first-child {
            border-right: 1px solid #e5e5e5;
          }
        }
      }
      .states {
        display: flex;
        & > span {
          flex: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          & > span {
            color: #fa2a44;
            font-size: 26px;
            padding: 12px 0;
          }
          & > i {
            color: #fa2a44;
            font-size: 26px;
            padding: 12px 0;
          }
          a {
            padding-bottom: 10px;
            & > i {
              color: #fa2a44;
            }
          }
        }
      }
      .fans {
        padding: 10px 0;
        display: flex;
        & > div {
          flex: 1;
          display: flex;
          flex-direction: column;
          &:first-child {
            border-right: 1px solid #e5e5e5;
          }
          & > span {
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            .iconfont {
              font-weight: bold;
              font-size: 18px;
            }
          }
          ._numbers {
            padding-top: 5px;
            color: #fa2a44;
            font-size: 18px;
          }
        }
      }
      .icons_ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        & > li {
          width: calc(100vw / 3);
          height: 80px;
          border-bottom: 1px solid #e5e5e5;
          border-right: 1px solid #e5e5e5;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          img {
            width: 25px;
            height: 25px;
            margin-bottom: 10px;
          }
        }
        .bb_none {
          border-bottom: none;
        }
        .br_none {
          border-right: none;
        }
      }
    }
  }
  & > footer {
    margin-top: 20px;
    margin-bottom: 70px;
    font-size: 14px;
    .logout {
      color: #fff;
      width: 345px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      background: linear-gradient(-90deg, #fc5303 0%, #fa8c05 100%);
      border-radius: 22px;
      margin-left: 15px;
    }
  }
}
</style>