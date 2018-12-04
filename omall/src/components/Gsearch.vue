<template>
  <header class="searchbox jepor">
    <div class="flexbox je-align-center">
      <div class="msicon fenlei tc f11"></div>
      <div class="jeflex search ml10 mr10 je-align-center flexbox searchicon pl25">
        <span class="f14 g3 dib pl5 pr10" id="storeName">请输入搜索关键字</span>
      </div>
      <div id="messageIcon" class="msicon message tc mr10 f11"></div>
    </div>
  </header>
</template>

<script>
export default {
  props:{
    inputName:Object
  }
};
</script>

<style scoped>

</style>