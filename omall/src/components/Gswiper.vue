<template>
  <div>
    <!-- 轮播图 -->
    <div class="defslider" id="indexslider">
      <div class="bd">
        <div class="tempWrap swiper-container" style="overflow:hidden; position:relative;">
          <ul id="indexsliderlist" class="swiper-wrapper">
            <li v-for="(ii,index) in lunbotu" class="swiper-slide">
              <a>
                <div class="conpic">
                  <span class="lazy">
                    <img :src="`http://img.51msyc.com/${ii.imgPath}`" alt>
                  </span>
                </div>
              </a>
            </li>
          </ul>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <!-- 导航 -->
    <nav class="navlist jepor jecell-bottom">
      <ul class="pt10 pb10 f13 jeovh idxwcol" id="navlist">
        <li class="fl tc jew20" v-for="(nn,index) in nav">
          <span class="navicon dib">
            <img :src="`http://img.51msyc.com/${nn.imgPath}`">
          </span>
          <p>{{nn.name}}</p>
        </li>
      </ul>
    </nav>
    <p class="idxline"></p>
    <!-- 每日上新 -->
    <article id="dailyToday" class="jepor jecell-bottom">
      <h3 class="pt20 flexbox pb20 pl10 pr10 je-align-center">
        <span class="f18 g3 show b">每日上新</span>
        <span class="f14 pl5 show jeflex idxwcol" id="upLoadTime">{{newData.comingTime}} 12:30上架</span>
        <span class="show f12 g3 flexbox je-align-center">
          <i class="show f13">查看更多</i>
          <i class="arrow"></i>
        </span>
      </h3>
      <div class="dailyList pl5 pr5">
        <ul id="dailyList" class="flexbox">
          <li class="jew25" v-for="(item,index) in newData.data">
            <div class="ml5 mr5">
              <div class="photo jepor">
                <span class="jepoa show lazy">
                  <img :src="`http://img.51msyc.com/${item.mainPicUrl}`" alt>
                </span>
              </div>
              <p class="pt8 pb8">
                <span class="f14 b500 purple">¥{{item.freePrice}}</span>
                <del class="f10 g9 pl5">¥{{item.marketPrice}}</del>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </article>
    <p class="idxline"></p>

    <!-- 口碑素材轮播图 -->
    <div id="zhongcaoList" class="p10 flexbox zcnews je-align-center">
      <div
        class="zcnewicon bgsize lazy"
        style="background-image: url(http://img.51msyc.com/wx/nimages/home_grass_img.png)"
      ></div>
      <div class="flexbox jeflex ml10 zcnewslist jepor pl10">
        <ul class="jew100 imgfillet" id="scrolltext">
          <li class="flexbox je-align-center">
            <div class="f12 jeflex pr10">
              <p>
                <span class="purple jecell-purple pl5 pr5 jepor dib mr5">口碑素材</span>保温杯
              </p>

              <p class="mt5">
                <span class="purple jecell-purple pl5 pr5 jepor dib mr5">口碑素材</span>会持续使用的面膜
              </p>
            </div>

            <div class="photo bgsize">
              <img
                class="lazy"
                src="http://img.51msyc.com/material/0F4916D3-0A00-4266-83D4-3D3D6D86EBD8.jpg?x-oss-process=image/resize,w_200"
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  props: ["lunbotu", "nav", "newData", "zhongcao"],
  mounted() {},
  methods: {
    lunbotuS() {
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
  },
  watch: {
    lunbotu: function(newVal, oldVal) {
      this.$nextTick(() => {
        this.lunbotuS();
      });
    }
  }
};
</script>
<style>
</style>


