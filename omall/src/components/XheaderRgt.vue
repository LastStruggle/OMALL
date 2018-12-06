<template>
	<div>
		<div class="mstopmenu" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);" v-show="showLiList" @click="showLi">
			<ul class="f13" id="mstopmenulist" style="left: 186px;">
				<li >首页</li>
				<li >商品搜索</li>
				<li >购物车</li>
				<li >刷新一下</li>
			</ul>
			<div class="mstopmask"></div>
		</div>
	
	
	<!--注册页面头部组件-->
    	<header class="msheadbox">
    		<div class="msfixe mspurple">
    			<div class="aubgs msbacks" id="goback" @click="goBack"></div>
    			<h2 class="jeflex mstitle" v-if="status==='register'">{{Header[0]}}</h2>
    			<h2 class="jeflex mstitle" v-if="status==='contract'">{{Header[1]}}</h2>
    			<h2 class="jeflex mstitle" v-if="status==='password'">{{Header[2]}}</h2>
    			<div class="aubgs msmenus" id="mstopmenu" v-if="status==='password'" @click="showLi"></div>
    		</div>
    	</header>  
    </div>
</template>

<script>
	export default {
		components: {

		},
		props: ["status"],
		data() {
			return {
				Header: ['注册账号', '洋葱OMALL平台用户服务协议', '找回密码'],
                showLiList:false
			}
		},
		methods: {
			goBack() {
				this.$router.history.go(-1);
			},
            showLi(){
                this.showLiList = !this.showLiList;
            }
		}
	};
</script>

<style scoped>
	@import url("../assets/base.css");
	@import url("../assets/jeui.css");
	@import url("../assets/icon.css");
	@import url("../assets/members.css");
</style>