(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fd3496a"],{"126b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"applyAfter"},[r("header",[r("van-icon",{staticClass:"left_arrow",attrs:{name:"arrow-left"},on:{click:function(t){return e.$router.go(-1)}}}),e._v("\n    "+e._s(e.form.sale_type||"申请售后")+"\n  ")],1),r("main",[e.isloading?r("van-skeleton",{attrs:{title:"",avatar:"",row:5}}):r("div",{staticClass:"wrapper"},[r("div",{staticClass:"applyAfter_body"},[r("img",{attrs:{src:e.entity.img,alt:""}}),"free"==e.entity.module_type?r("ul",[r("li",[e._v(e._s(e.entity.title))]),r("li",{staticClass:"scale_num"},[e._v("订单编号："+e._s(e.entity.order_sn))]),r("li",[r("span",[e._v("\n              原价：\n              "),r("i",[e._v("¥"+e._s(e.entity.price))])])]),r("li",[r("span",[e._v("\n              实拍：\n              "),r("i",[e._v("¥"+e._s(e.entity.reality_price))])])]),r("li",[r("span",[e._v("\n              奖励积分：\n              "),r("i",[e._v(e._s(e.entity.get_integral))])])])]):r("ul",[r("li",[e._v(e._s(e.entity.title))]),r("li",{staticClass:"scale_num"},[e._v("订单编号："+e._s(e.entity.order_sn))]),e.entity.integral?r("li",[e._v("抵扣积分："),r("i",[e._v(e._s(e.entity.integral))])]):e._e(),r("li",[r("span",[e._v("\n              优惠价：\n              "),r("i",[e._v("¥"+e._s(e.entity.current_price))])]),r("span",[e._v("\n              返利：\n              "),r("i",[e._v("¥"+e._s(e.entity.price-e.entity.reality_price))])])]),r("li",[r("span",[e._v("\n              原价：\n              "),r("i",[e._v("¥"+e._s(e.entity.price))])]),r("span",[e._v("\n              实拍：\n              "),r("i",[e._v("¥"+e._s(e.entity.reality_price))])])])])]),r("van-cell-group",[r("van-field",{attrs:{clearable:"",readonly:"",clickable:"",label:"申请原因",value:e.form.sale_type,placeholder:"请选择"},on:{click:function(){e.isEdit||(e.showPicker=!0)}}}),"资金问题"==e.form.sale_type?r("van-cell",{staticClass:"uploads",attrs:{title:"实拍金额"}},[r("div",{staticClass:"_funds"},[e._v("\n            ¥\n            "),r("van-stepper",{staticClass:"edit_stepper",attrs:{step:"0.01","decimal-length":2,min:"0"},model:{value:e.form.reality_price,callback:function(t){e.$set(e.form,"reality_price",t)},expression:"form.reality_price"}}),r("br"),e._v("\n            任务金额: ¥ "+e._s(e.entity.price)+"\n            "),r("br"),e._v("\n            差价金额: ¥ "+e._s(e.form.reality_price-e.entity.price||0)+"\n          ")],1)]):e._e(),r("van-field",{attrs:{type:"textarea",rows:"1",autosize:"",label:"售后说明",placeholder:"请填写售后说明"},model:{value:e.form.comment,callback:function(t){e.$set(e.form,"comment",t)},expression:"form.comment"}}),r("van-cell",{staticClass:"uploads",attrs:{title:"售后凭证",label:"（最多3张）"}},[r("van-uploader",{attrs:{"after-read":e.afterRead,"before-delete":e.beforeDel,multiple:"","max-count":3},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1)],1),r("div",{staticClass:"submit_btn",on:{click:e.handleSubmit}},[e._v("提 交")])],1)],1),r("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker,callback:function(t){e.showPicker=t},expression:"showPicker"}},[r("van-picker",{attrs:{"show-toolbar":"",columns:e.columns},on:{cancel:function(t){e.showPicker=!1},confirm:e.onConfirm}})],1)],1)},i=[],a=(r("96cf"),r("3b8d")),s=r("365c"),o={name:"applyAfter",components:{},data:function(){return{showPicker:!1,isloading:!1,columns:["资金问题","物流问题","礼品问题","其他"],fileList:[],form:{comment:"",sale_type:null,reality_price:null},_id:null,isEdit:!1,entity:{}}},mounted:function(){this.$route.query.id&&(this._id=this.$route.query.id),this.$route.query.e&&(this.isEdit=!0),this.getData()},methods:{getData:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.isloading=!0,!this.isEdit){e.next=8;break}return e.next=4,Object(s["o"])({action:5,sale_id:this._id});case 4:t=e.sent,t&&200==t.error.errno&&(this.entity=t.saleInfo,this.form={sale_type:this.columns[t.saleInfo.sale_type-1],reality_price:t.saleInfo.reality_price,comment:t.saleInfo.comment},t.saleInfo.apply_img&&t.saleInfo.apply_img.map(function(e){n.fileList.push({url:e})})),e.next=12;break;case 8:return e.next=10,Object(s["o"])({action:1,id:this._id});case 10:r=e.sent,r&&200==r.error.errno&&(this.entity=r.orderInfo,this.form.reality_price=r.orderInfo.reality_price);case 12:this.isloading=!1;case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onConfirm:function(e){this.form.sale_type=e,this.showPicker=!1},afterRead:function(e){var t=this;e.length?e.map(function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.uploadAjax(r);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()):this.uploadAjax(e)},uploadAjax:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=new FormData,r.append("img",t.file),e.next=4,Object(s["v"])(r);case 4:n=e.sent,n&&200==n.error.errno&&(this.$toast.success("图片上传成功"),t.url=n.url);case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),beforeDel:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["c"])({url:t.url});case 2:if(r=e.sent,!r||200!=r.error.errno){e.next=6;break}return this.$toast.success("图片删除成功"),e.abrupt("return",!0);case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleSubmit:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r,n,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.form.sale_type){e.next=2;break}return e.abrupt("return",this.$toast.fail("请选择申请原因"));case 2:if("资金问题"!=this.form.sale_type||this.form.reality_price!=this.entity.price){e.next=4;break}return e.abrupt("return",this.$toast.fail("实拍价不能等于任务金额"));case 4:if(t=[],this.fileList.map(function(e){t.push(e.url)}),!(t.length<=0)){e.next=8;break}return e.abrupt("return",this.$toast.fail("请上传售后凭证"));case 8:return r=this.isEdit?{action:6,sale_id:this._id,sale_type:this.columns.indexOf(this.form.sale_type)+1,comment:this.form.comment,apply_img:t}:{action:2,id:this._id,sale_type:this.columns.indexOf(this.form.sale_type)+1,comment:this.form.comment,apply_img:t},1==r.sale_type&&(r.reality_price=this.form.reality_price),e.next=12,Object(s["o"])(r);case 12:n=e.sent,n&&200==n.error.errno&&(this.$toast.success(n.error.usermsg),setTimeout(function(){i.$router.push("/task")},500));case 14:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},l=o,c=(r("5b15"),r("2877")),u=Object(c["a"])(l,n,i,!1,null,null,null);t["default"]=u.exports},"5b15":function(e,t,r){"use strict";var n=r("ee77"),i=r.n(n);i.a},ee77:function(e,t,r){}}]);