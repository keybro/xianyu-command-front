<template>
    <div class="top-menu">
        <el-menu
                :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64">
            <el-menu-item index="1" style="float: left">
                <div class="logo">
                    <el-image
                            style="width: 10vw;height: 100%;padding-top: 2px"
                            :src="url"
                            :fit="contain"></el-image>
                </div>
            </el-menu-item>
            <el-menu-item index="2" style="float: right;color: white" @click="$router.push('/homePage/userPersonCenter')" v-if="this.isAdmin == false">个人中心</el-menu-item>
            <el-menu-item index="3" style="float: right;color: white" @click="$router.push('/homePage/list')" v-if="this.isAdmin == false">首页</el-menu-item>
            <el-menu-item index="3" style="float: right;color: white" v-if="this.isAdmin == true">ADMIN</el-menu-item>

        </el-menu>
        <div class="content">
            <pageView></pageView>
        </div>
    </div>
</template>

<script>
    import pageView from "./pageView";
    export default {
        name: "topMenu",
        components:{
            pageView
        },
        data:function () {
            return{
                activeIndex2: '1',
                isAdmin:false,
                url: 'http://47.99.186.220:9000/recommend/pageLogo.png?Content-Disposition=attachment%3B%20filename%3D%22pageLogo.png%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220424%2F%2Fs3%2Faws4_request&X-Amz-Date=20220424T121900Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fe650bec3a82413769bbbbc2a6667c52847c001b7295a473754c74a9db225ba2'
            }
        },
        methods:{
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created() {
            let is = sessionStorage.getItem("currentUserType");
            if (is == '1'){
                this.isAdmin = false;
            }
            else {
                this.isAdmin = true;
            }

        }
    }
</script>

<style scoped>

</style>