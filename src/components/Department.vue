<template>
    <div>
        <!-- <img src="../assets/logo.png"/>
        <button>sssssss</button>
        <button>sssssssssss</button> -->
        <span>{{depart.name}}</span>
        <span>{{ability==='common'?'水平测试':'能力训练'}}</span>
    </div>
    
</template>
<script>
import DataOption from './config.js'

export default {
    data(){
        return {
            
        }
    },
    mounted(){
        
    },
    computed :{
        ability(){
            return this.$route.params.ableId
        },
        depart(){
            return DataOption.departs.filter(item => item.id === this.$route.params.id)[0];
        }
    }
}
</script>
<style>

</style>


