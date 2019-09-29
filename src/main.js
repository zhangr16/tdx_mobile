import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import routes from "./router/index";
import store from "./store";
import NutUI from '@nutui/nutui';

// 解决移动端click事件300毫秒延迟方法
import FastClick from 'fastclick'
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

import { Toast } from 'vant';

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title, 回到顶部 */
  document.title = to.meta.title || ' ';
  
  Toast.loading({
    mask: false,
    message: '加载中...',
    duration: 200
  });

  window.scrollTo(0, 0);
  next()
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
