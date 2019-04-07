<template>
  <div class="converCon">
    <div class="conv">
      <div class="daibiao"></div>
      <div class="con1">{{daibiaoCon}}</div>
    </div>
    <div class="conv">
      <div class="doctor"></div>
      <div class="con2">{{docCon}}</div>
    </div>
    <div class="button" @click="contin">{{buttonCon}}</div>
  </div>
</template>
<script>
export default {
  props: ["conversation", "id"],
  data() {
    return {
      daibiaoCon: "",
      docCon: "",
      buttonCon: this.conversation.length === 1 ? "确定" : "点击继续"
    };
  },
  mounted() {
    this.daibiaoCon = this.conversation[0];
    this.docCon = this.conversation[0];
  },
  methods: {
    contin() {
      let index = this.conversation.indexOf(this.daibiaoCon);
      if (index === this.conversation.length - 1 || this.buttonCon === "确定") {
        if (this.id) {
          this.$router.push({ path: `/abilityselection/${this.id}/step2` });
        }

        this.$emit("closeConver");
        return;
      } else if (index === this.conversation.length - 2) {
        this.buttonCon = "确定";
      }
      this.daibiaoCon = this.conversation[index + 1];
      this.docCon = this.conversation[index + 1];
      //   this.converSta = data;
    }
  },
  conputed: {
    id() {
      return this.$route.params.id;
    }
  }
};
</script>
<style>
.converCon {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
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
  background: url("../../image/daibiao8.png") no-repeat;
  background-size: 100%;
}
.doctor {
  position: relative;
  width: 30%;
  height: 45%;
  background: url("../../image/daibiao8.png") no-repeat;
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
</style>


