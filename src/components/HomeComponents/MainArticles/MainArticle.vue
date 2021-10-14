<template>
  <div class="container" style="height: 2000px; width: 100%">
    <div id="content" class="site-content"></div>
  </div>
</template>

<script lang="js">
  export default {
    name: "MainArticle",
    setup() {},
  };
</script>

<style lang="scss">
  .site-content {
    max-width: 800px;
    height: 100%;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255, 255, 255, 0.8);
  }
</style>
