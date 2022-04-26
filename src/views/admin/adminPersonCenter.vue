<template>
    <div class="admin-person-center" style="width: 100%;margin-top: 3vh;text-align: center">

        <el-row style="margin-top: 8px">
            <el-col :span="2">
                <div class="grid-content bg-purple"></div>
            </el-col>


            <!-- 个人中心主体部分-->
            <el-col :span="20">


                <!--   头像和用户名             -->
                <el-row style="border-bottom: 1px solid #e6e6e6;border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;border-top: 1px solid #e6e6e6">
                    <div class="grid-content bg-purple-light">
                        <div>
                            <div class="head-picture" style="margin-right: 10px;display: flex">
                                <el-avatar :size="100" :src="userHeadSrc" style="margin: 5px"></el-avatar>
                                <div style="float: left;margin-top: 5vh">
                                    <p>管理员</p>
                                    <el-button style="margin-top: 5px" type="primary" size="mini" @click="quitLogin()">
                                        退出登录
                                    </el-button>
                                </div>
                            </div>


                        </div>
                    </div>
                </el-row>

                <!--      头像下方          -->
                <el-row>
                    <el-col :span="4"
                            style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;border-bottom: 1px solid #e6e6e6">
                        <div style="height: 95vh">
                            <el-menu
                                    default-active="1"
                                    class="el-menu-vertical-demo">
                                <el-menu-item index="1" @click="showBookManage()">
                                    <i class="el-icon-collection"></i>
                                    <span slot="title">书籍管理</span>
                                </el-menu-item>
                                <el-menu-item index="2" @click="showMovieManage()">
                                    <i class="el-icon-video-camera-solid"></i>
                                    <span slot="title">电影管理</span>
                                </el-menu-item>
                                <el-menu-item index="3" @click="showMusicManage()">
                                    <i class="el-icon-headset"></i>
                                    <span slot="title">音乐管理</span>
                                </el-menu-item>
                                <el-menu-item index="4" @click="showGroupManage()">
                                    <i class="el-icon-s-promotion"></i>
                                    <span slot="title">小组管理</span>
                                </el-menu-item>
                            </el-menu>
                        </div>
                    </el-col>

                    <!--       右边的主体部分             -->
                    <el-col :span="20" style="border-right: 1px solid #e6e6e6;border-bottom: 1px solid #e6e6e6">
                        <div>

                            <!--           点击书籍管理评话显示                 -->
                            <div v-if="this.clickItem == '1'">
                                <el-row>
                                    <el-col :span="24">
                                        <div style="margin-top: 3px;display: flex;margin-left: 5px">
                                            <el-input placeholder="搜索内容" v-model="searchInput" class="input-with-select"
                                                      style="width: 40%;height: 3vh">
                                                <el-button slot="append" icon="el-icon-search"
                                                           @click="showSearchBook()"></el-button>
                                            </el-input>
                                            <el-button type="primary" size="small" style="margin-left: 1%"
                                                       @click="upSource()">上架
                                            </el-button>
                                        </div>
                                        <div class="book-table" style="margin:5px">
                                            <el-table
                                                    :data="AllBooks"
                                                    border
                                                    fit="false"
                                                    style="width: 100%">
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        prop="bookName"
                                                        align="center"
                                                        label="书名">
                                                </el-table-column>
                                                <el-table-column
                                                        prop="coverImg"
                                                        align="center"
                                                        show-overflow-tooltip
                                                        label="封面">
                                                    <template slot-scope="scope">
                                                        <img :src="scope.row.coverImg" alt=""
                                                             style="width: 60%;height: 9vh">
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="bookType"
                                                        label="类别">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="author"
                                                        label="作者">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="publish"
                                                        label="出版社">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="publishTime"
                                                        label="发布时间">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="bookIntroduce"
                                                        label="简介">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        width="80"
                                                        label="操作">
                                                    <template slot-scope="scope">
                                                        <el-button type="danger" size="mini"
                                                                   @click="removeBook(scope.row.bookId)">删除
                                                        </el-button>
                                                    </template>
                                                </el-table-column>
                                            </el-table>

                                        </div>
                                    </el-col>
                                </el-row>


                                <div class="group-footer-page" style="margin-top: 10px;margin-bottom: 10px">
                                    <el-pagination
                                            background
                                            @size-change="handleSizeChange"
                                            @current-change="handleCurrentChange"
                                            :page-sizes="[5,10,15,20]"
                                            :current-page="paging.currentPage"
                                            :page-size="paging.limit"
                                            layout="total,sizes,prev,pager,next"
                                            :total="AllBooksLength">
                                    </el-pagination>
                                </div>

                            </div>
                            <!--           以上点击书籍管理评话显示                 -->

                            <!--           点击电影管理显示                 -->
                            <div v-if="this.clickItem == '2'">
                                <el-row>
                                    <el-col :span="24">
                                        <!--                                        -->
                                        <div style="margin-top: 3px;display: flex;margin-left: 5px">
                                            <el-input placeholder="搜索内容" v-model="searchInput" class="input-with-select"
                                                      style="width: 40%;height: 3vh">
                                                <el-button slot="append" icon="el-icon-search"
                                                           @click="showSearchMovie()"></el-button>
                                            </el-input>
                                            <el-button type="primary" size="small" style="margin-left: 1%"
                                                       @click="upSource()">上架
                                            </el-button>
                                        </div>
                                        <div class="book-table" style="margin:5px">
                                            <el-table
                                                    :data="AllMovie"
                                                    border
                                                    fit="false"
                                                    style="width: 100%">
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        prop="movieName"
                                                        align="center"
                                                        label="电影名">
                                                </el-table-column>
                                                <el-table-column
                                                        prop="name"
                                                        align="center"
                                                        show-overflow-tooltip
                                                        label="封面">
                                                    <template slot-scope="scope">
                                                        <img :src="scope.row.coverImg" alt=""
                                                             style="width: 60%;height: 9vh">
                                                    </template>

                                                    <!--                                                    <template>-->
                                                    <!--                                                        <img src="https://img9.doubanio.com/view/subject/s/public/s33821754.jpg" alt="">-->
                                                    <!--                                                    </template>-->
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="movieType"
                                                        label="类别">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="director"
                                                        label="导演">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="actor"
                                                        label="演员">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="showTime"
                                                        label="上映时间">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="description"
                                                        label="简介">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="address"
                                                        width="80"
                                                        label="操作">
                                                    <template slot-scope="scope">
                                                        <el-button type="danger" size="mini"
                                                                   @click="removeMovie(scope.row.movieId)">删除
                                                        </el-button>
                                                    </template>
                                                </el-table-column>
                                            </el-table>

                                        </div>
                                    </el-col>
                                </el-row>


                                <div class="group-footer-page" style="margin-top: 10px;margin-bottom: 10px">
                                    <el-pagination
                                            background
                                            @size-change="handleSizeChangeMovie"
                                            @current-change="handleCurrentChangeMovie"
                                            :page-sizes="[5,10,15,20]"
                                            :current-page="paging.currentPage"
                                            :page-size="paging.limit"
                                            layout="total,sizes,prev,pager,next"
                                            :total="AllMovieLength">
                                    </el-pagination>
                                </div>

                            </div>
                            <!--           以上点击电影管理显示                 -->


                            <!--           点击音乐管理显示                 -->
                            <div v-if="this.clickItem == '3'">
                                <el-row>
                                    <el-col :span="24">
                                        <!--                                        -->
                                        <div style="margin-top: 3px;display: flex;margin-left: 5px">
                                            <el-input placeholder="搜索内容" v-model="searchInput" class="input-with-select"
                                                      style="width: 40%;height: 3vh">
                                                <el-button slot="append" icon="el-icon-search"
                                                           @click="showSearchMusic()"></el-button>
                                            </el-input>
                                            <el-button type="primary" size="small" style="margin-left: 1%"
                                                       @click="upSource()">上架
                                            </el-button>
                                        </div>
                                        <div class="book-table" style="margin:5px">
                                            <el-table
                                                    :data="AllMusic"
                                                    border
                                                    fit="false"
                                                    style="width: 100%">
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        prop="musicName"
                                                        align="center"
                                                        label="音乐名">
                                                </el-table-column>
                                                <el-table-column
                                                        prop="name"
                                                        align="center"
                                                        show-overflow-tooltip
                                                        label="封面">
                                                    <template slot-scope="scope">
                                                        <img :src="scope.row.coverImg" alt=""
                                                             style="width: 60%;height: 9vh">
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="musicType"
                                                        label="类别">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="performer"
                                                        label="歌手">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="collectionType"
                                                        label="专辑类型">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="publishTime"
                                                        label="发行日期">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="musicIntroduction"
                                                        label="简介">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="address"
                                                        width="80"
                                                        label="操作">
                                                    <template slot-scope="scope ">
                                                        <el-button type="danger" size="mini"
                                                                   @click="removeMusic(scope.row.musicId)">删除
                                                        </el-button>
                                                    </template>
                                                </el-table-column>
                                            </el-table>

                                        </div>
                                    </el-col>
                                </el-row>

                                <div class="group-footer-page" style="margin-top: 10px;margin-bottom: 10px">
                                    <el-pagination
                                            background
                                            @size-change="handleSizeChangeMusic"
                                            @current-change="handleCurrentChangeMusic"
                                            :page-sizes="[5,10,15,20]"
                                            :current-page="paging.currentPage"
                                            :page-size="paging.limit"
                                            layout="total,sizes,prev,pager,next"
                                            :total="AllMusicLength">
                                    </el-pagination>
                                </div>


                            </div>
                            <!--           以上点击音乐管理显示                 -->


                            <!--            点击小组管理显示                -->
                            <div v-if="this.clickItem == '4'">
                                <el-row>
                                    <el-col :span="24">
                                        <!--                                        -->
                                        <div style="margin-top: 3px;display: flex;margin-left: 5px">
                                            <el-input placeholder="搜索内容" v-model="searchInput" class="input-with-select"
                                                      style="width: 40%;height: 3vh">
                                                <el-button slot="append" icon="el-icon-search"></el-button>
                                            </el-input>

                                        </div>
                                        <div class="book-table" style="margin:5px">
                                            <el-table
                                                    :data="AllGroups"
                                                    border
                                                    fit="false"
                                                    style="width: 100%">
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        prop="date"
                                                        align="center"
                                                        label="小组图片">
                                                    <template slot-scope="scope">
                                                        <img :src="scope.row.groupHead" alt=""
                                                             style="width: 60%;height: 9vh">
                                                    </template>
                                                </el-table-column>
                                                <el-table-column
                                                        prop="groupName"
                                                        align="center"
                                                        show-overflow-tooltip
                                                        label="小组名">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="createrName"
                                                        label="组长">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="personNumber"
                                                        label="成员数量">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="label"
                                                        label="类型">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="groupIntroduction"
                                                        label="简介">
                                                </el-table-column>
                                                <el-table-column
                                                        show-overflow-tooltip
                                                        align="center"
                                                        prop="address"
                                                        label="操作">
                                                    <template slot-scope="scope">
                                                        <el-button type="danger" size="mini"
                                                                   @click="removeGroup(scope.row.groupId)">删除
                                                        </el-button>
                                                    </template>
                                                </el-table-column>
                                            </el-table>

                                        </div>
                                    </el-col>
                                </el-row>


                                <div class="group-footer-page" style="margin-top: 10px;margin-bottom: 10px">
                                    <el-pagination
                                            background
                                            @size-change="handleSizeChangeGroup"
                                            @current-change="handleCurrentChangeGroup"
                                            :page-sizes="[5,10,15,20]"
                                            :current-page="paging.currentPage"
                                            :page-size="paging.limit"
                                            layout="total,sizes,prev,pager,next"
                                            :total="AllGroupLength">
                                    </el-pagination>
                                </div>


                            </div>
                            <!--          以上是点击小组管理显示                  -->

                        </div>


                    </el-col>

                </el-row>

            </el-col>

            <el-col :span="2">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>

        <!--    用户点击修改个人信息按钮跳出的对话框    -->
        <el-dialog title="修改信息" :visible.sync="dialogModifyUserInfoVisible">
            <div style="display: flex;text-align: center;justify-content: center;margin-bottom: 1vh">
                <p style="font-size: medium;margin-top: 1vh;margin-right: 2%">账号: </p>
                <el-input v-model="userInfo.account" placeholder="" style="width: 60%"></el-input>
            </div>
            <div style="display: flex;text-align: center;justify-content: center;margin-bottom: 1vh">
                <p style="font-size: medium;margin-top: 1vh;margin-right: 2%">昵称: </p>
                <el-input v-model="userInfo.nickname" placeholder="ctc" style="width: 60%"></el-input>
            </div>
            <div style="display: flex;text-align: center;justify-content: center;margin-bottom: 1vh">
                <p style="font-size: medium;margin-top: 1vh;margin-right: 2%">性别: </p>
                <el-input v-model="userInfo.sex" placeholder="ctc" style="width: 60%"></el-input>
            </div>
            <div style="display: flex;text-align: center;justify-content: center;margin-bottom: 1vh">
                <p style="font-size: medium;margin-top: 1vh;margin-right: 2%">电话: </p>
                <el-input v-model="userInfo.tel" placeholder="ctc" style="width: 60%"></el-input>
            </div>
            <div style="display: flex;text-align: center;justify-content: center;margin-bottom: 1vh">
                <p style="font-size: medium;margin-top: 1vh;margin-right: 2%">地区: </p>
                <el-input v-model="userInfo.area" placeholder="ctc" style="width: 60%"></el-input>
            </div>
            <div style="display: flex;text-align: center;justify-content: center;margin-bottom: 1vh">
                <p style="font-size: medium;margin-top: 1vh;margin-right: 2%">邮箱: </p>
                <el-input v-model="userInfo.email" placeholder="ctc" style="width: 60%"></el-input>
            </div>
            <div style="display: flex;text-align: center;justify-content: center;margin-bottom: 1vh">
                <p style="font-size: medium;margin-top: 1vh;margin-right: 2%">个性签名: </p>
                <el-input v-model="userInfo.sign" placeholder="ctc" style="width: 55%"></el-input>
            </div>
            <div style="display: flex;text-align: center;justify-content: center;margin-bottom: 1vh">
                <el-button type="primary" @click="makeSureModify()">确定修改</el-button>
            </div>
        </el-dialog>
        <!--    以上是用户点击修改个人信息按钮跳出的对话框    -->


        <!--   我的评话中点击修改跳出的对话框，书籍,影视，音乐通用     -->
        <el-dialog title="修改评话" :visible.sync="dialogBookCommentVisible">
            <div>
                <p v-if="clickItem=='2'">[书籍]{{updateCommentInfo.resourceName}}</p>
                <p v-if="clickItem=='3'">[影视]{{updateCommentInfo.resourceName}}</p>
                <p v-if="clickItem=='4'">[音乐]{{updateCommentInfo.resourceName}}</p>
                <p style="margin-top: 5px">发布时间：{{updateCommentInfo.publicTime}}</p>
            </div>
            <div style="display: flex;justify-content: center;margin-top: 5px">
                <p style="font-size: medium;margin-top: 1vh;margin-right: 1vw">评话:</p>
                <el-input v-model="updateCommentInfo.commentContent" placeholder="" style="width: 60%"></el-input>
            </div>
            <div style="display: flex;justify-content: center;margin-top: 5px">
                <el-button type="primary" @click="makeSureModifyComment()">确认修改</el-button>
            </div>

        </el-dialog>
        <!--   以上是我的书籍评话中点击修改跳出的对话框     -->


        <!--   我的帖子修改点击后弹出的对话框     -->
        <el-dialog title="修改帖子" :visible.sync="dialogInvitationVisible">
            <div>
                <p>[小组] {{updateInvitationInfo.belongGroupName}}</p>
                <p style="margin-top: 5px">发布时间：{{updateInvitationInfo.createTime}}</p>
            </div>
            <div style="display: flex;justify-content: center;margin-top: 5px">
                <p style="font-size: medium;margin-top: 1vh;margin-right: 1vw">标题:</p>
                <el-input v-model="updateInvitationInfo.invitationTitle" placeholder="" style="width: 60%"></el-input>
            </div>
            <div style="display: flex;justify-content: center;margin-top: 5px">
                <p style="font-size: medium;margin-top: 1vh;margin-right: 1vw">评话:</p>
                <el-input v-model="updateInvitationInfo.invitationContent" placeholder="" style="width: 60%"></el-input>
            </div>
            <div style="display: flex;justify-content: center;margin-top: 5px">
                <el-button type="primary" @click="makeSureModifyInvitation()">确认修改</el-button>
            </div>

        </el-dialog>
        <!--   以上是我的帖子修改点击后弹出的对话框     -->


        <!--   我的回复修改点击后弹出的对话框     -->
        <el-dialog title="修改回复" :visible.sync="dialogInvitationReplyVisible">
            <div>
                <p style="margin-top: 5px">发布时间：{{updateInvitationReply.replyTime}}</p>
            </div>
            <div style="display: flex;justify-content: center;margin-top: 5px">
                <p style="font-size: medium;margin-top: 1vh;margin-right: 1vw">内容:</p>
                <el-input v-model="updateInvitationReply.invitationReplyContent" placeholder=""
                          style="width: 60%"></el-input>
            </div>
            <div style="display: flex;justify-content: center;margin-top: 5px">
                <el-button type="primary" @click="makeSureUpdateReply()">确认修改</el-button>
            </div>

        </el-dialog>
        <!--   以上是我的回复修改点击后弹出的对话框     -->


        <el-dialog title="修改小组信息" :visible.sync="dialogGroupVisible">
            <div style="display: flex;justify-content: center;margin-top: 5px">
                <p style="font-size: medium;margin-top: 1vh;margin-right: 1vw">组名:</p>
                <el-input v-model="targetGroupInfo.groupName" placeholder="" style="width: 60%"></el-input>
            </div>
            <div style="display: flex;justify-content: center;margin-top: 5px">
                <p style="font-size: medium;margin-top: 1vh;margin-right: 1vw">标签:</p>
                <el-select
                        v-model="value"
                        multiple
                        filterable
                        allow-create
                        collapse-tags
                        default-first-option
                        placeholder="请选择小组标签"
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
            <div style="display: flex;justify-content: center;margin-top: 5px">
                <p style="font-size: medium;margin-top: 1vh;margin-right: 1vw">简介:</p>
                <el-input v-model="targetGroupInfo.groupIntroduction" placeholder="" style="width: 60%"></el-input>
            </div>
            <div style="display: flex;justify-content: center;margin-top: 5px">
                <el-button type="primary" @click="makeSureUpdateGroupInfo()">确认修改</el-button>
            </div>

        </el-dialog>

        <!--    页脚    -->
        <div class="footer" style="text-align: center;">
            <h3 style="margin-top: 3px;margin-bottom: 3px;">邮友论坛</h3>
        </div>


        <el-dialog title="上架作品" :visible.sync="dialogUpSourceVisible">
            <!--    上架书籍对话框        -->
            <div v-if="clickItem=='1'">

                <div style="display: flex;justify-content: center;">
                    <p style="font-size: medium;margin-top: 1vh;">书名：</p>
                    <el-input v-model="upBookName" placeholder="请输入书名" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">类型：</p>
<!--                    <el-input v-model="upType" placeholder="请选择类型" style="width: 60%"></el-input>-->
                    <el-select v-model="upType" placeholder="请选择类型" style="width: 60%">
                        <el-option
                                v-for="item in bookTypeOption"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">简介：</p>
                    <el-input v-model="upIntroduction" placeholder="请输入简介" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">作者：</p>
                    <el-input v-model="upAuthor" placeholder="请输入作者" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">作者简介：</p>
                    <el-input v-model="upAuthorIntroduction" placeholder="请输入作者简介" style="width: 55%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">出版社：</p>
                    <el-input v-model="upPublish" placeholder="请输入出版社" style="width: 58%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">原名：</p>
                    <el-input v-model="upOldName" placeholder="请输入原名" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">译者：</p>
                    <el-input v-model="upTranslate" placeholder="请输入译者" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">出版时间：</p>
                    <el-input v-model="upPublishTime" placeholder="请输入出版时间" style="width: 55%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">页数：</p>
                    <el-input v-model="upPageNumber" placeholder="请输入页数" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">丛书：</p>
                    <el-input v-model="upSeries" placeholder="请输入丛书" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">产商：</p>
                    <el-input v-model="upProduct" placeholder="请输入产商" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">ISBN：</p>
                    <el-input v-model="upISBN" placeholder="请输入ISBN" style="width: 59%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">初始评分：</p>
                    <el-input v-model="upScore" placeholder="请输入初始评分" style="width: 55%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">书籍封面：</p>
                    <el-upload
                            class="avatar-uploader"
                            :http-request="uploadFile"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            v-if="groupImgUploadVisible == true"
                            style="border: 1px #e6e6e6 solid"
                            :before-upload="beforeAvatarUpload">
                        <i class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <img :src="uploadImgURL" alt="" style="width: 50%;height: 30vh" v-if="uploadImgURL!=''">
                </div>

            </div>

            <!--  上架电影对话框  -->
            <div v-if="clickItem=='2'">
                <!--      这里是电影上架对话框          -->

                <div style="display: flex;justify-content: center;">
                    <p style="font-size: medium;margin-top: 1vh;">电影名：</p>
                    <el-input v-model="movieName" placeholder="请输入书名" style="width: 57%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">类型：</p>
<!--                    <el-input v-model="movieType" placeholder="请选择类型" style="width: 60%"></el-input>-->
                    <el-select v-model="upType" placeholder="请选择类型" style="width: 60%">
                        <el-option
                                v-for="item in movieTypeOption"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">导演：</p>
                    <el-input v-model="director" placeholder="请输入导演" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">编剧：</p>
                    <el-input v-model="scriptwriter" placeholder="请输入编剧" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">主演：</p>
                    <el-input v-model="actor" placeholder="请输入主演" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">上映时间：</p>
                    <el-input v-model="showTime" placeholder="请输入上映时间" style="width: 55%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">片长：</p>
                    <el-input v-model="movieLong" placeholder="请输入片长" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">介绍：</p>
                    <el-input v-model="description" placeholder="请输入出版介绍" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">初始评分：</p>
                    <el-input v-model="movieScore" placeholder="请输入初始评分" style="width: 55%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">电影封面：</p>
                    <el-upload
                            class="avatar-uploader"
                            :http-request="uploadMovie"
                            :show-file-list="false"
                            style="border: 1px #e6e6e6 solid;width: 55% "
                            v-if="groupImgUploadVisible == true"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <i class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <img :src="uploadImgURL" alt="" style="width: 50%;height: 30vh" v-if="uploadImgURL!=''">
                </div>
                <!--      以上是电影上架对话框          -->

            </div>

            <!--     上架音乐对话框       -->
            <div v-if="clickItem=='3'">
                <!--      这里是音乐上架对话框          -->

                <div style="display: flex;justify-content: center;">
                    <p style="font-size: medium;margin-top: 1vh;">音乐名：</p>
                    <el-input v-model="musicName" placeholder="请输入音乐名" style="width: 57%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">类型：</p>
                    <el-select v-model="upType" placeholder="请选择类型" style="width: 60%">
                        <el-option
                                v-for="item in musicTypeOption"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">曲目：</p>
                    <el-input v-model="tracks" placeholder="请输入曲目" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">歌手：</p>
                    <el-input v-model="performer" placeholder="请输入歌手" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">流派：</p>
                    <el-input v-model="genre" placeholder="请输入流派" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">简介：</p>
                    <el-input v-model="musicIntroduction" placeholder="请输入简介" style="width: 60%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">专辑类型：</p>
                    <el-input v-model="collectionType" placeholder="请输入专辑类型" style="width: 55%"></el-input>

                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">发行时间：</p>
                    <el-input v-model="publishTime" placeholder="请输入发行时间" style="width: 55%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">出版者：</p>
                    <el-input v-model="publishName" placeholder="请输入出版者" style="width: 58%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">初始评分：</p>
                    <el-input v-model="musicScore" placeholder="请输入初始评分" style="width: 55%"></el-input>
                </div>
                <div style="display: flex;justify-content: center;margin-top: 1vh">
                    <p style="font-size: medium;margin-top: 1vh">书籍封面：</p>
                    <el-upload
                            class="avatar-uploader"
                            :http-request="uploadMusic"
                            :show-file-list="false"
                            v-if="groupImgUploadVisible == true"
                            style="border: 1px #e6e6e6 solid;width: 55% "
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <i class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <img :src="uploadImgURL" alt="" style="width: 50%;height: 30vh" v-if="uploadImgURL!=''">
                </div>
                <!--      以上是音乐上架对话框          -->

            </div>
            <div style="display: flex;justify-content: center;margin-top: 2vh">
                <el-button type="primary" @click="makeSureUpLoad()">确认上架</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
    import {getGroupDetailById, pageGetAllGroupInfos, removeGroupById, updateGroupInfo} from "../../api/group";
    import {pageGetMyInvitationReply, updateReply} from "../../api/invitationReply";
    import {modifyInvitation, pageGetMyInvitation} from "../../api/invitation";
    import {modifyComment, pageGetCurrentAllComment} from "../../api/resource-comment";
    import {getCurrentUserInfo, modifyInfo} from "../../api/user";
    import {pageGetMyJoinGroups} from "../../api/join";
    import {createBook, getBookURLByName, getSearchBook, pageGetAllBook, removeBookById} from "../../api/book";
    import {createMovie, getMovieURLByName, getSearchMovie, pageGetAllMovie, removeMovieById} from "../../api/movie";
    import {createMusic, getMusicURLByName, getSearchMusic, pageGetAllMusic, removeMusicById} from "../../api/music";
    import {uploadBookImg, uploadMovieImg, uploadMusicImg} from "../../api/minio";


    export default {
        name: "adminPersonCenter",
        data: function () {
            return {
                userHeadSrc: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                bookTypeOption: [
                    {
                    value: '小说',
                    label: '小说'
                }, {
                    value: '历史',
                    label: '历史'
                }, {
                    value: '文学',
                    label: '文学'
                }, {
                    value: '心理学',
                    label: '心理学'
                }, {
                    value: '哲学',
                    label: '哲学'
                }, {
                    value: '推理',
                    label: '推理'
                }, {
                    value: '爱情',
                    label: '爱情'
                }, {
                    value: '传记',
                    label: '传记'
                }, {
                    value: '社会学',
                    label: '社会学'
                }, {
                    value: '文化',
                    label: '文化'
                }, {
                    value: '散文',
                    label: '散文'
                }, {
                    value: '科普',
                    label: '科普'
                }, {
                    value: '悬疑',
                    label: '悬疑'
                }, {
                    value: '科幻',
                    label: '科幻'
                }],
                movieTypeOption: [
                    {
                        value: '剧情',
                        label: '剧情'
                    }, {
                        value: '动作',
                        label: '动作'
                    }, {
                        value: '历史',
                        label: '历史'
                    }, {
                        value: '战争',
                        label: '战争'
                    }, {
                        value: '科幻',
                        label: '科幻'
                    }, {
                        value: '冒险',
                        label: '冒险'
                    }, {
                        value: '爱情',
                        label: '爱情'
                    }, {
                        value: '喜剧',
                        label: '喜剧'
                    }, {
                        value: '灾难',
                        label: '灾难'
                    }, {
                        value: '犯罪',
                        label: '犯罪'
                    }, {
                        value: '动画',
                        label: '动画'
                    }, {
                        value: '惊悚',
                        label: '惊悚'
                    }, {
                        value: '运动',
                        label: '运动'
                    }, {
                        value: '悬疑',
                        label: '悬疑'
                    }],
                musicTypeOption: [
                    {
                        value: '日本',
                        label: '日本'
                    }, {
                        value: '欧美',
                        label: '欧美'
                    }, {
                        value: '台湾',
                        label: '台湾'
                    }, {
                        value: '华语',
                        label: '华语'
                    }, {
                        value: '流行',
                        label: '流行'
                    }, {
                        value: '女声',
                        label: '女声'
                    }, {
                        value: '男声',
                        label: '男声'
                    }, {
                        value: '英国',
                        label: '英国'
                    }, {
                        value: '民谣',
                        label: '民谣'
                    }, {
                        value: '香港',
                        label: '香港'
                    }, {
                        value: '韩国',
                        label: '韩国'
                    }, {
                        value: '纯音乐',
                        label: '纯音乐'
                    }, {
                        value: '电子',
                        label: '电子'
                    }, {
                        value: '经典',
                        label: '经典'
                    }],
                clickItem: '1',
                resourceType: "1",
                userInfo: {},
                userCommentList: [{}],
                userJoinGroups: [{}],
                userInvitationList: [{}],
                userInvitationReplyList: [{}],
                dialogModifyUserInfoVisible: false,
                dialogBookCommentVisible: false,
                dialogInvitationVisible: false,
                dialogInvitationReplyVisible: false,
                dialogGroupVisible: false,
                dialogUpSourceVisible: false,
                targetGroupInfo: {},
                updateCommentInfo: {},
                updateInvitationInfo: {},
                updateInvitationReply: {},
                groupImgUploadVisible: true,
                uploadFileImgFile: '',
                AllBooksLength: "",
                AllMovieLength: "",
                AllMusicLength: "",
                AllGroupLength: "",
                uploadImgURL: "",
                //以下是上架输入框对应内容
                upBookName: "",
                upType: "",
                upIntroduction: "",
                upAuthor: "",
                upAuthorIntroduction: "",
                upPublish: "",
                upOldName: "",
                upTranslate: "",
                upPublishTime: "",
                upPageNumber: "",
                upSeries: "",
                upProduct: "",
                upISBN: "",
                upScore: "",
                //以上是图书上架输入框变量
                //以下是电影上架输入框变量
                movieName: "",
                coverImg: "",
                movieScore: "",
                director: "",
                scriptwriter: "",
                actor: "",
                movieType: "",
                showTime: "",
                movieLong: "",
                description: "",
                //以上是电影上架输入框变量
                //以下是创建音乐变量
                musicName: "",
                musicType: "",
                musicIntroduction: "",
                tracks: "",
                performer: "",
                genre: "",
                collectionType: "",
                publishTime: "",
                publishName: "",
                musicScore: "",
                //以上是音乐变量
                //创建小组的表单
                createBook: {
                    bookName: "",
                    bookType: "",
                    bookIntroduce: "",
                    authorIntroduce: "",
                    author: "",
                    publish: "",
                    originalName: "",
                    translateMan: "",
                    publishTime: "",
                    pageNumber: "",
                    series: "",
                    isbn: "",
                    coverImg: "",
                    score: "",
                },
                createMovie: {
                    movieName: "",
                    coverImg: "",
                    movieScore: "",
                    director: "",
                    scriptwriter: "",
                    actor: "",
                    movieType: "",
                    showTime: "",
                    movieLong: "",
                    description: "",
                },
                createMusic: {
                    musicName: "",
                    musicType: "",
                    musicIntroduction: "",
                    tracks: "",
                    performer: "",
                    genre: "",
                    collectionType: "",
                    publishTime: "",
                    publishName: "",
                    musicScore: "",
                    coverImg: "",

                },
                AllBooks: [{}],
                AllMovie: [{}],
                AllMusic: [{}],
                AllGroups: [{}],
                imageUrl: '',
                paging: {
                    currentPage: 1,
                    limit: 5,
                },
                options: [
                    {
                        value: '影视/',
                        label: '影视'
                    }, {
                        value: '音乐/',
                        label: '音乐'
                    }, {
                        value: '文学/',
                        label: '文学'
                    }, {
                        value: '运动/',
                        label: '运动'
                    }, {
                        value: '美食/',
                        label: '美食'
                    }, {
                        value: '公益/',
                        label: '公益'
                    }, {
                        value: '家庭/',
                        label: '家庭'
                    }, {
                        value: '购物/',
                        label: '购物'
                    }, {
                        value: '求职/',
                        label: '求职'
                    }, {
                        value: '考试/',
                        label: '考试'
                    }, {
                        value: '艺术/',
                        label: '艺术'
                    }, {
                        value: '美术/',
                        label: '美术'
                    }, {
                        value: '情感/',
                        label: '情感'
                    }, {
                        value: '闲聊/',
                        label: '闲聊'
                    }
                ],
                value: [],
                searchInput: "",
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }]
            }
        },
        methods: {
            removeBook(id) {
                this.$confirm('此操作将永久删除该作品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    removeBookById(id)
                    this.getBookList();
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            removeMovie(id) {
                this.$confirm('此操作将永久删除该作品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    removeMovieById(id)
                    this.getMovieList();
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            removeMusic(id) {
                this.$confirm('此操作将永久删除该作品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    removeMusicById(id)
                    this.getMusicList();
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            removeGroup(id) {
                this.$confirm('此操作将永久删除该作品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    removeGroupById(id)
                    this.getGroupList();
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            makeSureUpLoad() {
                if (this.clickItem == '1') {
                    this.createBook.bookName = this.upBookName;
                    this.createBook.bookType = this.upType;
                    this.createBook.bookIntroduce = this.upIntroduction;
                    this.createBook.authorIntroduce = this.upAuthorIntroduction;
                    this.createBook.author = this.upAuthor;
                    this.createBook.publish = this.upPublish;
                    this.createBook.originalName = this.upOldName;
                    this.createBook.translateMan = this.upTranslate;
                    this.createBook.publishTime = this.upPublishTime;
                    this.createBook.pageNumber = this.upPageNumber;
                    this.createBook.series = this.upSeries;
                    this.createBook.isbn = this.upISBN;
                    this.createBook.score = this.upScore;
                    this.createBook.coverImg = this.uploadImgURL;
                    console.log(this.createBook)
                    createBook(this.createBook).then(() => {
                        this.$message({
                            message: '上传成功',
                            type: 'success'
                        });
                        this.getBookList();
                        this.dialogUpSourceVisible = false;
                        this.groupImgUploadVisible = true;
                    })
                }
                if (this.clickItem == '2') {
                    this.createMovie.actor = this.actor;
                    this.createMovie.description = this.description;
                    this.createMovie.director = this.director;
                    this.createMovie.movieLong = this.movieLong;
                    this.createMovie.movieName = this.movieName;
                    this.createMovie.movieScore = this.movieScore;
                    this.createMovie.movieType = this.movieType;
                    this.createMovie.showTime = this.showTime;
                    this.createMovie.scriptwriter = this.scriptwriter
                    createMovie(this.createMovie).then(() => {
                        this.$message({
                            message: '上传成功',
                            type: 'success'
                        });
                        this.getMovieList();
                        this.dialogUpSourceVisible = false;
                        this.groupImgUploadVisible = true;
                    })
                }
                if (this.clickItem == '3') {
                    this.createMusic.musicName = this.musicName;
                    this.createMusic.musicType = this.musicType;
                    this.createMusic.musicIntroduction = this.musicIntroduction;
                    this.createMusic.tracks = this.tracks;
                    this.createMusic.performer = this.performer;
                    this.createMusic.genre = this.genre;
                    this.createMusic.collectionType = this.collectionType;
                    this.createMusic.publishTime = this.publishTime;
                    this.createMusic.publishName = this.publishName;
                    this.createMusic.musicScore = this.musicScore;
                    this.createMusic.musicIntroduction = this.musicIntroduction;
                    createMusic(this.createMusic).then(() => {
                        this.$message({
                            message: '上传成功',
                            type: 'success'
                        });
                        this.getMusicList();
                        this.dialogUpSourceVisible = false;
                        this.groupImgUploadVisible = true;

                    })
                }
            },
            uploadFile(obj) {
                this.groupImgUploadVisible = false;
                this.uploadFileImgFile = obj
                console.log("执行了上传方法")
                console.log(obj["file"])
                console.log(obj)
                let fd = new FormData();
                console.log(obj.file.name)
                fd.append("file", obj["file"]);
                fd.append("name", obj.file.name);
                let params = {}
                this.$set(params, "name", obj.file.name)
                console.log(params)
                console.log("fd", fd)
                uploadBookImg(fd).then(() => {
                    this.$message({
                        message: '上传成功!',
                        type: 'success'
                    });
                })
                getBookURLByName(params).then(resp => {
                    this.uploadImgURL = resp.data.data;
                    console.log(this.uploadImgURL)
                    this.createBook.coverImg = this.uploadImgURL;
                })
            },

            uploadMovie(obj) {
                this.groupImgUploadVisible = false;
                this.uploadFileImgFile = obj
                console.log("执行了上传方法")
                console.log(obj["file"])
                console.log(obj)
                let fd = new FormData();
                console.log(obj.file.name)
                fd.append("file", obj["file"]);
                fd.append("name", obj.file.name);
                let params = {}
                this.$set(params, "name", obj.file.name)
                console.log(params)
                console.log("fd", fd)
                uploadMovieImg(fd).then(() => {
                    this.$message({
                        message: '上传成功!',
                        type: 'success'
                    });
                })
                getMovieURLByName(params).then(resp => {
                    this.uploadImgURL = resp.data.data;
                    console.log(this.uploadImgURL)
                    this.createMovie.coverImg = this.uploadImgURL;
                })
            },
            uploadMusic(obj) {
                this.groupImgUploadVisible = false;
                this.uploadFileImgFile = obj
                console.log("执行了上传方法")
                console.log(obj["file"])
                console.log(obj)
                let fd = new FormData();
                console.log(obj.file.name)
                fd.append("file", obj["file"]);
                fd.append("name", obj.file.name);
                let params = {}
                this.$set(params, "name", obj.file.name)
                console.log(params)
                console.log("fd", fd)
                uploadMusicImg(fd).then(() => {
                    this.$message({
                        message: '上传成功!',
                        type: 'success'
                    });
                })
                getMusicURLByName(params).then(resp => {
                    this.uploadImgURL = resp.data.data;
                    console.log(this.uploadImgURL)
                    this.createMusic.coverImg = this.uploadImgURL;
                })
            },
            getBookList() {
                let params = {}
                this.$set(params, "limit", this.paging.limit)
                this.$set(params, "currentPage", this.paging.currentPage)
                pageGetAllBook(params).then(resp => {
                    this.AllBooks = resp.data.data.records;
                    console.log(this.AllBooks)
                    this.AllBooksLength = resp.data.data.total;
                })
            },
            getMovieList() {
                let params = {}
                this.$set(params, "limit", this.paging.limit)
                this.$set(params, "currentPage", this.paging.currentPage)
                pageGetAllMovie(params).then(resp => {
                    this.AllMovie = resp.data.data.records;
                    console.log(this.AllMovie)
                    this.AllMovieLength = resp.data.data.total;
                })
            },
            getMusicList() {
                let params = {}
                this.$set(params, "limit", this.paging.limit)
                this.$set(params, "currentPage", this.paging.currentPage)
                pageGetAllMusic(params).then(resp => {
                    this.AllMusic = resp.data.data.records;
                    console.log(this.AllMusic);
                    this.AllMusicLength = resp.data.data.total;
                })
            },
            showSearchMusic() {
                let params = {}
                this.$set(params, "limit", this.paging.limit)
                this.$set(params, "currentPage", this.paging.currentPage)
                this.$set(params, "keyword", this.searchInput)
                getSearchMusic(params).then(resp => {
                    this.AllMusic = resp.data.data.records;
                    console.log(this.AllMusic);
                    this.AllMusicLength = resp.data.data.total
                })
            },
            showSearchBook() {
                let params = {}
                this.$set(params, "limit", this.paging.limit)
                this.$set(params, "currentPage", this.paging.currentPage)
                this.$set(params, "keyword", this.searchInput)
                getSearchBook(params).then(resp => {
                    this.AllBooks = resp.data.data.records;
                    console.log(this.AllMusic);
                    this.AllBooksLength = resp.data.data.total
                })
            },
            showSearchMovie() {
                let params = {}
                this.$set(params, "limit", this.paging.limit)
                this.$set(params, "currentPage", this.paging.currentPage)
                this.$set(params, "keyword", this.searchInput)
                getSearchMovie(params).then(resp => {
                    this.AllMovie = resp.data.data.records;
                    this.AllMovieLength = resp.data.data.total
                })
            },
            getGroupList() {
                let params = {}
                this.$set(params, "limit", this.paging.limit)
                this.$set(params, "currentPage", this.paging.currentPage)
                pageGetAllGroupInfos(params).then(resp => {
                    this.AllGroups = resp.data.data.records;
                    console.log(this.AllGroups)
                    this.AllGroupLength = resp.data.data.total;
                })
            },
            handleAvatarSuccess(res, file) {
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

            upSource() {
                this.dialogUpSourceVisible = true;

            },
            makeSureUpdateGroupInfo() {
                //先初始化目标小组的标签
                let tempLabel = "";
                this.targetGroupInfo.label = "";
                for (let i = 0; i < this.value.length; i++) {
                    tempLabel += this.value[i];
                }
                this.targetGroupInfo.label = tempLabel;
                updateGroupInfo(this.targetGroupInfo).then(() => {
                    this.$message({
                        message: '修改信息成功',
                        type: 'success'
                    });
                    this.dialogGroupVisible = false
                    this.getMyJoinGroups();
                    //初始化多选value
                    this.value = [];
                })

            },
            //修改小组信息点击后显示对话框
            updateGroupInfo(data) {
                this.dialogGroupVisible = true;
                getGroupDetailById(data.groupId).then(resp => {
                    this.targetGroupInfo = resp.data.data;
                    this.value.push(this.targetGroupInfo.label)
                    console.log("下面这个是value")
                    console.log(this.value)
                })

            },
            //确定修改回复
            makeSureUpdateReply() {
                updateReply(this.updateInvitationReply).then(() => {
                    this.$message({
                        message: '修改信息成功',
                        type: 'success'
                    });
                    this.dialogInvitationReplyVisible = false;
                    this.getMyInvitationReply();
                })
            },
            //修改回复
            modifyReply(data) {
                this.dialogInvitationReplyVisible = true;
                this.updateInvitationReply = data;
            },
            //确认修改帖子信息
            makeSureModifyInvitation() {
                modifyInvitation(this.updateInvitationInfo).then(() => {
                    this.$message({
                        message: '修改信息成功',
                        type: 'success'
                    });
                    this.dialogInvitationVisible = false;
                    this.getMyInvitation();
                })

            },
            //显示修改帖子的对话框
            modifyInvitationInfo(data) {
                this.dialogInvitationVisible = true;
                this.updateInvitationInfo = data;
            },
            //确定修改评话
            makeSureModifyComment() {
                modifyComment(this.updateCommentInfo).then(() => {
                    this.$message({
                        message: '修改信息成功',
                        type: 'success'
                    });
                    this.dialogBookCommentVisible = false;
                    this.pageGetComment()

                })
            },
            //显示评论修改对话框
            showModifyCommentDialog(data) {
                this.dialogBookCommentVisible = true
                this.updateCommentInfo = data;
            },
            //修改个人信息确认按钮
            makeSureModify() {
                if (this.userInfo.sex == '男') {
                    this.userInfo.sex = 1;
                } else {
                    this.userInfo.sex = 2;
                }
                modifyInfo(this.userInfo).then(() => {
                    this.$message({
                        message: '修改信息成功',
                        type: 'success'
                    });
                    this.dialogModifyUserInfoVisible = false
                    this.getCurrentUserInfo();
                })
            },
            //点击导航书籍管理
            showBookManage() {
                this.clickItem = '1'
            },
            //点击导航电影管理
            showMovieManage() {
                this.clickItem = '2';
                this.resourceType = '1'
            },
            //点击导航音乐管理
            showMusicManage() {
                this.clickItem = '3'
                this.resourceType = '2'
            },
            //点击导航小组管理
            showGroupManage() {
                this.clickItem = '4'
                this.resourceType = '3'
            },
            //获取当前用户的详细信息
            getCurrentUserInfo() {
                getCurrentUserInfo().then(resp => {
                    this.userInfo = resp.data.data;
                    if (this.userInfo.sex == 1) {
                        this.userInfo.sex = "男"
                    } else {
                        this.userInfo.sex = "女"
                    }
                    console.log(this.userInfo)
                })
            },
            // 根据不同的类型分页获取用户的所有评话
            pageGetComment() {
                let params = {}
                this.$set(params, "limit", this.paging.limit)
                this.$set(params, "currentPage", this.paging.currentPage)
                this.$set(params, "type", this.resourceType)
                pageGetCurrentAllComment(params).then(resp => {
                    this.userCommentList = resp.data.data.records;
                    console.log(this.userCommentList)
                })
            },
            //页面改变分页每页数量
            handleSizeChange(val) {
                this.paging.limit = val
                this.paging.currentPage = 1
                this.getBookList()
            },
            //页面改变分页当前页数
            handleCurrentChange(val) {
                this.paging.currentPage = val
                this.getBookList()
            },
            //我的帖子用页面改变分页每页数量
            handleSizeChangeMovie(val) {
                this.paging.limit = val
                this.paging.currentPage = 1
                this.getMovieList()
            },
            //我的帖子用页面改变分页当前页数
            handleCurrentChangeMovie(val) {
                this.paging.currentPage = val
                this.getMovieList()
            },
            //我的小组用页面改变分页每页数量
            handleSizeChangeMusic(val) {
                this.paging.limit = val
                this.paging.currentPage = 1
                this.getMusicList()
            },
            //我的小组用页面改变分页当前页数
            handleCurrentChangeMusic(val) {
                this.paging.currentPage = val
                this.getMusicList()
            },
            //我的回复用页面改变分页每页数量
            handleSizeChangeGroup(val) {
                this.paging.limit = val
                this.paging.currentPage = 1
                this.getGroupList()
            },
            //我的回复用页面改变分页当前页数
            handleCurrentChangeGroup(val) {
                this.paging.currentPage = val
                this.getGroupList()
            },
            //分页获取我参加的小组
            getMyJoinGroups() {
                let params = {}
                this.$set(params, "limit", this.paging.limit)
                this.$set(params, "currentPage", this.paging.currentPage)
                pageGetMyJoinGroups(params).then(resp => {
                    this.userJoinGroups = resp.data.data.records;
                    console.log("这个是小组分页")
                    console.log(this.userJoinGroups)
                })
            },
            //分页获取我的所有帖子
            getMyInvitation() {
                let params = {}
                this.$set(params, "limit", this.paging.limit)
                this.$set(params, "currentPage", this.paging.currentPage)
                pageGetMyInvitation(params).then(resp => {
                    this.userInvitationList = resp.data.data.records;
                    console.log("这个是我的帖子")
                    console.log(this.userInvitationList)
                })
            },
            getMyInvitationReply() {
                let params = {}
                this.$set(params, "limit", this.paging.limit)
                this.$set(params, "currentPage", this.paging.currentPage)
                pageGetMyInvitationReply(params).then(resp => {
                    this.userInvitationReplyList = resp.data.data.records;
                    console.log(this.userInvitationReplyList);
                })
            },
            quitLogin() {
                this.$router.push("/");
            }
        }, created() {
            this.getCurrentUserInfo();
            this.getMyJoinGroups();
            this.getMyInvitation();
            this.getMyInvitationReply()
            this.getBookList();
            this.getMusicList();
            this.getMovieList();
            this.getGroupList()
        }
    }
</script>

<style scoped>
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }


    .detail-hidden {
        width: 100%;
        /* 规定当内容溢出元素框（容器）时隐藏 */
        overflow: hidden;
        /* 规定当文本溢出包含元素（容器）出现省略号 */
        text-overflow: ellipsis;
        /* 规定段落中的文本不进行换行 */
        white-space: nowrap;
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


</style>