<template>
    <div class="signUp">
        <el-card shadow="always" class="box-card">
            <div class="username-input" style="margin: 10vw">
                <h1>注册页面</h1>
                <el-input placeholder="用户名" style="margin: 1vh" v-model="loginData.account"></el-input>
                <el-input placeholder="昵称" style="margin: 1vh" v-model="loginData.account"></el-input>
                <el-input  placeholder="密码" style="margin: 1vh;" v-model="loginData.password"></el-input>
                <el-input  placeholder="确认密码" style="margin: 1vh;" v-model="loginData.password"></el-input>
                <el-button type="primary" style="margin-top: 2vh" @click="login()">注册</el-button>
            </div>
        </el-card>
    </div>
    
</template>

<script>
    export default {
        name: "signUp",
        data:function () {
            return{
                loginData:{
                    account:"",
                    password:"",
                    type:2
                },
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