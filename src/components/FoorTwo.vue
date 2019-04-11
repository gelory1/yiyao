<template>
  <div>
    <div id="floor2Bg">
      <img src="../../image/jingzhengXS1.png" class="fullImage">
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
      <div class="conver" @click="goTest()">
        <img src="../../image/jzdh.gif" class="icon">
      </div>
      <Conversation :data="floorTwoData" v-show="converSta"></Conversation>
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
      floorTwoData: DataOption.floorTwoData
    };
  },
  mounted() {
    // this.departs = DataOption.departs;
  },
  beforeMount() {

  },
  methods: {
    goTest(){
      this.$router.push({path:`/abilityselection/erke/step1`})
    }
  },
  computed:{
    success(){
      return this.$store.state.success;
    },
    converSta(){
      return this.$store.state.floorTwoConver;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#floor2Bg {
  position: relative;
  overflow: hidden;
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
#floor2Bg .conver {
  position: absolute;
  /* padding: 10px; */
  top: 40%;
  right: 0;
}
.icon {
  float: right;
  margin-right: 22%;
  width: 40%;
  height: auto;
}
.fullImage {
  /* position: absolute; */
  width: 100%;
  margin: 0;
  padding: 0;
  height: auto;
  z-index: -1;
}
</style>
