(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fd3496a"],{"126b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"applyAfter"},[n("header",[n("van-icon",{staticClass:"left_arrow",attrs:{name:"arrow-left"},on:{click:function(t){return e.$router.go(-1)}}}),e._v("\n    "+e._s(e.form.sale_type||"申请售后")+"\n  ")],1),n("main",[n("div",{staticClass:"applyAfter_body"},[n("img",{attrs:{src:e.entity.img,alt:""}}),3!=e.entity.order_type?n("ul",[n("li",[e._v(e._s(e.entity.title))]),n("li",{staticClass:"scale_num"},[e._v("订单编号："+e._s(e.entity.order_sn))]),n("li",[n("span",[e._v("\n            原价：\n            "),n("i",[e._v("¥"+e._s(e.entity.price))])])]),n("li",[n("span",[e._v("\n            实拍：\n            "),n("i",[e._v("¥"+e._s(e.entity.reality_price))])]),n("span",[e._v("\n            可获积分：\n            "),n("i",[e._v(e._s(e.entity.get_integral))])])]),n("li",[e._v("账号："+e._s(e.entity.mobile))])]):n("ul",[n("li",[e._v(e._s(e.entity.title))]),n("li",{staticClass:"scale_num"},[e._v("订单编号："+e._s(e.entity.order_sn))]),n("li",[e._v("账号："+e._s(e.entity.mobile))]),n("li",[n("span",[e._v("\n            优惠价：\n            "),n("i",[e._v("¥"+e._s(e.entity.current_price))])]),n("span",[e._v("\n            返利：\n            "),n("i",[e._v("¥"+e._s(e.entity.price-e.entity.reality_price))])])]),n("li",[n("span",[e._v("\n            原价：\n            "),n("i",[e._v("¥"+e._s(e.entity.price))])]),n("span",[e._v("\n            实拍：\n            "),n("i",[e._v("¥"+e._s(e.entity.reality_price))])]),n("span",[e._v("\n            积分：\n            "),n("i",[e._v(e._s(-e.entity.integral))])])])])]),n("van-cell-group",[n("van-field",{attrs:{clearable:"",readonly:"",clickable:"",label:"申请原因",value:e.form.sale_type,placeholder:"请选择"},on:{click:function(){e.isEdit||(e.showPicker=!0)}}}),"资金问题"==e.form.sale_type?n("van-cell",{staticClass:"uploads",attrs:{title:"实拍金额"}},[n("div",{staticClass:"_funds"},[e._v("\n          ¥\n          "),n("van-stepper",{attrs:{step:"0.01","decimal-length":2,min:"0"},model:{value:e.form.reality_price,callback:function(t){e.$set(e.form,"reality_price",t)},expression:"form.reality_price"}}),n("br"),e._v("任务金额: ¥\n          "),n("van-stepper",{attrs:{disabled:"",value:e.entity.price,step:"0.01","decimal-length":2}}),e._v("差价金额: ¥\n          "),n("van-stepper",{attrs:{disabled:"",value:e.form.reality_price-e.entity.price||0,step:"0.01","decimal-length":2,min:"-99999"}})],1)]):e._e(),n("van-field",{attrs:{type:"textarea",rows:"1",autosize:"",label:"售后说明",placeholder:"请填写售后说明"},model:{value:e.form.comment,callback:function(t){e.$set(e.form,"comment",t)},expression:"form.comment"}}),n("van-cell",{staticClass:"uploads",attrs:{title:"售后凭证",label:"（最多3张）"}},[n("van-uploader",{attrs:{"after-read":e.afterRead,"before-delete":e.beforeDel,multiple:"","max-count":3},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1)],1),n("div",{staticClass:"submit_btn",on:{click:e.handleSubmit}},[e._v("提 交")])],1),n("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker,callback:function(t){e.showPicker=t},expression:"showPicker"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:e.columns},on:{cancel:function(t){e.showPicker=!1},confirm:e.onConfirm}})],1)],1)},i=[],s=(n("96cf"),n("3b8d")),a=n("365c"),l={name:"applyAfter",components:{},data:function(){return{showPicker:!1,columns:["资金问题","物流问题","礼品问题","其他"],fileList:[],form:{comment:"",sale_type:null,reality_price:null},_id:null,isEdit:!1,entity:{}}},mounted:function(){this.$route.query.id&&(this._id=this.$route.query.id),this.$route.query.e&&(this.isEdit=!0),this.getData()},methods:{getData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isEdit){e.next=7;break}return e.next=3,Object(a["f"])({action:5,sale_id:this._id});case 3:t=e.sent,t&&200==t.error.errno&&(this.entity=t.saleInfo,this.form={sale_type:this.columns[t.saleInfo.sale_type-1],reality_price:t.saleInfo.reality_price,comment:t.saleInfo.comment},t.saleInfo.apply_img.map(function(e){r.fileList.push({url:e})})),e.next=11;break;case 7:return e.next=9,Object(a["f"])({action:1,id:this._id});case 9:n=e.sent,n&&200==n.error.errno&&(this.entity=n.orderInfo,this.form.reality_price=n.orderInfo.reality_price);case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onConfirm:function(e){this.form.sale_type=e,this.showPicker=!1},afterRead:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,n.append("img",t.file),e.next=4,Object(a["j"])(n);case 4:r=e.sent,r&&200==r.error.errno&&(this.$toast.success("图片上传成功"),t.url=r.url);case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),beforeDel:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({url:t.url});case 2:if(n=e.sent,!n||200!=n.error.errno){e.next=6;break}return this.$toast.success("图片删除成功"),e.abrupt("return",!0);case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleSubmit:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n,r,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.form.sale_type){e.next=2;break}return e.abrupt("return",this.$toast.fail("请选择申请原因"));case 2:return t=[],this.fileList.map(function(e){t.push(e.url)}),n=this.isEdit?{action:6,sale_id:this._id,sale_type:this.columns.indexOf(this.form.sale_type)+1,comment:this.form.comment,apply_img:t}:{action:2,id:this._id,sale_type:this.columns.indexOf(this.form.sale_type)+1,comment:this.form.comment,apply_img:t},1==n.sale_type&&(n.reality_price=this.form.reality_price),e.next=8,Object(a["f"])(n);case 8:r=e.sent,r&&200==r.error.errno&&(this.$toast.success(r.error.usermsg),setTimeout(function(){i.$router.push("/task")},500));case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},o=l,c=(n("5b15"),n("2877")),u=Object(c["a"])(o,r,i,!1,null,null,null);t["default"]=u.exports},"5b15":function(e,t,n){"use strict";var r=n("ee77"),i=n.n(r);i.a},ee77:function(e,t,n){}}]);