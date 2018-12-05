<template >
	<body marpad="padding" fixtop="50px" fixbot="20px" class="" style="width: 100%; padding-top: 50px; padding-bottom: 20px;">
		<div >
			<XheaderRgt status="register" />
		<!--注册表单-->
			<div class="mswrapper ">
				<ul class="register-box  g6 f14" id="memberYCIDfald" fald="0">
					<li class="pt10 pb10 pl15 pr15 bg-wh jepor jecell-bottom flexbox je-align-center">
						<p class="g3">手机号码</p>
						<p class="bg-wh jepor jeflex flexbox f14 ml20 pt5 pb5">
							<input class="jew100 show input-noneLine" name="memberPhone" type="text" placeholder="请输入手机号码" autocomplete="on" id="memberPhone" @blur ="seeNumber" ref = "phoneNumber"/>
							<input v-if="showCountDown" type="button" class="btn-code jepoa purple fmy jew20 show" style="background-color: #fff;" id="resetCap" v-bind:value="showBut" @click="getNum"/>
							<input v-if="!showCountDown" type="button" class="btn-code jepoa purple fmy jew20 show" style="background-color: #fff;" id="resetCap" v-bind:value="showBut" />
						</p>
					</li>
					<li class="pt10 bg-wh pl15 pr15 pb10 jepor jecell-bottom flexbox je-align-center">
		
						<p class="g3">　验证码</p>
						<p class="bg-wh jepor ml20 jeflex f14 pt5 pb5 ">
							<input class="jeflex show input-noneLine" type="text" placeholder="请输入短信验证码" id="authCode"/>
							
						</p>
					</li>
					<li class="pt10 pb10 pl15 pr15 bg-wh jepor jecell-bottom flexbox je-align-center">
						<p class="g3">设置密码</p>
						<p class="bg-wh jepor jeflex f14 ml20 pt5 pb5">
							<input class="jew100 show input-noneLine" name="password" type="password" placeholder="请输入8-20位数字或字母(不能纯数字)" id="password1"/>
						</p>
					</li>
		
					<li class="pt10 pb10 pl15 pr15 bg-wh jepor flexbox jecell-bottom je-align-center">
						<p class="g3">确认密码</p>
						<p class="bg-wh jepor flexbox f14  ml20 pt5 pb5">
							<input class="jeflex show input-noneLine" type="password" placeholder="确认密码" id="password2"/>
						</p>
					</li>
					<li class="f12  pt5 mt10 pr15 pl35 jepor "><input class="agreebtnbox jepor" checked="" id="agreement" type="checkbox">我已阅读并同意<span class="tdu" @click="toContract">《洋葱OMALL平台服务协议》</span></li>
				</ul>
			</div>
		</div>
		<!--确认注册-->
			<div class="btn-div pt20 pl15 pr15"><span class="show rdu5 bg-purple white tc p10 f14" id="registerBtn">确认注册</span></div>
			<img src="../imags/icon_reg.jpg" class="mt20">

			<div class="pl15 pr15">
			    <div class="tc regBtn jepor mt15  pt10 f14 pb10" >
			    	<img src="../imags/login_direct_icon.png" class="mr5">已有账号，请登录
			    </div>
			</div>

		<!--弹窗-->
		<div id="jembox6" class="jemboxer jembox1" style="z-index:10000" jmb="6" v-if="popUps">
			<div class="jemboxmask" style="pointer-events:auto;background-color:rgba(0,0,0,0.5);" @click="hidePopUps"></div>
			<div class="jemboxmain">
				<div class="jemboxsection">
					<div class="jemboxchild jemboxanim" style="background-color:#fff;"><span class="jemboxclose01" style="display:none"></span>
						<div class="jemboxmcont" style="padding:10px 10px;"><div class="jew100 tc pt5 pb5">{{popUpsTit}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>

</template>

<script>
	import XheaderRgt from "../components/XheaderRgt.vue";
	export default {
		components: {
			XheaderRgt
		},
		data(){
			return {
				popUps:false,
				popUpsTit:"请您填写手机号码",
				showCountDown:true,
				showBut:"获取验证码"
				
			}

		},
		
		methods : {
			seeNumber(){
			let val = this.$refs.phoneNumber.value;
				if(/^[0-9]+$/.test(val)){//这是用正则表达是检查,检查是否全为数字
					return ;
				}else
				{
					this.$refs.phoneNumber.value=""//如果不全为数字清空
				}
			},
			getNum(){
			let val = this.$refs.phoneNumber.value;
				if(!/^1[3-9]\d{9}$/i.test(val)&&val.trim!=""){//真坑！！在vue的写法中，清除空格trim,不需要加括号

				    this.popUps=true;
				    this.$refs.phoneNumber.value=""
				    
				 }else{
				 	this.showCountDown = !this.showCountDown;
				 	this.countDown();
				 }
			},
			hidePopUps(){//隐藏弹窗提示
				this.popUps=false;
			},
			countDown(){
				let times=60;
				var coT = setInterval(()=>{
					--times;
					this.showBut = times+"s后重新获取";
					if(times==0){
					clearInterval(coT);
					this.showBut = "重新获取";
					this.showCountDown = !this.showCountDown;
					}
				},1000)

			},
			toContract(){
				this.$router.push("contract");
			}
		}
	};
</script>

<style scoped>
@import url("../assets/members.css");

@import url("../assets/jeui.css");


</style>