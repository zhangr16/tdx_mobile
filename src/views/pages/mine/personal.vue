<template>
  <div class="personal">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />个人基本资料
    </header>
    <main>
      <van-cell title="注册时间">{{entity.create_time}}</van-cell>
      <van-cell title="用户名">{{entity.mobile || entity.account}}</van-cell>
      <van-cell title="性别" is-link @click="showSex = true">{{ entity.gender }}</van-cell>
      <van-cell title="年龄" is-link @click="showAge = true">{{ entity.age }}</van-cell>
      <van-field
        v-model="entity.qq"
        label="QQ号码"
        type="number"
        right-icon="arrow"
        clearable
        :disabled="!qqActive"
        @click="qqActive = true"
        @blur="qqActive = false"
      />
      <van-field
        v-model="entity.email"
        label="我的邮箱"
        right-icon="arrow"
        clearable
        :disabled="!emailActive"
        @click="emailActive = true"
        @blur="emailActive = false"
      />
      <van-cell title="婚姻状况" is-link @click="showMarry = true">{{ entity.marriage }}</van-cell>
      <van-cell title="教育程度" is-link @click="showEducation = true">{{ entity.education }}</van-cell>
      <van-cell title="所属人群" is-link @click="showType = true">{{ entity.crowd }}</van-cell>

      <van-cell title="所属地区" is-link @click="showArea = true">
        <span
          v-if="entity.province || entity.city"
        >{{entity.province}}/{{entity.city}}</span>
        <span v-else>暂无</span>
      </van-cell>
      <div class="submit_btn" @click="handleSubmit">
        <van-loading v-if="isloading" type="spinner" />
        <span v-else>提 交</span>
      </div>
    </main>

    <!-- 弹出层-性别 -->
    <van-popup v-model="showSex" position="bottom">
      <van-picker
        show-toolbar
        :columns="['男', '女']"
        :default-index="['男', '女'].indexOf(entity.gender)"
        @cancel="showSex = false"
        @confirm="(val) => { entity.gender = val; showSex = false }"
      />
    </van-popup>
    <!-- 弹出层-年龄 -->
    <van-popup v-model="showAge" position="bottom">
      <van-picker
        show-toolbar
        :columns="ageColumns"
        :default-index="ageColumns.indexOf(entity.age)"
        @cancel="showAge = false"
        @confirm="(val) => { entity.age = val; showAge = false }"
      />
    </van-popup>
    <!-- 弹出层-婚姻 -->
    <van-popup v-model="showMarry" position="bottom">
      <van-picker
        show-toolbar
        :default-index="['已婚', '未婚'].indexOf(entity.marriage)"
        :columns="['已婚', '未婚']"
        @cancel="showMarry = false"
        @confirm="(val) => { entity.marriage = val; showMarry = false }"
      />
    </van-popup>
    <!-- 弹出层-学历 -->
    <van-popup v-model="showEducation" position="bottom">
      <van-picker
        show-toolbar
        :default-index="['高中(中专)以下', '高中(中专)', '大专', '本科', '研究生', '博士'].indexOf(entity.education)"
        :columns="['高中(中专)以下', '高中(中专)', '大专', '本科', '研究生', '博士']"
        @cancel="showEducation = false"
        @confirm="(val) => { entity.education = val; showEducation = false }"
      />
    </van-popup>
    <!-- 弹出层-人群类型 -->
    <van-popup v-model="showType" position="bottom">
      <van-picker
        show-toolbar
        :default-index="['上学', '上班', '待业'].indexOf(entity.crowd)"
        :columns="['上学', '上班', '待业']"
        @cancel="showType = false"
        @confirm="(val) => { entity.crowd = val; showType = false }"
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
import { userInfo } from "@/api/mine.js";
import areaList from "@/utils/area.js";

export default {
  // 个人基本资料
  name: "personal",
  components: {},
  data() {
    return {
      entity: {
        city: "",
        province: ""
      },
      areaList: {},
      area_code: "", // 城市编码
      isloading: false,

      showSex: false,
      showAge: false,
      qqActive: false,
      emailActive: false,
      showMarry: false,
      showEducation: false,
      showType: false,
      showArea: false
    };
  },
  computed: {
    ageColumns() {
      let arr = [];
      for (let i = 16; i < 60; i++) {
        arr.push(i);
      }
      return arr;
    }
  },
  async mounted() {
    this.areaList = areaList; // 初始化省市级联
    this.getData();
  },
  methods: {
    async getData() {
      this.isloading = true;
      let res = await userInfo();
      if (res && res.error.errno == 200) {
        this.entity = res.data;
        this.area_code = Object.keys(this.areaList.city_list).filter(
          el => this.areaList.city_list[el] == this.entity.city
        )[0];
      }
      this.isloading = false;
    },
    async handleSubmit() {
      if (!this.isloading) {
        let res = await userInfo(this.entity);
        if (res && res.error.errno == 200) this.$toast.success("提交成功！");
      }
    },
    // 省市级联选择回调
    handleAreaSelect(val) {
      if(val[1]) {
        this.area_code = val[1].code
        this.entity.province = val[0].name;
        this.entity.city = val[1].name;
      } else {
        this.area_code = '110100'
        this.entity.province = '北京市';
        this.entity.city = '北京市';
      }
      this.showArea = false;
    }
  }
};
</script>
<style lang="scss" scope>
.personal {
  position: relative;
  width: 100%;
  padding-top: 50px;
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
    .van-cell {
      background: #fff;
      font-size: 14px;
    }
    .van-field__control {
      text-align: right;
    }
    .submit_btn {
      width: 345px;
      height: 44px;
      line-height: 44px;
      background: linear-gradient(-90deg, #fc5303 0%, #fa8c05 100%);
      border-radius: 22px;
      text-align: center;
      color: #fff;
      margin: 20px 15px;
      font-size: 16px;
    }
  }
}
</style>