<template>
  <div class="converCon">
    <div class="conv" v-if="!selected">
      <img class="daibiao" v-if="!id" src="../../image/hushi.png">
      <img class="daibiao" v-if="id==='erke'" src="../../image/erkenanZR.png">
      <div class="con1">{{docCon}}</div>
    </div>
    <div class="conv" v-if="!selected">
      <img class="doctor" src="../../image/daibiao.png">
      <div class="con2">{{daibiaoCon}}</div>
    </div>
    <div v-if="selected" class="selectBox">
      <div class="img">
        <img src="../../image/daibiao-1.png" class="imgLeft">
        <img src="../../image/hushi-1.png" v-if="!id" class="imgRight">
        <img src="../../image/erkenanZR-1.png" v-if="id==='erke'" class="imgRight">
      </div>
      <div class="selectedQes">{{docCon}}</div>
      <div class="selectedAns">
        <input type="radio" id="contactChoice1" name="contact" value="planA" v-model="picked">
        <label for="contactChoice1">{{data[`qAnd${index+1}`].planA[0]}}</label>
        <br>
        <input type="radio" id="contactChoice2" name="contact" value="planB" v-model="picked">
        <label for="contactChoice2">{{data[`qAnd${index+1}`].planB[0]}}</label>
      </div>
      <div class="continueBox" @click="answer">
        <span class="buttonCon">点击继续</span>
        <img src="../../image/jixu.png" class="continue">
      </div>
    </div>
    <div class="button" @click="contin" v-if="confirm1">{{buttonCon}}</div>

    <audio ref="audio1">
      <source ref="source" src="../../audio/hushi/1.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio2">
      <source ref="source" src="../../audio/hushi/2.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio3">
      <source ref="source" src="../../audio/hushi/3.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio4">
      <source ref="source" src="../../audio/hushi/4.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio5">
      <source ref="source" src="../../audio/hushi/5.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio11a">
      <source ref="source" src="../../audio/hushi/A-1.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio21a">
      <source ref="source" src="../../audio/hushi/A-2.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio11b">
      <source ref="source" src="../../audio/hushi/B-1.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio21b">
      <source ref="source" src="../../audio/hushi/B-2.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio31b">
      <source ref="source" src="../../audio/hushi/B-3.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio41b">
      <source ref="source" src="../../audio/hushi/B-4.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio51b">
      <source ref="source" src="../../audio/hushi/B-5.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio61b">
      <source ref="source" src="../../audio/hushi/B-6.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio71b">
      <source ref="source" src="../../audio/hushi/B-7.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio81b">
      <source ref="source" src="../../audio/hushi/B-8.mp3" type="audio/mp3">
    </audio>
    <audio ref="audio91b">
      <source ref="source" src="../../audio/hushi/B-9.mp3" type="audio/mp3">
    </audio>

    <audio ref="erkeaudio1">
      <source ref="source" src="../../audio/hushi/2-C.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio11a">
      <source ref="source" src="../../audio/hushi/2AFR-1.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio21a">
      <source ref="source" src="../../audio/hushi/2AFC-1.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio11b">
      <source ref="source" src="../../audio/hushi/2BTR-1.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio21b">
      <source ref="source" src="../../audio/hushi/2BTC-1.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio12a">
      <source ref="source" src="../../audio/hushi/3BFR-1.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio22a">
      <source ref="source" src="../../audio/hushi/3BFC.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio12b">
      <source ref="source" src="../../audio/hushi/3ATR-1.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio22b">
      <source ref="source" src="../../audio/hushi/3ATC-1.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio32b">
      <source ref="source" src="../../audio/hushi/3ATR-2.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio42b">
      <source ref="source" src="../../audio/hushi/3ATC-2.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio13a">
      <source ref="source" src="../../audio/hushi/4BFR-1.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio23a">
      <source ref="source" src="../../audio/hushi/4BFC.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio13b">
      <source ref="source" src="../../audio/hushi/4ATR-1.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio23b">
      <source ref="source" src="../../audio/hushi/4ATC-1.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio33b">
      <source ref="source" src="../../audio/hushi/4ATR-2.mp3" type="audio/mp3">
    </audio>
    <audio ref="erkeaudio43b">
      <source ref="source" src="../../audio/hushi/4ATC-2.mp3" type="audio/mp3">
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
    this.animateBegin(0, this.data.converStart, 0);
  },
  methods: {
    animateBegin(index1, data, index2) {
      
      if (index2 === 0) {
        if (index1 % 2 === 0 || index1 === 0) {
          //医生说话
          this.docCon = data[index1];
          this.daibiaoCon = "";
        } else {
          //代表说话
          this.daibiaoCon = data[index1];
          this.docCon = "";
        }
      } else {
        if (index1 % 2 === 0 || index1 === 0) {
          //代表说话
          this.daibiaoCon = data[index1];
          this.docCon = "";
        } else {
          //医生说话
          this.docCon = data[index1];
          this.daibiaoCon = "";
        }
      }
      let id = this.id ? this.id : "";
      if (index2 > 0 && this.picked === "planA") {
        this.$refs[`${id}audio${index1 + 1}${index2}a`].play();
        this.$refs[`${id}audio${index1 + 1}${index2}a`].addEventListener(
          "ended",
          () => {
            // this.$refs.source.src=`../../audio/hushi/2.mp3`;
            if (index1 === data.length - 1) {
              // this.confirm1 = true;
              this.selected = true;
              this.picked =""
              if (Object.keys(this.data).length - 2 === this.index) {
                if (this.$store.state.success) {
                  if (this.$store.state.score > 0 && this.id) {
                    this.$router.push({
                      path: "/abilityselection/erke/step2"
                    });
                  } else {
                    this.$router.push({
                      path: "/department/erke/common/step1"
                    });
                  }
                } else {
                  this.$router.push({ path: "/abilityselection/erke/step1" });
                }
              }
            } else {
              this.animateBegin(index1 + 1, data, index2);
            }
          }
        );
      } else if (index2 > 0 && this.picked === "planB") {
        this.$refs[`${id}audio${index1 + 1}${index2}b`].play();
        this.$refs[`${id}audio${index1 + 1}${index2}b`].addEventListener(
          "ended",
          () => {
            // this.$refs.source.src=`../../audio/hushi/2.mp3`;
            if (index1 === data.length - 1) {
              // this.confirm1 = true;
              this.selected = true;
              this.picked =""
              if (Object.keys(this.data).length - 2 === this.index) {
                if (this.$store.state.success) {
                  if (this.$store.state.score > 0) {
                    this.$router.push({
                      path: "/department/erke/common/step2"
                    });
                  } else {
                    this.$router.push({
                      path: "/department/erke/common/step1"
                    });
                  }
                } else {
                  this.$router.push({ path: "/abilityselection/erke/step1" });
                }
              }
            } else {
              this.animateBegin(index1 + 1, data, index2);
            }
          }
        );
      } else {
        this.$refs[`${id}audio${index1 + 1}`].play();
        this.$refs[`${id}audio${index1 + 1}`].addEventListener("ended", () => {
          if (index1 === data.length - 1) {
            this.selected = true;
              this.picked =""
            if (Object.keys(this.data).length - 2 === this.index) {
              if (this.$store.state.success) {
                if (this.$store.state.score > 0) {
                  this.$router.push({ path: "/department/erke/common/step2" });
                } else {
                  this.$router.push({ path: "/department/erke/common/step1" });
                }
              } else {
                this.$router.push({ path: "/abilityselection/erke/step1" });
              }
            }
          } else {
            this.animateBegin(index1 + 1, data, index2);
          }
        });
      }
    },
    contin() {
      this.selected = true;
      this.confirm1 = false;
    },
    answer() {
      let rightAn = this.data.rightAnswer[this.index];
      if (this.picked === rightAn) {
        this.$store.state.success = true;
        if (this.index > 0) this.$store.state.score += 1;
      }
      if (this.picked === "planA") {
        this.index += 1;
        this.selected = false;
        this.animateBegin(0, this.data[`qAnd${this.index}`].planA, this.index);
      } else if (this.picked === "planB") {
        this.index += 1;
        this.selected = false;
        this.animateBegin(0, this.data[`qAnd${this.index}`].planB, this.index);
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
  background-size: 100%;
}
.doctor {
  position: relative;
  width: 30%;
  height: 45%;
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


