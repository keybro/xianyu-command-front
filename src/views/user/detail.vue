<template>
    <div class="detail">
<!--        <div class="header">-->
<!--            <el-button type="text">首页</el-button>-->
<!--            <el-button type="text" id="center">个人中心</el-button>-->
<!--        </div>-->
        <div class="main">
            <div class="left">
                <div class="image" style="margin-top: 12px">
                    <p id="title" style="margin-bottom: 5px">《{{bookDetail.bookName}}》</p>
                    <el-image
                            style="width: 25vh; height: 30vh;"
                            :src="bookDetail.coverImg">
                    </el-image>
                </div>
                <div id="content" style="text-align: left" v-if="judgeType()">
                    <p style="margin-top: 3px">作者:{{bookDetail.author}}</p>
                    <p style="margin-top: 3px">出版社:{{bookDetail.publish}}</p>
                    <p style="margin-top: 3px">出品方:{{bookDetail.producer}}</p>
                    <p style="margin-top: 3px">译者:{{bookDetail.translateMan}}</p>
                    <p style="margin-top: 3px">出版年:{{bookDetail.publishTime}}</p>
                    <p style="margin-top: 3px">页数:{{bookDetail.pageNumber}}</p>
                    <p style="margin-top: 3px">ISBN:{{bookDetail.isbn}}</p>
                </div>
            </div>
            <div class="right">
                <div id="score">
                    <span class="text">邮友评分</span>
                    <el-rate
                            v-model="bookDetail.score"
                            max="10"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}"
                            style="margin-top: 5px"
                    >
                    </el-rate>
                </div>
<!--                <p id="evaluate">3213人评价</p>-->
                <div id="review">
                    <el-link icon="el-icon-edit">写影评</el-link>
                </div>
            </div>
        </div>

        <!--   简介部分     -->
        <div class="introduction">
               <el-row style="margin-top: 6px">
                   <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                   <!--         作品的简介内容           -->
                   <el-col :span="22">
                       <div class="grid-content bg-purple-light" style="text-align: left">
                           <h4>简介:</h4>
                       </div>
                   </el-col>
                   <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
               </el-row>


                <el-row>
                    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                    <!--         作品的简介内容           -->
                    <el-col :span="22">
                        <div class="grid-content bg-purple-light" style="text-align: left">
                            {{bookDetail.bookIntroduce}}
                        </div>
                    </el-col>
                    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
        </div>


        <!--    喜欢推荐部分    -->
        <div class="like">

            <el-row style="margin-top: 6px">
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                <!--         喜欢推荐标题           -->
                <el-col :span="22">
                    <div class="grid-content bg-purple-light" style="text-align: left">
                        <h4>喜欢这个作品的人也喜欢</h4>
                    </div>
                </el-col>
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
            </el-row>

            <!--    喜欢推荐电影card部分        -->
            <el-row style="margin-top: 6px">
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                <!--         喜欢推荐标题           -->
                <el-col :span="22">
                    <div class="grid-content bg-purple-light" style="text-align: left">
<!--                        <div class="images">-->
<!--                            <div class="block" v-for="fit in fits" :key="fit">-->
<!--                                <el-image-->
<!--                                        style="width: 10vh; height: 10vh;"-->
<!--                                        :src="url"-->
<!--                                        :fit="fit">-->

<!--                                </el-image>-->
<!--                                <p>xxx</p>-->
<!--                            </div>-->
<!--                        </div>-->
                        <!--           图片card部分             -->
                        <el-row style="margin-top: 6px">
                            <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                            <!--         喜欢推荐标题           -->
                            <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 5 : 0" style="margin-left: 0px">
                                <img src="" alt="" style="width: 80%;height: 22vh">

                            </el-col>
                            <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                        </el-row>

                    </div>
                </el-col>
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
            </el-row>

        </div>
        <div class="comment">
            <el-row style="margin-top: 6px">
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                <!--         作品的简介内容           -->
                <el-col :span="22">
                    <div class="grid-content bg-purple-light" style="text-align: left">
                        <h4 style="margin-left: 0px">评论</h4>
                    </div>
                </el-col>
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
            </el-row>

            <el-row>
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                <!--         作品的简介内容           -->
                <el-col :span="22">
                    <div class="grid-content bg-purple-light" style="text-align: left">
                        <div class="left">
                            <el-button type="text">热门</el-button>
                            <el-button type="text" >最新</el-button>
                        </div>
                        <div style="width: 100%;height:10vh;border: 1px black solid">

                        </div>
                    </div>
                </el-col>
                <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
            </el-row>

        </div>
        <div class="pagination">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>

        <!--   写影评对话框     -->
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="evaluate">
                <el-form-item label="评分" :label-width="formLabelWidth">
                    <el-input v-model="evaluate.score" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="评语" :label-width="formLabelWidth">

                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    import {getBookDetailById} from "../../api/book";

    export default {
        name: "detail",
        data:function () {
            return{
                value: 5,
                fits: ['fill', 'fill', 'fill', 'fill', 'fill'],
                url: 'http://47.99.186.220:9000/recommend/book/goldTime.jpg?Content-Disposition=attachment%3B%20filename%3D%22book%2FgoldTime.jpg%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220331%2F%2Fs3%2Faws4_request&X-Amz-Date=20220331T023512Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=459b87d99862a2ab0ce3c938c3f8e55986350149347fe80a79cc18994d8a6a65',
                evaluate:{
                    score:'',
                    evaluateContent:''
                },
                //图书详情
                bookDetail:{
                    bookId:'',
                    bookName:'',
                    bookType:"",
                    bookIntroduce:"",
                    authorIntroduce:"",
                    author:"",
                    publish:"",
                    //原作名
                    originalName:"",
                    translateMan:"",
                    publishTime:"",
                    pageNumber:"",
                    //丛书
                    series:'',
                    //出品方
                    producer:"",
                    isbn:"",
                    coverImg:"",
                    score:""
                },
                //影视详情
                movieDetail:{
                    movieId:"",
                    movieName:"",
                    coverImg:"",
                    movieScore:"",
                    director:"",
                    scriptwriter:"",
                    actor:"",
                    movieType:"",
                    showTime:"",
                    movieLong:"",
                    description:""
                },
                //音乐详情
                musicDetail:{
                    musicId:"",
                    musicName:"",
                    musicType:"",
                    musicIntroduction:"",
                    //曲目
                    tracks:"",
                    performer:"",
                    //流派
                    genre:"",
                    collectionType:"",
                    publishTime:"",
                    publishName:"",
                    coverImg:"",
                    musicScore:""
                }
            }
        },
        methods:{
            judgeType(){
                console.log("判断结果")
                console.log(sessionStorage.getItem("detailType")==1)
                return sessionStorage.getItem("detailType")==1
            }

        },created() {
            let detailType = sessionStorage.getItem("detailType");
            if (detailType==1){
                let bookId = sessionStorage.getItem("detailId");
                getBookDetailById(bookId).then(resp =>{
                    this.bookDetail = resp.data.data;
                    console.log(this.bookDetail)
                })
            }
            // if (detailType==2){
            //     let movie = sessionStorage.getItem("detailId")
            //
            // }
        }
    }
</script>

<style scoped>
    .detail{
        /*width: 100%;*/
        border: #000 1px solid;
        position: relative;
        /*top: -5vh;*/
    }

    .header{
        border-bottom: #e6e6e6 1px solid;
        width: 100%;
        display: flex;
        justify-content: end;

    }

    .header #center{
        margin: 0 3vh;
    }

    .main{
        height: 40vh;
        border-bottom: #e6e6e6 1px solid;
        display: flex;
        justify-content: space-between;
    }

    .main .left{
        width: 250vh;
        border-right: #e6e6e6 1px solid;
        float: left;
        margin-left: 7vh;
    }

    .main .left .image{
        float: left;
    }

    .main .left #content{
        float: left;
        margin: 2vh;
        position: relative;
        top: 2vh;
    }

    .main .right{
        width: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: 10vh;
    }

    .introduction{
        height: 15vh;
        border-bottom: #e6e6e6 1px solid;

    }

    .introduction #introduction{
        float: left;
        margin: 7vh;
    }

    .like{
        height: 40vh;
        border-bottom: #e6e6e6 1px solid;
    }

    .like #like{
        display: flex;
        justify-content: flex-start;
        margin-left: 7vh;
    }
    .like .images{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-left: 7vh;
    }

    .like .images .block{
        margin-right: 22vh;
    }

    .comment{

        /*border-bottom: cornflowerblue 1px solid;*/
    }

    .comment h4{
        width: 100%;
        display: flex;
        justify-content: left;
        margin-left: 7vh;
    }

    .comment #con{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .comment #con .left{
        float: left;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-left: 7vh;
    }

    .comment #con .left #comment{
        margin: 0 3vh;
        position: relative;
        top: 2vh;
    }

    .comment .right{
        width: 72vh;
    }

    .comment .right p{
        float: left;
    }


    .bg-purple {
        /*background: black;*/
    }
    .bg-purple-light {
        /*background: black;*/
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }


</style>