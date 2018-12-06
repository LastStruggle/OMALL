<template>
  <div>
    <Gsearch :inputName="indexdatas"/>
    <Gswiper :lunbotu="swiperData" :nav="swiperNavData" :newData="newDailyData" :zhongcao="Growgrass"/>
    <Gactivity :activity="activityData"/>
    <Gxinren />
    <Gindexmain />
  </div>
</template>

<script>
import Gsearch from "../components/Gsearch.vue";
import Gswiper from "../components/Gswiper.vue";
import Gactivity from "../components/Gactivity.vue";
import Gxinren from "../components/Gxinren.vue";
import Gindexmain from "../components/Gindexmain.vue";

import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; //全局更改
import qs from "qs";
export default {
  components: {
    Gsearch,
    Gswiper,
    Gactivity,
    Gxinren,
    Gindexmain
  },
  data() {
    return {
      indexdatas: "",
      swiperData:"",
      swiperNavData:"",
      newDailyData:"",
      Growgrass:"",
      activityData:""
    };
  },
  //生命周期
  created() {
    this.firstLoad();

  },
  methods: {
    firstLoad() {
      axios
        .get("/api/onionIndex/homePage")
        .then(response => {
          console.log(response.data.data);
          this.indexdatas=response.data.data;
          this.swiperData=response.data.data.mainDataList.adList.data;
          this.swiperNavData = response.data.data.mainDataList.categoryList.data;
          this.newDailyData = response.data.data.hotIndexDataList;
          this.Growgrass = response.data.data.grassDataList;
          this.activityData = response.data.data.mainDataList.activityList.data
        })
        .catch(error => {
          //console.log(error);
        });
    },
    
  }
};
</script>

<style scoped>
@import url("../assets/indexnew.css");
@import url("../assets/jeui.css");
</style>