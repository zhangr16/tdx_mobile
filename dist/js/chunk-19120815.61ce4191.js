(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19120815"],{"2a26":function(t,n,e){},"31af":function(t,n,e){},"4dcd":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"getSoon"},[e("header",[e("van-icon",{staticClass:"left_arrow",attrs:{name:"arrow-left"},on:{click:function(n){return t.$router.go(-1)}}}),t._v("马上抢\n  ")],1),e("ul",t._l(t.paList,function(t,n){return e("li",{key:n},[e("item-card-large",{attrs:{entity:t}})],1)}),0)])},a=[],r=(e("96cf"),e("3b8d")),c=e("d606"),s=e("365c"),o={name:"getSoon",components:{itemCardLarge:c["a"]},data:function(){return{paList:[]}},mounted:function(){this.getData()},methods:{getData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["i"])({pa_id:this.$route.query.pa_id});case 2:n=t.sent,n&&200==n.error.errno&&(this.paList=n.data.task_list,this.paList.map(function(t){t.img=n.data.img,t.activity_type=n.data.activity_type}));case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}},u=o,_=(e("6f46"),e("2877")),l=Object(_["a"])(u,i,a,!1,null,null,null);n["default"]=l.exports},"6f46":function(t,n,e){"use strict";var i=e("2a26"),a=e.n(i);a.a},c2cc:function(t,n,e){"use strict";var i=e("31af"),a=e.n(i);a.a},d606:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"item_card_large",on:{click:t.handleClick}},[e("img",{attrs:{src:t.entity.img,alt:""}}),e("main",[e("div",{staticClass:"title"},[t._v(t._s(t.entity.title))]),e("div",{staticClass:"content"},[e("van-progress",{attrs:{"pivot-text":"",color:"#ff5500",percentage:30}}),e("div",{staticClass:"content_word"},[t._v("\n        已抢\n        "),e("i",[t._v(t._s(t.entity.task_count-t.entity.remain_count))]),t._v("件 共\n        "),e("i",[t._v(t._s(t.entity.task_count))]),t._v("件\n      ")]),e("div",{staticClass:"content_price2"},[e("span",[t._v("任务金额:")]),t._v("\n        "+t._s(t.entity.price)+"元  \n        "),e("span",[t._v("返还金额:")]),t._v("\n        "+t._s(t.entity.price-t.entity.current_price)+"元\n      ")]),e("div",{staticClass:"content_time"},[e("span",[t._v("截止日期："+t._s(t.entity.task_end))])]),e("div",{staticClass:"content_insure"},[t._v("商家已存入保证金"+t._s(1==t.entity.activity_type?t.entity.price*t.entity.order_number:t.entity.price-t.entity.current_price)+"元平台担保返款")]),t._m(0)],1)])])},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content_btn"},[e("span",[t._v("抢购")])])}],r={name:"item_card_large",props:{entity:{default:{},type:Object}},data:function(){return{}},methods:{handleClick:function(){this.$router.push("/purchase?t_id="+this.entity.t_id)}}},c=r,s=(e("c2cc"),e("2877")),o=Object(s["a"])(c,i,a,!1,null,null,null);n["a"]=o.exports}}]);