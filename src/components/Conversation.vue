<template>
  <div class="converCon">
    <div class="conv" v-if="!selected">
      <div class="daibiao"></div>
      <div class="con1">{{docCon}}</div>
    </div>
    <div class="conv" v-if="!selected">
      <div class="doctor"></div>
      <div class="con2">{{daibiaoCon}}</div>
    </div>
    <div v-if="selected" class="selectBox">
      <div class="img">
        <img src="../../image/daibiao-1.png" class="imgLeft">
        <img src="../../image/hushi-1.png" class="imgRight">
      </div>
      <div class="selectedQes">{{docCon}}</div>
      <div class="selectedAns">
        <input type="radio" id="contactChoice1" name="contact" value="planA" v-model="picked">
        <label for="contactChoice1">{{data.qAnd1.planA[1]}}</label>
        <br>
        <input type="radio" id="contactChoice2" name="contact" value="planB" v-model="picked">
        <label for="contactChoice2">{{data.qAnd1.planB[1]}}</label>
      </div>
      <div class="continueBox" @click="answer">
        <span class="buttonCon">点击继续</span>
        <img src="../../image/jixu.png" class="continue">
      </div>
    </div>
    <div class="button" @click="contin" v-if="confirm1">{{buttonCon}}</div>

    <audio v-for="index in 10" :key="index" ref="audio">
      <source ref="source" :src="`../../audio/hushi/${index}.mp3`" type="audio/mp3">
    </audio>
  </div>
</template>
<script>
export default {
  props: ["data", "id"],
  data() {
    return {
      daibiaoCon: "",
      docCon: "",
      buttonCon: "确定",
      selected: false,
      ques: "",
      confirm1: false,
      confirm2: false,
      picked: "",
      index: 0
    };
  },
  mounted() {
    this.animateBegin(0, this.data.converStart);
  },
  methods: {
    animateBegin(index1, data) {
      // let time = 100;
      if (index1 % 2 === 0 || index1 === 0) {
        //医生说话
        this.docCon = data[index1];
        this.daibiaoCon = "";

        // time = 1000;
      } else {
        //代表说话
        this.daibiaoCon = data[index1];
        this.docCon = "";

        // time = 1000;
      }
      this.$refs.audio[index1].play();
      this.$refs.audio[index1].addEventListener("ended", () => {
        if (index1 === data.length - 1) {
          // this.confirm1 = true;
          this.selected = true;
          if (Object.keys(this.data).length - 2 === this.index) {
            if (this.$store.state.score === 1) {
              this.$store.state.success = true;
              this.$router.push({ path: "/department/erke/common/step1" });
            } else {
              this.$router.push({ path: "/abilityselection/erke/step1" });
            }
          }
        } else {
          this.animateBegin(index1 + 1, data);
        }
      });

      // setTimeout(() => {
      //   if (index1 === data.length - 1) {
      //     // this.confirm1 = true;
      //     this.selected = true;
      //     if(Object.keys(this.data).length-2 === this.index){
      //       if(this.$store.state.score === 1){
      //         this.$store.state.success = true;
      //         this.$router.push({path: '/department/erke/common/step1'});
      //       }else{
      //         this.$router.push({path:'/abilityselection/erke/step1'});
      //       }
      //     }
      //   } else {
      //     this.animateBegin(index1 + 1, data);
      //   }
      // }, time);
    },
    contin() {
      this.selected = true;
      this.confirm1 = false;
    },
    answer() {
      let rightAn = this.data.rightAnswer[this.index];
      if (this.picked === rightAn) {
        this.$store.state.score += 1;
      }
      if (this.picked === "planA") {
        this.index += 1;
        this.selected = false;
        this.animateBegin(0, this.data[`qAnd${this.index}`].planA);
      } else if (this.picked === "planB") {
        this.index += 1;
        this.selected = false;
        this.animateBegin(0, this.data[`qAnd${this.index}`].planB);
      } else {
        alert("请选择回答方式！");
      }
    }
  },
  conputed: {
    id() {
      return this.$route.params.id;
    },
    audioData() {
      let data = [];
      let length = 0;
      for (var key in this.data) {
        length = length + data["converStart"].length;
        if (key.indexOf("qAnd") !== -1) {
          length = length + data[key][0].length;
          length = length + data[key][1].length;
        }
      }
      data.length = length;
      return data;
    }
  }
};
</script>
<style>
.converCon {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.conv {
  width: 80%;
  height: 30%;
  background-color: white;
  border-radius: 5px;
  position: relative;
}
.daibiao {
  position: relative;
  width: 30%;
  height: 45%;
  background: url("../../image/hushi.png") no-repeat;
  background-size: 100%;
}
.doctor {
  position: relative;
  width: 30%;
  height: 45%;
  background: url("../../image/daibiao.png") no-repeat;
  background-size: 100%;
  margin-left: 70%;
}
.con1 {
  width: 60%;
  height: 50%;
  position: absolute;
  left: 25%;
  top: 20%;
  word-wrap: break-word;
}
.con2 {
  width: 60%;
  height: 50%;
  position: absolute;
  right: 25%;
  top: 20%;
  word-wrap: break-word;
}
.button {
  width: 80%;
  background-color: #e74c3c;
  margin: 5% 10%;
  padding: 2% 0;
  color: white;
  text-align: center;
  border-radius: 10px;
}
.selectBox {
  width: 60%;
  /* margin: 0 10%; */
  padding: 10% 5%;
  background-color: white;
}
.img {
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.imgLeft,
.imgRight {
  width: 30%;
}
.imgLeft {
  transform: translateX(15%);
}
.imgRight {
  transform: translateX(-15%);
}
.continue {
  width: 100%;
}
.buttonCon {
  position: absolute;
  color: white;
  margin: 0 auto;
}
.selectedQes {
  color: #0e117c;
  font-weight: bold;
}
.continueBox {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.selectedAns select {
  width: 100%;
}
</style>


