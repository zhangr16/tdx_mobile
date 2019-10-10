<template>
  <div class="item_task">
    <div class="item_task_head">
      <span>商家旺旺号：12345677</span>
      <span>任务状态：已提交</span>
    </div>
    <div class="item_task_body">
      <!-- 图片 -->
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
    <div class="item_task_foot">
      <div class="four_btns">
        <span style="background:#51c757" @click="$router.push('/screenShots')">上传好评截图</span>
        <span style="background:#ff6137" @click="$router.push('/screenShots')">查看好评截图</span>
        <span style="background:#5784ff" @click="$router.push('/applyAfter?isActive=' + isActive)">申请售后</span>
        <span style="background:#fa3950" @click="$router.push('/viewAfter?isActive=' + isActive)">查看售后</span>
      </div>
      <div class="times">
        <span>申请时间：2019-08-06 23:59</span>
        <span>完成时间：2019-08-06 12:11</span>
      </div>
      <div class="two_btns">
        <span>
          <i class="red" @click="$router.push('/getStart')">开始任务</i>
        </span>
        <span>
          <i class="gray">我要退单</i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
// 任务中心 任务卡
export default {
  name: "item_task",
  props: {
    isActive: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {
    isLimitFree() {
      return this.isActive == 0;
    }
  },
  methods: {
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
      border: 1px solid red;
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5px;
      span {
        padding: 4px 6px;
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
}
</style>