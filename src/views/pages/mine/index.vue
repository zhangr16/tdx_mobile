<template>
  <div class="mine">
    <header>
      <div class="msg">
        <van-icon name="comment-o" @click="$router.push('/msg')" />
        <span @click="$router.push('/msg')">(20)</span>
      </div>
      <div class="desc">
        <img />
        <div>
          <div class="desc_top">用户名:15877187876</div>
          <div class="desc_bottom">
            <span>邀请码：12345678</span>
            <span>免单30天总单量：210单</span>
          </div>
        </div>
      </div>
      <div class="nums">
        <span>账户余额：10.00</span>
        <span>积分：0</span>
      </div>
    </header>
    <main>
      <section>
        <div class="tabs">
          <span :class="{'is_active': is_active == 0}" @click="is_active = 0">免单任务</span>
          <span :class="{'is_active': is_active == 1}" @click="is_active = 1">熊抢购任务</span>
        </div>
        <div class="states">
          <span>
            <van-icon name="orders-o" />
            <a>
              已申请
              <i>(1)</i>
            </a>
          </span>
          <span>
            <van-icon name="label-o" />
            <a>
              已提交
              <i>(2)</i>
            </a>
          </span>
          <span>
            <van-icon name="clock-o" />
            <a>
              待审核
              <i>(3)</i>
            </a>
          </span>
          <span>
            <van-icon name="passed" />
            <a>
              已完成
              <i>(41)</i>
            </a>
          </span>
        </div>
      </section>
      <section>
        <div class="fans">
          <div>
            <span>
              <van-icon name="friends-o" />&nbsp;
              <span>粉丝</span>
            </span>
            <span class="_numbers">0</span>
          </div>
          <div>
            <span>
              <van-icon name="notes-o" />&nbsp;
              <span>免单总数</span>
            </span>
            <span class="_numbers">0</span>
          </div>
        </div>
      </section>
      <section style="padding:0">
        <ul class="icons_ul">
          <li @click="$router.push('/zhtx')">
            <img src="@/assets/mine/wd_icon_zhanghutixian@2x.png" alt />
            <span>账户提现</span>
          </li>
          <li @click="$router.push('/funds')">
            <img src="@/assets/mine/wd_icon_zijinmingxi@2x.png" alt />
            <span>资金明细</span>
          </li>
          <li class="br_none" @click="$router.push('/score')">
            <img src="@/assets/mine/wd_icon_jifenmingxi@2x.png" alt />
            <span>积分明细</span>
          </li>
          <li @click="$router.push('/share')">
            <img src="@/assets/mine/wd_icon_fenxianghaoyou@2x.png" alt />
            <span>分享给好友</span>
          </li>
          <li @click="$router.push('/certification')">
            <img src="@/assets/mine/wd_icon_shimingrenzheng@2x.png" alt />
            <span>实名认证</span>
          </li>
          <li class="br_none" @click="$router.push('/personal')">
            <img src="@/assets/mine/wd_icon_jibenziliao@2x.png" alt />
            <span>基本资料</span>
          </li>
          <li @click="$router.push('/questions')">
            <img src="@/assets/mine/wd_icon_wentiji@2x.png" alt />
            <span>问题集</span>
          </li>
          <li @click="$router.push('/suggestions')">
            <img src="@/assets/mine/wd_icon_tousujianyi@2x.png" alt />
            <span>投诉与建议</span>
          </li>
          <li class="br_none" @click="$router.push('/resetPassword')">
            <img src="@/assets/mine/wd_icon_xiugaimima@2x.png" alt />
            <span>修改密码</span>
          </li>
          <li class="bb_none" @click="$router.push('/friendShip')">
            <img src="@/assets/mine/wd_icon_qinyoutuan@2x.png" alt />
            <span>亲友团</span>
          </li>
          <li class="bb_none" @click="$router.push('/hdjl')">
            <img src="@/assets/mine/wd_icon_huodongjiangli@2x.png" alt />
            <span>活动奖励</span>
          </li>
          <li @click="$router.push('/update')">
            <img src="@/assets/mine/wd_icon_gengxin@2x.png" alt />
            <span>更新说明</span>
          </li>
        </ul>
      </section>
    </main>
    <footer>
      <div class="logout" @click="$router.push('/login')">退出登录</div>
    </footer>
  </div>
</template> 
<script>
export default {
  name: "mine",
  data() {
    return {
      is_active: 0
    };
  },
  methods: {}
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
      i {
        font-size: 16px;
        vertical-align: middle;
      }
    }
    .desc {
      display: flex;
      align-items: center;
      padding-right: 30px;
      & > img {
        width: 50px;
        height: 50px;
        background: #ccc;
        border-radius: 50%;
      }
      & > div {
        padding: 5px;
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
      padding: 15px 30px 15px 50px;
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
      padding: 0 15px;
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
          & > i {
            color: #fa2a44;
            font-size: 22px;
            padding: 10px 0;
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
            & > i {
              font-size: 18px;
            }
          }
          ._numbers {
            padding-top: 5px;
            color: #fa2a44;
            font-size: 16px;
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
          &:last-child {
            border: none;
          }
        }
        .br_none {
          border-right: none;
        }
        .bb_none {
          border-bottom: none;
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