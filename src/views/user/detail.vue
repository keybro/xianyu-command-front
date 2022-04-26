<template>
    <div class="detail">

        <div class="main">
            <div class="left">
                <div class="image" style="margin-top: 12px">
                    <p class="title" style="margin-bottom: 5px" v-if="judgeType">{{bookDetail.bookName}}</p>
                    <p class="title" style="margin-bottom: 5px" v-if="judgeIsMovieType">{{movieDetail.movieName}}</p>
                    <p class="title" style="margin-bottom: 5px" v-if="judgeIsMusicType">{{musicDetail.musicName}}</p>

                    <img :src="bookDetail.coverImg" alt="" style="width: 25vh; height: 30vh;" v-if="judgeType()">
                    <img :src="movieDetail.coverImg" alt="" style="width: 25vh; height: 30vh;"
                         v-if="judgeIsMovieType()">
                    <img :src="musicDetail.coverImg" alt="" style="width: 25vh; height: 30vh;"
                         v-if="judgeIsMusicType()">

                </div>

                <div id="content" style="text-align: left;width: 60%">
                    <!--       图书栏目右侧显示信息             -->
                    <p style="margin-top: 3px" v-if="judgeType()">作者:{{bookDetail.author}}</p>
                    <p style="margin-top: 3px" v-if="judgeType()">出版社:{{bookDetail.publish}}</p>
                    <p style="margin-top: 3px" v-if="judgeType()">出品方:{{bookDetail.producer}}</p>
                    <p style="margin-top: 3px" v-if="judgeType()">译者:{{bookDetail.translateMan}}</p>
                    <p style="margin-top: 3px" v-if="judgeType()">类型:{{bookDetail.bookType}}</p>
                    <p style="margin-top: 3px" v-if="judgeType()">出版年:{{bookDetail.publishTime}}</p>
                    <p style="margin-top: 3px" v-if="judgeType()">页数:{{bookDetail.pageNumber}}</p>
                    <p style="margin-top: 3px" v-if="judgeType()">ISBN:{{bookDetail.isbn}}</p>
                    <!--       电影栏目右侧显示信息             -->
                    <p style="margin-top: 3px" v-if="judgeIsMovieType()">导演:{{movieDetail.director}}</p>
                    <p style="margin-top: 3px" v-if="judgeIsMovieType()">编剧:{{movieDetail.scriptwriter}}</p>
                    <p style="margin-top: 3px" v-if="judgeIsMovieType()">主演:{{movieDetail.actor}}</p>
                    <p style="margin-top: 3px" v-if="judgeIsMovieType()">类型:{{movieDetail.movieType}}</p>
                    <p style="margin-top: 3px" v-if="judgeIsMovieType()">上映时间:{{movieDetail.showTime}}</p>
                    <p style="margin-top: 3px" v-if="judgeIsMovieType()">片长:{{movieDetail.movieLong}}</p>
                    <!--       音乐栏目右侧显示信息             -->
                    <p style="margin-top: 3px" v-if="judgeIsMusicType()">表演者:{{musicDetail.performer}}</p>
                    <p style="margin-top: 3px" v-if="judgeIsMusicType()">流派:{{musicDetail.genre}}</p>
                    <p style="margin-top: 3px" v-if="judgeIsMusicType()">专辑类型:{{musicDetail.collectionType}}</p>
                    <p style="margin-top: 3px" v-if="judgeIsMusicType()">歌曲类型:{{musicDetail.musicType}}</p>
                    <p style="margin-top: 3px" v-if="judgeIsMusicType()">发行时间:{{musicDetail.publishTime}}</p>
                    <p style="margin-top: 3px" v-if="judgeIsMusicType()">出版者:{{musicDetail.publishName}}</p>
                </div>

            </div>
            <div class="right">
                <div id="score">
                    <span class="text">邮友评分</span>
                    <el-rate
                            v-model="currentScore"
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
                    <el-link icon="el-icon-edit" @click="toWriteComment()" v-if="judgeType()">写书评</el-link>
                    <el-link icon="el-icon-edit" @click="toWriteComment()" v-if="judgeIsMovieType()">写影评</el-link>
                    <el-link icon="el-icon-edit" @click="toWriteComment()" v-if="judgeIsMusicType()">写音评</el-link>
                </div>
            </div>
        </div>

        <!--   简介部分     -->
        <div class="introduction">
            <el-row style="margin-top: 6px">
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <!--         作品的简介内容           -->
                <el-col :span="22">
                    <div class="grid-content bg-purple-light" style="text-align: left">
                        <h4>简介:</h4>
                    </div>
                </el-col>
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>


            <el-row style="margin-bottom: 10px">
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <!--         作品的简介内容           -->
                <el-col :span="22">
                    <div class="grid-content bg-purple-light" style="text-align: left">
                        {{currentIntroduce}}
                    </div>
                </el-col>
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
        </div>


        <!--    喜欢推荐部分    -->
        <div class="like">

            <el-row style="margin-top: 6px">
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <!--         喜欢推荐标题           -->
                <el-col :span="22">
                    <div class="grid-content bg-purple-light" style="text-align: left">
                        <h4>喜欢这个作品的人也喜欢</h4>
                    </div>
                </el-col>
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>

            <!--    推荐card书籍部分        -->
            <el-row style="margin-top: 6px" v-if="judgeType()">
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <!--         喜欢推荐标题           -->
                <el-col :span="22">
                    <div class="grid-content bg-purple-light" style="text-align: left">

                        <!--           图片card部分             -->
                        <el-row style="margin-top: 6px">
                            <el-col :span="1">
                                <div class="grid-content bg-purple"></div>
                            </el-col>
                            <!--         喜欢推荐标题           -->
                            <el-col :span="4" v-for="(item, index) in bookRecommendList" :key="item"
                                    :offset="index > 0 ? 5 : 0" style="margin-left: 0px">
                                <img :src="item.coverImg" alt="" style="width: 80%;height: 25vh"
                                     @click="clickBookRecommend(item.bookId)">

                                <p>《{{item.bookName}}》</p>

                            </el-col>
                            <el-col :span="1">
                                <div class="grid-content bg-purple"></div>
                            </el-col>
                        </el-row>

                    </div>
                </el-col>
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>


            <!--    推荐card电影部分        -->
            <el-row style="margin-top: 6px" v-if="judgeIsMovieType()">
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <!--         喜欢推荐标题           -->
                <el-col :span="22">
                    <div class="grid-content bg-purple-light" style="text-align: left" v-if="judgeIsMovieType()">

                        <!--           图片card部分             -->
                        <el-row style="margin-top: 6px">
                            <el-col :span="1">
                                <div class="grid-content bg-purple"></div>
                            </el-col>
                            <!--         喜欢推荐标题           -->
                            <el-col :span="4" v-for="(item, index) in movieRecommendList" :key="item"
                                    :offset="index > 0 ? 5 : 0" style="margin-left: 0px">
                                <img :src="item.coverImg" alt="" style="width: 80%;height: 25vh"
                                     @click="clickMovieRecommend(item.movieId)">
                                <div>
                                    <p style="margin-left: 23%">《{{item.movieName}}》</p>
                                </div>
                            </el-col>
                            <el-col :span="1">
                                <div class="grid-content bg-purple"></div>
                            </el-col>
                        </el-row>

                    </div>
                </el-col>
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>


            <!--    推荐card电影部分        -->
            <el-row style="margin-top: 6px" v-if="judgeIsMusicType()">
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <!--         喜欢推荐标题           -->
                <el-col :span="22">
                    <div class="grid-content bg-purple-light" style="text-align: left">

                        <!--           图片card部分             -->
                        <el-row style="margin-top: 6px">
                            <el-col :span="1">
                                <div class="grid-content bg-purple"></div>
                            </el-col>
                            <!--         喜欢推荐标题           -->
                            <el-col :span="4" v-for="(item, index) in musicRecommendList" :key="item"
                                    :offset="index > 0 ? 5 : 0" style="margin-left: 0px">
                                <img :src="item.coverImg" alt="" style="width: 80%;height: 25vh"
                                     @click="clickMusicRecommend(item.musicId)">
                                <div>
                                    <p style="margin-left: 23%">《{{item.musicName}}》</p>
                                </div>
                            </el-col>
                            <el-col :span="1">
                                <div class="grid-content bg-purple"></div>
                            </el-col>
                        </el-row>

                    </div>
                </el-col>
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
        </div>


        <!--  评论显示部分      -->
        <div class="comment">
            <el-row style="margin-top: 6px">
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <!--         作品的简介内容           -->
                <el-col :span="22">
                    <div class="grid-content bg-purple-light" style="text-align: left">
                        <h4 style="margin-left: 0px">评论</h4>
                    </div>
                </el-col>
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <!--         作品的简介内容           -->
                <el-col :span="22">
                    <div class="grid-content bg-purple-light" style="text-align: left">
                        <div class="left">
                            <el-button type="text">最新</el-button>
                        </div>

                        <div style="width: 100%;border: 1px black solid;padding-top: 1vh;padding-bottom: 1vh">
                            <!--           评论的内容部分                 -->
                            <div class="user-comment-content"
                                 style="margin-left:1%;margin-right: 1%; border-top: 1px #e6e6e6 solid"
                                 v-for="(item, index) in commentList" :key="item" :offset="index > 0 ? 5 : 0">
                                <div class="comment-header" style="display: flex;margin-left: 1%;margin-top: 5px">
                                    <p style="color: #409eff;margin-top: 2px">{{item.publicUserId}}</p>&nbsp;&nbsp;看过&nbsp;&nbsp;
                                    <el-rate
                                            v-model="item.score"
                                            disabled
                                            text-color="#ff9900"
                                            score-template="{value}"
                                            style="margin-top: 2px"
                                    >
                                    </el-rate>
                                    <p style="color:#b1aaaa;margin-top: 2px;margin-left: 5%">{{item.publicTime}}</p>
                                </div>
                                <div class="comment-main" style="margin-left: 1%;margin-bottom: 5px;margin-top: 3px">
                                    <p>{{item.commentContent}}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </el-col>
                <el-col :span="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>

        </div>
        <div class="pagination">
            <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-sizes="[10,15,20]"
                    :current-page="paging.currentPage"
                    :page-size="paging.limit"
                    layout="total,sizes,prev,pager,next"
                    :total="100">
            </el-pagination>
        </div>

        <!--   写评语对话框     -->
        <el-dialog title="" :visible.sync="dialogTableVisible">
            <div class="comment-header" style="background: #f8f8f8;text-align: right">
                <el-button type="success" @click="submitBookComment()" v-if="judgeType()">提交书籍评价</el-button>
                <el-button type="success" @click="submitMovieComment()" v-if="judgeIsMovieType()">提交电影评价</el-button>
                <el-button type="success" @click="submitMusicComment()" v-if="judgeIsMusicType()">提交音乐评价</el-button>
            </div>
            <div class="comment-object" style="background: #f8f8f8;margin-top: 1vh;text-align: left">
                <p style="font-size: medium;margin-left: 3%" v-if="judgeType()">[书籍] 《{{this.bookDetail.bookName}}》</p>
                <p style="font-size: medium;margin-left: 3%" v-if="judgeIsMovieType()">[电影]
                    《{{this.movieDetail.movieName}}》</p>
                <p style="font-size: medium;margin-left: 3%" v-if="judgeIsMusicType()">[音乐]
                    《{{this.musicDetail.musicName}}》</p>
            </div>
            <div class="comment-score" style="background: #f8f8f8;text-align: left">
                <div style="margin-left: 3%;margin-top: 1vh">
                    评分：
                    <el-input v-model="bookComment.score" placeholder="请输入您的评分" style="width: 92%"></el-input>
                </div>
            </div>

            <div class="comment-content" style="background: #f8f8f8;text-align: left">
                <div style="display: flex;margin-left: 3%;margin-top: 1vh">
                    评话：
                    <el-input
                            type="textarea"
                            :autosize="{ minRows: 3, maxRows: 6}"
                            placeholder="请输入您的评话"
                            v-model="bookComment.commentContent"
                            style="width: 92%"
                    >
                    </el-input>
                </div>
            </div>

            <div class="comment-footer" style="margin-top: 3vh"></div>
        </el-dialog>

    </div>
</template>

<script>
    import {getBookDetailById, getBookRecommendById} from "../../api/book";
    import {getMovieDetailById, getMovieRecommendById} from "../../api/movie";
    import {getMusicDetailById, getMusicRecommendById} from "../../api/music";
    import {pageGetAllCommentByTypeAndId, writeBookComment} from "../../api/resource-comment";
    import {getUserInfoById} from "../../api/user";

    export default {
        name: "detail",
        data: function () {
            return {
                value: 5,
                fits: ['fill', 'fill', 'fill', 'fill', 'fill'],
                url: 'http://47.99.186.220:9000/recommend/book/goldTime.jpg?Content-Disposition=attachment%3B%20filename%3D%22book%2FgoldTime.jpg%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220331%2F%2Fs3%2Faws4_request&X-Amz-Date=20220331T023512Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=459b87d99862a2ab0ce3c938c3f8e55986350149347fe80a79cc18994d8a6a65',
                evaluate: {
                    score: '',
                    evaluateContent: ''
                },
                dialogTableVisible: false,
                //图书详情
                bookDetail: {
                    bookId: '',
                    bookName: '',
                    bookType: "",
                    bookIntroduce: "",
                    authorIntroduce: "",
                    author: "",
                    publish: "",
                    //原作名
                    originalName: "",
                    translateMan: "",
                    publishTime: "",
                    pageNumber: "",
                    //丛书
                    series: '',
                    //出品方
                    producer: "",
                    isbn: "",
                    coverImg: "",
                    score: ""
                },
                //影视详情
                movieDetail: {
                    movieId: "",
                    movieName: "",
                    coverImg: "",
                    movieScore: "",
                    director: "",
                    scriptwriter: "",
                    actor: "",
                    movieType: "",
                    showTime: "",
                    movieLong: "",
                    description: ""
                },
                //音乐详情
                musicDetail: {
                    musicId: "",
                    musicName: "",
                    musicType: "",
                    musicIntroduction: "",
                    //曲目
                    tracks: "",
                    performer: "",
                    //流派
                    genre: "",
                    collectionType: "",
                    publishTime: "",
                    publishName: "",
                    coverImg: "",
                    musicScore: ""
                },
                bookRecommendList: [{}],
                movieRecommendList: [{}],
                musicRecommendList: [{}],
                currentScore: '',
                currentIntroduce: "",
                input: '',
                //书本评论提交表单
                bookComment: {
                    commentBelongId: "",
                    score: "",
                    commentContent: "",
                    belongType: ""
                },
                paging: {
                    currentPage: 1,
                    limit: 10,
                },
                commentList: [{}]
            }
        },
        methods: {
            judgeType() {
                return sessionStorage.getItem("detailType") == 1
            },
            judgeIsMovieType() {
                // return setTimeout(sessionStorage.getItem("detailType")==2,100)
                console.log(sessionStorage.getItem("detailType") == 2)
                return sessionStorage.getItem("detailType") == 2

            },
            judgeIsMusicType() {
                return sessionStorage.getItem("detailType") == 3
            },
            clickBookRecommend(id) {
                getBookDetailById(id).then(resp => {
                    this.bookDetail = resp.data.data;
                    this.currentScore = this.bookDetail.score / 2
                    this.currentIntroduce = this.bookDetail.bookIntroduce
                    console.log(this.bookDetail)
                })
                getBookRecommendById(id).then(resp => {
                    this.bookRecommendList = resp.data.data;
                    console.log(this.bookRecommendList)
                })

            },
            clickMovieRecommend(id) {
                getMovieDetailById(id).then(resp => {
                    this.movieDetail = resp.data.data;
                    this.currentScore = this.movieDetail.movieScore / 2
                    this.currentIntroduce = this.movieDetail.description
                })
                getMovieRecommendById(id).then(resp => {
                    this.movieRecommendList = resp.data.data
                })
            },
            clickMusicRecommend(id) {
                getMusicDetailById(id).then(resp => {
                    this.musicDetail = resp.data.data;
                    this.currentScore = this.musicDetail.musicScore / 2
                    this.currentIntroduce = this.musicDetail.musicIntroduction
                })
                getMusicRecommendById(id).then(resp => {
                    this.musicRecommendList = resp.data.data;
                })
            },
            //打开写评价的对话框
            toWriteComment() {
                this.dialogTableVisible = true;
            },
            //提交图书的评论
            submitBookComment() {
                this.bookComment.commentBelongId = this.bookDetail.bookId;
                this.bookComment.belongType = 1;
                setTimeout(
                    writeBookComment(this.bookComment).then(() => {
                        this.$message({
                            message: '评论成功!',
                            type: 'success'
                        });
                        this.dialogTableVisible = false;
                        this.getPageComment()
                    }), 100
                )
            },
            submitMovieComment() {
                this.bookComment.commentBelongId = this.movieDetail.movieId;
                this.bookComment.belongType = 2;
                setTimeout(
                    writeBookComment(this.bookComment).then(() => {
                        this.$message({
                            message: '评论成功!',
                            type: 'success'
                        });
                        this.dialogTableVisible = false;
                        this.getPageComment()
                    }), 100
                )

            },
            submitMusicComment() {
                this.bookComment.commentBelongId = this.musicDetail.musicId;
                this.bookComment.belongType = 3;
                setTimeout(
                    writeBookComment(this.bookComment).then(() => {
                        this.$message({
                            message: '评论成功!',
                            type: 'success'
                        });
                        this.dialogTableVisible = false;
                        this.getPageComment()
                    }), 100
                )

            },
            //页面改变分页每页数量
            handleSizeChange(val) {
                this.paging.limit = val
                this.paging.currentPage = 1
                this.getPageComment()
            },
            //页面改变分页当前页数
            handleCurrentChange(val) {
                this.paging.currentPage = val
                this.getPageComment()
            },
            getPageComment() {
                let type = sessionStorage.getItem("detailType")
                let id = sessionStorage.getItem("detailId");
                let params = {}
                this.$set(params, "limit", this.paging.limit)
                this.$set(params, "currentPage", this.paging.currentPage)
                this.$set(params, "type", type)
                this.$set(params, "id", id)
                pageGetAllCommentByTypeAndId(params).then(resp => {
                    this.commentList = resp.data.data.records
                    this.commentList.score = this.commentList.score / 2
                    for (let i = 0; i < this.commentList.length; i++) {
                        this.commentList[i].score = this.commentList[i].score / 2
                        getUserInfoById(this.commentList[i].publicUserId).then(resp => {
                            this.commentList[i].publicUserId = resp.data.data.nickname;
                        })
                    }
                    console.log(this.commentList);
                })
            }


        }, created() {
            console.log("调用了created")
            let detailType = sessionStorage.getItem("detailType");
            if (detailType == 1) {
                let bookId = sessionStorage.getItem("detailId");
                getBookDetailById(bookId).then(resp => {
                    this.bookDetail = resp.data.data;
                    this.currentScore = this.bookDetail.score / 2
                    this.currentIntroduce = this.bookDetail.bookIntroduce
                    console.log(this.bookDetail)
                })
                getBookRecommendById(bookId).then(resp => {
                    this.bookRecommendList = resp.data.data;
                    console.log(this.bookRecommendList)
                })
            }
            if (detailType == 2) {
                let movieId = sessionStorage.getItem("detailId")
                getMovieDetailById(movieId).then(resp => {
                    this.movieDetail = resp.data.data;
                    this.currentScore = this.movieDetail.movieScore / 2
                    this.currentIntroduce = this.movieDetail.description
                })
                getMovieRecommendById(movieId).then(resp => {
                    this.movieRecommendList = resp.data.data;
                })
            }
            if (detailType == 3) {
                let musicId = sessionStorage.getItem("detailId");
                getMusicDetailById(musicId).then(resp => {
                    this.musicDetail = resp.data.data;
                    this.currentScore = this.musicDetail.musicScore / 2
                    this.currentIntroduce = this.musicDetail.musicIntroduction
                })
                getMusicRecommendById(musicId).then(resp => {
                    this.musicRecommendList = resp.data.data;
                })
            }

            this.getPageComment()
        }
    }
</script>

<style scoped>
    .detail {
        /*width: 100%;*/
        border: #000 1px solid;
        position: relative;
        /*top: -5vh;*/
    }

    .header {
        border-bottom: #e6e6e6 1px solid;
        width: 100%;
        display: flex;
        justify-content: end;

    }

    .header #center {
        margin: 0 3vh;
    }

    .main {
        /*height: 40vh;*/
        border-bottom: #e6e6e6 1px solid;
        display: flex;
        justify-content: space-between;
    }

    .main .left {
        width: 250vh;
        border-right: #e6e6e6 1px solid;
        float: left;
        margin-left: 7vh;
    }

    .main .left .image {
        float: left;
    }

    .main .left #content {
        float: left;
        margin: 2vh;
        position: relative;
        top: 2vh;
    }

    .main .right {
        width: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: 10vh;
    }

    .introduction {
        /*height: 15vh;*/
        border-bottom: #e6e6e6 1px solid;

    }

    .introduction #introduction {
        float: left;
        margin: 7vh;
    }

    .like {
        height: 40vh;
        border-bottom: #e6e6e6 1px solid;
    }

    .like #like {
        display: flex;
        justify-content: flex-start;
        margin-left: 7vh;
    }

    .like .images {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-left: 7vh;
    }

    .like .images .block {
        margin-right: 22vh;
    }

    .comment {

        /*border-bottom: cornflowerblue 1px solid;*/
    }

    .comment h4 {
        width: 100%;
        display: flex;
        justify-content: left;
        margin-left: 7vh;
    }

    .comment #con {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .comment #con .left {
        float: left;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-left: 7vh;
    }

    .comment #con .left #comment {
        margin: 0 3vh;
        position: relative;
        top: 2vh;
    }

    .comment .right {
        width: 72vh;
    }

    .comment .right p {
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