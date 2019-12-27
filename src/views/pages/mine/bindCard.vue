<template>
  <div class="bindCard">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />银行卡绑定
    </header>
    <main>
      <van-field v-model="entity.account" label="用户账号" disabled />
      <van-field v-model="entity.mobile" label="联系号码" disabled />
      <van-field
        v-model="entity.qq"
        placeholder="请输入QQ"
        label="QQ"
        clearable
        type="number"
        :disabled="!isReadonly"
      />
      <van-cell
        v-model="bankText"
        is-link
        @click="openBankSelect"
        title="银行卡类型"
        placeholder="请选择银行卡类型"
      />
      <van-cell is-link @click="openAreaSelect" title="开户地区" placeholder="请输入开户地区">
        <span v-if="entity.regist_province">
          {{entity.regist_province}}
        </span>
        <span v-if="entity.regist_city">
          {{entity.regist_city}}
        </span>
        <span v-else>暂无</span>
      </van-cell>
      <van-field
        right-icon="arrow"
        v-model="entity.sub_branch_name"
        label="开户支行"
        placeholder="请选择银行支行"
        :disabled="!isReadonly"
        @click-right-icon="openBankBranch"
      />
      <van-field
        v-model="entity.bank_card"
        label="银行卡号"
        placeholder="请输入银行卡号"
        :disabled="!isReadonly"
      />
      <van-field
        v-model="entity.sms_code"
        clearable
        placeholder="请输入验证码"
        label="验证码"
        v-if="isReadonly"
      >
        <van-button
          v-if="showCount"
          class="tips"
          slot="button"
          size="small"
          type="primary"
          @click="handleSendVerify"
        >获取验证码</van-button>
        <van-button
          v-else
          class="tips"
          slot="button"
          size="small"
          type="primary"
        >重新发送({{countNum}}s)</van-button>
      </van-field>
      <van-cell v-if="isReadonly">
        <div class="submit_btn" @click="handleSubmit">提交申请</div>
      </van-cell>
      <van-notice-bar v-if="!isReadonly" text="您的账户已绑定银行卡，如需更改银行卡信息，请联系客服处理！" />
    </main>

    <!-- 弹出层-银行支行类型 -->
    <van-popup v-model="showBranch" position="bottom">
      <van-picker
        show-toolbar
        :columns="bankBranchArr"
        :default-index="bankBranchArr.indexOf(entity.sub_branch_name)"
        @cancel="showBranch = false"
        @confirm="(val) => { entity.sub_branch_name = val; showBranch = false; }"
      />
    </van-popup>
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
import { sendVerify } from "@/api/index.js";
import { ubankInfo, getBankBranch } from "@/api/mine.js";
import areaList from "@/utils/area.js";

export default {
  // 定制评价攻略
  name: "bindCard",
  components: {},
  data() {
    return {
      timer: null,
      countNum: "", // 倒计时
      showCount: true,

      bankArr: [
        { value: "中国建设银行", label: "中国建设银行" },
        { value: "中国农业银行", label: "中国农业银行" },
        { value: "中国工商银行", label: "中国工商银行" },
        { value: "中国银行", label: "中国银行" },
        { value: "交通银行", label: "交通银行" },
        { value: "招商银行", label: "招商银行" },
        { value: "", label: "暂无" }
      ],
      bankNameArr: [
        "中国建设银行",
        "中国农业银行",
        "中国工商银行",
        "中国银行",
        "交通银行",
        "招商银行"
      ], // 银行名称
      bankText: "暂无",
      bankBranchArr: [], // 银行支行
      areaList: {},
      area_code: "", // 城市编码
      entity: {
        regist_province: "",
        regist_city: ""
      },
      showBank: false,
      showArea: false,
      showBranch: false
    };
  },
  computed: {
    // 已经提交的状态只读
    isReadonly() {
      return this.entity.is_submit;
    }
  },
  async mounted() {
    this.areaList = areaList; // 初始化省市级联

    let res = await ubankInfo();
    if (res && res.error.errno == 200) {
      this.entity = res.data;
      this.area_code = Object.keys(this.areaList.city_list).filter(
        el => this.areaList.city_list[el] == this.entity.regist_city
      )[0];
      this.bankText =
        this.bankArr.filter(el => this.entity.bank == el.value)[0].label ||
        "暂无";
    } else if (res.error.errno == 434) {
      setTimeout(() => {
        this.$router.push("/certification");
      }, 1500);
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
    // 倒计时计算
    countVerifyNum() {
      if (!this.timer) {
        this.countNum = 60;
        this.showCount = false;
        this.timer = setInterval(() => {
          if (this.countNum > 1 && this.countNum <= 60) {
            this.countNum--;
          } else {
            this.showCount = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    openBankSelect() {
      if (this.isReadonly) this.showBank = true;
    },
    openAreaSelect() {
      if (this.isReadonly) this.showArea = true;
    },
    openBankBranch() {
      if (this.isReadonly) {
        this.showBranch = true;
        this.getbranchData()
      } 
    },
    async getbranchData() {
      if(!this.bankText || this.bankText == '暂无') {
        return this.$toast.fail("请填写银行卡类型");
      }
      if(this.entity.regist_province && this.entity.regist_city && this.bankText) {
        let res = await getBankBranch({
          province: this.entity.regist_province,
          city: this.entity.regist_city,
          bank_name: this.bankText,
          sub_branch_name: this.entity.sub_branch_name
        })
        if(res && res.error.errno == 200) {
          this.bankBranchArr = res.data
        }
      }
    },
    // 发送验证码功能
    async handleSendVerify() {
      if (this.entity.mobile) {
        let queryObj = {
          mobile: this.entity.mobile,
          platform: "2c",
          is_repeat: "false",
          type: 4
        };
        let res = await sendVerify(queryObj);
        if (res && res.error.errno == 200) {
          this.$toast.success("验证码发送成功！请查看");
          this.countVerifyNum();
        }
      }
    },
    // 省市级联选择回调
    handleAreaSelect(val) {
      if (val[1]) {
        this.area_code = val[1].code;
        this.entity.regist_province = val[0].name;
        this.entity.regist_city = val[1].name;
      } else {
        this.area_code = "110100";
        this.entity.regist_province = "北京市";
        this.entity.regist_city = "北京市";
      }
      this.showArea = false;
      this.getbranchData()
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