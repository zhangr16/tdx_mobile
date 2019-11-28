<template>
  <div class="_msg">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />消 息
    </header>
    <div class="is_loading" v-if="isloading">
      <van-loading type="spinner" />
    </div>
    <ul v-else-if="msgs.length > 0">
      <li v-for="(item, x) in msgs" :key="x">
        <img src="@/assets/mine/msg.png" alt />
        <div>
          <span class="_title">通知</span>
          <span class="_desc">{{item.content}}</span>
          <span class="_time">{{item.create_time}}</span>
        </div>
      </li>
    </ul>
    <div class="empty" v-else>
      <img src="@/assets/empty/img_xitongxiaoxi@2x.png" alt />
    </div>
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
._msg {
  position: relative;
  width: 100%;
  padding-top: 50px;
  min-height: 100vh;
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
      font-size: 20px;
      position: absolute;
      left: 15px;
      top: 10px;
    }
  }

  & > ul {
    li {
      background: #fff;
      color: #666;
      line-height: 1.5;
      padding: 15px;
      border-bottom: 1px solid #e5e5e5;
      display: flex;
      & > img {
        width: 30px;
        height: 30px;
        margin-right: 5px;
      }
      & > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        ._title {
          color: #333;
          font-size: 14px;
        }
        ._desc {
          font-size: 12px;
          padding: 5px 0;
          color: #666;
        }
        ._time {
          color: #999;
          font-size: 12px;
        }
      }
    }
  }
}
</style>