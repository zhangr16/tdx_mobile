(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ca90160"],{"126b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"applyAfter"},[i("header",[i("van-icon",{staticClass:"left_arrow",attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.go(-1)}}}),t._v("\n    "+t._s(t.form.b||"申请售后")+"\n  ")],1),i("main",[i("div",{staticClass:"applyAfter_body"},[i("img",{attrs:{src:n("a36b"),alt:""}}),t.isLimitFree?i("ul",[i("li",[t._v("小个子连衣裙夏季收腰显瘦...")]),i("li",{staticClass:"scale_num"},[t._v("订单编号：1234567891111111")]),t._m(0),t._m(1),i("li",[t._v("账号：123456665856+66")])]):i("ul",[i("li",[t._v("小个子连衣裙夏季收腰显瘦...")]),i("li",{staticClass:"scale_num"},[t._v("订单编号：1234567891111111")]),i("li",[t._v("账号：123456665856+66")]),t._m(2),t._m(3)])]),i("van-cell-group",[i("van-field",{attrs:{clearable:"",readonly:"",clickable:"",label:"申请原因",value:t.form.b,placeholder:"请选择"},on:{click:function(e){t.showPicker=!0}}}),"资金问题"==t.form.b?i("van-cell",{staticClass:"uploads",attrs:{title:"实拍金额"}},[i("div",{staticStyle:{color:"#333"}},[t._v("\n          任务金额:¥2.00  差价金额金额:¥1.00\n        ")])]):t._e(),i("van-field",{attrs:{clearable:"",type:"textarea",rows:"1",autosize:"",label:"售后说明",placeholder:"请填写售后说明"},model:{value:t.form.a,callback:function(e){t.$set(t.form,"a",e)},expression:"form.a"}}),i("van-cell",{staticClass:"uploads",attrs:{title:"售后凭证",label:"（最多3张）"}},[i("van-uploader",{attrs:{multiple:"","max-count":3},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1)],1),i("div",{staticClass:"submit_btn"},[t._v("提 交")])],1),i("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[i("van-picker",{attrs:{"show-toolbar":"",columns:t.columns},on:{cancel:function(e){t.showPicker=!1},confirm:t.onConfirm}})],1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("\n          原价：\n          "),n("i",[t._v("¥19.9")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("\n          实拍：\n          "),n("i",[t._v("¥19.9")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("span",[t._v("\n            优惠价：\n            "),n("i",[t._v("¥18.5")])]),n("span",[t._v("\n            返利：\n            "),n("i",[t._v("¥1.4")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("span",[t._v("\n            原   价：\n            "),n("i",[t._v("¥19.9")])]),n("span",[t._v("\n            实拍：\n            "),n("i",[t._v("¥19.9")])])])}],l={name:"applyAfter",components:{},data:function(){return{showPicker:!1,columns:["资金问题","物流问题","礼品问题","其他"],fileList:[],form:{a:"",b:""},isLimitFree:!0}},mounted:function(){this.isLimitFree=0==this.$route.query.isActive,this.$route.query.type&&(this.form.b=this.columns[this.$route.query.type])},methods:{onConfirm:function(t){this.form.b=t,this.showPicker=!1}}},s=l,r=(n("5b15"),n("2877")),o=Object(r["a"])(s,i,a,!1,null,null,null);e["default"]=o.exports},"5b15":function(t,e,n){"use strict";var i=n("ee77"),a=n.n(i);a.a},a36b:function(t,e,n){t.exports=n.p+"img/404.a57b6f31.png"},ee77:function(t,e,n){}}]);