import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import "../src/plugins/elementUI"
import axios from "axios"

//全局注册，使用方法为this.$axios
Vue.prototype.$axios =axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
