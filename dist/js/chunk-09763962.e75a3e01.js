(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09763962"],{"5d41":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register"},[s("div",{staticClass:"register_wrapper"},[e._m(0),s("section",[s("div",{staticClass:"register_main"},[s("van-field",{attrs:{clearable:"",placeholder:"请输入手机号","error-message":e.validateMsg.mobile},on:{input:e.validateMobile},model:{value:e.userForm.mobile,callback:function(t){e.$set(e.userForm,"mobile",t)},expression:"userForm.mobile"}}),s("van-field",{attrs:{clearable:"",placeholder:"验证码"},model:{value:e.userForm.sms_code,callback:function(t){e.$set(e.userForm,"sms_code",t)},expression:"userForm.sms_code"}},[s("van-button",{staticClass:"tips",attrs:{slot:"button",size:"small",type:"primary"},on:{click:e.handleSendVerify},slot:"button"},[e._v("获取验证码")])],1),s("van-field",{attrs:{clearable:"",type:"password",placeholder:"请输入密码","error-message":e.validateMsg.pwd},on:{input:e.validatePassword},model:{value:e.userForm.pwd,callback:function(t){e.$set(e.userForm,"pwd",t)},expression:"userForm.pwd"}}),s("van-field",{attrs:{clearable:"",type:"password",placeholder:"再次输入登录密码","error-message":e.validateMsg.re_password},on:{input:e.validateRepassword},model:{value:e.userForm.re_password,callback:function(t){e.$set(e.userForm,"re_password",t)},expression:"userForm.re_password"}}),s("van-field",{attrs:{clearable:"",placeholder:"请输入邀请码(必填)","error-message":e.validateMsg.invite_code},on:{input:e.validateInvitecode},model:{value:e.userForm.invite_code,callback:function(t){e.$set(e.userForm,"invite_code",t)},expression:"userForm.invite_code"}}),s("div",{staticClass:"l_btn",on:{click:function(t){return e.handleSubmit()}}},[e._v("注 册")]),s("div",{staticClass:"r_btn",on:{click:function(t){return e.handleCancle()}}},[e._v("取 消")])],1)])])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",[s("div",{staticClass:"icon"}),s("div",{staticClass:"text"},[e._v("注 册")])])}],a=(s("96cf"),s("3b8d")),o=s("365c"),n={name:"register",data:function(){return{userForm:{mobile:"",pwd:"",re_password:"",invite_code:""},validateMsg:{mobile:"",pwd:"",re_password:"",invite_code:""}}},mounted:function(){this.userForm.invite_code=this.$route.query.code||""},methods:{validateMobile:function(){if(""==this.userForm.mobile)this.validateMsg.mobile="请输入手机号码";else{if(/^1[3456789]\d{9}$/.test(this.userForm.mobile))return this.validateMsg.mobile="",!0;this.validateMsg.mobile="请输入11位手机号码"}},validatePassword:function(){if(this.userForm.pwd.length<5||this.userForm.pwd.length>13)this.validateMsg.pwd="密码长度不能小于5位或大于13位";else{if(!(escape(this.userForm.pwd).indexOf("%u")>=0))return""!=this.userForm.re_password&&this.validateRepassword(),this.validateMsg.pwd="",!0;this.validateMsg.pwd="密码不能有中文"}},validateRepassword:function(){if(this.userForm.re_password.length<5||this.userForm.re_password.length>13)this.validateMsg.re_password="密码长度不能小于5位或大于13位";else if(escape(this.userForm.re_password).indexOf("%u")>=0)this.validateMsg.re_password="密码不能有中文";else{if(this.userForm.re_password==this.userForm.pwd)return this.validateMsg.re_password="",!0;this.validateMsg.re_password="两次输入密码不一致"}},validateInvitecode:function(){if(""!=this.userForm.invite_code)return this.validateMsg.invite_code="",!0;this.validateMsg.invite_code="请填写邀请码"},handleSendVerify:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.validateMobile(),""!=this.validateMsg.mobile){e.next=7;break}return t={mobile:this.userForm.mobile,platform:"2c",is_repeat:!0,type:2},e.next=5,Object(o["n"])(t);case 5:s=e.sent,s&&200==s.error.errno&&this.$toast.success("验证码发送成功！请在手机上查看");case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleSubmit:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.validateMobile(),this.validatePassword(),this.validateRepassword(),this.validateInvitecode(),""!=this.validateMsg.mobile||""!=this.validateMsg.pwd||""!=this.validateMsg.re_password){e.next=9;break}return e.next=7,Object(o["q"])(this.userForm);case 7:t=e.sent,t&&200==t.error.errno&&(window.localStorage.removeItem("invite_code"),this.$toast.success("用户注册成功！"),setTimeout(function(){s.$router.push("/login")},500));case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleCancle:function(){window.localStorage.removeItem("invite_code"),this.$router.go(-1)}}},l=n,d=(s("b37f"),s("2877")),c=Object(d["a"])(l,r,i,!1,null,null,null);t["default"]=c.exports},b37f:function(e,t,s){"use strict";var r=s("f954"),i=s.n(r);i.a},f954:function(e,t,s){}}]);