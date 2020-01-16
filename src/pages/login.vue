<template>
    <div class="login">
        <p class="login-title">
            <span class="login-title_left">Lean</span>
            <span class="login-title_right">App</span>
        </p>

        <div class="section">
            <input class="section-input" placeholder-class="input-holder" placeholder="请输入您的账号" v-model="from.account"/>
        </div>

        <div class="section">
            <input class="section-input" type="password" placeholder-class="input-holder" placeholder="请输入您的密码" v-model="from.password"/>
        </div>

        <button class="btn" @click="login">登录</button>

        <p class="login-text">版本归属@LR所有</p>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                from:{
                    account:'',
                    password:''
                }
            }
        },
        methods:{
            login(){
               if(!this.from.account && !this.password){
                   alert("请填写账号密码");
                   return
               }

               setTimeout(()=>{
                  this.$store.commit('login',{
                       account:this.from.account,
                       password:this.from.password

                   });

                   this.$store.commit('setMemberInfo',{
                       userStatus:0,
                       vipLevel:0
                   });

                   this.$router.push('/')

               },500)
            }
        }
    }
</script>

<style scoped>
    .login{
        position: relative;
        top: 0;
        left: 0;
        padding: 0 45px;
    }
    .login p{
        text-align: center;
    }
    .login p.login-title{
        color: #111111;
        font-size: 36px;
        padding: 40px 0 30px;
    }
    .login p.login-title .login-title_left{
        padding: 0 15px;
    }
    .login p.login-title .login-title_right{
        background-color: #f29d38;
        border-radius: 5px;
        padding: 0 15px;
    }
    .section-input{
        width: 100%;
        height: auto;
        border: none;
        margin-bottom: 30px;
        outline: none;
        font-size: 16px;
        line-height: 1.6;
        border-bottom: 1px solid #666;
    }
    .input-holder{
        color: #345122;
        font-size: 12px;
    }
    .btn {
        width: 100%;
        height: auto;
        color: #fff;
        background: #373737;
        margin: 10px 0 20px;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 16px;
    }
    .btn-primary {
        color: #373737;
        background: #fff;
    }
    .login-text {
        position: fixed;
        left: 0;
        bottom: 60px;
        width: 100%;
        height: auto;
        font-size: 12px;
        color: #777777;
        text-align: center;
    }


</style>