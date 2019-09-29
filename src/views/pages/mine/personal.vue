<template>
  <div class="personal">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />个人基本资料
    </header>
    <main>
      <van-cell title="注册时间">2018-03-20</van-cell>
      <van-cell title="用户名">18986183589</van-cell>
      <van-cell title="性别" is-link @click="showSex = true">{{ form.sexy }}</van-cell>
      <van-cell title="年龄" is-link @click="showAge = true">{{ form.age }}</van-cell>
      <van-field
        v-model="form.qq"
        label="QQ号码"
        type="number"
        right-icon="arrow"
        clearable
        :disabled="!qqActive"
        @click-right-icon="qqActive = true"
        @blur="qqActive = false"
      />
      <van-field
        v-model="form.email"
        label="我的邮箱"
        right-icon="arrow"
        clearable
        :disabled="!emailActive"
        @click-right-icon="emailActive = true"
        @blur="emailActive = false"
      />
      <van-cell title="婚姻状况" is-link @click="showMarry = true">{{ form.marry }}</van-cell>
      <van-cell title="教育程度" is-link @click="showEducation = true">{{ form.education }}</van-cell>
      <van-cell title="所属人群" is-link @click="showType = true">{{ form.type }}</van-cell>

      <van-cell title="所属地区" is-link>{{ form.area }}</van-cell>
      <div class="submit_btn">提 交</div>
    </main>

    <!-- 弹出层-性别 -->
    <van-popup v-model="showSex" position="bottom">
      <van-picker
        show-toolbar
        :columns="['男', '女']"
        :default-index="1"
        @cancel="showSex = false"
        @confirm="(val) => { form.sexy = val; showSex = false }"
      />
    </van-popup>
    <!-- 弹出层-年龄 -->
    <van-popup v-model="showAge" position="bottom">
      <van-picker
        show-toolbar
        :columns="ageColumns"
        @cancel="showAge = false"
        @confirm="(val) => { form.age = val; showAge = false }"
      />
    </van-popup>
    <!-- 弹出层-婚姻 -->
    <van-popup v-model="showMarry" position="bottom">
      <van-picker
        show-toolbar
        :default-index="0"
        :columns="['已婚', '未婚']"
        @cancel="showMarry = false"
        @confirm="(val) => { form.marry = val; showMarry = false }"
      />
    </van-popup>
    <!-- 弹出层-学历 -->
    <van-popup v-model="showEducation" position="bottom">
      <van-picker
        show-toolbar
        :default-index="2"
        :columns="['高中(中专)以下', '高中(中专)', '大专', '本科', '硕士', '硕士以上']"
        @cancel="showEducation = false"
        @confirm="(val) => { form.education = val; showEducation = false }"
      />
    </van-popup>
    <!-- 弹出层-人群类型 -->
    <van-popup v-model="showType" position="bottom">
      <van-picker
        show-toolbar
        :default-index="1"
        :columns="['上学', '上班', '待业']"
        @cancel="showType = false"
        @confirm="(val) => { form.type = val; showType = false }"
      />
    </van-popup>
    <!-- 弹出层-所属地区 -->
    <!-- <van-popup v-model="showArea" position="bottom">
      <van-picker
        show-toolbar
        :default-index="1"
        :columns="['上学', '上班', '待业']"
        @cancel="showArea = false"
        @confirm="(val) => { form.area = val; showArea = false }"
      />
    </van-popup> -->
  </div>
</template> 
<script>
export default {
  // 个人基本资料
  name: "personal",
  components: {},
  data() {
    return {
      form: {
        sexy: "女",
        age: "23",
        qq: "1466301341",
        email: "1466301341@qq.com",
        marry: "已婚",
        education: "大专",
        type: "上班",
        area: '湖北 武汉'
      },
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
      for (let i = 18; i < 50; i++) {
        arr.push(i);
      }
      return arr;
    }
  },
  methods: {}
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
    z-index: 999999;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(-90deg, #fc5303 0%, #fa8e05 100%);
    text-align: center;
    color: #fff;
    font-size: 15px;
    .left_arrow {
      position: absolute;
      left: 15px;
      top: 13px;
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