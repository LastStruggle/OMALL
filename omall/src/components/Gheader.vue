<template>
  <div>
    <header
      v-if="stutas==='gglist'"
      class="msheader jepor je-align-center jecell-bottom bg-f8"
      style="width: 100%;"
    >
      <div class="msicons show icon-back" id="goback"></div>
      <h2 class="jeflex f16 tc mstitle">
        <span class="godsnavtitle">放弃保留的一个头部</span>
      </h2>
      <div class="msicons show"></div>
    </header>
    <div v-if="stutas==='navdetail'">
      <header class="msheadbox">
        <div class="msfixe mspurple">
          <div class="aubgs msbacks" id="goback"></div>
          <h2 class="jeflex mstitle">
            <span class="godslistTitle" @click="navListClick">至IN美妆</span>
          </h2>
          <div class="aubgs msmenus" id="mstopmenu" @click="menuClick"></div>
        </div>
      </header>
      <div
        class="mstopmenu"
        @click="menuClick"
        v-if="menuShow"
        style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
      >
        <ul class="f13" id="mstopmenulist" style="left: 241px;">
          <li id="goShop">返回首页</li>
          <li onclick="jems.goUrl('search-page.html')">商品搜索</li>
          <li id="myAccount">我的账户</li>
          <li onclick="location.reload()">刷新一下</li>
        </ul>
      </div>
      <div class="navtopboxs hide" id="navtopmenu" :class="{memushow:navListShow}">
        <div class="navtopmenu">
          <ul class="jew100 f15">
            <li class="flexbox" data-cell="48" v-for="(item,index) in navList" :class="{on:index===navListNum}">
              <p
                class="flexbox je-text-center je-align-center je-orient-ver jeflex jew100 pr5"
              >{{item.name}}</p>
            </li>
          </ul>
        </div>
        <div class="navtopmask"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; //全局更改
import qs from "qs";
export default {
  props: ["stutas"],
  data() {
    return {
      menuShow: false,
      navListShow:false,
      navList:[],
      navListNum:0
    };
  },
  methods: {
    menuClick() {
      this.menuShow = !this.menuShow;
    },
    navListClick(){
      this.navListShow = !this.navListShow;
    },
    navFirstLoad(){
      axios({
        method: "get",
        url:"/api/app/index/menu/v1"
      }).then(response => {
        //console.log(response.data);
        this.navList =response.data
      });
    }
    
  },
  created(){
    this.navFirstLoad()
  }
};
</script>


<style scoped>
.memushow {
  display: block;
  transform-origin: 0px 0px 0px;
  opacity: 1;
  transform: scale(1, 1);
}

.mstopmenu {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  display: none;
}
.mstopmenu .mstopmask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.mstopmenu ul {
  width: 126px;
  position: absolute;
  top: 58px;
  right: 5px;
  background: rgba(72, 79, 85, 0.97);
  z-index: 350;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-transform-origin: 0px 0px 0px;
  opacity: 1;
  -webkit-transform: scale(1, 1);
  display: block;
}
.mstopmenu ul:after {
  content: "";
  position: absolute;
  top: -16px;
  right: 8px;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent transparent rgba(72, 79, 85, 0.97) transparent;
  border-width: 8px;
}
.mstopmenu ul li {
  height: 38px;
  line-height: 38px;
  text-align: left;
  text-indent: 2.5em;
  position: relative;
  color: #fff;
}
.mstopmenu ul li:after {
  width: 100%;
  height: 1px;
  content: " ";
  position: absolute;
  left: 0;
  bottom: -1px;
  border-bottom: 1px solid #636363;
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.mstopmenu ul li:last-child:after {
  border-bottom: 0;
}

.msservice {
  width: 150px;
  position: fixed !important;
  background: #484f55;
  z-index: 350;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-transform-origin: 0px 0px 0px;
  opacity: 1;
  -webkit-transform: scale(1, 1);
  display: none;
}
.msservice:after {
  content: "";
  position: absolute;
  bottom: -16px;
  left: 50%;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: #484f55 transparent transparent transparent;
  border-width: 8px;
  margin-left: -8px;
}
.msservice li {
  border-bottom: 1px solid #5b6166;
  height: 38px;
  line-height: 38px;
  text-align: left;
  text-indent: 2.5em;
}
.msservice li a {
  position: relative;
  display: block;
  width: 100%;
  color: #fff;
}
.msservice li:last-child {
  border-bottom: 0;
}
.msservice .baico {
  -webkit-background-size: 30px 30px;
  background-size: 30px 30px;
  background-repeat: no-repeat;
  background-position: 4px center;
}
.barmask {
  z-index: 300;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  border: 0;
  position: fixed !important;
  position: absolute;
}
/*背景*/
.icon-back {
  background-image: url(https://m.msyc.cc/wx/nimages/icon-back.png);
}
</style>

