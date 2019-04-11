<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
import routes from './router/index.js'
import VueRouter from 'vue-router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter)
var router = new VueRouter({
  routes: routes
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.length === 0) {//如果未匹配到路由
//         from.name ? next({ name: from.name }) : next('/');//如果上级也未匹配到首页，如果上级能匹配到则转上级路由
//     } else {
//         next();//如果匹配到正确跳转
//     }
// })
export default {
  name: 'app',
  router: router
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
</style>
