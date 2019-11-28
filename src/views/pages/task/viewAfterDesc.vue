<template>
  <div class="viewAfterDesc">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />
      {{ '售后详情' }}
    </header>
    <main>
      <van-cell-group v-if="isloading">
        <van-skeleton title :row="3" />
      </van-cell-group>
      
      <van-cell-group v-else>
        <!-- 状态层 -->
        <van-cell
          class="status_class"
          :class="{'class_green': entity.sale_status == 3, 'class_red': entity.sale_status != 3}"
          :title="status_title"
          :label="status_label"
        />
        <van-cell class="top_content">
          <!-- 文字提示层 -->
          <template>
            <div v-if="entity.sale_status == 1 || entity.sale_status == 2">
              <ul v-if="isFans">
                <template v-if="entity.sale_type == 1">
                  <li>1、商家同意，系统将自动补差给您</li>
                  <li>2、如果商家36小时内未处理，平台将自动接入处理</li>
                  <li>3、如果商家拒绝，您可以修改申请后再次发起，商家会重新处理，或者申请平台介入</li>
                </template>
                <template v-else>
                  <li>已成功发起售后申请，请耐心等待处理</li>
                </template>
              </ul>
              <template v-else>
                <div class="sale_tips">粉丝已成功发起售后申请，请及时处理</div>
                <ul>
                  <li>1、如果同意系统将自动补差给用户任务</li>
                  <li>2、如果用户36小时内未处理，平台将自动介入处理</li>
                </ul>
              </template>
            </div>
          </template>
          <!-- 按钮层 -->
          <div class="four_btns">
            <!-- 物流类型+待处理 -->
            <span
              v-if="(entity.sale_type == 2 || entity.sale_type == 4) && entity.sale_status == 1"
              style="background:#ff6137"
              @click="handleClickBtns(3)"
            >确认完结</span>
            <!-- 申请方+ （1待处理 2待平台处理） -->
            <span
              v-if="(entity.sale_status == 1 || entity.sale_status == 2) && isFans"
              style="background:#51c757"
              @click="$router.push('/applyAfter?id=' + $route.query.id + '&e=1')"
            >修改申请</span>
            <span
              v-if="(entity.sale_status == 1 || entity.sale_status == 2) && isFans"
              style="background:#909399"
              @click="chexiaoApply"
            >撤销申请</span>
            <!-- 申请方 -->
            <span
              v-if="isFans"
              style="background:#fa3950"
              @click="$router.push('/applyAfter?id=' + entity.order_id)"
            >再次申请</span>
            <!-- 处理方+（资金，礼品类型） -->
            <span
              v-if="(entity.sale_status == 1 || entity.sale_status == 3) && !isFans"
              style="background:#fa3950"
              @click="$router.push('/applyAfter?id=' + entity.order_id)"
            >申请售后</span>
            <!-- 待处理+（资金，物流类型） -->
            <span
              v-if="(entity.sale_type == 1 || entity.sale_type == 2 || entity.sale_type == 4) && entity.sale_status == 1"
              style="background:#5784ff"
              @click="handleClickBtns(2)"
            >客服介入</span>
            <!-- 处理方+待处理+资金 -->
            <span
              v-if="entity.sale_status == 1 && !isFans && entity.sale_type == 1"
              style="background:#67C23A"
              @click="handleClickBtns(3)"
            >同 意</span>
            <span
              v-if="entity.sale_status == 1 && !isFans && entity.sale_type == 1"
              style="background:#F56C6C"
              @click="handleClickBtns(-2)"
            >驳 回</span>
          </div>
        </van-cell>
      </van-cell-group>

      <van-cell class="mid_history" title="协商历史" is-link @click="goTohistory" />

      <van-cell-group v-if="isloading">
        <van-skeleton title :row="5" />
      </van-cell-group>
      <template v-else>
        <section>
        <div class="_title">售后信息</div>
        <div class="viewAfterDesc_body">
          <img :src="entity.img" alt />
          <!-- 限量免单 -->
          <ul v-if="entity.module_type != 'xqg'">
            <li>{{entity.title}}</li>
            <li class="scale_num">订单编号：{{entity.order_sn}}</li>
            <li>
              原价：
              <i>¥{{entity.price}}</i>
            </li>
            <li>
              实拍：
              <i>¥{{entity.reality_price}}</i>
            </li>
            <li>账号：{{entity.mobile}}</li>
          </ul>
          <!-- 熊抢购 -->
          <ul v-else>
            <li>{{entity.title}}</li>
            <li class="scale_num">订单编号：{{entity.order_sn}}</li>
            <li>账号：{{entity.mobile}}</li>
            <li>
              <span>
                优惠价：
                <i>¥{{entity.current_price}}</i>
              </span>
              <span>
                返利：
                <i>¥{{entity.reality_price - entity.current_price}}</i>
              </span>
            </li>
            <li>
              <span>
                原&nbsp;&nbsp;&nbsp;价：
                <i>¥{{entity.task_price}}</i>
              </span>
              <span>
                实拍：
                <i>¥{{entity.reality_price}}</i>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <van-cell-group>
        <van-cell class="desc_ul">
          <ul>
            <li>
              <i>售后原因：</i>
              {{columns[entity.sale_type - 1]}}
            </li>
            <li v-if="entity.sale_type == 1">
              <i>任务原价：</i>
              ￥{{entity.price}}
            </li>
            <li v-if="entity.sale_type == 1">
              <i>实拍价：</i>
              ￥{{entity.reality_price}}
            </li>
            <li v-if="entity.sale_type == 1">
              <i>差价金额：</i>
              ￥{{entity.differ_price}}
            </li>
            <li>
              <i>售后说明：</i>
              {{entity.comment}}
            </li>
            <li>
              <i>申请时间：</i>
              {{entity.create_time}}
            </li>
          </ul>
        </van-cell>
      </van-cell-group>
      </template>
    </main>
  </div>
</template> 
<script>
import { saleApply } from "@/api/index";

export default {
  // 好评截图
  name: "viewAfterDesc",
  components: {},
  data() {
    return {
      isloading: false, // 上部分
      columns: ["资金问题", "物流问题", "礼品问题", "其他"],
      fileList: [],
      entity: {},
      countDownList: "还剩00天00时00分00秒"
    };
  },
  async mounted() {
    this.isloading = true
    let res = await saleApply({
      sale_id: this.$route.query.id,
      action: 3
    });
    if (res && res.error.errno == 200) {
      this.entity = res.data;
      this.countDown();
    }
    this.isloading = false
  },
  computed: {
    // 是否为粉丝 --> 申请方
    isFans() {
      return this.entity.platform == "2c";
    },
    // ["-2售后失败", "-1已撤销", "1待处理", "2待平台处理", "3售后成功"],
    status_title() {
      let r;
      switch (this.entity.sale_status) {
        case -2:
          r = "售后失败";
          break;
        case -1:
          r = "已撤销";
          break;
        case 1:
          r = "待处理";
          break;
        case 2:
          r = "待处理(已申请客服介入)";
          break;
        case 3:
          r = "售后成功";
          break;
        default:
          r = "未知";
          break;
      }
      return r;
    },
    status_label() {
      if (this.entity.sale_status == 1 || this.entity.sale_status == 2) {
        // 倒计时
        return this.countDownList;
      } else if (this.entity.sale_status == 3) {
        return "该售后申请已经过双方协商完成";
      } else {
        return "";
      }
    }
  },
  methods: {
    chexiaoApply() {
      this.$dialog.confirm({
        message: '确认撤销任务么?'
      }).then(() => {
        this.handleClickBtns(-1)
      })
    },
    timeFormat(param) {
      return param < 10 ? "0" + param : param;
    },
    countDown() {
      clearInterval(interval);
      var interval = setInterval(() => {
        let obj = null; // 如果活动未结束，对时间进行处理
        // 获取当前时间，同时得到活动结束时间数组
        let newTime = new Date().getTime(); // 对结束时间进行处理渲染到页面
        let endTime = new Date(this.entity.finally_time).getTime();
        if (endTime - newTime > 0) {
          let time = (endTime - newTime) / 1000; // 获取天、时、分、秒
          let day = parseInt(time / (60 * 60 * 24));
          let hou = parseInt((time % (60 * 60 * 24)) / 3600);
          let min = parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          let sec = parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          obj = {
            day: this.timeFormat(day),
            hou: this.timeFormat(hou),
            min: this.timeFormat(min),
            sec: this.timeFormat(sec)
          };
        } else {
          clearInterval(interval);
          return (this.countDownList = "已过期"); 
        }
        this.countDownList =
          "还剩" +
          obj.day +
          "天" +
          obj.hou +
          "时" +
          obj.min +
          "分" +
          obj.sec +
          "秒";
      }, 1000);
    },
    /**
     * 协商历史传参
     * isActive: 限量免单
     * type: ["资金问题", "物流问题", "礼品问题", "其他"]
     */
    goTohistory() {
      this.$router.push("/history?id=" + this.$route.query.id);
    },
    // 点击处理按钮方法
    async handleClickBtns(num) {
      let res = await saleApply({
        dispose: num,
        sale_id: this.$route.query.id,
        action: 4
      });
      if (res && res.error.errno == 200) {
        this.$toast.success(res.error.usermsg);
        setTimeout(() => {
          this.$router.go(-1);
        }, 500);
      }
    }
  }
};
</script>
<style lang="scss" scope>
.viewAfterDesc {
  position: relative;
  width: 100%;
  padding-top: 40px;
  & > header {
    width: 100%;
    position: fixed;
    top: 0;
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
  & > main {
    width: 100%;
    .status_class {
      color: #fff;
      span {
        font-size: 17px;
      }
      .van-cell__label {
        color: #fff;
      }
    }
    .class_red {
      background: #f56c6c;
    }
    .class_green {
      background: #67c23a;
    }
    .top_content {
      font-size: 14px;
      .sale_tips {
        border-bottom: 1px solid #ccc;
        color: #000;
        margin-bottom: 10px;
        padding-bottom: 5px;
      }
      .four_btns {
        span {
          font-size: 12px;
          display: inline-block;
          padding: 0 12px;
          margin: 0 12px 5px 0;
          color: #fff;
          border-radius: 5px;
        }
      }
      ul {
        color: #666;
        li {
          font-size: 14px;
          line-height: 1.5;
          padding-bottom: 10px;
        }
      }
    }
    .mid_history {
      margin: 15px 0;
    }
    .desc_ul {
      li {
        font-size: 14px;
        i {
          color: #999;
        }
      }
    }
    & > section {
      padding: 10px 15px;
      background: #fff;
      & > ._title {
        color: #666;
        font-size: 14px;
      }
      .viewAfterDesc_body {
        margin-top: 8px;
        display: flex;
        & > img {
          width: 110px;
          height: 110px;
          border-radius: 5px;
          margin-right: 10px;
        }
        & > ul {
          flex: 1;
          height: 90px;
          margin-top: 5px;
          .scale_num {
            color: #999;
          }
          li {
            height: 25%;
            display: flex;
            font-size: 12px;
            &:first-child {
              font-size: 14px;
            }
            span {
              flex: 1;
            }
            i {
              color: #ff5500;
            }
          }
        }
      }
    }
  }
}
</style>