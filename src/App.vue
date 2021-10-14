<template>
  <div class="home_page">
    <router-view />
  </div>
</template>

<script>
  // 引入顶部导航组件

  export default {
    setup() {
      return {};
    },
    // 组件渲染
    components: {},
  };
</script>

<style lang="scss">
  #app {
    font-family: "Moe-Mashiro", "Merriweather Sans", Helvetica, Tahoma, Arial,
      "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei",
      "WenQuanYi Micro Hei", sans-serif;
  }
  .home_page {
    width: 100%;
    height: 100%;
  }
</style>
