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
    <div class="goods-list ggoodslist main-body" ref="wrapper">
      <!-- :style="{ height: (wrapperHeight) + 'px' }" -->
      <mt-loadmore
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        ref="loadmore"
        :autoFill="isAutoFill"
      >
        <ul id="goodsList" class="jeovh">
          <li class="jew50 fl" v-for="(item,index) in GlistData">
            <div class>
              <a class="show jepor">
                <div class="icons jepoa"></div>

                <div class="jew100 jepor photo msbeauty">
                  <span class="lazy jew100 jepoa">
                    <img :src="`http://img.51msyc.com/${item.mainPicUrl}`">
                  </span>
                </div>
              </a>
            </div>
            <a class="show jepor"></a>
            <div class="bg-wh pt10 contents">
              <div class="jepor">
                <p class="txts f14">{{item.name}}</p>
                <p class="jepor country hide tc pl10">
                  <em class="jepor undefined"></em>英国
                </p>
              </div>
              <div class="jepor mt8">
                <p class="f13">
                  <span class="g3">
                    <em class="purple f15">¥{{item.freePrice}}</em>
                  </span>
                  <span class="g9">
                    <del>¥{{item.marketPrice}}</del>
                  </span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { Loadmore } from "mint-ui";
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
      pid: 48,
      GlistData: [],
      gooodslistRdata: {
        pid: 48,
        pageNo: 1,
        tmn: 104826
      },
      //可以进行上拉
      allLoaded: false,
      //是否自动触发上拉函数
      isAutoFill: false,
      wrapperHeight: 0,
      courrentPage: 0
    };
  },
  created() {
    this.navListLoad();
    this.goodslistFirstLoad();
  },
  mounted() {
    // 父控件要加上高度，否则会出现上拉不动的情况
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
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
    // //   下拉刷新
    // loadTop() {
    //   this.goodslistFirstLoad();
    // },
    // 上拉加载
    loadBottom() {
        this.gooodslistRdata.pageNo = ++this.gooodslistRdata.pageNo;
      this.goodslistFirstLoad();
    },
    //导航栏数据加载
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
    },
    //商品列表加载
    goodslistFirstLoad() {
      let dataUrl =
        "/api/app/product/bycatid/v1?pid=" +
        this.gooodslistRdata.pid +
        "&pageNo=" +
        this.gooodslistRdata.pageNo +
        "&tmn=" +
        this.gooodslistRdata.tmn +
        "";
      axios({
        method: "get",
        url: dataUrl
      }).then(response => {
        console.log(response.data.data);
        this.GlistData = [...response.data.data, ...this.GlistData];
      });
    }
  }
};
</script>
<style>
.main-body {
  /* 加上这个才会有当数据充满整个屏幕，可以进行上拉加载更多的操作 */
  overflow: scroll;
}
.navmenuShow {
  display: block;
  transform-origin: 0px 0px 0px;
  opacity: 1;
  transform: scale(1, 1);
}
.ggoodslist {
  margin-top: 90px;
}
.gggoodslist {
  margin-top: 50px;
}
</style>

