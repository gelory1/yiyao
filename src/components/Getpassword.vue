<template>
  <div class="lesson" :style="{width:curWidth+'px',height:curHeight+'px'}">
    <div class="header">
      <div class="returnb" @click="goHome"><</div>
      <div>找回密码</div>
    </div>
    <div class="input1">
      <div class="username">
        <img src="../../image/1tubiao1.jpg">
        <input type="username" placeholder="请输入工号">
      </div>
      <div class="username">
        <img src="../../image/1tubiao1.jpg">
        <input type="username" placeholder="请输入工号">
      </div>
    </div>
    <div class="input2">
      <div class="username">
        <img src="../../image/1tubiao1.jpg">
        <input type="username" placeholder="请输入工号">
      </div>
    </div>
    <div class="input3">
      <div class="username">
        <img src="../../image/1tubiao1.jpg">
        <input type="username" placeholder="请输入工号">
      </div>
    </div>

    <img class="backImg" src="../../image/registartion-background.png">
  </div>
</template>
<script>
export default {
  data() {
    return {
      curHeight: 0,
      curWidth: 0
    };
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/login" });
    },
    goLesson() {
      this.$router.push({ path: "/lesson" });
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
.lesson {
  width: 100%;
  position: relative;
}
.header {
  height: 12%;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.backImg {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.returnb {
  position: absolute;
  left: 0;
  top: 2.5%;
  font-size: 30px;
  padding-left: 5%;
}
.input1{
    margin-top: 35%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
