<template>
    <div class="user-main-page" style="width: 100%;margin-top: 3vh;">
        <div class="search" style="text-align: center;margin-right: 0px">
            <el-input placeholder="请输入内容" v-model="input" class="input-with-select" style="width: 20%">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>

        <div style="margin-right: 10px">

        <!--  图书栏目-->
        <div class="book-new" style="border-bottom: 1px solid #e6e6e6;width: 100%;float: left;padding-bottom: 10px;margin-top: 10px">
            <el-row>
                <!--      图书左块          -->
                <el-col :span="4" style="text-align: center">
                    <h2 style="margin-top: 40%">书籍</h2>
                    <p style="margin-top: 10%">分类</p>
<!--                    <p style="margin-top: 3%">总榜top100</p>-->
                </el-col>

                <div>
                    <h4>总榜top100...(更多)</h4>
                    <el-row>
                        <!--      图书右块          -->
                        <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 5 : 0" style="margin-left: 0px;padding: 8px;">
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="http://47.99.186.220:9000/recommend/book/goldTime.jpg?Content-Disposition=attachment%3B%20filename%3D%22book%2FgoldTime.jpg%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220331%2F%2Fs3%2Faws4_request&X-Amz-Date=20220331T023512Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=459b87d99862a2ab0ce3c938c3f8e55986350149347fe80a79cc18994d8a6a65" class="image" style="width: 100%;height: 30vh">
                                <div style="padding: 14px;">
                                    <span>《镀金时代》</span>
                                    <div class="bottom clearfix">
<!--                                        <time class="time">{{ currentDate }}</time>-->
                                        作者：夏清影
                                        <el-button type="text" class="button">操作按钮</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
            </el-row>
        </div>

        <!--   电影栏目     -->
        <div class="book-new" style="border-bottom: 1px solid #e6e6e6;width: 100%;float: left;padding-bottom: 10px;margin-top: 10px">
            <el-row>
                <!--      图书左块          -->
                <el-col :span="4" style="text-align: center">
                    <h2 style="margin-top: 40%">电影</h2>
                    <p style="margin-top: 10%">分类</p>
<!--                    <p style="margin-top: 3%">总榜top100</p>-->
                </el-col>

                <div>
                    <h4>总榜top100...(更多)</h4>
                    <el-row>
                        <!--      图书右块          -->
                        <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 5 : 0" style="margin-left: 0px;padding: 8px;">
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="http://47.99.186.220:9000/recommend/movie/movie1.webp?Content-Disposition=attachment%3B%20filename%3D%22movie%2Fmovie1.webp%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220331%2F%2Fs3%2Faws4_request&X-Amz-Date=20220331T024751Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2358888ff768a4e7818391e446b6770d734a76593c924c68b973969722210e91" class="image" style="width: 100%;height: 30vh">
                                <div style="padding: 14px;">
                                    <span>《阿拉丁》</span>
                                    <div class="bottom clearfix">
                                        导演:盖·里奇
                                        <el-button type="text" class="button">操作按钮</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
            </el-row>
        </div>



        <!--   音乐栏目     -->
        <div class="book-new" style="border-bottom: 1px solid #e6e6e6;width: 100%;float: left;padding-bottom: 10px;margin-top: 10px">
            <el-row>
                <!--      图书左块          -->
                <el-col :span="4" style="text-align: center">
                    <h2 style="margin-top: 40%">音乐</h2>
                    <p style="margin-top: 10%">分类</p>
<!--                    <p style="margin-top: 3%">总榜top100</p>-->
                </el-col>

                <div>
                    <h4>总榜top100...(更多)</h4>
                    <el-row>
                        <!--      图书右块          -->
                        <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 5 : 0" style="margin-left: 0px;padding: 8px;">
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="http://47.99.186.220:9000/recommend/music/i%20am%20fine.jpg?Content-Disposition=attachment%3B%20filename%3D%22music%2Fi%20am%20fine.jpg%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220331%2F%2Fs3%2Faws4_request&X-Amz-Date=20220331T024211Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=68bd814aaa8a3d67958a71cf75a008003f43aba16515ac11cd4af9976b070180" class="image" style="width: 100%;height: 30vh">
                                <div style="padding: 14px;">
                                    <span>《我好吗?》</span>
                                    <div class="bottom clearfix">
                                        歌手:梁静茹
                                        <el-button type="text" class="button">操作按钮</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
            </el-row>
        </div>



        <!--   小组栏目     -->
        <div class="book-new" style="border-bottom: 1px solid #e6e6e6;width: 100%;float: left;padding-bottom: 10px;margin-top: 10px">
            <el-row>
                <!--      图书左块          -->
                <el-col :span="4" style="text-align: center">
                    <h2 style="margin-top: 15%">小组</h2>
                    <p style="margin-top: 10%">分类</p>
                    <p style="margin-top: 3%">申请建立小组</p>
                </el-col>


                <el-col :span="20" style="text-align: center">
                    <div>
                        <h4>热门小组</h4>
                        <el-row>
                            <!--      图书右块          -->
                            <el-col :span="4" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 6 : 0" style="margin-left: 0px;padding: 8px;">
                                <el-card :body-style="{ padding: '0px' }">
<!--                                    <img src="http://47.99.186.220:9000/recommend/book/goldTime.jpg?Content-Disposition=attachment%3B%20filename%3D%22book%2FgoldTime.jpg%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220331%2F%2Fs3%2Faws4_request&X-Amz-Date=20220331T023512Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=459b87d99862a2ab0ce3c938c3f8e55986350149347fe80a79cc18994d8a6a65" class="image" style="width: 30%;height: 10vh;margin-right: 0px">-->
<!--                                    <div style="padding: 14px;">-->
<!--                                        <span>好吃的汉堡</span>-->
<!--                                        <div class="bottom clearfix">-->
<!--                                            <time class="time">{{ currentDate }}</time>-->
<!--                                            <el-button type="text" class="button">操作按钮</el-button>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <div style="float: left">
                                        <img src="http://47.99.186.220:9000/recommend/book/goldTime.jpg?Content-Disposition=attachment%3B%20filename%3D%22book%2FgoldTime.jpg%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220331%2F%2Fs3%2Faws4_request&X-Amz-Date=20220331T023512Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=459b87d99862a2ab0ce3c938c3f8e55986350149347fe80a79cc18994d8a6a65" class="image" style="width:5vw;height: 10vh;margin-right: 0px">

                                    </div>
                                    <div style="float: right;margin-right: 10%;margin-top: 10%">
                                        <P>第一小组</P>
                                        <P style="margin-top: 2%">1989 人</P>
                                    </div>

                                </el-card>
                            </el-col>
                        </el-row>
                        <el-row>
                            <!--      图书右块          -->
                            <el-col :span="4" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 6 : 0" style="margin-left: 0px;padding: 8px;">
                                <el-card :body-style="{ padding: '0px' }">
                                    <div style="float: left">
                                        <img src="http://47.99.186.220:9000/recommend/book/goldTime.jpg?Content-Disposition=attachment%3B%20filename%3D%22book%2FgoldTime.jpg%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220331%2F%2Fs3%2Faws4_request&X-Amz-Date=20220331T023512Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=459b87d99862a2ab0ce3c938c3f8e55986350149347fe80a79cc18994d8a6a65" class="image" style="width:5vw;height: 10vh;margin-right: 0px">

                                    </div>
                                    <div style="float: right;margin-right: 10%;margin-top: 10%">
                                        <P>第一小组</P>
                                        <P style="margin-top: 2%">1989 人</P>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>

                </el-col>



            </el-row>
        </div>
        </div>

        <!--    页脚    -->
        <div class="footer" style="text-align: center;">
            <h3 style="margin-top: 3px;margin-bottom: 3px;">邮友论坛</h3>
        </div>



    </div>
</template>

<script>
    export default {
        name: "userMainPage",
        data:function () {
            return{
                input:'',
                currentDate: new Date()
            }
        }
    }
</script>

<style scoped>

    .image {
        width: 100%;
        display: block;
    }

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>