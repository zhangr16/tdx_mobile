(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26d77364"],{"0454":function(t,e,i){},"43a2":function(t,e,i){},6914:function(t,e,i){},ae1f:function(t,e,i){"use strict";var a=i("0454"),n=i.n(a);n.a},bbd3:function(t,e,i){t.exports=i.p+"img/img_renwuzhongxin@2x.f78cf79b.png"},d38f:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task"},[a("nut-calendar",{attrs:{"is-visible":t.isVisible,"default-value":t.myDate,type:"range","start-date":null,"end-date":null,animation:"nutSlideUp"},on:{close:function(e){t.isVisible=!1},choose:t.setChooseValue}}),a("header",[t._v("\n    任务中心\n    "),a("span",{staticClass:"iconfont iconrili right_date",on:{click:function(e){t.isVisible=!0}}})]),a("main",[a("van-tabs",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("van-tab",{attrs:{title:"全部"}}),a("van-tab",{attrs:{title:"已领取"}}),a("van-tab",{attrs:{title:"已提交"}}),a("van-tab",{attrs:{title:"待审核"}}),a("van-tab",{attrs:{title:"已完成"}}),a("van-tab",{attrs:{title:"售后"}})],1),a("div",{staticClass:"strategy"},[a("i"),a("span",{on:{click:function(e){return t.$router.push("/xsgl")}}},[t._v("新手攻略")]),a("span",{staticStyle:{"border-right":"none","border-left":"none"},on:{click:function(e){return t.$router.push("/dzpjgl")}}},[t._v("定制评价攻略")]),a("span",{on:{click:function(e){return t.$router.push("/shgl")}}},[t._v("售后攻略")]),a("i")]),a("section",[t.taskList.length>0?a("ul",{staticClass:"ul_items"},[t._l(t.taskList,function(e,i){return a("li",{key:i},[a("itemTask",{attrs:{entity:e},on:{update:t.getData}})],1)}),t.isfinished?a("div",{staticClass:"no_more"},[t._v("没有更多数据了")]):t._e()],2):t.isloading?t._e():a("div",{staticClass:"empty"},[a("img",{attrs:{src:i("bbd3"),alt:""}})]),t.isloading?a("div",{staticClass:"no_data"},[a("van-loading",{attrs:{type:"spinner"}})],1):t._e()])],1)],1)},n=[],s=(i("96cf"),i("3b8d")),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item_task"},[i("van-dialog",{attrs:{title:"商品信息",closeOnClickOverlay:!0},model:{value:t.showImg,callback:function(e){t.showImg=e},expression:"showImg"}},[i("img",{staticStyle:{width:"100%"},attrs:{src:t.entity.img,alt:""}})]),i("van-dialog",{attrs:{title:"商家备注",closeOnClickOverlay:!0},model:{value:t.showRemark,callback:function(e){t.showRemark=e},expression:"showRemark"}},[i("van-field",{attrs:{value:t.remarkEntity.mc_comment,label:"备注",type:"textarea",autosize:"",disabled:""}})],1),i("van-dialog",{staticClass:"uploads",attrs:{title:"定制评价",width:"95%",closeOnClickOverlay:!0},model:{value:t.showEvaluate,callback:function(e){t.showEvaluate=e},expression:"showEvaluate"}},[i("van-cell",{attrs:{title:"评价说明",value:t.evaluateEntity.m_eva_explain}}),i("van-cell",{attrs:{title:"好评截图",label:"(长按保存图片)"}},t._l(t.evaluateEntity.imgs,function(t,e){return i("img",{key:e,attrs:{src:t,alt:""}})}),0)],1),i("div",{staticClass:"item_task_head"},[i("span",[t._v("商家旺旺号："+t._s(t.entity.shop_ww||""))]),i("span",[t._v("任务状态："+t._s(t.status_arr[t.entity.status-1]))])]),i("div",{staticClass:"item_task_body"},[i("img",{attrs:{src:t.entity.sipping_url,alt:""}}),"free"==t.entity.module_type?i("ul",[i("li",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.entity.title))]),i("li",{staticClass:"scale_num"},[t._v("订单编号："+t._s(t.entity.order_sn))]),i("li",[t._v("\n        原价：\n        "),i("i",[t._v("¥"+t._s(t.entity.price))])]),i("li",[t._v("\n        实拍：\n        "),i("i",[t._v("¥"+t._s(t.entity.reality_price))])]),t.entity.get_integral?i("li",[t._v("奖励积分："+t._s(t.entity.get_integral))]):t._e()]):i("ul",[i("li",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.entity.title))]),i("li",{staticClass:"scale_num"},[t._v("订单编号："+t._s(t.entity.order_sn))]),t.entity.integral?i("li",[t._v("抵扣积分："+t._s(t.entity.integral))]):t._e(),i("li",[i("span",[t._v("\n          优惠价：\n          "),i("i",[t._v("¥"+t._s(t.entity.current_price))])]),i("span",[t._v("\n          返利：\n          "),i("i",[t._v("¥"+t._s(t.entity.price-t.entity.current_price))])])]),i("li",[i("span",[t._v("\n          原   价：\n          "),i("i",[t._v("¥"+t._s(t.entity.price))])]),i("span",[t._v("\n          实拍：\n          "),i("i",[t._v("¥"+t._s(t.entity.reality_price))])])])])]),i("div",{staticClass:"item_task_foot"},[i("div",{staticClass:"four_btns"},[i("span",{staticStyle:{background:"#409eff"},on:{click:function(e){t.showImg=!0}}},[t._v("商品信息")]),t.entity.status>=2?i("span",{staticStyle:{background:"#51c757"},on:{click:function(e){return t.$router.push("/applyAfter?id="+t.entity.id)}}},[t._v("申请售后")]):t._e(),t.entity.status>=2&&t.entity.is_sale>0?i("span",{staticStyle:{background:"#fa3950"},on:{click:function(e){return t.$router.push("/viewAfter?id="+t.entity.id)}}},[t._v("查看售后")]):t._e(),2==t.entity.status?i("span",{staticStyle:{background:"#5784ff"},on:{click:function(e){return t.$router.push("/screenShots?id="+t.entity.id+"&e=1")}}},[t._v("上传好评截图")]):t._e(),3==t.entity.status?i("span",{staticStyle:{background:"#5784ff"},on:{click:function(e){return t.$router.push("/screenShots?id="+t.entity.id+"&e=2")}}},[t._v("修改好评截图")]):t._e(),4==t.entity.status||3==t.entity.status?i("span",{staticStyle:{background:"#ff6137"},on:{click:function(e){return t.$router.push("/screenShots?id="+t.entity.id)}}},[t._v("查看好评截图")]):t._e(),i("span",{staticStyle:{background:"#ccc"},on:{click:t.viewRemarks}},[t._v("查看商家备注")])]),i("div",{staticClass:"times"},[i("span",[t._v("申请时间: "+t._s(t.entity.create_time))]),t.entity.finish_time?i("span",[t._v("完成时间: "+t._s(t.entity.finish_time))]):t._e()]),3==t.entity.status&&t.entity.audit_time?i("div",{staticClass:"times"},[i("span",[t._v("最后审核时间: "+t._s(t.entity.audit_time))])]):t._e(),i("div",{staticClass:"two_btns"},[1==t.entity.status?i("span",[i("i",{staticClass:"red",on:{click:function(e){return t.$router.push("/getStart?o_id="+t.entity.id)}}},[t._v("开始任务")])]):t._e(),1==t.entity.status?i("span",[i("i",{staticClass:"gray",on:{click:t.chargeBack}},[t._v("我要退单")])]):t._e()]),0!=t.entity.make_status?i("div",{staticClass:"two_btns"},[i("span",[i("i",{staticClass:"red",on:{click:t.viewEvaluation}},[t._v("查看定制评价")])])]):t._e()])],1)},c=[],o=i("365c"),l={name:"item_task",props:{entity:{type:Object,default:{}}},data:function(){return{showRemark:!1,showImg:!1,showEvaluate:!1,evaluateEntity:{},remarkEntity:{},status_arr:["已领取","已提交","待审核","已完成","售后"]}},computed:{},methods:{ssss:function(){alert(222)},viewEvaluation:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["l"])({id:this.entity.id,type:4});case 2:e=t.sent,e&&200==e.error.errno&&(this.evaluateEntity={m_eva_explain:e.m_eva_explain,imgs:e.img},this.showEvaluate=!0);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),viewRemarks:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["l"])({id:this.entity.id,type:5});case 2:e=t.sent,e&&200==e.error.errno&&(this.remarkEntity.mc_comment=e.mc_comment,this.showRemark=!0);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),chargeBack:function(){var t=this;this.$dialog.confirm({message:"确认退单吗?"}).then(Object(s["a"])(regeneratorRuntime.mark(function e(){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["l"])({id:t.entity.id,type:6});case 2:i=e.sent,i&&200==i.error.errno&&(t.$toast.success(i.error.usermsg),t.$emit("update"));case 4:case"end":return e.stop()}},e)})))}}},u=l,_=(i("fcba"),i("2877")),v=Object(_["a"])(u,r,c,!1,null,null,null),d=v.exports,h={name:"task",components:{itemTask:d},data:function(){return{isloading:!1,isfinished:!1,isVisible:!1,myDate:null,isActive:this.$store.state.task.isActive||"1",activeTab:this.$store.state.task.activeTab,total_count:0,formData:{task_start:"",task_end:"",page_num:20,page:1,order_type:this.$store.state.task.isActive||"1",status:this.$store.state.task.activeTab},taskList:[]}},watch:{activeTab:function(t){this.$store.dispatch("setTemp",{isActive:this.isActive,activeTab:t}),this.formData.status=t,this.getData()}},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("scroll",t.handleScroll)}),this.getData()},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{setChooseValue:function(t){this.formData.task_start=t[0][3],this.formData.task_end=t[1][3],this.getData()},getData:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isloading=!0,t.next=3,Object(o["m"])(this.formData);case 3:e=t.sent,e&&200==e.error.errno&&(this.taskList=e.orderList||[],this.total_count=e.count),this.isloading=!1;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),handleTabClick:function(t){t!=this.isActive&&(this.isActive=t,this.formData.page_num=20,this.getData())},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,e=document.querySelector(".task").clientHeight,i=window.innerHeight;t+i>=e&&!this.isloading&&(this.total_count>this.formData.page_num?(this.formData.page_num+=20,this.getData()):this.isfinished=!0)}}},m=h,p=(i("ae1f"),i("dab7"),Object(_["a"])(m,a,n,!1,null,null,null));e["default"]=p.exports},dab7:function(t,e,i){"use strict";var a=i("6914"),n=i.n(a);n.a},fcba:function(t,e,i){"use strict";var a=i("43a2"),n=i.n(a);n.a}}]);