<template>
  <div class="sub-app-one">
    子应用-沸点
    <a href="/sub-app-one">去首页</a>
    <a-button @click="goBol">去首页</a-button>
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
  background: papayawhip;
  height: 100%;
  min-height: calc(100vh - 94px);
}
</style>
