(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30371556"],{1885:function(s,t,e){"use strict";var i=e("cca3"),r=e.n(i);r.a},"5df9":function(s,t,e){"use strict";e.r(t);var i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"login"},[e("div",{staticClass:"login_wrapper"},[e("header",[e("div",{staticClass:"icon"},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:function(t){return s.$router.push("/index")}}})],1),e("div",{staticClass:"text"},[s._v("登 录")])]),e("section",[e("div",{staticClass:"login_main"},[e("van-field",{attrs:{clearable:"",type:"number",placeholder:"请输入账号","error-message":s.validateMsg.user},on:{input:s.validateMobile},model:{value:s.userForm.user,callback:function(t){s.$set(s.userForm,"user","string"===typeof t?t.trim():t)},expression:"userForm.user"}}),e("van-field",{attrs:{clearable:"",placeholder:"请输入密码",type:"password","error-message":s.validateMsg.pwd},on:{input:s.validatePassword},model:{value:s.userForm.pwd,callback:function(t){s.$set(s.userForm,"pwd","string"===typeof t?t.trim():t)},expression:"userForm.pwd"}},[e("template",{slot:"right-icon"},[e("span",{staticClass:"tips",on:{click:function(t){return s.$router.push("/findPwd")}}},[s._v("忘记密码")])])],2),e("div",{staticClass:"l_btn",on:{click:function(t){return s.handleLogin()}}},[s._v("登 录")]),e("div",{staticClass:"r_btn",on:{click:function(t){return s.$router.push("/register")}}},[s._v("注 册")])],1)])])])},r=[],a={name:"login",data:function(){return{userForm:{user:"",pwd:"",platform:"2c"},validateMsg:{user:"",pwd:""}}},methods:{validateMobile:function(){if(""==this.userForm.user)this.validateMsg.user="请输入手机号码";else{if(/^1[3456789]\d{9}$/.test(this.userForm.user))return this.validateMsg.user="",!0;this.validateMsg.user="请输入11位手机号码"}},validatePassword:function(){if(this.userForm.pwd.length<5||this.userForm.pwd.length>13)this.validateMsg.pwd="密码长度不能小于5位或大于13位";else{if(!(escape(this.userForm.pwd).indexOf("%u")>=0))return this.validateMsg.pwd="",!0;this.validateMsg.pwd="密码不能有中文"}},handleLogin:function(){var s=this;this.validateMobile(),this.validatePassword(),""==this.validateMsg.user&&""==this.validateMsg.pwd&&this.$store.dispatch("Login",this.userForm).then(function(t){t&&(s.$router.push({path:"/"}),s.$toast.success("登录成功！"))})}}},n=a,o=(e("1885"),e("2877")),l=Object(o["a"])(n,i,r,!1,null,null,null);t["default"]=l.exports},cca3:function(s,t,e){}}]);