<template>
  <div class="bindCard">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />银行卡绑定
    </header>
    <main>
      <van-field v-model="entity.real_name" label="用户账号" disabled />
      <van-field v-model="entity.mobile" label="联系号码" disabled />
      <van-field v-model="entity.qq" label="qq" clearable type="number" />

      <van-cell
        v-model="bankText"
        is-link
        @click="showBank = true"
        title="银行卡类型"
        placeholder="请输入银行卡类型"
      />
      <van-field v-model="entity.bank_card" label="银行卡号" placeholder="请输入银行卡号" />
      <van-field v-model="entity.sms_code" clearable placeholder="请输入验证码" label="验证码">
        <van-button
          class="tips"
          slot="button"
          size="small"
          type="primary"
          @click="handleSendVerify"
        >获取验证码</van-button>
      </van-field>
      <van-cell
        is-link
        @click="showArea = true"
        title="开户地区"
        placeholder="请输入开户地区"
      >{{entity.regist_province}}/{{entity.regist_city}}</van-cell>
      <van-cell>
        <div class="submit_btn" @click="handleSubmit">提交申请</div>
      </van-cell>
    </main>

    <!-- 弹出层-银行卡类型 -->
    <van-popup v-model="showBank" position="bottom">
      <van-picker
        show-toolbar
        :columns="bankNameArr"
        :default-index="bankNameArr.indexOf(entity.bank)"
        @cancel="showBank = false"
        @confirm="(val) => { bankText = val; showBank = false; }"
      />
    </van-popup>
    <!-- 弹出层-所属地区 -->
    <van-popup v-model="showArea" position="bottom">
      <van-area
        :value="area_code"
        :columns-num="2"
        :area-list="areaList"
        @cancel="showArea = false"
        @confirm="(val) => handleAreaSelect(val)"
      />
    </van-popup>
  </div>
</template> 
<script>
import { sendVerify } from "@/api/index.js"
import { ubankInfo } from "@/api/mine.js";
import areaList from "@/utils/area.js";

export default {
  // 定制评价攻略
  name: "bindCard",
  components: {},
  data() {
    return {
      bankArr: [
        { value: "10806309", label: "中国建设银行" },
        { value: "10806310", label: "中国农业银行" },
        { value: "10806311", label: "中国工商银行" },
        { value: "10806312", label: "中国银行" },
        { value: "10806313", label: "交通银行" },
        { value: "10806325", label: "招商银行" }
      ],
      bankNameArr: [
        "中国建设银行",
        "中国农业银行",
        "中国工商银行",
        "中国银行",
        "交通银行",
        "招商银行"
      ],
      bankText: "",

      areaList: {},
      area_code: "", // 城市编码
      entity: {
        regist_province: "",
        regist_city: ""
      },
      showBank: false,
      showArea: false
    };
  },
  async mounted() {
    this.areaList = areaList; // 初始化省市级联

    let res = await ubankInfo();
    if (res && res.error.errno == 200) {
      this.entity = res.data;
      this.area_code = Object.keys(this.areaList.city_list).filter(
        el => this.areaList.city_list[el] == this.entity.regist_city
      )[0];
      this.bankText = this.bankArr.filter(
        el => this.entity.bank == el.value
      )[0].label;
    }
  },
  watch: {
    bankText: function(v) {
      if (v) {
        this.entity.bank = this.bankArr.filter(el => v == el.label)[0].value;
      }
    }
  },
  methods: {
    // 发送验证码功能
    async handleSendVerify() {
      if (this.entity.mobile) {
        let queryObj = {
          mobile: this.entity.mobile,
          platform: "2c",
          is_repeat: true,
          type: 4
        };
        let res = await sendVerify(queryObj);
        if (res && res.error.errno == 200)
          this.$toast.success("验证码发送成功！请查看");
      }
    },
    // 省市级联选择回调
    handleAreaSelect(val) {
      this.area_code = val[1].code;

      this.entity.regist_province = val[0].name;
      this.entity.regist_city = val[1].name;
      this.showArea = false;
    },
    async handleSubmit() {
      let res = await ubankInfo(this.entity);
      if (res && res.error.errno == 200) {
        this.$toast.success("申请成功！");
        setTimeout(() => {
          this.$router.push("/mine");
        }, 500);
      }
    }
  }
};
</script>
<style lang="scss" scope>
.bindCard {
  position: relative;
  width: 100%;
  padding-top: 50px;
  min-height: 100vh;
  background: #fff;
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
    width: 100%;
    background: #fff;
    // 忘记密码
    .tips {
      background-color: #ff5500;
      border: none;
    }
    .van-field__control {
      text-align: right;
    }
    ._exchanger {
      display: flex;
      .van-cell__value {
        flex: 2.8;
        .van-radio-group {
          display: flex;
          .van-radio {
            flex: 1;
          }
        }
      }
    }
    .submit_btn {
      margin: 10px 0;
      color: #fff;
      text-align: center;
      height: 44px;
      line-height: 44px;
      background-image: linear-gradient(-90deg, #fc5403 0%, #fa8e05 100%);
      border-radius: 22px;
    }
  }
}
</style>