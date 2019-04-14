import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import iView from 'iview';
import 'iview/dist/styles/iview.css';


Vue.use(iView);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
