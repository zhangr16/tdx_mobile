(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f868fde"],{"3cfd":function(e,t,n){e.exports=n.p+"img/kefu1.3ffb1d2c.png"},"3ea0":function(e,t,n){},c2e1:function(e,t,n){e.exports=n.p+"img/kefu2.653594ba.png"},daab:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"kefuInfo"},[r("header",[r("van-icon",{staticClass:"left_arrow",attrs:{name:"arrow-left"},on:{click:function(t){return e.$router.go(-1)}}}),e._v("客服信息\n  ")],1),r("span",[e._v("\n    实名认证已提交，微信扫码找客服“\n    "),"A"==e.$store.state.user.name.prove_group?[e._v("嘟嘟")]:"B"==e.$store.state.user.name.prove_group?[e._v("蹦蹦")]:e._e(),e._v("”，发手机号审核。否则无法领取任务，谢谢！\n  ")],2),"A"==e.$store.state.user.name.prove_group?r("img",{attrs:{src:n("c2e1"),alt:""}}):"B"==e.$store.state.user.name.prove_group?r("img",{attrs:{src:n("3cfd"),alt:""}}):e._e()])},a=[],s=(n("96cf"),n("3b8d")),o=n("365c"),c={name:"msg",components:{},data:function(){return{isloading:!1,msgs:[]}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.isloading=!0,e.next=3,Object(o["d"])({platform:"2c",page_no:1,page_size:100});case 3:t=e.sent,t&&200==t.error.errno&&(this.msgs=t.data),this.isloading=!1;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{}},u=c,i=(n("ff94"),n("2877")),f=Object(i["a"])(u,r,a,!1,null,null,null);t["default"]=f.exports},ff94:function(e,t,n){"use strict";var r=n("3ea0"),a=n.n(r);a.a}}]);