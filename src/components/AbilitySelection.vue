<template>
  <div id="ability" :style="{width:curWidth+'px',height:curHeight+'px'}">
    <router-link class="return" to="/">
      <div class="return"></div>
    </router-link>
    <router-link :to="`/department/${depart.id}/common/${stp}`">
      <div class="common1" :style="{width:curWidth*0.8 +'px',height:curWidth*0.2 + 'px'}"></div>
    </router-link>

    <router-link :to="`/department/${depart.id}/enhance/${stp}`" v-if="stp==='step2'">
      <div class="enhance1" :style="{width:curWidth*0.8 +'px',height:curWidth*0.2 + 'px'}"></div>
    </router-link>
    <div class="enhance1" :style="{width:curWidth*0.8 +'px',height:curWidth*0.2 + 'px'}" v-if="stp==='step1'"></div>
  </div>
</template>
<script>
import DataOption from "./config.js";

export default {
  data() {
    return {
      curHeight: 0,
      curWidth: 0
    };
  },
  mounted() {},
  computed: {
    depart() {
      return DataOption.departs.filter(
        item => item.id === this.$route.params.id
      )[0];
    },
    stp(){
        return this.$route.params.step
    }
  },
  beforeMount() {
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    this.curHeight = h; //减去页面上固定高度height
    this.curWidth = w;
  }
};
</script>
<style>
#ability {
  background: url("../../image/erketigaoBJ.jpg") no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.return{
    align-self: flex-start;
    position: absolute;
    width: 50px;
    height: 50px;
}
.common1 {
  margin-top: 68%;
  background: url("../../image/shuipinCS.gif") no-repeat center;
  background-size: 100%;
}
.enhance1 {
  margin-top: 5%;
  background: url("../../image/tigaoXL.gif") no-repeat center;
  background-size: 100%;
}
</style>


