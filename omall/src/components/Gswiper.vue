<template>
  <div>
    <!-- 轮播图 -->
    <div class="defslider" id="indexslider">
      <div class="bd">
        <div class="tempWrap swiper-container" style="overflow:hidden; position:relative;">
          <ul id="indexsliderlist" class="swiper-wrapper">
            <li class="swiper-slide">
              <a onclick="jems.goUrl('https://m.msyc.cc/wx/actapp/album/index.html?album=1253')">
                <div class="conpic">
                  <span
                    class="lazy"
                    style="background-image: url(http://img.51msyc.com/advert/image/20181128/20181128191228443.jpg?x-oss-process=image/resize,w_640);"
                  ></span>
                </div>
              </a>
            </li>
            <li class="swiper-slide">
              <a onclick="jems.goUrl('https://m.msyc.cc/wx/actapp/album/index.html?album=1253')">
                <div class="conpic">
                  <span
                    class="lazy"
                    style="background-image: url(http://img.51msyc.com/advert/image/20181128/20181128191228443.jpg?x-oss-process=image/resize,w_640);"
                  ></span>
                </div>
              </a>
            </li>
            <li class="swiper-slide">
              <a onclick="jems.goUrl('https://m.msyc.cc/wx/actapp/album/index.html?album=1253')">
                <div class="conpic">
                  <span
                    class="lazy"
                    style="background-image: url(http://img.51msyc.com/advert/image/20181128/20181128191228443.jpg?x-oss-process=image/resize,w_640);"
                  ></span>
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
        <li class="fl tc jew20" onclick="jems.goUrl('https://m.msyc.cc/wx/bylevelView?pid=48')">
          <span class="navicon dib">
            <img
              src="http://img.51msyc.com/advert/image/20181129/20181129175102930.jpg?x-oss-process=image/resize,w_200"
            >
          </span>
          <p>至IN美妆</p>
        </li>

        <li class="fl tc jew20" onclick="jems.goUrl('https://m.msyc.cc/wx/bylevelView?pid=51')">
          <span class="navicon dib">
            <img
              src="http://img.51msyc.com/advert/image/20181129/20181129175124582.jpg?x-oss-process=image/resize,w_200"
            >
          </span>
          <p>口碑保健</p>
        </li>

        <li class="fl tc jew20" onclick="jems.goUrl('https://m.msyc.cc/wx/bylevelView?pid=49')">
          <span class="navicon dib">
            <img
              src="http://img.51msyc.com/advert/image/20181129/20181129175138272.jpg?x-oss-process=image/resize,w_200"
            >
          </span>
          <p>格调育儿</p>
        </li>

        <li class="fl tc jew20" onclick="jems.goUrl('https://m.msyc.cc/wx/bylevelView?pid=298')">
          <span class="navicon dib">
            <img
              src="http://img.51msyc.com/advert/image/20181129/20181129175547500.jpg?x-oss-process=image/resize,w_200"
            >
          </span>
          <p>轻奢时尚</p>
        </li>

        <li class="fl tc jew20" onclick="jems.goUrl('https://m.msyc.cc/wx/flagshipIndex')">
          <span class="navicon dib">
            <img
              src="http://img.51msyc.com/advert/image/20181129/20181129175606420.jpg?x-oss-process=image/resize,w_200"
            >
          </span>
          <p>旗舰馆</p>
        </li>

        <li class="fl tc jew20" onclick="jems.goUrl('https://m.msyc.cc/wx/foreign.html')">
          <span class="navicon dib">
            <img
              src="http://img.51msyc.com/advert/image/20181129/20181129175622773.jpg?x-oss-process=image/resize,w_200"
            >
          </span>
          <p>洋葱贩外</p>
        </li>

        <li class="fl tc jew20" onclick="jems.goUrl('https://m.msyc.cc/wx/onionlife-index.html')">
          <span class="navicon dib">
            <img
              src="http://img.51msyc.com/advert/image/20181129/20181129175635121.jpg?x-oss-process=image/resize,w_200"
            >
          </span>
          <p>洋葱生活+</p>
        </li>

        <li
          class="fl tc jew20"
          onclick="jems.goUrl('https://m.msyc.cc//wx/actapp/album/index-secondKill.html?album=1074')"
        >
          <span class="navicon dib">
            <img
              src="http://img.51msyc.com/advert/image/20181129/20181129175650470.jpg?x-oss-process=image/resize,w_200"
            >
          </span>
          <p>秒杀</p>
        </li>

        <li class="fl tc jew20" onclick="jems.goUrl('https://m.msyc.cc/wx/group-index-new.html')">
          <span class="navicon dib">
            <img
              src="http://img.51msyc.com/advert/image/20181129/20181129175715931.jpg?x-oss-process=image/resize,w_200"
            >
          </span>
          <p>拼团</p>
        </li>

        <li
          class="fl tc jew20"
          onclick="jems.goUrl('https://m.msyc.cc/wx/actapp/asowner/index.html')"
        >
          <span class="navicon dib">
            <img
              src="http://img.51msyc.com/advert/image/20181129/20181129175726865.jpg?x-oss-process=image/resize,w_200"
            >
          </span>
          <p>成为店主</p>
        </li>
      </ul>
    </nav>
    <p class="idxline"></p>
    <!-- 每日上新 -->
    <article id="dailyToday" class="jepor jecell-bottom">
      <h3 class="pt20 flexbox pb20 pl10 pr10 je-align-center">
        <span class="f18 g3 show b">每日上新</span>
        <span class="f14 pl5 show jeflex idxwcol" id="upLoadTime">12月04日 12:30上架</span>
        <span class="show f12 g3 flexbox je-align-center">
          <i class="show f13">查看更多</i>
          <i class="arrow"></i>
        </span>
      </h3>
      <div class="dailyList pl5 pr5">
        <ul id="dailyList" class="flexbox">
          <li class="jew25">
            <div class="ml5 mr5">
              <div class="photo jepor">
                <span
                  class="jepoa show lazy"
                  style="background-image: url(&quot;http://img.51msyc.com/ERPimage/product/20181203/e28c0018-2672-4a92-baa9-bf79b0901df7.jpg?x-oss-process=image/resize,w_200&quot;); transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
                ></span>
              </div>
              <p class="pt8 pb8">
                <span class="f14 b500 purple">¥810</span>
                <del class="f10 g9 pl5">¥1157</del>
              </p>
            </div>
          </li>

          <li class="jew25">
            <div class="ml5 mr5">
              <div class="photo jepor">
                <span
                  class="jepoa show lazy"
                  style="background-image: url(&quot;http://img.51msyc.com/ERPimage/product/20181203/b146c14f-5f7b-4862-a652-474784494747.jpg?x-oss-process=image/resize,w_200&quot;); transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
                ></span>
              </div>
              <p class="pt8 pb8">
                <span class="f14 b500 purple">¥810</span>
                <del class="f10 g9 pl5">¥1157</del>
              </p>
            </div>
          </li>

          <li class="jew25">
            <div class="ml5 mr5">
              <div class="photo jepor">
                <span
                  class="jepoa show lazy"
                  style="background-image: url(&quot;http://img.51msyc.com/ERPimage/product/20181203/0ebe56ba-ad54-4a44-9b32-030239505248.jpg?x-oss-process=image/resize,w_200&quot;); transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
                ></span>
              </div>
              <p class="pt8 pb8">
                <span class="f14 b500 purple">¥810</span>
                <del class="f10 g9 pl5">¥1157</del>
              </p>
            </div>
          </li>

          <li class="jew25">
            <div class="ml5 mr5">
              <div class="photo jepor">
                <span
                  class="jepoa show lazy"
                  style="background-image: url(&quot;http://img.51msyc.com/ERPimage/product/20181203/b43dbee1-a154-4403-9b9a-512223bea450.jpg?x-oss-process=image/resize,w_200&quot;); transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
                ></span>
              </div>
              <p class="pt8 pb8">
                <span class="f14 b500 purple">¥810</span>
                <del class="f10 g9 pl5">¥1157</del>
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
  props:{
    inputName:Object
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style>
</style>


