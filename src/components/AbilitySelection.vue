<template>
<div>
    <div>
        <router-link :to="`/department/${depart.id}/common`">
            水平测试
        </router-link>
    </div>
        
    <div>
        <router-link :to="`/department/${depart.id}/enhance`">
            提高训练
        </router-link>
    </div>
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
        depart(){
            return DataOption.departs.filter(item => item.id === this.$route.params.id)[0];
        }
    }
}
</script>
<style>

</style>


