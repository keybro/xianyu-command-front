<template>
    <div class="login-container" >
        <el-card shadow="always" class="box-card">
            <div class="username-input" style="margin: 10vw">
                <h1>登录页面</h1>
                <el-input placeholder="用户名" style="margin: 1vh" v-model="loginData.account"></el-input>
                <el-input  placeholder="密码" style="margin: 1vh;" v-model="loginData.password"></el-input>
                <div class="auth">
                    <el-input  placeholder="验证码" style="margin: 1vh; width: 45%" v-model="loginData.authCode"></el-input>
                    <!--      图片验证码          -->
                    <div class="get-code" @click="refreshCode()">
                        <s-identify :identifyCode="identifyCode" style="margin-top: 1vh"> </s-identify>
                    </div>
                </div>

                <el-button type="primary" style="margin-top: 2vh" @click="login()">登录</el-button>
            </div>

            <!--    注册链接        -->
            <div >
                <p style="margin-top: 0px;color: #409eff" @click="toSignUp()">没有账号?前往注册</p>
            </div>
        </el-card>



    </div>
</template>

<script>
    // import router from "@/router";
    // import {login} from "@/api/login";
    // import {setToken} from "@/utils/auth";
    import sIdentify from "../../components/sIdentify";

    export default {
        name: "login",
        components:{
            sIdentify
        },
        data:function () {
            return{
                identifyCode: "",
                identifyCodes: "0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ",//随便打的
                loginData:{
                    account:"",
                    password:"",
                    type:2,
                    authCode:''
                },
                loginLoading: false,
            }
        },
        methods:{
            login(){
                this.loginLoading = true;
                console.log(this.authCode)
                console.log(this.identifyCode)
                if (this.loginData.authCode==this.identifyCode){
                    console.log("正确")
                    this.$router.push("/hello")

                }

                        // login(loginData).then(resp =>{
                        //     let token = resp.data.data;
                        //     setToken(token);
                        //     //设置延时，防止第一次登陆的时候无法得到token
                        //     setTimeout(() => {
                        //         sessionStorage.setItem("token",token)
                        //     }, 100);
                        //
                        //     if (resp.data.code==0){
                        //         // 通过store.dispatch方法调用vuex中的action方法修改
                        //         this.$store.dispatch("setUserInfo")
                        //         this.$router.push("/hello")
                        //         router.push("/hello");
                        //     }
                        // })

            },
            toSignUp(){
                this.$router.push("/signUp")

            },
            refreshCode() {//
                console.log("执行了")
                this.identifyCode = "";
                this.makeCode(this.identifyCodes,4);
            },
            randomNum (min, max) {
                max = max + 1
                return Math.floor(Math.random() * (max - min) + min)
            },
            //随机生成字符串
            makeCode (data, len) {
                for (let i = 0; i < len; i++) {
                    this.identifyCode += data[this.randomNum(0, data.length - 1)]
                }
                console.log("字符串是"+this.identifyCode)
            },

        },
        created(){
            this.refreshCode()
            console.log("开始创建")
        }

    }
</script>

<style scoped>
    .login-container{
        width: 40%;
        margin: 0px auto;
    }
    .auth{
        display: flex;
    }

</style>