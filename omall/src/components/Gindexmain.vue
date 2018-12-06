<template>
  <div>
    <p class="idxline"></p>
    <div class="xrthbox">
      <h3 class="tc f18 b pt20 pb20 idxtitle">猜你喜欢</h3>
      <div class="waterfall jeovh" id="waterfallLists">
        <ul v-for="(item,index) in goodslist">
          <li v-for="(ii,iindex) in item.productList">
            <div class="contsbox">
              <div class="jepor">
                <div class="salesicons jepoa"></div>

                <span class="photo show jepor">
                  <img
                    class="lazy"
                    :src="`http://img.51msyc.com/${ii.mainPicUrl}?x-oss-process=image/resize,w_320`"
                  >
                </span>
              </div>

              <div class="conts">
                <h3 class="f14 b g3 Gslh">{{ii.advertise}}</h3>
                <p class="g3 f12 mt5 Gslh">{{ii.name}}</p>
                <p class="mt5">
                  <span class="f14 b500 purple">¥{{ii.freePrice}}</span>
                  <del class="pl5 f10 g9">¥{{ii.marketPrice}}</del>
                </p>
              </div>
            </div>
          </li>
        </ul>
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
  data() {
    return {
      goodslist: ""
    };
  },
  methods: {
    loadMore() {
      let postData = qs.stringify({
        pageNo: 1
      });
      axios({
        method: "post",
        url: "/api/onionIndex/getguessYouLike",
        data: postData
      })
        .then(response => {
          console.log(response.data.data.realData);
          this.goodslist = response.data.data.realData;
        })
        .catch(error => {
          //console.log(error);
        });
    }
  },
  created() {
    this.loadMore();
  }
};
</script>
<style>
.Gslh {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
