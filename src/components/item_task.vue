<template>
  <div class="item_task">
    <!-- 商品信息 -->
    <van-dialog v-model="showImg" title="商品信息" :closeOnClickOverlay="true">
      <img
        style="width:100%;"
        :src="entity.img"
        alt
      />
    </van-dialog>
    <!-- 商家备注 -->
    <van-dialog v-model="showRemark" title="商家备注" :closeOnClickOverlay="true">
      <van-field
        :value="remarkEntity.mc_comment"
        label="备注"
        type="textarea"
        autosize
        disabled
      />
    </van-dialog>
    <!-- 查看定制评价 -->
    <van-dialog class="uploads" v-model="showEvaluate" title="定制评价" :closeOnClickOverlay="true">
      <van-cell title="评价说明" :value="evaluateEntity.m_eva_explain" />
      <van-cell title="好评截图">
        <img v-for="(img, key) in evaluateEntity.imgs" :key="key" :src="img" alt />
      </van-cell>
    </van-dialog>

    <div class="item_task_head">
      <span>商家旺旺号：{{ entity.shop_ww || '' }}</span>
      <span>任务状态：{{ status_arr[entity.status - 1] }}</span>
    </div>
    <div class="item_task_body">
      <!-- 图片 -->
      <img :src="entity.sipping_url" alt />
      <!-- 限量免单 -->
      <ul v-if="entity.order_type == 1">
        <li style="font-weight:bold">{{ entity.title }}</li>
        <li class="scale_num">订单编号：{{ entity.order_sn }}</li>
        <li>
          原价：
          <i>¥{{entity.price}}</i>
        </li>
        <li>
          实拍：
          <i>¥{{entity.price}}</i>
        </li>
        <li>账号：{{entity.mobile}}</li>
      </ul>
      <!-- 熊抢购 -->
      <ul v-else>
        <li style="font-weight:bold">{{ entity.title }}</li>
        <li class="scale_num">订单编号：{{ entity.order_sn }}</li>
        <li>账号：{{entity.mobile}}</li>
        <li>
          <span>
            优惠价：
            <i>¥{{entity.current_price}}</i>
          </span>
          <span>
            返利：
            <i>¥{{entity.price - entity.current_price}}</i>
          </span>
        </li>
        <li>
          <span>
            原&nbsp;&nbsp;&nbsp;价：
            <i>¥{{entity.price}}</i>
          </span>
          <span>
            实拍：
            <i>¥{{entity.price}}</i>
          </span>
        </li>
      </ul>
    </div>
    <!-- 按钮区域 -->
    <div class="item_task_foot">
      <div class="four_btns">
        <span style="background:#409eff" @click="showImg = true">商品信息</span>
        <span
          style="background:#51c757"
          @click="$router.push('/applyAfter?id=' + entity.id)"
        >申请售后</span>
        <span
          style="background:#fa3950"
          @click="$router.push('/viewAfter?id=' + entity.id)"
        >查看售后</span>
        <span
          v-if="entity.status == 2 || entity.status == 3"
          style="background:#5784ff"
          @click="$router.push('/screenShots?id=' + entity.id + '&e=1')"
        >上传好评截图</span>
        <span
          v-if="entity.status == 4 || entity.status == 3"
          style="background:#ff6137"
          @click="$router.push('/screenShots?id=' + entity.id)"
        >查看好评截图</span>
        <span style="background:#ccc" @click="viewRemarks">查看商家备注</span>
      </div>
      <!-- 时间 -->
      <div class="times">
        <span>申请时间：{{entity.task_start}}</span>
        <!-- <span v-if="entity.status == '已领取'">完成时间：2019-08-06 12:11</span> -->
        <span>完成时间：{{entity.task_end}}</span>
      </div>
      <div class="two_btns">
        <span>
          <i class="red" @click="$router.push('/getStart')">开始任务</i>
        </span>
        <span v-if="entity.status == 1">
          <i class="gray" @click="chargeBack">我要退单</i>
        </span>
      </div>
      <div class="two_btns margin_top" v-if="entity.make_status != 0">
        <span>
          <i class="red" @click="viewEvaluation">查看定制评价</i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { order_action } from "@/api/index"

// 任务中心 任务卡
export default {
  name: "item_task",
  props: {
    entity: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      showRemark: false,
      showImg: false,
      showEvaluate: false,

      evaluateEntity: {},
      remarkEntity: {},
      status_arr: ["已领取", "已提交", "待审核", "已完成", "售后"]
    };
  },
  computed: {},
  methods: {
    async viewEvaluation() {
      let res = await order_action({
        id: this.entity.id,
        type: 4
      })
      if(res && res.error.errno == 200) {
        this.evaluateEntity = {
          m_eva_explain: res.m_eva_explain,
          imgs: res.img
        }
        this.showEvaluate = true;
      }
    },
    async viewRemarks() {
      let res = await order_action({
        id: this.entity.id,
        type: 5
      })
      if(res && res.error.errno == 200) {
        this.remarkEntity.mc_comment = res.mc_comment
        this.showRemark = true;
      }
    },
    // 退款
    async chargeBack() {
      let res = await order_action({
        id: this.entity.id,
        type: 6
      })
      if(res && res.error.errno == 200) {
        this.$toast.success(res.error.usermsg)
        this.$emit('update')
      }
    },
  }
};
</script>
<style lang="scss" scope>
.item_task {
  width: 100%;
  &_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    font-size: 12px;
    padding: 10px 5px;
  }
  &_body {
    padding: 5px;
    display: flex;
    border-top: 1px solid #e5e5e5;
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
  &_foot {
    padding: 5px 0 10px 0;
    .four_btns {
      padding: 0 5px;
      span {
        display: inline-block;
        padding: 4px 6px;
        margin: 0 10px 5px 0;
        color: #fff;
        border-radius: 5px;
      }
    }
    .times {
      color: #999;
      display: flex;
      padding: 10px 6px;
      span {
        flex: 1;
      }
    }
    .margin_top {
      margin-top: 10px;
    }
    .two_btns {
      display: flex;
      justify-content: space-between;
      transform: scale(0.95);
      span {
        flex: 1;
        i {
          display: inline-block;
          border-radius: 5px;
          padding: 5px 16px;
        }
        .red {
          border: solid 1px #fa3950;
          color: #fa3950;
        }
        .gray {
          border: solid 1px #999;
          color: #999;
        }
      }
    }
  }
  .uploads {
    .van-cell {
      padding-right: 5px;
    }
    .van-cell__value {
      flex: 3;
      text-align: left;
      img {
        width: 70px;
        height: 70px;
        margin-right: 5px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
