<template>
  <div class="viewAfterDesc">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />
      {{ '申请售后' }}
    </header>
    <main>
      <van-cell-group>
        <van-cell title="申请关闭" label="还剩2天23小时59分" />
        <van-cell class="top_content">
          <div>
            <!-- 您已撤销本次退款申请，如问题仍未解决，售后保障期内，您可以重新发起售后申请<br/> -->
            1、商家同意，系统将自动补差给您
            <br />2、如果商家72小时内未处理，平台将自动接入处理
            <br />3、如果商家拒绝，您可以修改申请后再次发起，商家会重新处理或者申请平台介入
          </div>
          <div class="four_btns">
            <span
              style="background:#51c757"
              @click="$router.push('/applyAfter?isActive=' + $route.query.isActive + '&type=' + $route.query.type)"
            >修改申请</span>
            <span style="background:#ff6137">撤销申请</span>
            <span style="background:#5784ff">客服介入</span>
            <span
              style="background:#fa3950"
              @click="$router.push('/applyAfter?isActive=' + $route.query.isActive)"
            >再次申请</span>
          </div>
        </van-cell>
      </van-cell-group>

      <van-cell class="mid_history" title="协商历史" is-link @click="goTohistory" />

      <section>
        <div style="color:#666">售后信息</div>
        <div class="viewAfterDesc_body">
          <img src="@/assets/404_images/404.png" alt />
          <ul v-if="isLimitFree">
            <li>小个子连衣裙夏季收腰显瘦...</li>
            <li class="scale_num">订单编号：1234567891111111</li>
            <li>
              原价：
              <i>¥19.9</i>
            </li>
            <li>
              实拍：
              <i>¥19.9</i>
            </li>
            <li>账号：123456665856+66</li>
          </ul>
          <ul v-else>
            <li>小个子连衣裙夏季收腰显瘦...</li>
            <li class="scale_num">订单编号：1234567891111111</li>
            <li>账号：123456665856+66</li>
            <li>
              <span>
                优惠价：
                <i>¥18.5</i>
              </span>
              <span>
                返利：
                <i>¥1.4</i>
              </span>
            </li>
            <li>
              <span>
                原&nbsp;&nbsp;&nbsp;价：
                <i>¥19.9</i>
              </span>
              <span>
                实拍：
                <i>¥19.9</i>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <van-cell-group>
        <van-cell class="desc_ul">
          <ul>
            <li>
              <i>售后原因：</i>资金问题
            </li>
            <li>
              <i>任务原价：</i>￥2
            </li>
            <li>
              <i>实拍价：</i>￥3
            </li>
            <li>
              <i>差价金额：</i>￥1
            </li>
            <li>
              <i>售后说明：</i>资金问题
            </li>
            <li>
              <i>申请时间：</i>2019-07-07 00:00:00
            </li>
          </ul>
        </van-cell>
      </van-cell-group>
    </main>
  </div>
</template> 
<script>
export default {
  // 好评截图
  name: "viewAfterDesc",
  components: {},
  data() {
    return {
      columns: ["资金问题", "物流问题", "礼品问题", "其他"],
      fileList: [],
      form: { a: "", b: "" },
      isLimitFree: true
    };
  },
  mounted() {
    this.isLimitFree = this.$route.query.isActive == 0;
  },
  methods: {
    /**
     * 协商历史传参
     * isActive: 限量免单
     * type: ["资金问题", "物流问题", "礼品问题", "其他"]
     */
    goTohistory() {
      this.$router.push("/history?type=" + this.$route.query.type);
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
    font-size: 15px;
    .left_arrow {
      position: absolute;
      left: 15px;
      top: 13px;
    }
  }
  & > main {
    width: 100%;
    .top_content {
      font-size: 12px;
      .four_btns {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: scale(0.9);
        margin-left: -5%;
        & > span {
          padding: 0 15px;
          color: #fff;
          border-radius: 5px;
        }
      }
      & > div {
        color: #666;
      }
      font-size: 12px;
    }
    .mid_history {
      margin: 15px 0;
    }
    .desc_ul {
      li {
        font-size: 12px;
        i {
          color: #999;
        }
      }
      // border: 1px solid red;
    }
    & > section {
      padding: 10px 15px;
      background: #fff;
      .viewAfterDesc_body {
        margin-top: 7px;
        display: flex;
        & > img {
          width: 110px;
          height: 110px;
          border-radius: 5px;
          border: 1px solid red;
          margin-right: 10px;
        }
        & > ul {
          flex: 1;
          height: 80px;
          margin-top: 10px;
          .scale_num {
            color: #999;
            transform: scale(0.9);
            margin-left: -5%;
          }
          li {
            height: 25%;
            display: flex;
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