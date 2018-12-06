<template>
  <header class="searchbox jepor searchboxx">
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
  
};
</script>

<style scoped>
  .searchboxx {
	position: fixed;
	width: 100%;
	min-width: 320px;
	max-width: 640px;
	top: 0;
	z-index: 11;
	padding: 8px 0;
	background-image: url(http://img.51msyc.com/wx/nimages/home_top_bg.png);
	background-size: 100% 50px;
  background-repeat: repeat-x;
  display:block;
}
</style>