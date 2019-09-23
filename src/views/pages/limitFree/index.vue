<template>
  <div class="classify">
    <van-tag type="primary">标签</van-tag>
    <van-tag type="success">标签</van-tag>
    <van-tag type="danger">标签</van-tag>
    <van-tag type="warning">标签</van-tag>

    <select v-model="s">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "classify",
  data() {
    return {
      s: ''
    }
  }
};
</script>
<style lang="scss" scope>
</style>