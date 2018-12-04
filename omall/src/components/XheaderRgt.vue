<template>
<!--注册页面头部组件-->
    <header class="msheadbox">
        <div class="msfixe mspurple">
            <div class="aubgs msbacks" id="goback"></div>
            <h2 class="jeflex mstitle" v-if="status==='register'">注册登录</h2>
            <div class="aubgs"></div>
        </div>
    </header>
</template>

<script>
    export default {
        components: {
          
        },
        props: ["status"],
        data(){
            return {
                Header:['注册账号']
            }
        }
    };
    
</script>

<style scoped>

</style>