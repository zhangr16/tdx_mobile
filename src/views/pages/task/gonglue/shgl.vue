<template>
  <div class="shgl">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />售后攻略
    </header>
    <main>
      <div class="top2">
        <span :class="{'is_active': isActive == 1}" @click="handleTabClick(1)">用户申请售后流程</span>
        <i></i>
        <span :class="{'is_active': isActive == 2}" @click="handleTabClick(2)">用户处理售后流程</span>
      </div>
      <section v-if="isActive == 1">
        <van-cell>
          1、点击任务中心，找到需要申请售后的订单，然后点击申请售后按钮。
          <img src="@/assets/taskimg/图片 1.png" alt="" />
        </van-cell>
        <van-cell>
          2、选择售后类型（资金问题），填写实拍金额（必填）、售后说明（选填），然后上传售后凭证（必填），最后点击提交按钮
          <img src="@/assets/taskimg/图片 3.png" alt="" />
        </van-cell>
        <van-cell>
          3、等待处理，可以根据实际反馈情况选择修改申请、撤销申请、客服介入、再次申请。
          <img src="@/assets/taskimg/图片 4.png" alt="" />
        </van-cell>
        <van-cell>
          4、售后完成，可以查看协商历史
          <img src="@/assets/taskimg/图片 5.png" alt="" />
        </van-cell>
        <van-cell>
          5、查看协商历史
          <img src="@/assets/taskimg/图片 6.png" alt="" />
        </van-cell>
      </section>
      <section v-if="isActive == 2">
        <van-cell>
          1、在任务中心找到有售后的订单，点击‘查看售后’
          <img src="@/assets/taskimg/图片 1_2.png" alt="" />
        </van-cell>
        <van-cell>
          2、查看商家发起的售后
          <img src="@/assets/taskimg/图片 3_2.png" alt="" />
        </van-cell>
        <van-cell>
          3、查看售后详情，根据实际情况选择同意或驳回
          <img src="@/assets/taskimg/图片 4_2.png" alt="" />
        </van-cell>
        <van-cell>
          4、售后成功
          <img src="@/assets/taskimg/图片 5_2.png" alt="" />
        </van-cell>
      </section>
    </main>
  </div>
</template> 
<script>
export default {
  // 售后攻略
  name: "shgl",
  components: {},
  data() {
    return {
      isActive: 1
    };
  },
  methods: {
    handleTabClick(num) {
      if (num != this.isActive) {
        this.isActive = num;
        window.scrollTo(0, 0);
      }
    }
  }
};
</script>
<style lang="scss" scope>
.shgl {
  position: relative;
  width: 100%;
  & > header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
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
    position: relative;
    width: 100%;
    padding: 40px 15px 10px 15px;
    .top2 {
      width: calc(100% - 30px);
      z-index: 999;
      position: fixed;
      background: #fff;
      display: flex;
      font-size: 14px;
      align-items: center;
      margin-bottom: 10px;
      .is_active {
        border-bottom: 2px solid #ff5500;
      }
      span {
        flex: 1;
        text-align: center;
        padding: 8px 0;
      }
      i {
        width: 1px;
        height: 12px;
        background: #ccc;
      }
    }
    section {
      margin-top: 40px; 
      img {
        width: 100%;
      }
    }
  }
}
</style>