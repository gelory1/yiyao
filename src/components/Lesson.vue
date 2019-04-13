<template>
    <div class="lesson" :style="{width:curWidth+'px',height:curHeight+'px'}">
        <div class="return" @click="goHome"></div>
        <img class="backImg" src="../../image/jingzhengPXBJ.png"/>
        <div class="golesson1" @click="goLesson1">
            <img class="gif" src="../../image/yxjzxs.gif"/>
        </div>
        <div class="golesson2">
            <img class="gif1" src="../../image/jzclzd.gif"/>
        </div>
        <div class="golesson3">
            <img class="gif1" src="../../image/jzmbsd.gif"/>
        </div>
        <div class="golesson4">
            <img class="gif1" src="../../image/jzxdjh.gif"/>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            curHeight:0,
            curWidth:0,
        }
    },
    methods:{
        goHome(){
            this.$router.push({path: '/'});
        },
        goLesson1(){
            this.$router.push({path: '/lesson1'});
        }
    },
    beforeMount() {
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    this.curHeight = h; //减去页面上固定高度height
    this.curWidth = w;
  },
}
</script>
<style>
.lesson{
    width: 100%;
    position: relative;
}
.backImg{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
.return{
    width: 50px;
    height: 50px;
}
.golesson1,.golesson2,.golesson3,.golesson4{
    width: 60%;
    height: 20%;
    position: absolute;
    
}
.golesson1{
    top: 30%;
    right: 0;
}
.golesson2{
    top: 55%;
    left: 0;
}
.golesson3{
    top: 8%;
    right: 3%;
}
.golesson4{
    bottom: 0;
    right: 0;
}
.gif{
    width: 80%;
}
.gif1{
    width: 100%;
}
</style>
