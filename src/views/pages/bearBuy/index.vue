<template>
  <div class="bearBuy">
    <van-field
      readonly
      clickable
      label="城市"
      :value="value"
      placeholder="选择城市"
      @click="showPicker = true"
    />
  </div>
</template>
<script>
export default {
  name: "bearBuy",
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style lang="scss" scope>
</style>