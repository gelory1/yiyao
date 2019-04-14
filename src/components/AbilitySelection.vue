<template>
  <div id="ability" :style="{width:curWidth+'px',height:curHeight+'px'}">
    <img src="../../image/erketigaoBJ.jpg" class="fullPage"/>
    <div @click="goHome" class="return"></div>
    <div class="common1" @click="goTest">
      <img src="../../image/shuipingCS.gif" />
    </div>

    <router-link :to="`/department/${depart.id}/enhance/${stp}`" v-if="stp==='step2'">
      <div class="enhance1">
        <img src="../../image/tigaoXL.gif"/>
      </div>
    </router-link>
    <div class="enhance1" v-if="stp==='step1'">
      <img class="gif" src="../../image/tigaoXL.png"/>
    </div>
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
  },
  methods:{
    goTest(){
      this.$store.state.floorTwoConver = true;
      if(this.$store.state.success){
        this.$router.push({path:'/department/erke/common/step1'});
      }else{
        this.$router.push({path:'/lesson1'});
      }
    },
    goHome(){
      this.$store.state.floorTwoConver = false;
      this.$router.push({path:'/lesson1'});
    }
  }
};
</script>
<style>
#ability {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fullPage{
  position: absolute;
  width: 100%;
  z-index: -1;
}
.return{
    align-self: flex-start;
    position: absolute;
    width: 50px;
    height: 50px;
}
.common1 {
  width: 100%;
  margin-top: 58%;
}
.common1 img{
  width: 80%;
  margin: 0 10%;
}
.enhance1 {
  width: 100%;
  margin: 0 10%;
}
.enhance1 img{
  width: 80%;
  
}
.enhance1 img.gif{
  margin: 0 10%;
}
</style>


