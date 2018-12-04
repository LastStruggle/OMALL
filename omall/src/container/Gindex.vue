<template>
  <div>
    <Gsearch :inputName="indexdatas"/>
    <Gswiper :inputName="indexdatas"/>
    <Gactivity/>
  </div>
</template>

<script>
import Gsearch from "../components/Gsearch.vue";
import Gswiper from "../components/Gswiper.vue";
import Gactivity from "../components/Gactivity.vue";

import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; //全局更改
import qs from "qs";
export default {
  components: {
    Gsearch,
    Gswiper,
    Gactivity
  },
  data() {
    return {
      indexdatas: ""
    };
  },
  //生命周期
  created() {
    this.firstLoad();
    //this.loadMore();
  },
  methods: {
    firstLoad() {
      axios
        .get("/api")
        .then(response => {
          console.log(response.data.data);
          this.indexdatas=response.data.data
        })
        .catch(error => {
          //console.log(error);
        });
    },
    loadMore() {
      let postData = qs.stringify({
        pageNo: 10
      });
      axios({
        method: "post",
        url: "/apig",
        data: postData
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          //console.log(error);
        });
    }
  }
};
</script>

<style>
@import url("../assets/indexnew.css");
@import url("../assets/jeui.css");
</style>