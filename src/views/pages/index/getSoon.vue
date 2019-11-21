<template>
  <div class="getSoon">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />马上抢
    </header>
    <div v-if="isloading" class="center_loading">
      <van-loading type="spinner" />
    </div>
    <ul v-else>
      <li v-for="(item, x) in paList" :key="x">
        <item-card-large :entity="item" :isFamily="$route.query.isFamily" />
      </li>
    </ul>
  </div>
</template> 
<script>
import itemCardLarge from "@/components/item_card_large";
import { paDetail } from "@/api";
export default {
  name: "getSoon",
  components: { itemCardLarge },
  data() {
    return {
      isloading: false,
      paList: []
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.isloading = true
      let res = await paDetail({ pa_id: this.$route.query.pa_id });
      if (res && res.error.errno == 200) {
        this.paList = res.data.task_list;
        this.paList.map(el => {
          el.img = res.data.img
          el.activity_type = res.data.activity_type
        })
      }
      this.isloading = false
    }
  }
};
</script>
<style lang="scss" scope>
.getSoon {
  position: relative;
  width: 100%;
  & > header {
    width: 100%;
    position: fixed;
    z-index: 999999;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(-90deg, #fc5303 0%, #fa8f05 100%);
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
  & > ul {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    li {
      background: #fff;
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .center_loading {
    display: block;
    position: absolute;
    margin: 0 auto;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>