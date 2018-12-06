<template>
  <div class="mswrapper" style="padding-top: 40px;" id="appendgoods">
    <nav class="naverbar jecell-bottom">
      <div class="navbox">
        <ul
          class="navlist f14 listchildmenu mschildrens"
          style="transform: translate3d(0px, 0px, 0px);"
        >
          <li data-cell="0" :class="{on:0===navListNum}" @click="navListClick(0)">
            <a>全部{{navListArr.let_name}}</a>
          </li>
          <li
            v-for="(item,index) in navListArr.childrens"
            :class="{on:(index+1)===navListNum}"
            @click="navListClick(index+1,index)"
          >
            <a>{{item.let_name}}</a>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="navclass jecell-bottom f13 bg-f7">
      <p id="navshaixuan" @click="pxulClick">
        <span>筛选</span>
      </p>
      <p id="navfeilei" @click="flulClick">
        <span>分类</span>
      </p>
    </nav>
    <!-- pxul -->
    <div class="navclassmask hide f13" id="navlistshaixuan" :class="{navmenuShow:pxulShow}">
      <ul class="pxul">
        <li data-cell="0">最新商品</li>
        <li data-cell="1">价格从高到低</li>
        <li data-cell="2">价格从低到高</li>
      </ul>
      <div class="ncsmask"></div>
    </div>
    <!-- flul -->
    <div class="navclassmask hide f13" id="navlistfenlei" :class="{navmenuShow:flulShow}">
      <ul class="flul">
        <li class="jecell-bottom" data-cell="93" v-for="(ii,index) in flulArr">
          <a>{{ii.let_name}}</a>
        </li>
      </ul>
      <div class="ncsmask"></div>
    </div>
    <!-- 分割线 -->
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; //全局更改
import qs from "qs";
export default {
  data() {
    return {
      navListArr: [],
      navListNum: 0,
      pxulShow: false,
      flulShow: false,
      flulNum: 0,
      flulArr: [],
      pid: 48
    };
  },
  created() {
    this.navListLoad();
  },
  updated() {},
  methods: {
    navListClick(i, num) {
      //有数据处理+1
      this.navListNum = i;
      this.flulNum = num;
      if (num !== undefined) {
        this.flulArr = this.navListArr.childrens[num].childrens;
      }
    },
    pxulClick() {
      this.pxulShow = !this.pxulShow;
    },
    flulClick() {
      this.flulShow = !this.flulShow;
    },
    navListLoad() {
      let dataUrl = "/api/app/product/getLetParent/v2?pid=" + this.pid + "";
      axios({
        method: "get",
        url: dataUrl
      }).then(response => {
        //console.log(response);
        this.navListArr = response.data;
        this.flulArr = response.data.childrens[0].childrens;
      });
    }
  }
};
</script>
<style>
.navmenuShow {
  display: block;
  transform-origin: 0px 0px 0px;
  opacity: 1;
  transform: scale(1, 1);
}
</style>

