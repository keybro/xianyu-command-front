<template>
    <div class="user-person-center" style="width: 100%;margin-top: 3vh;text-align: center">

        <el-row style="margin-top: 8px">
            <el-col :span="6"><div class="grid-content bg-purple" style="background: black"></div></el-col>
            <!-- 个人中心主体部分-->
            <el-col :span="12">
                <!--   头像和用户名             -->
                <el-row style="border-bottom: 1px solid #e6e6e6;border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;border-top: 1px solid #e6e6e6">
                    <div class="grid-content bg-purple-light">
                        <div>
                            <div class="head-picture" style="margin-right: 10px;float: left">
                                <el-avatar :size="120" :src="userHeadSrc" style="margin-left: 50px"></el-avatar>
                            </div>
                            <div style="float: left;margin-top: 15px" >
                                吃葡萄不吐葡萄皮
                                <el-button type="primary" style="margin-left: 10px">修改</el-button>
                                <p style="width: 20vw;color: #b28b48;margin-top: 5px">小组管理员</p>
                            </div>

                        </div>
                    </div>
                </el-row>

                <!--      头像下方          -->
                <el-row>
                    <el-col :span="6" style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;border-bottom: 1px solid #e6e6e6">
                        <div style="height: 70vh">
                            <p>我加入的小组</p>
                        </div>
                    </el-col>

                    <!--             群组列表               -->
                    <el-col :span="18" style="border-right: 1px solid #e6e6e6;border-bottom: 1px solid #e6e6e6">
                        <div style="height: 70vh" >
                            <div v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0" style="border-bottom: 1px solid #e6e6e6;text-align: left" >
                                <el-row>
                                    <el-col :span="5">
                                        <div style="margin-left: 5px;margin-top: 5px;margin-bottom: 5px">
                                            <img src="http://47.99.186.220:9000/recommend/book/goldTime.jpg?Content-Disposition=attachment%3B%20filename%3D%22book%2FgoldTime.jpg%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220331%2F%2Fs3%2Faws4_request&X-Amz-Date=20220331T023512Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=459b87d99862a2ab0ce3c938c3f8e55986350149347fe80a79cc18994d8a6a65" style="width: 100px;height: 10vh">
                                        </div>
                                    </el-col>
                                    <el-col :span="11">
                                        <div style="margin-top: 6%">
                                            <p>第一小组</p>
                                            <p>1919人</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div style="margin-top: 8%">
                                            <el-button type="primary" style="margin-left: 10%" v-if="index==0">解散</el-button>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>


                        <!--          群组底部分页                  -->
                            <div class="group-footer-page" style="margin-top: 25px">
                                <el-pagination
                                        background
                                        layout="prev, pager, next"
                                        :total="1000">
                                </el-pagination>
                            </div>
                        </div>


                    </el-col>

                </el-row>

            </el-col>

            <el-col :span="6"><div class="grid-content bg-purple" style="background: black"></div></el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "userPersonCenter",
        data:function () {
            return{
                userHeadSrc:"http://47.99.186.220:9000/recommend/userHeadl.jpg?Content-Disposition=attachment%3B%20filename%3D%22userHeadl.jpg%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220331%2F%2Fs3%2Faws4_request&X-Amz-Date=20220331T054551Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=faad523e80090426088051d10066b0c4b0a02a9289ae400b3c07170047b502c5",


            }
        }
    }
</script>

<style scoped>
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

</style>