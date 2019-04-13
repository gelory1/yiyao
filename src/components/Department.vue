<template>
  <div class="depart-container" :style="{width:curWidth+'px',height:curHeight+'px'}">
    <img src="../../image/erkeBJ.png" class="fullPage"/>
    <router-link class="return" :to="`/abilityselection/${depart.id}/${stp}`">
      <div class="return"></div>
    </router-link>
    <div
      class="common"
      :style="{width:curWidth*0.8 +'px',height:curWidth*0.2 + 'px'}"
      v-if="ability==='common'"
      @click="changeCon(true)"
    ></div>
    <div
      class="enhance"
      :style="{width:curWidth*0.8 +'px',height:curWidth*0.2 + 'px'}"
      v-if="ability==='enhance'"
      @click="changeCon(true)"
    ></div>

    <div class="conver" @click="changeCon(true)"></div>
    <Conversation :data="depart.converData" :id="depart.id" v-if="converSta"></Conversation>
  </div>
</template>
<script>
import DataOption from "./config.js";
import Conversation from "./Conversation.vue";

export default {
  components: {
    Conversation
  },
  data() {
    return {
      curHeight: 0,
      curWidth: 0,
      converSta: false
    };
  },
  mounted() {},
  computed: {
    ability() {
      return this.$route.params.ableId;
    },
    depart() {
      return DataOption.departs.filter(
        item => item.id === this.$route.params.id
      )[0];
    },
    stp(){
        return this.$route.params.step;
    },
    score(){
      return this.$store.state.score;
    }
  },
  beforeMount() {
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    this.curHeight = h; //减去页面上固定高度height
    this.curWidth = w;
  },
  methods: {
    changeCon(data) {
      this.converSta = data;
    },
    closeConver(){
      this.changeCon(false);
      this.router.push({path:`/abilityselection/${this.depart.id}/${this.stp}`});
    }
  }
};
</script>
<style>
.depart-container {
  position: relative;
}
.depart-container .conver {
  position: absolute;
  top: 48%;
  left: 20%;
  width: 35%;
  height: 40%;
  background: url("../../image/jzdh2.gif") no-repeat center;
  background-size: 40%;
}

.return {
  align-self: flex-start;
  position: absolute;
  width: 50px;
  height: 50px;
}
.common {
  position: absolute;
  margin: 20% 10% 0;
  background: url("../../image/shuipinCS.gif") no-repeat center;
  background-size: 100%;
}
.enhance {
  position: absolute;
  margin: 20% 10% 0;
  background: url("../../image/tigaoXL.gif") no-repeat center;
  background-size: 100%;
}
</style>


