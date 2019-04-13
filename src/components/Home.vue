<template>
  <div class="home">
    <img class="fullImage" src="../../image/home_background.png">
    <div class="content" :style="{width:curWidth+'px',height:curHeight+'px'}">
      <div class="titleBox">
        <div class="title">中药配方颗粒云学堂</div>
        <img class="avatar" src="../../image/avatar-icon.png">
      </div>
      <div class="swiperBox">
        <swiper :options="swiperOption" autoplay="true" class="wiper">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
              <img :src="require(`../../image/Carousel${index+1}.png`)" class="tabImage"/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="iconButton">
          <div class="iconBox">
              <img src="../../image/workout.png"/>
              <div>销售锻炼</div>
          </div>
          <div class="iconBox">
              <img src="../../image/cultivate.png"/>
              <div>习惯养成</div>
          </div>
          <div class="iconBox">
              <img src="../../image/3tu_03.png"/>
              <div>能力培养</div>
          </div>
      </div>
      <div class="abilitys">能力养成馆</div>
      <div class="footer">
        <div class="fButton1" @click="goAbility">
            <img src="../../image/footer1.png"/>
        </div>
        <div class="fButton2">
            <img src="../../image/footer2.png"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      curHeight: 0,
      curWidth: 0,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: [1, 2, 3, 4, 5]
    };
  },
  beforeMount() {
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    this.curHeight = h; //减去页面上固定高度height
    this.curWidth = w;
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods:{
      goAbility(){
          this.$router.push({path:'/lesson'});
      }
  }
};
</script>
<style>
.home {
  position: relative;
}
.fullImage {
  position: absolute;
  z-index: -1;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.avatar {
  position: absolute;
  right: 4%;
  top: 3%;
  width: 8%;
}
.titleBox {
  margin-top: 4%;
  padding: 2% 2%;
  background-color: #0000ff;
  border-radius: 5px;
}
.title {
  color: white;
  font-size: 20px;
}
.swiperBox{
    width: 90%;
    margin: 4% 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
}
.tabImage{
    width: 100%;
}
.iconButton{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.iconBox{
    padding: 5px;
    width: 100px;
    height: 100px;
    /* height: 20%; */
    background-color: white;
    border-radius: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.iconBox img{
    width: 60px;
    height: 60px;
    margin: 10px;
}
.abilitys{
    margin: 4% 0;
    margin-left: 5%;
    padding-left: 10px;
    align-self: flex-start;
    position: relative;
}
.abilitys::before{
    position: absolute;
    left: 0;
    content: '';
    display: block;
    width: 5px;
    height: 16px;
    border-radius: 5px;
    background-color: white;
}
.footer{
    width: 80%;
    padding: 4% 5%;
    flex: 1;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background-color: #DAF3FF;
    border-radius: 5%;
    margin-bottom: 6%;
}
.fButton1,.fButton1{
    height: 100%;
    position: relative;
}
.footer img{
    width: 100%;
}
.footer span{
    position: absolute;
}
</style>


