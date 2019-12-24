import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import routes from "./router/index";
import store from "./store";
import VueClipboard from 'vue-clipboard2'

// 解决移动端click事件300毫秒延迟方法
import FastClick from 'fastclick'
FastClick.attach(document.body);

// 移动端适配
import 'lib-flexible/flexible.js'

// vant
import Vant from 'vant';
import 'vant/lib/index.css';

// nutui
import calendar from '@nutui/nutui/dist/packages/calendar/calendar.js';  // 加载构建后的JS
import '@nutui/nutui/dist/packages/calendar/calendar.css';  //加载构建后的CSS
calendar.install(Vue);
import backtop from '@nutui/nutui/dist/packages/backtop/backtop.js';  // 加载构建后的JS
import '@nutui/nutui/dist/packages/backtop/backtop.css';  //加载构建后的CSS
backtop.install(Vue);

// 样式
import "@/assets/iconfont/iconfont.css"
import '@/styles/index.scss'

VueClipboard.config.autoSetContainer = true // add this line

Vue.use(VueClipboard)
Vue.use(VueRouter)
Vue.use(Vant);
import { cateTitle } from "@/api"
import { Toast } from 'vant';

const router = new VueRouter({
  routes
})

// 全局获取分类
if (!JSON.parse(window.sessionStorage.getItem('tpyeArr'))) {
  cateTitle().then(res => {
    window.sessionStorage.setItem('tpyeArr', JSON.stringify(res.data))
  })
}

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title, 回到顶部 */
  document.title = to.meta.title || ' ';
  if (to.name == 'bearBuy' || to.name == 'limitFree') {
    Toast.loading({
      message: '加载中...',
      duration: 500
    });
  }

  window.scrollTo(0, 0);
  next()
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
