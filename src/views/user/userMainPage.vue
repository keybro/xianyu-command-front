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
                <el-col :span="5" style="text-align: center">
                    <h2 style="margin-top: 40%">书籍</h2>
<!--                    <p style="margin-top: 10%" >分类</p>-->
                    <el-button type="primary" round size="mini" style="margin-top: 10%" @click="toBookClassify()">分类</el-button>
<!--                    <p style="margin-top: 3%">总榜top100</p>-->
                </el-col>

                <el-col :span="19" style="text-align: center">
                    <h4>总榜top100...(更多)</h4>
                    <el-row>
                        <!--      图书右块          -->
                        <el-col :span="4" v-for="(item, index) in mainPageBookList" :key="item" :offset="index > 0 ? 5 : 0" style="margin-left: 0px;padding: 8px;">
                            <el-card :body-style="{ padding: '0px' }" style="height: 45vh;">
                                <img :src="item.coverImg" class="image" style="width: 100%;height: 35vh" @click="showDetail(item)">
                                <div style="padding: 14px;">
                                    <span>{{item.bookName}}</span>
                                    <div class="bottom clearfix">
                                        作者：<span>{{item.author}}</span>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

        <!--   电影栏目     -->
        <div class="book-new" style="border-bottom: 1px solid #e6e6e6;width: 100%;float: left;padding-bottom: 10px;margin-top: 10px">
            <el-row>
                <!--      图书左块          -->
                <el-col :span="5" style="text-align: center">
                    <h2 style="margin-top: 40%">电影</h2>
                    <el-button type="primary" round size="mini" style="margin-top: 10%" @click="toMovieClassify()">分类</el-button>
<!--                    <p style="margin-top: 3%">总榜top100</p>-->
                </el-col>

                <el-col :span="19" style="text-align: center">
                    <h4>总榜top100...(更多)</h4>
                    <el-row>
                        <!--      图书右块          -->
                        <el-col :span="4" v-for="(item, index) in mainPageMovieList" :key="item" :offset="index > 0 ? 5 : 0" style="margin-left: 0px;padding: 8px;">
                            <el-card :body-style="{ padding: '0px' }" style="width:100%;height: 45vh">
                                <img :src="item.coverImg" class="image" style="width: 100%;height: 35vh" @click="showMovieDetail(item)">
                                <div style="padding: 14px;">
                                    <span>{{item.movieName}}</span>
                                    <div class="bottom clearfix">
                                        导演:<span>{{item.director}}</span>
<!--                                        <el-button type="text" class="button">操作按钮</el-button>-->
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>



        <!--   音乐栏目     -->
        <div class="book-new" style="border-bottom: 1px solid #e6e6e6;width: 100%;float: left;padding-bottom: 10px;margin-top: 10px">
            <el-row>
                <!--      图书左块          -->
                <el-col :span="5" style="text-align: center">
                    <h2 style="margin-top: 40%">音乐</h2>
                    <el-button type="primary" round size="mini" style="margin-top: 10%" @click="toMusicClassify()">分类</el-button>
<!--                    <p style="margin-top: 3%">总榜top100</p>-->
                </el-col>

                <el-col :span="19" style="text-align: center">
                    <h4>总榜top100...(更多)</h4>
                    <el-row>
                        <!--      音乐右块          -->
                        <el-col :span="4" v-for="(item, index) in mainPageMusicList" :key="item" :offset="index > 0 ? 5 : 0" style="margin-left: 0px;padding: 8px;">
                            <el-card :body-style="{ padding: '0px' }" style="width:100%;height: 45vh">
                                <img :src="item.coverImg" class="image" style="width: 100%;height: 35vh" @click="showMusicDetail(item)">
                                <div style="padding: 14px;">
                                    <span>{{item.musicName}}</span>
                                    <div class="bottom clearfix">
                                        歌手:<span>{{item.performer}}</span>
<!--                                        <el-button type="text" class="button">操作按钮</el-button>-->
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>



        <!--   小组栏目     -->
        <div class="book-new" style="border-bottom: 1px solid #e6e6e6;width: 100%;float: left;padding-bottom: 10px;margin-top: 10px">
            <el-row>
                <!--      图书左块          -->
                <el-col :span="4" style="text-align: center">
                    <h2 style="margin-top: 15%">小组</h2>
                    <p style="margin-top: 10%">分类</p>
                    <el-button type="primary" round size="mini" style="margin-top: 10%" @click="dialogTableVisible = true">申请创建小组</el-button>
                </el-col>


                <el-col :span="20" style="text-align: center">
                    <div>
                        <h4>热门小组</h4>
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


        <!-- 建立小组对话框  -->
        <el-dialog title="申请创建小组" :visible.sync="dialogTableVisible">
            <el-row>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="16">
                    <!--         小组名称           -->
                    <div class="grid-content bg-purple-light" style="text-align: left;display: flex;margin-bottom: 1vh">
                        <p style="font-size: medium;margin-top: 1vh;margin-left: 3%">小组名称:</p>
                        <el-input v-model="input" placeholder="请输入小组名" style="width: 60%;margin-left: 1%"></el-input>
                    </div>
                    <!--        小组标签            -->
                    <div style="display: flex">
                        <p style="font-size: medium;margin-left: 3%;margin-top: 1vh">小组标签:</p>
                        <el-select
                                v-model="value"
                                multiple
                                filterable
                                allow-create
                                default-first-option
                                placeholder="请选择文章标签"
                                style="width: 60%;margin-left: 1%"
                        >
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>

                    <!--         选择小组头像           -->
                    <div style="display: flex;margin-top: 1vh">
                        <p style="font-size: medium;margin-left: 3%">请上传小组头像:</p>
                        <el-upload
                                class="avatar-uploader"
                                :http-request="uploadFile"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload"
                                v-if="this.groupImgUploadVisible == true"
                                style="border: 1px #e6e6e6 solid;margin-left: 3%;border-radius: 5px"
                        >
                            <i class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>

                        <img src="https://img9.doubanio.com/view/subject/s/public/s33821754.jpg" alt="" style="width: 50%;height: 20vh" v-if="this.groupImgUploadVisible == false">
                    </div>

                    <!--          输入小组描述          -->
                    <div class="grid-content bg-purple-light" style="text-align: left;display: flex;margin-bottom: 1vh;margin-top: 1vh">
                        <p style="font-size: medium;margin-top: 1vh;margin-left: 3%">小组描述:</p>
                        <el-input
                                type="textarea"
                                :autosize="{ minRows: 2, maxRows: 4}"
                                placeholder="请输入小组描述"
                                v-model="groupDescription"
                                style="width: 60%;margin-left: 1%"
                        >
                        </el-input>
                    </div>


                </el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            </el-row>

        </el-dialog>






    </div>
</template>

<script>

    import {getUserMainPageBook} from "../../api/book";
    import {getUserMainPageMovie} from "../../api/movie";
    import {getUserMainPageMusic} from "../../api/music";

    export default {
        name: "userMainPage",
        data:function () {
            return{
                dialogTableVisible:false,
                input:'',
                currentDate: new Date(),
                mainPageBookList:[{}],
                mainPageMovieList:[{}],
                mainPageMusicList:[{}],
                clickBookDetail:{},
                options: [{
                    value: 'HTML',
                    label: 'HTML'
                }, {
                    value: 'CSS',
                    label: 'CSS'
                }, {
                    value: 'JavaScript',
                    label: 'JavaScript'
                }],
                value: [],
                dialogImageUrl: '',
                dialogVisible: false,
                groupImgUploadVisible: true,
                imageUrl: '',
                groupDescription:""

            }
        },
        methods:{
            //点击书籍时跳转到书籍详情页
            showDetail(data){
                console.log("点击了")
                console.log(data)
                //将点击的图书id传入浏览器，方便详情页获取
                sessionStorage.setItem("detailId",data.bookId);
                //存储点击详情的id，1表示是图书
                sessionStorage.setItem("detailType",1)
                this.$router.push('/homePage/detail')

            },
            showMovieDetail(data){
                //将点击的图书id传入浏览器，方便详情页获取
                sessionStorage.setItem("detailId",data.movieId)
                //存储点击详情的id，2表示电影
                sessionStorage.setItem("detailType",2)
                this.$router.push('/homePage/detail')
            },
            showMusicDetail(data){
                //将点击的图书id传入浏览器，方便详情页获取
                sessionStorage.setItem("detailId",data.musicId)
                //存储点击详情的id，3表示音乐
                sessionStorage.setItem("detailType",3)
                this.$router.push('/homePage/detail')
            },
            //跳转到图书详情页面
            toBookClassify(){
                this.$router.push('/homePage/classifyOfBook')
            },
            toMovieClassify(){
                this.$router.push('/homePage/classifyOfMovie')
            },
            toMusicClassify(){
                this.$router.push('/homePage/classifyOfMusic')
            },
            handleAvatarSuccess(res, file) {
                console.log("成功执行")
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            uploadFile(item){
                console.log(item)
                this.groupImgUploadVisible = false;
                console.log(this.groupImgUploadVisible)
            }
        },
        created() {
            getUserMainPageBook().then(resp =>{
                this.mainPageBookList = resp.data.data;
                console.log(this.mainPageBookList)
            })
            getUserMainPageMovie().then(resp =>{
                this.mainPageMovieList = resp.data.data;
            })
            getUserMainPageMusic().then(resp =>{
                this.mainPageMusicList = resp.data.data;
            })

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


    .bg-purple {
        background: white;
    }
    .bg-purple-light {
        background: white;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

    .disabled el-upload el-upload--picture-card {
        display: none;
    }


</style>