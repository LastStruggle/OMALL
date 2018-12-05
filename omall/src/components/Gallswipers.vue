<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  mounted() {
    //生命周期
    this.navSwiper();
  },
  methods: {
    navSwiper() {
      //轮播图动画
      var swiper = new Swiper(".swiper-container", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          dynamicMainBullets: 1
        },
        autoplay: {
          delay: 1500 //1秒切换一次
        },
        loop: true,
        observer: true //修改swiper自己或子元素时，自动初始化swiper
        //observeParents: true //修改swiper的父元素时，自动初始化swiper
      });
    }
  }
};
</script>
<style>
</style>
