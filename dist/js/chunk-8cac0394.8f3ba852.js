(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8cac0394"],{"407b":function(t,n,e){},a372:function(t,n,e){"use strict";var i=e("407b"),s=e.n(i);s.a},dfb8:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"purchase"},[e("i",{staticClass:"backBtn",on:{"&click":function(n){return t.$router.go(-1)}}},[e("van-icon",{staticClass:"left_arrow",attrs:{name:"arrow-left"}})],1),e("van-swipe",{ref:"swiper",staticClass:"img_banner",attrs:{"initial-swipe":0,autoplay:3e3}},[e("van-swipe-item",[e("van-image",{attrs:{src:t.entity.img},scopedSlots:t._u([{key:"loading",fn:function(){return[e("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}])})],1)],1),e("section",{staticClass:"purchase_info"},[e("div",{staticClass:"_top"},[e("div",{staticClass:"title"},[t._v(t._s(t.entity.title))])]),e("div",{staticClass:"_mid"},[e("div",{staticClass:"num"},[e("span",[t._v("任务金额:")]),t._v("\n         "+t._s(t.entity.price)+"元   \n        "),e("span",[t._v("返还金额:")]),t._v("\n         "+t._s(t.entity.price-t.entity.current_price)+"元\n      ")]),e("div",{staticClass:"num"},[e("span",[t._v("商品价值:")]),t._v("\n         "+t._s(t.entity.price)+"元   \n        "),e("span",[t._v("剩余份数:")]),t._v("\n         "+t._s(t.entity.remain_count)+"/"+t._s(t.entity.task_count)+"份\n      ")]),e("div",{staticClass:"time"},[e("span",[t._v("截止日期："+t._s(t.entity.end_time))])])]),e("div",{staticClass:"_bottom"},[t._v("商家已存入保证金99元平台担保返款")])]),t._m(0),t._m(1),t._m(2),e("footer",[e("div",{staticClass:"_s",on:{click:function(n){return t.$router.push("/index")}}},[e("span",{staticClass:"iconfont iconshouye-mashangqiangdangeshangpin"}),t._v(" 首页\n    ")]),e("div",{staticClass:"_s",on:{click:function(n){t.showService=!0}}},[e("span",{staticClass:"iconfont iconkefu"}),t._v(" 客服\n    ")]),e("div",{staticClass:"_l",on:{click:function(n){t.showConfirm=!0}}},[t._v("立即领取")])]),e("van-dialog",{attrs:{title:"商品信息",closeOnClickOverlay:!0},on:{confirm:function(n){return t.handleConfirm()}},model:{value:t.showConfirm,callback:function(n){t.showConfirm=n},expression:"showConfirm"}},[e("van-cell",{attrs:{title:"商品名称",value:t.entity.title}}),e("van-cell",{attrs:{title:"商品价格",value:"¥"+t.entity.price}}),e("ul",[e("li",[t._v("注：1.领取任务后，2小时有效，超过2小时，任务自动退回，请在自动时间内完成任务！")]),e("li",[t._v("2.每天00:00平台停止抢单，00:00没有提交任务的订单将会自动退单，请及时完成任务")])])],1),e("van-dialog",{attrs:{title:"客服信息",closeOnClickOverlay:!0},model:{value:t.showService,callback:function(n){t.showService=n},expression:"showService"}},[e("ul",[e("li",{staticStyle:{"font-size":"14px"}},[t._v("注：如有疑问，请及时联系淘大熊客服（晴天或熊大）")])])])],1)},s=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"purchase_flow"},[e("header",[e("span",{staticClass:"iconfont iconrenwuliucheng"}),t._v(" 任务流程\n    ")]),e("ul",[e("li",[t._v("1、点击“立即领取”,获取免单资格")]),e("li",[t._v('2、点击"开始任务",按照任务提示，以￥99.00元价格去指定平台')]),e("li",[t._v("3、复制宝贝链接，点击验证通过之后，填写订单号，并提交任务")]),e("li",[t._v("4、卖家发货→收到快递后到淘宝确认收货→给予五星好评并上传好评截图到平台→等待卖家确认")]),e("li",[t._v("5、卖家确认无误后，平台返款￥10.00元到您的账户中供您提现")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"purchase_note"},[e("header",[e("span",{staticClass:"iconfont iconzhuyi"}),t._v(" 注意事项\n    ")]),e("ul",[e("li",[t._v("\n        1、与商家旺旺聊天时禁止提及\n        "),e("i",[t._v("“淘大熊、试客、试单、刷单”")]),t._v("等信息，否则取消平台任务合作机会!\n      ")]),e("li",[t._v("\n        2、禁止使用\n        "),e("i",[t._v("信用卡、花呗、淘金币、优惠券、红包、天猫积分")]),t._v("等淘宝商家使用的官方优惠渠道\n      ")]),e("li",[t._v("\n        3、禁止通过\n        "),e("i",[t._v("淘客网、返利网、-淘")]),t._v("等返现返利链接下单!\n      ")])]),e("div",{staticClass:"scale"},[e("span",[t._v("* 以上由于买家违规下单所产生的费用，由买家承担。淘大熊有权冻结其帐号,限制提现操作，IP列入黑名单。")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"purchase_tip",staticStyle:{"margin-bottom":"0"}},[e("header",[e("span",{staticClass:"iconfont iconwenxintishi"}),t._v(" 温馨提示\n    ")]),e("ul",[e("li",[t._v("1、用户获取免单资格后，请根据时间提示及时下单并提交订单号")]),e("li",[t._v("2、若因未按时提交任务信息而被系统取消任务资格，平台概不负责！")])])])}],a=(e("96cf"),e("3b8d")),r=e("365c"),c={name:"purchase",data:function(){return{showService:!1,showConfirm:!1,entity:{}}},mounted:function(){this.getData()},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["t"])({t_id:this.$route.query.t_id});case 2:n=t.sent,n&&200==n.error.errno&&(this.entity=n.data);case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),handleConfirm:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["u"])({t_id:this.$route.query.t_id,is_family:"true"==this.$route.query.isFamily?1:null});case 2:n=t.sent,n&&200==n.error.errno&&(this.$toast.success("领取成功！"),this.$router.push("/getStart?o_id="+n.order_id));case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}},o=c,l=(e("e176"),e("a372"),e("2877")),u=Object(l["a"])(o,i,s,!1,null,null,null);n["default"]=u.exports},e176:function(t,n,e){"use strict";var i=e("f3c7"),s=e.n(i);s.a},f3c7:function(t,n,e){}}]);