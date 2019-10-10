<template>
  <div class="applyAfter">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />
      {{ form.b || '申请售后' }}
    </header>
    <main>
      <div class="applyAfter_body">
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
      <van-cell-group>
        <van-field
          clearable
          readonly
          clickable
          label="申请原因"
          :value="form.b"
          placeholder="请选择"
          @click="showPicker = true"
        />
        <van-cell v-if="form.b == '资金问题'" class="uploads" title="实拍金额">
          <div class="_funds">
            任务金额: ¥<van-stepper :value="form.c" step="0.01" :decimal-length="2" />
            差价金额: ¥<van-stepper :value="form.d" step="0.01" :decimal-length="2" />
          </div>
        </van-cell>
        <van-field
          clearable
          type="textarea"
          rows="1"
          autosize
          v-model="form.a"
          label="售后说明"
          placeholder="请填写售后说明"
        />
        <van-cell class="uploads" title="售后凭证" label="（最多3张）">
          <van-uploader v-model="fileList" multiple :max-count="3" />
        </van-cell>
      </van-cell-group>

      <div class="submit_btn">提 交</div>
    </main>

    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template> 
<script>
export default {
  // 好评截图
  name: "applyAfter",
  components: {},
  data() {
    return {
      showPicker: false,
      columns: ["资金问题", "物流问题", "礼品问题", "其他"],
      fileList: [],
      form: { a: "", b: "", c: 2.00, d: 4 },
      isLimitFree: true
    };
  },
  mounted() {
    this.isLimitFree = this.$route.query.isActive == 0;
    if (this.$route.query.type) {
      this.form.b = this.columns[this.$route.query.type];
    }
  },
  methods: {
    onConfirm(value) {
      this.form.b = value;
      this.showPicker = false;
    }
  }
};
</script>
<style lang="scss" scope>
.applyAfter {
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
    background: linear-gradient(-90deg, #fc5303 0%, #fa8e05 100%);
    text-align: center;
    font-size: 17px;
    color: #fff;
    .left_arrow {
      position: absolute;
      left: 15px;
      top: 10px;
      font-size: 20px;
    }
  }
  & > main {
    width: 100%;
    background: #fff;
    .van-cell {
      padding-right: 0;
    }
    .uploads {
      .van-cell__value {
        flex: 3;
        text-align: left;
      }
    }
    .submit_btn {
      text-align: center;
      margin: 15px 0 15px 15px;
      font-size: 14px;
      color: #fff;
      width: 345px;
      height: 44px;
      line-height: 44px;
      background: linear-gradient(-90deg, #fc5603 0%, #fa8d05 100%);
      border-radius: 5px;
    }
    .applyAfter_body {
      padding: 20px 0 5px 15px;
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

  ._funds {
    color:#333;
    .van-stepper {
      display: inline-flex;
      .van-stepper__input {
        width: 45px;
      }
    }
    .van-stepper__minus, .van-stepper__plus {
      display: none;
    }
  }
}
</style>