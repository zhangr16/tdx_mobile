(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ee935ea"],{"456d":function(t,e,n){var a=n("4bf8"),r=n("0d58");n("5eda")("keys",function(){return function(t){return r(a(t))}})},"4af9":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bindCard"},[n("header",[n("van-icon",{staticClass:"left_arrow",attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.go(-1)}}}),t._v("银行卡绑定\n  ")],1),n("main",[n("van-field",{attrs:{label:"用户账号",disabled:""},model:{value:t.entity.account,callback:function(e){t.$set(t.entity,"account",e)},expression:"entity.account"}}),n("van-field",{attrs:{label:"联系号码",disabled:""},model:{value:t.entity.mobile,callback:function(e){t.$set(t.entity,"mobile",e)},expression:"entity.mobile"}}),n("van-field",{attrs:{placeholder:"请输入QQ",label:"QQ",clearable:"",type:"number",disabled:!t.isReadonly},model:{value:t.entity.qq,callback:function(e){t.$set(t.entity,"qq",e)},expression:"entity.qq"}}),n("van-cell",{attrs:{"is-link":"",title:"银行卡类型",placeholder:"请选择银行卡类型"},on:{click:t.openBankSelect},model:{value:t.bankText,callback:function(e){t.bankText=e},expression:"bankText"}}),n("van-cell",{attrs:{"is-link":"",title:"开户地区",placeholder:"请输入开户地区"},on:{click:t.openAreaSelect}},[t.entity.regist_province?n("span",[t._v("\n        "+t._s(t.entity.regist_province)+"\n      ")]):t._e(),t.entity.regist_city?n("span",[t._v("\n        "+t._s(t.entity.regist_city)+"\n      ")]):n("span",[t._v("暂无")])]),n("van-field",{attrs:{"is-link":"",label:"开户支行",placeholder:"请选择银行支行",disabled:!t.isReadonly},on:{click:t.openBankBranch},model:{value:t.entity.sub_branch_name,callback:function(e){t.$set(t.entity,"sub_branch_name",e)},expression:"entity.sub_branch_name"}}),n("van-field",{attrs:{label:"银行卡号",placeholder:"请输入银行卡号",disabled:!t.isReadonly},model:{value:t.entity.bank_card,callback:function(e){t.$set(t.entity,"bank_card",e)},expression:"entity.bank_card"}}),t.isReadonly?n("van-field",{attrs:{clearable:"",placeholder:"请输入验证码",label:"验证码"},model:{value:t.entity.sms_code,callback:function(e){t.$set(t.entity,"sms_code",e)},expression:"entity.sms_code"}},[t.showCount?n("van-button",{staticClass:"tips",attrs:{slot:"button",size:"small",type:"primary"},on:{click:t.handleSendVerify},slot:"button"},[t._v("获取验证码")]):n("van-button",{staticClass:"tips",attrs:{slot:"button",size:"small",type:"primary"},slot:"button"},[t._v("重新发送("+t._s(t.countNum)+"s)")])],1):t._e(),t.isReadonly?n("van-cell",[n("div",{staticClass:"submit_btn",on:{click:t.handleSubmit}},[t._v("提交申请")])]):t._e(),t.isReadonly?t._e():n("van-notice-bar",{attrs:{text:"您的账户已绑定银行卡，如需更改银行卡信息，请联系客服处理！"}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showBranch,callback:function(e){t.showBranch=e},expression:"showBranch"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:t.bankBranchArr,"default-index":t.bankBranchArr.indexOf(t.entity.sub_branch_name)},on:{cancel:function(e){t.showBranch=!1},confirm:function(e){t.entity.sub_branch_name=e,t.showBranch=!1}}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showBank,callback:function(e){t.showBank=e},expression:"showBank"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:t.bankNameArr,"default-index":t.bankNameArr.indexOf(t.entity.bank)},on:{cancel:function(e){t.showBank=!1},confirm:function(e){t.bankText=e,t.showBank=!1}}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showArea,callback:function(e){t.showArea=e},expression:"showArea"}},[n("van-area",{attrs:{value:t.area_code,"columns-num":2,"area-list":t.areaList},on:{cancel:function(e){t.showArea=!1},confirm:function(e){return t.handleAreaSelect(e)}}})],1)],1)},r=[],i=(n("7f7f"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),o=n("365c"),s=n("ee01"),c=n("ff82"),u={name:"bindCard",components:{},data:function(){return{timer:null,countNum:"",showCount:!0,bankArr:[{value:"中国建设银行",label:"中国建设银行"},{value:"中国农业银行",label:"中国农业银行"},{value:"中国工商银行",label:"中国工商银行"},{value:"中国银行",label:"中国银行"},{value:"交通银行",label:"交通银行"},{value:"招商银行",label:"招商银行"},{value:"",label:"暂无"}],bankNameArr:["中国建设银行","中国农业银行","中国工商银行","中国银行","交通银行","招商银行"],bankText:"暂无",bankBranchArr:[],areaList:{},area_code:"",entity:{regist_province:"",regist_city:""},showBank:!1,showArea:!1,showBranch:!1}},computed:{isReadonly:function(){return this.entity.is_submit}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.areaList=c["a"],t.next=3,Object(s["h"])();case 3:e=t.sent,e&&200==e.error.errno?(this.entity=e.data,this.area_code=Object.keys(this.areaList.city_list).filter(function(t){return n.areaList.city_list[t]==n.entity.regist_city})[0],this.bankText=this.bankArr.filter(function(t){return n.entity.bank==t.value})[0].label||"暂无"):434==e.error.errno&&setTimeout(function(){n.$router.push("/certification")},1500);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),watch:{bankText:function(t){t&&(this.entity.bank=this.bankArr.filter(function(e){return t==e.label})[0].value)}},methods:{countVerifyNum:function(){var t=this;this.timer||(this.countNum=60,this.showCount=!1,this.timer=setInterval(function(){t.countNum>1&&t.countNum<=60?t.countNum--:(t.showCount=!0,clearInterval(t.timer),t.timer=null)},1e3))},openBankSelect:function(){this.isReadonly&&(this.showBank=!0)},openAreaSelect:function(){this.isReadonly&&(this.showArea=!0)},openBankBranch:function(){this.isReadonly&&(this.showBranch=!0)},getbranchData:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.entity.regist_province&&this.entity.regist_city&&this.bankText)){t.next=5;break}return t.next=3,Object(s["d"])({province:this.entity.regist_province,city:this.entity.regist_city,bank_name:this.bankText});case 3:e=t.sent,e&&200==e.error.errno&&(this.bankBranchArr=e.data);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),handleSendVerify:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.entity.mobile){t.next=6;break}return e={mobile:this.entity.mobile,platform:"2c",is_repeat:"false",type:4},t.next=4,Object(o["s"])(e);case 4:n=t.sent,n&&200==n.error.errno&&(this.$toast.success("验证码发送成功！请查看"),this.countVerifyNum());case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),handleAreaSelect:function(t){t[1]?(this.area_code=t[1].code,this.entity.regist_province=t[0].name,this.entity.regist_city=t[1].name):(this.area_code="110100",this.entity.regist_province="北京市",this.entity.regist_city="北京市"),this.showArea=!1,this.getbranchData()},handleSubmit:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["h"])(this.entity);case 2:e=t.sent,e&&200==e.error.errno&&(this.$toast.success("申请成功！"),setTimeout(function(){n.$router.push("/mine")},500));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},l=u,h=(n("b4b4"),n("2877")),b=Object(h["a"])(l,a,r,!1,null,null,null);e["default"]=b.exports},"5eda":function(t,e,n){var a=n("5ca1"),r=n("8378"),i=n("79e5");t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],o={};o[t]=e(n),a(a.S+a.F*i(function(){n(1)}),"Object",o)}},ac6a:function(t,e,n){for(var a=n("cadf"),r=n("0d58"),i=n("2aba"),o=n("7726"),s=n("32e9"),c=n("84f2"),u=n("2b4c"),l=u("iterator"),h=u("toStringTag"),b=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=r(d),m=0;m<f.length;m++){var p,y=f[m],v=d[y],k=o[y],_=k&&k.prototype;if(_&&(_[l]||s(_,l,b),_[h]||s(_,h,y),c[y]=b,v))for(p in a)_[p]||i(_,p,a[p],!0)}},b4b4:function(t,e,n){"use strict";var a=n("f892"),r=n.n(a);r.a},ee01:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"k",function(){return o}),n.d(e,"g",function(){return s}),n.d(e,"l",function(){return c}),n.d(e,"i",function(){return u}),n.d(e,"f",function(){return l}),n.d(e,"j",function(){return h}),n.d(e,"a",function(){return b}),n.d(e,"b",function(){return d}),n.d(e,"h",function(){return f}),n.d(e,"d",function(){return m});var a=n("b775");function r(t){return Object(a["a"])({url:"/u/integraldetail",method:"post",params:t})}function i(t){return Object(a["a"])({url:"/u/fundsummary",method:"post",params:t})}function o(t){return t?Object(a["a"])({url:"/u/withdraw",method:"post",params:t}):Object(a["a"])({url:"/u/withdraw",method:"get"})}function s(t){return Object(a["a"])({url:"/u/transactiondetail",method:"post",params:t})}function c(t){return Object(a["a"])({url:"/u/Withdrawdetail",method:"post",params:t})}function u(t){return t?Object(a["a"])({url:"/u/info",method:"post",params:t}):Object(a["a"])({url:"/u/info",method:"get"})}function l(t){return Object(a["a"])({url:"/sys/modifypwd",method:"post",params:t})}function h(t){return t?Object(a["a"])({url:"/u/prove",method:"post",params:t}):Object(a["a"])({url:"/u/prove",method:"get"})}function b(t){return Object(a["a"])({url:"/u/Activityaward",method:"post",params:t})}function d(t){return Object(a["a"])({url:"/sys/Changepwd",method:"post",params:t})}function f(t){return t?Object(a["a"])({url:"/u/bank",method:"post",data:t}):Object(a["a"])({url:"/u/bank",method:"get"})}function m(t){return Object(a["a"])({url:"/u/Bankbranchcondition",method:"post",params:t})}},f892:function(t,e,n){},ff82:function(t,e,n){"use strict";e["a"]={province_list:{110000:"北京市",120000:"天津市",130000:"河北省",140000:"山西省",150000:"内蒙古自治区",210000:"辽宁省",220000:"吉林省",230000:"黑龙江省",310000:"上海市",320000:"江苏省",330000:"浙江省",340000:"安徽省",350000:"福建省",360000:"江西省",370000:"山东省",410000:"河南省",420000:"湖北省",430000:"湖南省",440000:"广东省",450000:"广西壮族自治区",460000:"海南省",500000:"重庆市",510000:"四川省",520000:"贵州省",530000:"云南省",540000:"西藏自治区",610000:"陕西省",620000:"甘肃省",630000:"青海省",640000:"宁夏回族自治区",650000:"新疆维吾尔自治区",710000:"台湾省",810000:"香港特别行政区",820000:"澳门特别行政区",900000:"海外"},city_list:{110100:"北京市",120100:"天津市",130100:"石家庄市",130200:"唐山市",130300:"秦皇岛市",130400:"邯郸市",130500:"邢台市",130600:"保定市",130700:"张家口市",130800:"承德市",130900:"沧州市",131000:"廊坊市",131100:"衡水市",140100:"太原市",140200:"大同市",140300:"阳泉市",140400:"长治市",140500:"晋城市",140600:"朔州市",140700:"晋中市",140800:"运城市",140900:"忻州市",141000:"临汾市",141100:"吕梁市",150100:"呼和浩特市",150200:"包头市",150300:"乌海市",150400:"赤峰市",150500:"通辽市",150600:"鄂尔多斯市",150700:"呼伦贝尔市",150800:"巴彦淖尔市",150900:"乌兰察布市",152200:"兴安盟",152500:"锡林郭勒盟",152900:"阿拉善盟",210100:"沈阳市",210200:"大连市",210300:"鞍山市",210400:"抚顺市",210500:"本溪市",210600:"丹东市",210700:"锦州市",210800:"营口市",210900:"阜新市",211000:"辽阳市",211100:"盘锦市",211200:"铁岭市",211300:"朝阳市",211400:"葫芦岛市",220100:"长春市",220200:"吉林市",220300:"四平市",220400:"辽源市",220500:"通化市",220600:"白山市",220700:"松原市",220800:"白城市",222400:"延边朝鲜族自治州",230100:"哈尔滨市",230200:"齐齐哈尔市",230300:"鸡西市",230400:"鹤岗市",230500:"双鸭山市",230600:"大庆市",230700:"伊春市",230800:"佳木斯市",230900:"七台河市",231000:"牡丹江市",231100:"黑河市",231200:"绥化市",232700:"大兴安岭地区",310100:"上海市",320100:"南京市",320200:"无锡市",320300:"徐州市",320400:"常州市",320500:"苏州市",320600:"南通市",320700:"连云港市",320800:"淮安市",320900:"盐城市",321000:"扬州市",321100:"镇江市",321200:"泰州市",321300:"宿迁市",330100:"杭州市",330200:"宁波市",330300:"温州市",330400:"嘉兴市",330500:"湖州市",330600:"绍兴市",330700:"金华市",330800:"衢州市",330900:"舟山市",331000:"台州市",331100:"丽水市",340100:"合肥市",340200:"芜湖市",340300:"蚌埠市",340400:"淮南市",340500:"马鞍山市",340600:"淮北市",340700:"铜陵市",340800:"安庆市",341000:"黄山市",341100:"滁州市",341200:"阜阳市",341300:"宿州市",341500:"六安市",341600:"亳州市",341700:"池州市",341800:"宣城市",350100:"福州市",350200:"厦门市",350300:"莆田市",350400:"三明市",350500:"泉州市",350600:"漳州市",350700:"南平市",350800:"龙岩市",350900:"宁德市",360100:"南昌市",360200:"景德镇市",360300:"萍乡市",360400:"九江市",360500:"新余市",360600:"鹰潭市",360700:"赣州市",360800:"吉安市",360900:"宜春市",361000:"抚州市",361100:"上饶市",370100:"济南市",370200:"青岛市",370300:"淄博市",370400:"枣庄市",370500:"东营市",370600:"烟台市",370700:"潍坊市",370800:"济宁市",370900:"泰安市",371000:"威海市",371100:"日照市",371300:"临沂市",371400:"德州市",371500:"聊城市",371600:"滨州市",371700:"菏泽市",410100:"郑州市",410200:"开封市",410300:"洛阳市",410400:"平顶山市",410500:"安阳市",410600:"鹤壁市",410700:"新乡市",410800:"焦作市",410900:"濮阳市",411000:"许昌市",411100:"漯河市",411200:"三门峡市",411300:"南阳市",411400:"商丘市",411500:"信阳市",411600:"周口市",411700:"驻马店市",419000:"省直辖县",420100:"武汉市",420200:"黄石市",420300:"十堰市",420500:"宜昌市",420600:"襄阳市",420700:"鄂州市",420800:"荆门市",420900:"孝感市",421000:"荆州市",421100:"黄冈市",421200:"咸宁市",421300:"随州市",422800:"恩施土家族苗族自治州",429000:"省直辖县",430100:"长沙市",430200:"株洲市",430300:"湘潭市",430400:"衡阳市",430500:"邵阳市",430600:"岳阳市",430700:"常德市",430800:"张家界市",430900:"益阳市",431000:"郴州市",431100:"永州市",431200:"怀化市",431300:"娄底市",433100:"湘西土家族苗族自治州",440100:"广州市",440200:"韶关市",440300:"深圳市",440400:"珠海市",440500:"汕头市",440600:"佛山市",440700:"江门市",440800:"湛江市",440900:"茂名市",441200:"肇庆市",441300:"惠州市",441400:"梅州市",441500:"汕尾市",441600:"河源市",441700:"阳江市",441800:"清远市",441900:"东莞市",442000:"中山市",445100:"潮州市",445200:"揭阳市",445300:"云浮市",450100:"南宁市",450200:"柳州市",450300:"桂林市",450400:"梧州市",450500:"北海市",450600:"防城港市",450700:"钦州市",450800:"贵港市",450900:"玉林市",451000:"百色市",451100:"贺州市",451200:"河池市",451300:"来宾市",451400:"崇左市",460100:"海口市",460200:"三亚市",460300:"三沙市",460400:"儋州市",469000:"省直辖县",500100:"重庆市",500200:"县",510100:"成都市",510300:"自贡市",510400:"攀枝花市",510500:"泸州市",510600:"德阳市",510700:"绵阳市",510800:"广元市",510900:"遂宁市",511000:"内江市",511100:"乐山市",511300:"南充市",511400:"眉山市",511500:"宜宾市",511600:"广安市",511700:"达州市",511800:"雅安市",511900:"巴中市",512000:"资阳市",513200:"阿坝藏族羌族自治州",513300:"甘孜藏族自治州",513400:"凉山彝族自治州",520100:"贵阳市",520200:"六盘水市",520300:"遵义市",520400:"安顺市",520500:"毕节市",520600:"铜仁市",522300:"黔西南布依族苗族自治州",522600:"黔东南苗族侗族自治州",522700:"黔南布依族苗族自治州",530100:"昆明市",530300:"曲靖市",530400:"玉溪市",530500:"保山市",530600:"昭通市",530700:"丽江市",530800:"普洱市",530900:"临沧市",532300:"楚雄彝族自治州",532500:"红河哈尼族彝族自治州",532600:"文山壮族苗族自治州",532800:"西双版纳傣族自治州",532900:"大理白族自治州",533100:"德宏傣族景颇族自治州",533300:"怒江傈僳族自治州",533400:"迪庆藏族自治州",540100:"拉萨市",540200:"日喀则市",540300:"昌都市",540400:"林芝市",540500:"山南市",540600:"那曲市",542500:"阿里地区",610100:"西安市",610200:"铜川市",610300:"宝鸡市",610400:"咸阳市",610500:"渭南市",610600:"延安市",610700:"汉中市",610800:"榆林市",610900:"安康市",611000:"商洛市",620100:"兰州市",620200:"嘉峪关市",620300:"金昌市",620400:"白银市",620500:"天水市",620600:"武威市",620700:"张掖市",620800:"平凉市",620900:"酒泉市",621000:"庆阳市",621100:"定西市",621200:"陇南市",622900:"临夏回族自治州",623000:"甘南藏族自治州",630100:"西宁市",630200:"海东市",632200:"海北藏族自治州",632300:"黄南藏族自治州",632500:"海南藏族自治州",632600:"果洛藏族自治州",632700:"玉树藏族自治州",632800:"海西蒙古族藏族自治州",640100:"银川市",640200:"石嘴山市",640300:"吴忠市",640400:"固原市",640500:"中卫市",650100:"乌鲁木齐市",650200:"克拉玛依市",650400:"吐鲁番市",650500:"哈密市",652300:"昌吉回族自治州",652700:"博尔塔拉蒙古自治州",652800:"巴音郭楞蒙古自治州",652900:"阿克苏地区",653000:"克孜勒苏柯尔克孜自治州",653100:"喀什地区",653200:"和田地区",654000:"伊犁哈萨克自治州",654200:"塔城地区",654300:"阿勒泰地区",659000:"自治区直辖县级行政区划",710100:"台北市",710200:"高雄市",710300:"台南市",710400:"台中市",710500:"金门县",710600:"南投县",710700:"基隆市",710800:"新竹市",710900:"嘉义市",711100:"新北市",711200:"宜兰县",711300:"新竹县",711400:"桃园县",711500:"苗栗县",711700:"彰化县",711900:"嘉义县",712100:"云林县",712400:"屏东县",712500:"台东县",712600:"花莲县",712700:"澎湖县",712800:"连江县",810100:"香港岛",810200:"九龙",810300:"新界",820100:"澳门半岛",820200:"离岛",900400:"阿富汗",900800:"阿尔巴尼亚",901000:"南极洲",901200:"阿尔及利亚",901600:"美属萨摩亚",902000:"安道尔",902400:"安哥拉",902800:"安提瓜和巴布达",903100:"阿塞拜疆",903200:"阿根廷",903600:"澳大利亚",904000:"奥地利",904400:"巴哈马",904800:"巴林",905000:"孟加拉",905100:"亚美尼亚",905200:"巴巴多斯",905600:"比利时",906000:"百慕大",906400:"不丹",906800:"玻利维亚",907000:"波黑",907200:"博茨瓦纳",907400:"布韦岛",907600:"巴西",908400:"伯利兹",908600:"英属印度洋领地",909000:"所罗门群岛",909200:"英属维尔京群岛",909600:"文莱",910000:"保加利亚",910400:"缅甸",910800:"布隆迪",911200:"白俄罗斯",911600:"柬埔寨",912000:"喀麦隆",912400:"加拿大",913200:"佛得角",913600:"开曼群岛",914000:"中非",914400:"斯里兰卡",914800:"乍得",915200:"智利",916200:"圣诞岛",916600:"科科斯群岛",917000:"哥伦比亚",917400:"科摩罗",917500:"马约特",917800:"刚果（布）",918000:"刚果（金）",918400:"库克群岛",918800:"哥斯达黎加",919100:"克罗地亚",919200:"古巴",919600:"塞浦路斯",920300:"捷克",920400:"贝宁",920800:"丹麦",921200:"多米尼克",921400:"多米尼加",921800:"厄瓜多尔",922200:"萨尔瓦多",922600:"赤道几内亚",923100:"埃塞俄比亚",923200:"厄立特里亚",923300:"爱沙尼亚",923400:"法罗群岛",923800:"马尔维纳斯群岛（ 福克兰）",923900:"南乔治亚岛和南桑威奇群岛",924200:"斐济群岛",924600:"芬兰",924800:"奥兰群岛",925000:"法国",925400:"法属圭亚那",925800:"法属波利尼西亚",926000:"法属南部领地",926200:"吉布提",926600:"加蓬",926800:"格鲁吉亚",927000:"冈比亚",927500:"巴勒斯坦",927600:"德国",928800:"加纳",929200:"直布罗陀",929600:"基里巴斯",930000:"希腊",930400:"格陵兰",930800:"格林纳达",931200:"瓜德罗普",931600:"关岛",932000:"危地马拉",932400:"几内亚",932800:"圭亚那",933200:"海地",933400:"赫德岛和麦克唐纳群岛",933600:"梵蒂冈",934000:"洪都拉斯",934800:"匈牙利",935200:"冰岛",935600:"印度",936000:"印尼",936400:"伊朗",936800:"伊拉克",937200:"爱尔兰",937600:"以色列",938000:"意大利",938400:"科特迪瓦",938800:"牙买加",939200:"日本",939800:"哈萨克斯坦",940000:"约旦",940400:"肯尼亚",940800:"朝鲜 北朝鲜",941000:"韩国",941400:"科威特",941700:"吉尔吉斯斯坦",941800:"老挝",942200:"黎巴嫩",942600:"莱索托",942800:"拉脱维亚",943000:"利比里亚",943400:"利比亚",943800:"列支敦士登",944000:"立陶宛",944200:"卢森堡",945000:"马达加斯加",945400:"马拉维",945800:"马来西亚",946200:"马尔代夫",946600:"马里",947000:"马耳他",947400:"马提尼克",947800:"毛里塔尼亚",948000:"毛里求斯",948400:"墨西哥",949200:"摩纳哥",949600:"蒙古国",949800:"摩尔多瓦",949900:"黑山",950000:"蒙塞拉特岛",950400:"摩洛哥",950800:"莫桑比克",951200:"阿曼",951600:"纳米比亚",952000:"瑙鲁",952400:"尼泊尔",952800:"荷兰",953300:"阿鲁巴",953500:"荷兰加勒比区",954000:"新喀里多尼亚",954800:"瓦努阿图",955400:"新西兰",955800:"尼加拉瓜",956200:"尼日尔",956600:"尼日利亚",957000:"纽埃",957400:"诺福克岛",957800:"挪威",958000:"北马里亚纳群岛",958100:"美国本土外小岛屿",958300:"密克罗尼西亚联邦",958400:"马绍尔群岛",958500:"帕劳",958600:"巴基斯坦",959100:"巴拿马",959800:"巴布亚新几内亚",960000:"巴拉圭",960400:"秘鲁",960800:"菲律宾",961200:"皮特凯恩群岛",961600:"波兰",962000:"葡萄牙",962400:"几内亚比绍",962600:"东帝汶",963000:"波多黎各",963400:"卡塔尔",963800:"留尼汪",964200:"罗马尼亚",964300:"俄罗斯",964600:"卢旺达",965200:"圣巴泰勒米岛",965400:"圣赫勒拿",965900:"圣基茨和尼维斯",966000:"安圭拉",966200:"圣卢西亚",966300:"法属圣马丁",966600:"圣皮埃尔和密克隆",967000:"圣文森特和格林纳丁斯",967400:"圣马力诺",967800:"圣多美和普林西比",968200:"沙特阿拉伯",968600:"塞内加尔",968800:"塞尔维亚",969000:"塞舌尔",969400:"塞拉利昂",970200:"新加坡",970300:"斯洛伐克",970400:"越南",970500:"斯洛文尼亚",970600:"索马里",971000:"南非",971600:"津巴布韦",972400:"西班牙",972800:"南苏丹",972900:"苏丹",973200:"西撒哈拉",974000:"苏里南",974400:"斯瓦尔巴群岛和 扬马延岛",974800:"斯威士兰",975200:"瑞典",975600:"瑞士",976000:"叙利亚",976200:"塔吉克斯坦",976400:"泰国",976800:"多哥",977200:"托克劳",977600:"汤加",978000:"特立尼达和多巴哥",978400:"阿联酋",978800:"突尼斯",979200:"土耳其",979500:"土库曼斯坦",979600:"特克斯和凯科斯群岛",979800:"图瓦卢",980000:"乌干达",980400:"乌克兰",980700:"马其顿",981800:"埃及",982600:"英国",983100:"根西岛",983200:"泽西岛",983300:"马恩岛",983400:"坦桑尼亚",984000:"美国",985000:"美属维尔京群岛",985400:"布基纳法索",985800:"乌拉圭",986000:"乌兹别克斯坦",986200:"委内瑞拉",987600:"瓦利斯和富图纳",988200:"萨摩亚",988700:"也门",989400:"赞比亚"}}}}]);