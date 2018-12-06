<template>

    <body marpad="padding" fixtop="50px" fixbot="20px" class="" style="width: 100%; padding-top: 50px; padding-bottom: 20px;">
        <div>
            <XheaderRgt status="password" />
            <!--找回密码表单-->
            <div class="mswrapper">
                <ul class="register-box g6 f14" id="memberYCIDfald" fald="0">
                    <li class="pt10 pb10 jepor">
                        <p class="pl10 g6 pb5">手机号码</p>
                        <p class="bg-wh jepor flexbox f14 p10">
                            <input class="jeflex show input-noneLine" type="text" placeholder="请输入手机号码" id="memberPhone" name="memberPhone" @blur ="seeNumber" ref = "phoneNumber"/>
                        </p>
                    </li>
                    <li class="pt10 pb10 jepor">
                        <p class="pl10 g6 pb5">验证码</p>
                        <p class="bg-wh jepor flexbox f14 p10">
                            <input class="jeflex show input-noneLine" type="text" placeholder="请输入验证码" id="yzm"/>
                            <input v-if="showCountDown" type="button" class="btn-code jepoa white bg-purple fmy" id="resetCap" v-bind:value="showBut" @click="getNum"/>
                             <input v-if="!showCountDown" type="button" class="btn-code jepoa white bg-purple fmy" id="resetCap" v-bind:value="showBut" />
                        </p>
                    </li>
                    <li class="pt10 pb10 jepor">
                        <p class="pl10 g6 pb5">新密码</p>
                        <p class="bg-wh jepor flexbox f14 p10">
                            <input class="jeflex show input-noneLine" id="password1" name="password" type="password" placeholder="请输入8-20位密码(不能纯数字)登录密码"/>
                        </p>
                    </li>
                    <li class="pt10 pb10 jepor">
                        <p class="pl10 g6 pb5">确认密码</p>
                        <p class="bg-wh jepor flexbox f14 p10">
                            <input class="jeflex show input-noneLine" type="password" placeholder="请输入8-20位密码(不能纯数字)登录密码" id="password2" />
                        </p>
                    </li>
                </ul>
                <div class="btn-div pt20 pb20 pl10 pr10"><span class="show rdu5 bg-purple white tc p10 f14" id="backpsw">找回密码</span></div>
            </div>
        </div>
        <!--确认注册-->
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

            }
        }    
}
</script >
<style scoped>
	@import url("../assets/jeui.css");
</style>