(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3222c38d"],{"40d6":function(t,s,n){"use strict";var a=n("4ad7"),i=n.n(a);i.a},"4ad7":function(t,s,n){},e124:function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"history"},[n("van-image-preview",{attrs:{images:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569576294030&di=9b2fba7ac77d2fe494836ae231386d72&imgtype=0&src=http%3A%2F%2Fpic1.ymatou.com%2FG02%2Fshangou%2FM0B%2FE5%2F1E%2FCgvUBFjCY7-AG8bWAAKTQbIz480662_1_1_n_w_o.jpg"]},model:{value:t.showImg,callback:function(s){t.showImg=s},expression:"showImg"}}),n("header",[n("van-icon",{staticClass:"left_arrow",attrs:{name:"arrow-left"},on:{click:function(s){return t.$router.go(-1)}}}),t._v("协商历史\n  ")],1),n("main",[n("van-cell",{attrs:{title:"是否完结：否"}},[n("span",{staticClass:"slotter",attrs:{slot:"right-icon"},on:{click:function(s){return t.$router.push("/historyRecord?type="+t.$route.query.type)}},slot:"right-icon"},[n("van-icon",{attrs:{name:"todo-list-o"}}),n("span",[t._v("修改记录")])],1)]),n("van-cell",[n("ul",{staticClass:"fans_ul"},[n("li",[n("span",{staticStyle:{color:"#ff5500"}},[t._v("粉丝：15871700567")]),t._v("\n            \n          "),n("span",{staticStyle:{color:"#999"}},[t._v("申请时间：2019-07-07 00:00:00")])]),0==t.$route.query.type?n("li",{staticClass:"flex_li"},[n("span",[t._v("\n            实拍金额：\n            "),n("i",[t._v("¥3")])]),n("span",[t._v("\n            任务金额：\n            "),n("i",[t._v("¥2")])]),n("span",[t._v("\n            差价：\n            "),n("i",[t._v("¥1")])])]):t._e(),n("li",[t._v("售后说明：此商品存在"+t._s(t.historyTitle)+"问题")]),n("li",{staticClass:"img_li"},[n("span",[t._v("凭证截图：")]),n("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569576294030&di=9b2fba7ac77d2fe494836ae231386d72&imgtype=0&src=http%3A%2F%2Fpic1.ymatou.com%2FG02%2Fshangou%2FM0B%2FE5%2F1E%2FCgvUBFjCY7-AG8bWAAKTQbIz480662_1_1_n_w_o.jpg",alt:""},on:{click:function(s){t.showImg=!0}}})])])]),n("van-cell",[n("ul",{staticClass:"sale_ul"},[n("li",[n("span",[t._v("商家：15871700567")]),t._v("\n            \n          "),n("span",{staticStyle:{color:"#999"}},[t._v("处理时间：2019-07-07 00:00:00")])]),0==t.$route.query.type?n("li",{staticClass:"flex_li"},[n("span",[t._v("\n            实拍金额：\n            "),n("i",[t._v("¥3")])]),n("span",[t._v("\n            任务金额：\n            "),n("i",[t._v("¥2")])]),n("span",[t._v("\n            差 价：\n            "),n("i",[t._v("¥1")])])]):t._e(),0!=t.$route.query.type?n("li",[t._v("处理内容："+t._s(t.historyTitle)+"错误")]):t._e(),n("li",[t._v("处理说明：问题已反馈")])])])],1)],1)},i=[],e={name:"history",components:{},data:function(){return{showImg:!1,form:{a:"",b:""}}},mounted:function(){},computed:{historyTitle:function(){var t=this.$route.query.type;return["资金","物流","礼品","其他"][t]}},methods:{enlarge:function(){this.$ImagePreview(["@/assets/404_images/404.png"])}}},o=e,l=(n("40d6"),n("2877")),c=Object(l["a"])(o,a,i,!1,null,null,null);s["default"]=c.exports}}]);