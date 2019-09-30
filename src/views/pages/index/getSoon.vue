<template>
  <div class="getSoon">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />
      马上抢
    </header>
    <ul>
      <li v-for="item in 9" :key="item">
        <item-card-large />
      </li>
    </ul>
  </div>
</template> 
<script>
import itemCardLarge from "@/components/item_card_large"

export default {
  name: "getSoon",
  components: { itemCardLarge },
  methods: {}
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
    // background: #f6f6f6;
    li {
      background: #fff;
      width: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>