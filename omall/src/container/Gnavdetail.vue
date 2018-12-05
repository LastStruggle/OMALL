<template>
  <div>
    <!-- <Gheader /> -->
    <Gallswipers/>
  </div>
</template>

<script>
import Gheader from "../components/Gheader.vue";
import Gallswipers from "../components/Gallswipers.vue";

import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; //全局更改
import qs from "qs";
export default {
  components: {
    Gheader,
    Gallswipers
  },
  created() {
    this.detailLoad();
  },
  methods: {
    detailLoad() {
      axios({
        method: "get",
        url: "/api/app/product/getLetParent/v2",
        data: {
          pid: 49
        }
      }).then(response => {
        console.log(response);
      });
    }
  }
};
</script>
<style>
@import url("../assets/newbase.css");
</style>
