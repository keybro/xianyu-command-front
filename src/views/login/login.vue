<template>
    <div style="background-image: url('http://47.99.186.220:9000/recommend/loginBack.png?Content-Disposition=attachment%3B%20filename%3D%22loginBack.png%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220424%2F%2Fs3%2Faws4_request&X-Amz-Date=20220424T115020Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=757e3b3c45af97f4681061be7ae718ee23e6b0eec81213f16925ffb8b9899f55');height: 100vh">
        <div class="login-container" style="padding-top: 10px">
            <el-card shadow="always" class="box-card" style="background-image: url('http://47.99.186.220:9000/recommend/loginBack.png?Content-Disposition=attachment%3B%20filename%3D%22loginBack.png%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220424%2F%2Fs3%2Faws4_request&X-Amz-Date=20220424T115020Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=757e3b3c45af97f4681061be7ae718ee23e6b0eec81213f16925ffb8b9899f55')">
                <div class="username-input" style="margin: 10vw">
                    <h1>登录页面</h1>
                    <el-input placeholder="用户名" style="margin: 1vh" v-model="userData.account"></el-input>
                    <el-input placeholder="密码" style="margin: 1vh;" v-model="userData.password" show-password></el-input>
                    <div class="auth">
                        <el-input placeholder="验证码" style="margin: 1vh; width: 45%" v-model="authCode"></el-input>
                        <!--      图片验证码          -->
                        <div class="get-code" @click="refreshCode()">
                            <s-identify :identifyCode="identifyCode" style="margin-top: 1vh"></s-identify>
                        </div>
                    </div>

                    <el-button type="primary" style="margin-top: 2vh" @click="login()">登录</el-button>
                </div>

                <!--    注册链接        -->
                <div>
                    <p style="margin-top: 0px;color: #409eff" @click="toSignUp()">没有账号?前往注册</p>
                </div>
            </el-card>


        </div>

    </div>

</template>

<script>
    // import router from "@/router";
    import {login} from "../../api/login";
    import {setToken} from "@/utils/auth";
    import sIdentify from "../../components/sIdentify";
    import {getCurrentUserInfo} from "../../api/user";

    export default {
        name: "login",
        components: {
            sIdentify
        },
        data: function () {
            return {
                identifyCode: "",
                identifyCodes: "0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ",//随便打的
                authCode: '',
                userData: {
                    account: "",
                    password: "",
                    type: "1"
                },
                loginLoading: false,
            }
        },
        methods: {

            //登录
            login() {
                this.loginLoading = true;
                console.log(this.authCode)
                console.log(this.identifyCode)
                this.loginLoading = true

                //先校验验证码是否输入正确
                if (this.authCode == this.identifyCode) {
                    console.log("正确")
                    // this.$router.push("/hello")
                    login(this.userData).then(resp => {
                        let token = resp.data.data
                        setToken(token);
                        //设置延时，防止第一次登陆的时候无法得到token
                        setTimeout(() => {
                            sessionStorage.setItem("token", token)
                        }, 100);
                        if (resp.data.code == 0) {
                            getCurrentUserInfo().then(resp => {
                                sessionStorage.setItem("currentUserType",resp.data.data.type)
                                if (resp.data.data.type == '1') {
                                    this.$store.dispatch("setUserInfo")
                                    this.$router.push("/homePage")
                                    this.$message({
                                        message: "登录成功！",
                                        type: "success"
                                    })
                                }
                                if (resp.data.data.type == '2') {
                                    this.$store.dispatch("setUserInfo")
                                    this.$router.push("/homePage/admin")
                                    this.$message({
                                        message: "登录成功！",
                                        type: "success"
                                    })
                                }
                            })
                        } else {
                            this.$message({
                                message: "登录失败，请重新输入",
                                type: "error"
                            });
                            this.loginLoading = false
                        }
                    }).catch(() => {
                        this.loginLoading = false
                    })

                } else {
                    this.$message({
                        message: "验证码错误",
                        type: "error"
                    })
                }
            },

            //跳转到注册界面
            toSignUp() {
                this.$router.push("/signUp")
            },


            //刷新验证码
            refreshCode() {
                console.log("执行了")
                this.identifyCode = "";
                this.makeCode(this.identifyCodes, 4);
            },

            //生成随机数
            randomNum(min, max) {
                max = max + 1
                return Math.floor(Math.random() * (max - min) + min)
            },
            //随机生成字符串
            makeCode(data, len) {
                for (let i = 0; i < len; i++) {
                    this.identifyCode += data[this.randomNum(0, data.length - 1)]
                }
                console.log("字符串是" + this.identifyCode)
            },

        },
        created() {
            this.refreshCode()
            console.log("开始创建")
        }

    }
</script>

<style scoped>
    .login-container {
        width: 40%;
        margin: 0px auto;
    }

    .auth {
        display: flex;
    }

</style>