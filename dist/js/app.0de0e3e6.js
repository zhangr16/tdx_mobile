(function(e){function t(t){for(var r,a,c=t[0],i=t[1],d=t[2],f=0,s=[];f<c.length;f++)a=c[f],u[a]&&s.push(u[a][0]),u[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(s.length)s.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==u[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},u={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-002a083f":"28c99d07","chunk-07ad84fe":"802bb443","chunk-0df7e94b":"e7717752","chunk-45097260":"bcadfc3b","chunk-492dcfee":"b24c51bd","chunk-5ed324fe":"8e9e4e6e","chunk-7d04047c":"53b3f5a6","chunk-7d54342e":"7967e1d1","chunk-e0843f26":"104c7558"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-002a083f":1,"chunk-07ad84fe":1,"chunk-0df7e94b":1,"chunk-45097260":1,"chunk-492dcfee":1,"chunk-5ed324fe":1,"chunk-7d04047c":1,"chunk-7d54342e":1,"chunk-e0843f26":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-002a083f":"c219a353","chunk-07ad84fe":"56bc81ef","chunk-0df7e94b":"33f90a20","chunk-45097260":"3aaa3936","chunk-492dcfee":"577c1ab9","chunk-5ed324fe":"122cec2a","chunk-7d04047c":"1c9e4b2c","chunk-7d54342e":"0e433876","chunk-e0843f26":"d04271c2"}[e]+".css",u=i.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var d=o[c],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===r||f===u))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){d=s[c],f=d.getAttribute("data-href");if(f===r||f===u)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],l.parentNode.removeChild(l),n(o)},l.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(l)}).then(function(){a[e]=0}));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=u[e]=[t,n]});t.push(r[2]=o);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e),d=function(t){f.onerror=f.onload=null,clearTimeout(s);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}u[e]=void 0}};var s=setTimeout(function(){d({type:"timeout",target:f})},12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var l=f;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("8c4f"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("router-view")],1)],1)},o=[],c={name:"App",data:function(){return{}},mounted:function(){},watch:{}},i=c,d=n("2877"),f=Object(d["a"])(i,u,o,!1,null,null,null),s=f.exports,l=[{path:"/",component:function(){return n.e("chunk-e0843f26").then(n.bind(null,"1e4b"))},redirect:"/index",children:[{path:"/index",name:"index",component:function(){return n.e("chunk-5ed324fe").then(n.bind(null,"38dd"))},meta:{title:"首页"}},{path:"/limitFree",name:"limitFree",component:function(){return n.e("chunk-07ad84fe").then(n.bind(null,"c3c6"))},meta:{title:"限量免单"}},{path:"/bearBuy",name:"bearBuy",component:function(){return n.e("chunk-07ad84fe").then(n.bind(null,"c3c6"))},meta:{title:"熊抢购"}},{path:"/taskCenter",name:"taskCenter",component:function(){return n.e("chunk-7d54342e").then(n.bind(null,"8405"))},meta:{title:"任务中心"}},{path:"/mine",name:"mine",component:function(){return n.e("chunk-002a083f").then(n.bind(null,"d9a7"))},meta:{title:"我的"}}]},{path:"/getSoon",name:"getSoon",component:function(){return n.e("chunk-492dcfee").then(n.bind(null,"4dcd"))},meta:{title:""}},{path:"/getStart",name:"getStart",component:function(){return n.e("chunk-45097260").then(n.bind(null,"15e4"))},meta:{title:""}},{path:"/purchase",name:"purchase",component:function(){return n.e("chunk-0df7e94b").then(n.bind(null,"dfb8"))},meta:{title:"抢购"}},{path:"/404",component:function(){return n.e("chunk-7d04047c").then(n.bind(null,"8cdb"))}},{path:"*",redirect:"/404",hidden:!0}],h=n("2f62"),p=n("a78e"),m=n.n(p),b={state:{device:"desktop"},mutations:{TOGGLE_SIDEBAR:function(e){e.sidebar.opened?m.a.set("sidebarStatus",1):m.a.set("sidebarStatus",0),e.sidebar.opened=!e.sidebar.opened,e.sidebar.withoutAnimation=!1},CLOSE_SIDEBAR:function(e,t){m.a.set("sidebarStatus",1),e.sidebar.opened=!1,e.sidebar.withoutAnimation=t},TOGGLE_DEVICE:function(e,t){e.device=t}},actions:{ToggleSideBar:function(e){var t=e.commit;t("TOGGLE_SIDEBAR")},CloseSideBar:function(e,t){var n=e.commit,r=t.withoutAnimation;n("CLOSE_SIDEBAR",r)},ToggleDevice:function(e,t){var n=e.commit;n("TOGGLE_DEVICE",t)}}},k=b,v=(n("96cf"),n("3b8d")),g=n("bc3a"),E=n.n(g),S="tdx-Token",w="tdx-Name";function y(){return m.a.get(S)}function _(e){return m.a.set(S,e)}function T(){return m.a.remove(S)}function O(){return localStorage.getItem(w)}function A(e){return localStorage.setItem(w,e)}function x(){return localStorage.removeItem(w)}var j=E.a.create({baseURL:"http://submission.husicong.cn",timeout:1e4});j.interceptors.request.use(function(e){return R.getters.token&&(e.headers.Authorization="".concat(y())),e},function(e){return Promise.reject(e)}),j.interceptors.response.use(function(e){e.data;return e.data},function(e){var t=e.response.data;return 102==t.code&&(T(),location.href="/login"),Promise.reject(e)});var C=j;function L(e){return C({url:"/api/home/customer/login",method:"post",data:e})}var N={state:{token:y(),name:O()},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_NAME:function(e,t){e.name=t}},actions:{Login:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,u,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.username.trim(),u=n.password,e.next=5,L({account_name:a,password:u});case 5:if(o=e.sent,!o||200===o.code){e.next=10;break}return e.abrupt("return",!1);case 10:return c=o.data,_(c.token),A(c.account_name),r("SET_TOKEN",c.token),r("SET_NAME",c.account_name),e.abrupt("return",!0);case 16:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),LogOut:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,n("SET_TOKEN",""),n("SET_NAME",""),x(),T();case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}},B=N,P=(n("7f7f"),{sidebar:function(e){return e.app.sidebar},device:function(e){return e.app.device},token:function(e){return e.user.token},name:function(e){return e.user.name}}),I=P;r["default"].use(h["a"]);var D=new h["a"].Store({modules:{app:k,user:B},getters:I}),R=D,G=n("3822"),M=n.n(G),K=n("fe3c"),q=n.n(K),F=(n("499a"),n("b970"));n("157a"),n("8ce9"),n("be35"),n("b20f");q.a.attach(document.body),r["default"].use(a["a"]),r["default"].use(M.a),r["default"].use(F["a"]);var J=new a["a"]({routes:l});J.beforeEach(function(e,t,n){e.meta.title&&(document.title=e.meta.title),window.scrollTo(0,0),n()}),new r["default"]({router:J,store:R,render:function(e){return e(s)}}).$mount("#app")},b20f:function(e,t,n){},be35:function(e,t,n){}});