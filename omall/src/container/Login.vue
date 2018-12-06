<template>
	<div class="mswrapper" id="loginBox" style="height: 568px;">
		<div class="logback icon-back" id="goback"></div>
		<div class="lognewbox" id="lognewbox" style="background-image: url(&quot;http://img.51msyc.com/advert/image/20181129/20181129180320049.jpg?x-oss-process=image/resize,w_320&quot;);"></div>
		<!--header end-->
		<div class="lognewlogo"></div>
	<!--登录表单-->
		<div class="lognewcon f14">
		     <ul>
		          <li>
		             <input type="text" class="lognewinput loguser f14" id="userCode" placeholder="手机号码或登录账号">
		          </li>
		          <li class="jepor">
		             <input type="password" class="lognewinput logpass f14" id="passWord" placeholder="请输入登录密码"><em class="togglepass" id="togglepass"></em>
		          </li>
		          <li class="f12 white pt5 pb20 jepor pl35"><input class="agreebtnbox jepor" checked="" id="agreement" type="checkbox">我已阅读并同意<span class="tdu" @click="toContract">《洋葱OMALL平台服务协议》</span></li>
		          <li class="mt5"><button type="button" class="lognewbtn f16 rdu5" onclick="login();">LOGIN 登录</button></li>
		     </ul>
		</div>
		<div class="lognewother">  
		     <ul class="ovh f14"> 
		          <li class="jeflex" @click="toRegister"><em class="nicoa logzhuc"></em><p class="ntext">注册账号</p></li>
		          <li class="jeflex" id="wechat_login" onclick="wxlogin()" style="display: none;"><em class="nicob logweix"></em><p class="ntext">微信登录</p></li>
		          <li class="jeflex" @click="toPassword"><em class="nicoa logsuo"></em><p class="ntext">忘记密码</p></li> 
		     </ul> 
		</div>
	</div>
</template>

<script>
	export default {
		
		methods :{
			toContract(){
				this.$router.push("contract");
			},
			toRegister(){
				this.$router.push("register");
			},
			toPassword(){
				this.$router.push("Password");
			}
		}
	}
</script>

<style scoped>
	@import url("../assets/members.css");
	@import url("../assets/jeui.css");

</style>