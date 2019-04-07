<template>
  <div>
    <div id="floor2Bg" :style="{width:curWidth+'px',height:curHeight+'px'}">
      <router-link
        v-for="depart in departs"
        :class="depart.id"
        class="depart"
        :key="depart.id"
        :to="`/abilityselection/${depart.id}/step1`"
      >
        <div class="depart-button" v-if="depart.id==='erke'"></div>
        <!-- <div class="depart-button2" v-else></div> -->
      </router-link>
      <div class="conver" @click="changeCon(true)"></div>
      <Conversation :conversation="floorConver" v-if="converSta" @closeConver="changeCon(false)"></Conversation>
    </div>
  </div>
</template>

<script>
import DataOption from "./config.js";
import Conversation from "./Conversation.vue";

export default {
  name: "FoorTwo",
  components: {
    Conversation
  },
  data() {
    return {
      departs: DataOption.departs,
      curHeight: 0,
      curWidth: 0,
      converSta: false,
      floorConver: DataOption.floorConver
    };
  },
  mounted() {
    // this.departs = DataOption.departs;
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#floor2Bg {
  /* background: url('@/image/') */
  /* padding-bottom: 200%; */
  background: url("../../image/jingzhengXS1.png") no-repeat;
  background-size: 100%;
  position: relative;
}
.depart {
  position: absolute;
}
.erke {
  top: 35%;
  left: 53%;
}
.pifuke {
  top: 40%;
  left: 30%;
}
.fuke {
  top: 55%;
  left: 50%;
}
.depart-button {
  width: 100px;
  height: 120px;
  background: url("../../image/dianji.gif") no-repeat center;
  background-size: 60%;
}
.depart-button2 {
  width: 100px;
  height: 120px;
}
.conver {
  position: absolute;
  top: 35%;
  left: 75%;
  width: 25%;
  height: 30%;
  background: url("../../image/jzdh.gif") no-repeat center;
  background-size: 40%;
}
</style>
