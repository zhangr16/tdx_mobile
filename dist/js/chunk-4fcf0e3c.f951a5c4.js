(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fcf0e3c"],{"1ae6":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"viewAfter"},[e("header",[e("van-icon",{staticClass:"left_arrow",attrs:{name:"arrow-left"},on:{click:function(n){return t.$router.go(-1)}}}),t._v("售后类型\n  ")],1),e("main",[e("van-cell",[t._v("粉丝发起")]),e("van-cell",{attrs:{title:"资金问题","is-link":""},on:{click:function(n){return t.goToDesc(0)}}}),e("van-cell",{attrs:{title:"物流问题","is-link":""},on:{click:function(n){return t.goToDesc(1)}}}),e("van-cell",{attrs:{title:"礼品问题","is-link":""},on:{click:function(n){return t.goToDesc(2)}}}),e("van-cell",{attrs:{title:"其他","is-link":""},on:{click:function(n){return t.goToDesc(3)}}})],1),e("main",{staticStyle:{"margin-top":"10px"}},[e("van-cell",[t._v("商家发起")]),e("van-cell",{attrs:{title:"资金问题","is-link":""},on:{click:function(n){return t.goToDesc(0)}}})],1)])},c=[],o={name:"viewAfter",components:{},data:function(){return{isLimitFree:!0,form:{a:"",b:""}}},mounted:function(){this.isLimitFree=0==this.$route.query.isActive},methods:{goToDesc:function(t){this.$router.push("/viewAfterDesc?isActive="+this.$route.query.isActive+"&type="+t)}}},r=o,s=(e("fccc"),e("2877")),l=Object(s["a"])(r,i,c,!1,null,null,null);n["default"]=l.exports},f9db:function(t,n,e){},fccc:function(t,n,e){"use strict";var i=e("f9db"),c=e.n(i);c.a}}]);