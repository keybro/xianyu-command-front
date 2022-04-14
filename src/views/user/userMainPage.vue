<template>
    <div class="user-main-page" style="width: 100%;margin-top: 3vh;">
        <div class="search" style="text-align: center;margin-right: 0px">
            <el-input placeholder="请输入搜索内容" v-model="input" class="input-with-select" style="width: 20%">
                <el-button slot="append" icon="el-icon-search" @click="gotoSearchPage()"></el-button>
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
                    <h4 style="text-align: left">总榜top100...(更多)</h4>
                    <el-row>
                        <!--      图书右块          -->
                        <el-col :span="4" v-for="(item, index) in mainPageBookList" :key="item" :offset="index > 0 ? 5 : 0" style="margin-left: 0px;padding: 8px;">
                            <el-card :body-style="{ padding: '0px' }" style="height: 50vh;">
                                <img :src="item.coverImg" class="image" style="width: 100%;height: 35vh" @click="showDetail(item)">
                                <div style="padding: 14px;">
                                    <span>{{item.bookName}}</span>
                                    <div class="bottom clearfix">
                                        作者：<span class="secondLine">{{item.author}}</span>
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
                    <h4 style="text-align: left">总榜top100...(更多)</h4>
                    <el-row>
                        <!--      图书右块          -->
                        <el-col :span="4" v-for="(item, index) in mainPageMovieList" :key="item" :offset="index > 0 ? 5 : 0" style="margin-left: 0px;padding: 8px;">
                            <el-card :body-style="{ padding: '0px' }" style="width:100%;height: 50vh">
                                <img :src="item.coverImg" class="image" style="width: 100%;height: 35vh" @click="showMovieDetail(item)">
                                <div style="padding: 14px;">
                                    <span>{{item.movieName}}</span>
                                    <div class="bottom clearfix">
                                        导演:<span class="secondLine">{{item.director}}</span>
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
                    <h4 style="text-align: left">总榜top100...(更多)</h4>
                    <el-row>
                        <!--      音乐右块          -->
                        <el-col :span="4" v-for="(item, index) in mainPageMusicList" :key="item" :offset="index > 0 ? 5 : 0" style="margin-left: 0px;padding: 8px;">
                            <el-card :body-style="{ padding: '0px' }" style="width:100%;height: 50vh">
                                <img :src="item.coverImg" class="image" style="width: 100%;height: 35vh" @click="showMusicDetail(item)">
                                <div style="padding: 14px;">
                                    <span class="secondLine">{{item.musicName}}</span>
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
                    <div> <el-button type="primary" round size="mini" style="margin-top: 10%" @click="toGroupClassify()">分类</el-button></div>

                    <el-button type="primary" round size="mini" style="margin-top: 10%" @click="tocreateGroup()">申请创建小组</el-button>
                </el-col>


                <el-col :span="20" style="text-align: center">
                    <div>
                        <h4>热门小组</h4>
                        <el-row>
                            <!--      小组第一行          -->
                            <el-col :span="4" v-for="(item) in groupInfoList" :key="item" style="margin-left: 0px;padding: 8px;">
                                <el-card :body-style="{ padding: '0px' }">
                                    <div style="float: left">
                                        <img :src="item.groupHead" class="image" style="width:5vw;height: 10vh;margin-right: 0px" @click="gotoGroupDetail(item)">

                                    </div>
                                    <div style="float: right;margin-right: 10%;margin-top: 10%;width: 6vw">
                                        <p class="group-name">{{item.groupName}}</p>
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
                                collapse-tags
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
                                v-if="groupImgUploadVisible == true"
                                list-type="picture-card"
                                style="border: 1px #e6e6e6 solid;margin-left: 3%;border-radius: 5px;"
                        >
                            <i class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>

                        <img :src="uploadImgURL" alt="" style="width: 50%;height: 20vh" v-if="uploadImgURL!=''">
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

                    <div class="makesure-button">
                        <el-button type="primary" size="medium" @click="makeSureUpload()">确定</el-button>

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
    import {uploadGroupImg} from "../../api/minio";
    import {getImgURLByName,createGroup,getUserMainPageGroups} from "../../api/group";

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
                options: [
                    {
                    value: '影视',
                    label: '影视'
                }, {
                    value: '音乐',
                    label: '音乐'
                }, {
                    value: '文学',
                    label: '文学'
                },{
                    value: '运动',
                    label: '运动'
                },{
                    value: '美食',
                    label: '美食'
                },{
                    value: '公益',
                    label: '公益'
                },{
                    value: '家庭',
                    label: '家庭'
                },{
                    value: '购物',
                    label: '购物'
                },{
                    value: '求职',
                    label: '求职'
                },{
                    value: '考试',
                    label: '考试'
                },{
                    value: '艺术',
                    label: '艺术'
                },{
                    value: '美术',
                    label: '美术'
                },{
                    value: '情感',
                    label: '情感'
                },{
                    value: '闲聊',
                    label: '闲聊'
                }
                ],
                value: [],
                dialogImageUrl: '',
                dialogVisible: false,
                groupImgUploadVisible: true,
                imageUrl: '',
                groupDescription:"",
                uploadFileImgFile:'',
                //创建小组的表单
                createGroup:{
                    groupName:"",
                    groupIntroduction:"",
                    label:"",
                    headImgName:"",
                    groupHead:""
                },
                //小组信息列表
                groupInfoList:[{}],
                groupInfoListFirstLine:[{}],
                groupInfoListSecondLine:[{}],
                uploadImgURL:""

            }
        },
        methods:{
            tocreateGroup(){
                console.log(this.groupImgUploadVisible)
                this.dialogTableVisible = true
                this.groupImgUploadVisible = true
            },
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
            uploadFile(obj){
                this.groupImgUploadVisible = false;
                this.uploadFileImgFile = obj
                console.log("执行了上传方法")
                console.log(obj["file"])
                console.log(obj)
                let fd = new FormData();
                console.log(obj.file.name)
                fd.append("file",obj["file"]);
                fd.append("name",obj.file.name);
                let params ={}
                this.$set(params,"name",obj.file.name)
                this.createGroup.headImgName = obj.file.name;
                getImgURLByName(params).then(resp =>{
                    this.uploadImgURL = resp.data.data;
                    console.log(this.uploadImgURL)
                })
                console.log("fd",fd)
                uploadGroupImg(fd).then(()=>{
                    this.$message({
                        message: '上传成功!',
                        type: 'success'
                    });
                })
            },
            //底部的确定上传按钮
            makeSureUpload(){
                this.createGroup.groupName = this.input;
                this.createGroup.groupIntroduction = this.groupDescription;
                for (let i = 0; i < this.value.length; i++) {
                    this.createGroup.label+=this.value[i]+"/";
                }
                // console.log(this.createGroup.label)
                // this.createGroup.label = this.value;
                // console.log(this.value)
                this.createGroup.groupHead = this.uploadImgURL;
                // console.log(this.createGroup)
                createGroup(this.createGroup).then(()=>{
                    this.$message({
                        message: '上传成功!',
                        type: 'success'
                    });
                })
                //使URL变为空，下次上传图片的时候不显示图片
                this.uploadImgURL = ""
                //关闭创建小组的弹窗
                this.dialogTableVisible = false;
                //创建小组数据列表初始化
                this.createGroup.groupName = "";
                this.createGroup.groupIntroduction = "";
                this.createGroup.label = "";
                this.headImgName="";
                this.groupHead='';
                this.input = '';
                this.value='';
                this.groupDescription = '';
                //使得第二次打开能有图片上传的组件
            },
            //点击跳转到小组详情页面
            gotoGroupDetail(data){
                this.$router.push("/homePage/groupDetail")
                sessionStorage.setItem("groupId",data.groupId);
            },
            //搜索页面调用的方法，将关键字存入浏览器中
            gotoSearchPage(){
                sessionStorage.setItem("keyword",this.input);
                this.$router.push("/homePage/searchPage")
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

            getUserMainPageGroups().then(resp =>{
                this.groupInfoList = resp.data.data
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

    .group-name{
        /*width: 300px;*/
        /* 规定当内容溢出元素框（容器）时隐藏 */
        overflow: hidden;
        /* 规定当文本溢出包含元素（容器）出现省略号 */
        text-overflow: ellipsis;
        /* 规定段落中的文本不进行换行 */
        white-space: nowrap;
    }

    /*帖子的详细信息中帖子内容的换行显示css*/
    .secondLine{
        width: 100%;
        font-size: medium;
        word-break: break-all;
        overflow: auto;
        white-space: normal;
    }

</style>