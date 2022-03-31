<template>
    <div class="signUp">
        <el-card shadow="always" class="box-card" style="background: #babcbe">
            <div class="username-input" style="margin: 10vw">
                <h1>注册页面</h1>
                <el-input placeholder="用户名" style="margin: 1vh" v-model="loginData.account"></el-input>
                <el-input placeholder="昵称" style="margin: 1vh" v-model="loginData.nickname"></el-input>
                <el-input  placeholder="密码" style="margin: 1vh;" v-model="loginData.password"></el-input>
                <el-input  placeholder="确认密码" style="margin: 1vh;" v-model="loginData.passwordSure"></el-input>
                <div style="width: 100%;margin-top: 1vh">
                    <el-radio v-model="loginData.sex" label="1">男</el-radio>
                    <el-radio v-model="loginData.sex" label="2">女</el-radio>
                </div>
                <el-button type="primary" style="margin-top: 2vh" @click="create()">注册</el-button>
            </div>
        </el-card>
    </div>
    
</template>

<script>
    import {create} from "../../api/login";
    import {setToken} from "../../utils/auth";

    export default {
        name: "signUp",
        data:function () {
            return{
                loginData:{
                    account:"",
                    nickname:"",
                    password:"",
                    passwordSure:"",
                    type:1,
                    sex:"1"
                },
                radio: '1'
            }
        },
        methods:{
            create(){
                if (this.loginData.password==this.loginData.passwordSure) {
                    create(this.loginData).then(resp => {

                        let token = resp.data.data
                        setToken(token);
                        //设置延时，防止第一次登陆的时候无法得到token
                        setTimeout(() => {
                            sessionStorage.setItem("token", token)
                        }, 100);

                        if (resp.data.code == 0) {
                            this.$store.dispatch("setUserInfo")
                            this.$router.push("/homePage")
                            this.$message({
                                message: "登录成功！",
                                type: "success"
                            })
                        } else {
                            this.$message({
                                message: "登录失败，请重新输入",
                                type: "error"
                            });
                        }
                    })
                }else {
                    this.$message({
                        message: "两次密码不一致",
                        type: "error"
                    });
                }

            }
        }
    }
</script>

<style scoped>

    .signUp{
        width: 40%;
        margin: 0px auto;
    }

</style>