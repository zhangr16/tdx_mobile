<template>
  <div class="viewAfter">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />售后类型
    </header>
    <template v-if="isloading">
      <div class="no_data">
        <van-loading type="spinner" />
      </div>
    </template>
    <template v-else>
      <div class="no_data" v-if="fan_list.length == 0 && saler_list.length == 0">
      暂无售后类型
    </div>
    <div v-else>
      <main v-if="fan_list.length > 0">
        <van-cell>粉丝发起</van-cell>
        <van-cell v-for="(item, index) in fan_list" :key="index" :title="issueArr[item.sale_type - 1]" is-link @click="goToDesc(item.id)"/>
      </main>
      <main v-if="saler_list.length > 0" style="margin-top:10px">
        <van-cell>商家发起</van-cell>
        <van-cell v-for="(item, index) in saler_list" :key="index" :title="issueArr[item.sale_type - 1]" is-link @click="goToDesc(item.id)"/>
      </main>
    </div>
    </template>
  </div>
</template>
<script>
import {saleApplyList} from "@/api/index"

export default {
  // 好评截图
  name: "viewAfter",
  components: {},
  data() {
    return {
      isloading: false,
      issueArr: ['资金问题', '物流问题', '礼品问题', '其他问题'],
      form: { a: "", b: "" },
      _id: null,
      fan_list: [],
      saler_list: []
    };
  },
  mounted() {
    if(this.$route.query.id) this._id = this.$route.query.id
    this.getData()
  },
  methods: {
    async getData() {
      this.isloading = true
      let res = await saleApplyList({id: this._id})
      if(res && res.error.errno == 200) {
        this.saler_list = res.saleList2b
        this.fan_list = res.saleList2c
      }
      this.isloading = false
    },
    // 跳转申请售后页面
    goToDesc(val) {
      this.$router.push("/viewAfterDesc?id=" + val);
    }
  }
};
</script>
<style lang="scss" scope>
.viewAfter {
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
  .no_data {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 90vh;
  }
  main {
    width: 100%;
    background: #fff;
    font-size: 14px;
    .van-cell__value--alone {
      text-align: center;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>