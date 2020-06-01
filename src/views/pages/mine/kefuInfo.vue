<template>
  <div class="kefuInfo">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />客服信息
    </header>
    <span>
      实名认证已提交，微信扫码找客服“
      <template v-if="$store.state.user.name.prove_group == 'A'">跳跳</template>
      <template v-else-if="$store.state.user.name.prove_group == 'B'">晴天</template>”，发手机号审核。否则无法领取任务，谢谢！
    </span>
    <img v-if="$store.state.user.name.prove_group == 'A'" src="@/assets/mine/跳跳.jpg" alt />
    <img
      v-else-if="$store.state.user.name.prove_group == 'B'"
      src="@/assets/mine/晴天.jpg"
      alt
    />
  </div>
</template> 
<script>
import { getMsg } from "@/api";

export default {
  // 定制评价攻略
  name: "msg",
  components: {},
  data() {
    return {
      isloading: false,
      msgs: []
    };
  },
  async mounted() {
    this.isloading = true
    let res = await getMsg({
      platform: "2c",
      page_no: 1,
      page_size: 100
    });
    if (res && res.error.errno == 200) this.msgs = res.data;
    this.isloading = false
  },
  methods: {}
};
</script>
<style lang="scss" scope>
.kefuInfo {
  position: relative;
  width: 100%;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
      font-size: 20px;
      position: absolute;
      left: 15px;
      top: 10px;
    }
  }

  & > span {
    color: red;
    font-size: 16px;
    padding: 10px;
  }
  img {
    width: 75%;
  }
}
</style>