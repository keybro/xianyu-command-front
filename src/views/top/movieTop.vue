<template>
    <div class="movie-top">
        <el-row>
            <el-col :span="2">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="20">
                <!--         页面的中间主体部分       -->
                <div>

                    <el-row>

                        <!--         主体部分的左部列表               -->
                        <el-col :span="16">
                            <div style="text-align: left;border-left: 1px #e6e6e6 solid;border-right: 1px #e6e6e6 solid;border-top: 1px #e6e6e6 solid">
                                <div class="title" style="margin-top: 8px">
                                    <h4 style="margin-left: 10px">选择电影</h4>
                                </div>
                                <div style="display: flex;margin-top: 10px">
                                    <!--                                    <p style="margin-left: 10px;margin-left: 10px;margin-top: 5px">电影类型:</p>-->
                                    <!--                                    <div style="margin-top: 20px;margin: 0px;margin-right: 0px;margin-left: 10px">-->
                                    <!--                                        <el-radio-group v-model="radio2" size="small" @change="getListByType()" style="width: 100%">-->
                                    <!--                                            <el-radio-button label="全部"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="剧情"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="动作"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="历史"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="战争"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="科幻"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="冒险"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="爱情"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="喜剧"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="灾难"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="犯罪"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="动画"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="惊悚"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="家庭"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="运动"></el-radio-button>-->
                                    <!--                                            <el-radio-button label="悬疑"></el-radio-button>-->
                                    <!--                                        </el-radio-group>-->
                                    <!--                                    </div>-->

                                </div>


                                <!--           书籍列表            -->
                                <div style="width: 100%;border-top: 1px #e6e6e6 solid;margin-top: 10px;border-right: 1px #e6e6e6 solid">
                                    <!--                 每个图书div                   -->
                                    <div class="content-list-div"
                                         style="margin-top: 10px;border-bottom: 1px #e6e6e6 solid;display: flex"
                                         v-for="(item, index) in movieList" :key="item" :offset="index > 0 ? 10 : 0">
                                        <img :src="item.coverImg" alt=""
                                             style="width: 15%;height: 20vh; margin-left: 30px;margin-bottom: 10px"
                                             @click="goToMovieDetail(item)">
                                        <div class="img-right-content" style="margin-top: 1vh;margin-left: 20px">
                                            <h4>{{item.movieName}}</h4>
                                            <p style="margin-top: 10px">导演：{{item.director}}</p>
                                            <p style="margin-top: 10px">类型:{{item.movieType}}</p>
                                            <p style="margin-top: 10px">上映时间:{{item.showTime}}</p>
                                            <p style="margin-top: 10px">片长:{{item.movieLong}}</p>
                                            <div style="width: 30vw;margin-top: 10px">
                                                <p class="detail-hidden">主演:{{item.actor}}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <!--             底部分页                       -->
                                    <div class="bottom-page"
                                         style="text-align: center;margin-top: 10px;border-bottom: 1px #e6e6e6 solid">
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
                                </div>
                            </div>
                        </el-col>

                        <!--         主体部分的右边card --个人信息              -->
                        <el-col :span="8">
                            <div style="margin-top: 10vh;margin-left: 8%;margin-right: 8%" class="dont-move">
                                <el-card shadow="hover" style="position: fixed;width: 23vw">
                                    <div slot="header">
                                        <div style="width: 60%;display: flex;margin-left: 10px">
                                            <el-avatar
                                                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                            <div style="width: 40%"><p style="margin-top: 12px">用户名</p></div>
                                        </div>
                                    </div>

                                    <div style="text-align: left;margin-left: 5%">
                                        <p>我的书籍评论:{{rightList.myBookCommentNumber}}</p>
                                        <p style="margin-top: 10px">我的电影评论:{{rightList.myMovieCommentNumber}}</p>
                                        <p style="margin-top: 10px">我的音乐评论:{{rightList.myMusicCommentNumber}}</p>
                                        <p style="margin-top: 10px">我的小组:{{rightList.myGroupNumber}}</p>
                                        <p style="margin-top: 10px">我的帖子:{{rightList.myInvitationNumber}}</p>
                                    </div>
                                </el-card>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>


        <!--    页脚    -->
        <div class="footer" style="text-align: center;">
            <h3 style="margin-top: 3px;margin-bottom: 3px;">邮友论坛</h3>
        </div>
    </div>
</template>

<script>
    import {getMovieTop} from "../../api/movie";
    import {getRightTagInfo} from "../../api/user";

    export default {
        name: "movieTop",
        data: function () {
            return {
                movieList: [{}],
                rightList: {},
                paging: {
                    currentPage: 1,
                    limit: 10,
                },

            }

        },
        methods: {
            getListByType() {
                let params = {}
                this.$set(params, "limit", this.paging.limit)
                this.$set(params, "currentPage", this.paging.currentPage)

                getMovieTop(params).then(resp => {
                    this.movieList = resp.data.data.records
                    console.log(this.movieList);
                })
            },
            //页面改变分页每页数量
            handleSizeChange(val) {
                this.paging.limit = val
                this.paging.currentPage = 1
                this.getListByType()
            },
            //页面改变分页当前页数
            handleCurrentChange(val) {
                this.paging.currentPage = val
                this.getListByType()
            },
            goToMovieDetail(data) {
                sessionStorage.setItem("detailId", data.movieId)
                sessionStorage.setItem("detailType", 2)
                this.$router.push('/homePage/detail')
            }

        },
        created() {
            this.getListByType()
            getRightTagInfo().then(resp => {
                this.rightList = resp.data.data;
            })

        }
    }
</script>

<style scoped>

    .bg-purple {
        /*background: #d3dce6;*/
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .detail-hidden {
        /*width: 300px;*/
        /* 规定当内容溢出元素框（容器）时隐藏 */
        overflow: hidden;
        /* 规定当文本溢出包含元素（容器）出现省略号 */
        text-overflow: ellipsis;
        /* 规定段落中的文本不进行换行 */
        white-space: nowrap;
    }

</style>