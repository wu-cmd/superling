import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 生成一个vue实例  用来存储$bus 
// 添加事件总线对象$bus
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
