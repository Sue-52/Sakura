<template>
  <div id="content" class="site_content">
    <!-- 第一部分 -->
    <div class="top_feature_row"></div>
    <!-- 第二部分 -->
    <div class="content_area"></div>
  </div>
</template>

<script lang="js">
  export default {
    name: "MainContents",
  };
</script>

<style lang="scss" scoped>
  #content {
    animation: main 1s;
  }

  @keyframes main {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .site_content {
    max-width: 800px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .top-feature-row {
    width: 100%;
    height: auto;
    margin-top: 55px;
  }
</style>
