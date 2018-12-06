<template>
  <div>
    <Gheader stutas="navdetail"/>
    <GnavdetailMain />
  </div>
</template>

<script>
import Gheader from "../components/Gheader.vue";
import GnavdetailMain from "../components/GnavdetailMain.vue";

import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; //全局更改
import qs from "qs";
export default {
  components: {
    Gheader,
   GnavdetailMain
  },
  data(){
      return {
          navArr:[],
          pid:48
      }
  }
};
</script>
<style scoped>
@import url("../assets/newbase.css");
@import url("../assets/base.css");

@import url("../assets/goods.css");
</style>
