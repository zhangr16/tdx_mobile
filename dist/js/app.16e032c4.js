(function(e){function n(n){for(var r,a,o=n[0],i=n[1],f=n[2],d=0,s=[];d<o.length;d++)a=o[d],u[a]&&s.push(u[a][0]),u[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(s.length)s.shift()();return c.push.apply(c,f||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var o=t[a];0!==u[o]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},u={app:0},c=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-002a083f":"61a40610","chunk-07ad84fe":"ed3ad560","chunk-0b32b031":"c5720041","chunk-0df7e94b":"a48bc8b3","chunk-270abc8a":"34344dea","chunk-2e7d1fe1":"9db32a17","chunk-4fcf0e3c":"5d18a3c8","chunk-7d04047c":"0570a9e9","chunk-8843f8c8":"06c2d9c9","chunk-bcd9a1a8":"776469e4","chunk-e0843f26":"7814f7e6","chunk-f697359a":"50d98f42"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-002a083f":1,"chunk-07ad84fe":1,"chunk-0b32b031":1,"chunk-0df7e94b":1,"chunk-270abc8a":1,"chunk-2e7d1fe1":1,"chunk-4fcf0e3c":1,"chunk-7d04047c":1,"chunk-8843f8c8":1,"chunk-bcd9a1a8":1,"chunk-e0843f26":1,"chunk-f697359a":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-002a083f":"c219a353","chunk-07ad84fe":"56bc81ef","chunk-0b32b031":"cb662e51","chunk-0df7e94b":"fa42b3bd","chunk-270abc8a":"5857f4e7","chunk-2e7d1fe1":"61192730","chunk-4fcf0e3c":"66f48e4d","chunk-7d04047c":"1c9e4b2c","chunk-8843f8c8":"5f75b961","chunk-bcd9a1a8":"518e3915","chunk-e0843f26":"a184b188","chunk-f697359a":"49260f91"}[e]+".css",u=i.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var f=c[o],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===r||d===u))return n()}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){f=s[o],d=f.getAttribute("data-href");if(d===r||d===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],l.parentNode.removeChild(l),t(c)},l.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(l)}).then(function(){a[e]=0}));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise(function(n,t){r=u[e]=[n,t]});n.push(r[2]=c);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e),f=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,t[1](c)}u[e]=void 0}};var s=setTimeout(function(){f({type:"timeout",target:d})},12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=n,f=f.slice();for(var s=0;s<f.length;s++)n(f[s]);var l=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),a=t("8c4f"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[t("router-view")],1)],1)},c=[],o={name:"App",data:function(){return{}},mounted:function(){},watch:{}},i=o,f=t("2877"),d=Object(f["a"])(i,u,c,!1,null,null,null),s=d.exports,l=[{path:"/",component:function(){return t.e("chunk-e0843f26").then(t.bind(null,"1e4b"))},redirect:"/index",children:[{path:"/index",name:"index",component:function(){return t.e("chunk-270abc8a").then(t.bind(null,"38dd"))},meta:{title:"首页"}},{path:"/limitFree",name:"limitFree",component:function(){return t.e("chunk-07ad84fe").then(t.bind(null,"c3c6"))},meta:{title:"限量免单"}},{path:"/bearBuy",name:"bearBuy",component:function(){return t.e("chunk-07ad84fe").then(t.bind(null,"c3c6"))},meta:{title:"熊抢购"}},{path:"/task",name:"task",component:function(){return t.e("chunk-0b32b031").then(t.bind(null,"d38f"))},meta:{title:"任务中心"}},{path:"/mine",name:"mine",component:function(){return t.e("chunk-002a083f").then(t.bind(null,"d9a7"))},meta:{title:"我的"}}]},{path:"/getSoon",name:"getSoon",component:function(){return t.e("chunk-bcd9a1a8").then(t.bind(null,"4dcd"))},meta:{title:" "}},{path:"/getStart",name:"getStart",component:function(){return t.e("chunk-2e7d1fe1").then(t.bind(null,"15e4"))},meta:{title:" "}},{path:"/purchase",name:"purchase",component:function(){return t.e("chunk-0df7e94b").then(t.bind(null,"dfb8"))},meta:{title:"抢购"}},{path:"/screenShots",name:"screenShots",component:function(){return t.e("chunk-f697359a").then(t.bind(null,"097f"))},meta:{title:""}},{path:"/applyAfter",name:"applyAfter",component:function(){return t.e("chunk-8843f8c8").then(t.bind(null,"126b"))},meta:{title:""}},{path:"/viewAfter",name:"viewAfter",component:function(){return t.e("chunk-4fcf0e3c").then(t.bind(null,"1ae6"))},meta:{title:""}},{path:"/404",component:function(){return t.e("chunk-7d04047c").then(t.bind(null,"8cdb"))}},{path:"*",redirect:"/404",hidden:!0}],h=t("2f62"),p=t("a78e"),m=t.n(p),b={state:{device:"desktop"},mutations:{TOGGLE_SIDEBAR:function(e){e.sidebar.opened?m.a.set("sidebarStatus",1):m.a.set("sidebarStatus",0),e.sidebar.opened=!e.sidebar.opened,e.sidebar.withoutAnimation=!1},CLOSE_SIDEBAR:function(e,n){m.a.set("sidebarStatus",1),e.sidebar.opened=!1,e.sidebar.withoutAnimation=n},TOGGLE_DEVICE:function(e,n){e.device=n}},actions:{ToggleSideBar:function(e){var n=e.commit;n("TOGGLE_SIDEBAR")},CloseSideBar:function(e,n){var t=e.commit,r=n.withoutAnimation;t("CLOSE_SIDEBAR",r)},ToggleDevice:function(e,n){var t=e.commit;t("TOGGLE_DEVICE",n)}}},k=b,v=(t("96cf"),t("3b8d")),g=t("bc3a"),E=t.n(g),S="tdx-Token",w="tdx-Name";function y(){return m.a.get(S)}function _(e){return m.a.set(S,e)}function T(){return m.a.remove(S)}function O(){return localStorage.getItem(w)}function A(e){return localStorage.setItem(w,e)}function x(){return localStorage.removeItem(w)}var j=E.a.create({baseURL:"http://submission.husicong.cn",timeout:1e4});j.interceptors.request.use(function(e){return R.getters.token&&(e.headers.Authorization="".concat(y())),e},function(e){return Promise.reject(e)}),j.interceptors.response.use(function(e){e.data;return e.data},function(e){var n=e.response.data;return 102==n.code&&(T(),location.href="/login"),Promise.reject(e)});var L=j;function N(e){return L({url:"/api/home/customer/login",method:"post",data:e})}var B={state:{token:y(),name:O()},mutations:{SET_TOKEN:function(e,n){e.token=n},SET_NAME:function(e,n){e.name=n}},actions:{Login:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(n,t){var r,a,u,c,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=n.commit,a=t.username.trim(),u=t.password,e.next=5,N({account_name:a,password:u});case 5:if(c=e.sent,!c||200===c.code){e.next=10;break}return e.abrupt("return",!1);case 10:return o=c.data,_(o.token),A(o.account_name),r("SET_TOKEN",o.token),r("SET_NAME",o.account_name),e.abrupt("return",!0);case 16:case"end":return e.stop()}},e)}));function n(n,t){return e.apply(this,arguments)}return n}(),LogOut:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=n.commit,t("SET_TOKEN",""),t("SET_NAME",""),x(),T();case 5:case"end":return e.stop()}},e)}));function n(n){return e.apply(this,arguments)}return n}()}},C=B,P=(t("7f7f"),{sidebar:function(e){return e.app.sidebar},device:function(e){return e.app.device},token:function(e){return e.user.token},name:function(e){return e.user.name}}),I=P;r["default"].use(h["a"]);var D=new h["a"].Store({modules:{app:k,user:C},getters:I}),R=D,G=t("3822"),M=t.n(G),K=t("fe3c"),q=t.n(K),F=(t("499a"),t("b970"));t("157a"),t("8ce9"),t("be35"),t("b20f");q.a.attach(document.body),r["default"].use(a["a"]),r["default"].use(M.a),r["default"].use(F["a"]);var J=new a["a"]({routes:l});J.beforeEach(function(e,n,t){document.title=e.meta.title||" ",window.scrollTo(0,0),t()}),new r["default"]({router:J,store:R,render:function(e){return e(s)}}).$mount("#app")},b20f:function(e,n,t){},be35:function(e,n,t){}});