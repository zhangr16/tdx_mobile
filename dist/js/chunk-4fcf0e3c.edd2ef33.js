(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fcf0e3c"],{"1ae6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"viewAfter"},[n("header",[n("van-icon",{staticClass:"left_arrow",attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.go(-1)}}}),t._v("售后类型\n  ")],1),0==t.fan_list.length&&0==t.saler_list.length?n("div",{staticClass:"no_data"},[t._v("\n    暂无售后类型\n  ")]):n("div",[t.fan_list.length>0?n("main",[n("van-cell",[t._v("粉丝发起")]),t._l(t.fan_list,function(e,i){return n("van-cell",{key:i,attrs:{title:t.issueArr[e.sale_type-1],"is-link":""},on:{click:function(n){return t.goToDesc(e.id)}}})})],2):t._e(),t.saler_list.length>0?n("main",{staticStyle:{"margin-top":"10px"}},[n("van-cell",[t._v("商家发起")]),t._l(t.saler_list,function(e,i){return n("van-cell",{key:i,attrs:{title:t.issueArr[e.sale_type-1],"is-link":""},on:{click:function(n){return t.goToDesc(e.id)}}})})],2):t._e()])])},r=[],s=(n("96cf"),n("3b8d")),a=n("365c"),c={name:"viewAfter",components:{},data:function(){return{issueArr:["资金问题","物流问题","礼品问题","其他问题"],form:{a:"",b:""},_id:null,fan_list:[],saler_list:[]}},mounted:function(){this.$route.query.id&&(this._id=this.$route.query.id),this.getData()},methods:{getData:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["h"])({id:this._id});case 2:e=t.sent,e&&200==e.error.errno&&(this.saler_list=e.saleList2b,this.fan_list=e.saleList2c);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goToDesc:function(t){this.$router.push("/viewAfterDesc?id="+t)}}},l=c,o=(n("fccc"),n("2877")),u=Object(o["a"])(l,i,r,!1,null,null,null);e["default"]=u.exports},f9db:function(t,e,n){},fccc:function(t,e,n){"use strict";var i=n("f9db"),r=n.n(i);r.a}}]);