<template>
  <div class="sub-app-one">
    子应用-首页
    <a href="/sub-app-two">去沸点</a>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goBol() {
      this.$router.push('/sub-app-two')
    }
  }
}
</script>
<style lang="less" scoped>
.sub-app-one {
  min-height: calc(100vh - 94px);
  background: papayawhip;
  height: 100%;
}
</style>
