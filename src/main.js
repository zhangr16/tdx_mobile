import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import routes from "./router/index";
import store from "./store";
import NutUI from '@nutui/nutui';

// 解决移动端click事件300毫秒延迟方法
import  FastClick  from  'fastclick'
FastClick.attach(document.body);

// 移动端适配
import 'lib-flexible/flexible.js'

import Vant from 'vant';
import 'vant/lib/index.css';

// 样式
import '@nutui/nutui/dist/nutui.css'
import "@/assets/iconfont/iconfont.css"
import '@/styles/index.scss'

Vue.use(VueRouter)
Vue.use(NutUI)
Vue.use(Vant);


const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
