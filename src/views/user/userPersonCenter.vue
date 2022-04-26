<template>
    <div class="user-person-center" style="width: 100%;margin-top: 3vh;text-align: center">

        <el-row style="margin-top: 8px">
            <el-col :span="3">
                <div class="grid-content bg-purple"></div>
            </el-col>


            <!-- 个人中心主体部分-->
            <el-col :span="18">


                <!--   头像和用户名             -->
                <el-row style="border-bottom: 1px solid #e6e6e6;border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;border-top: 1px solid #e6e6e6">
                    <div class="grid-content bg-purple-light">
                        <div>
                            <div class="head-picture" style="margin-right: 10px;display: flex">
                                <el-avatar :size="100" :src="userHeadSrc" style="margin: 5px"></el-avatar>
                                <div style="float: left;margin-top: 5vh">
                                    {{userInfo.nickname}}
                                    <el-button type="primary" size="mini" @click="quitLogin()">退出登录</el-button>
                                    <p style="width: 15vw;color: #b28b48;margin-top: 6px" v-if="this.isGroupCreaterFlag == false">小组管理员</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </el-row>

                <!--      头像下方          -->
                <el-row>
                    <el-col :span="6"
                            style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;border-bottom: 1px solid #e6e6e6">
                        <div style="height: 74vh">
                            <el-menu
                                    default-active="1"
                                    class="el-menu-vertical-demo">
                                <el-menu-item index="1" @click="showMyInfo()">
                                    <i class="el-icon-s-custom"></i>
                                    <span slot="title">个人信息</span>
                                </el-menu-item>
                                <el-menu-item index="2" @click="showMyBookComment()">
                                    <i class="el-icon-collection"></i>
                                    <span slot="title">我的书籍评话</span>
                                </el-menu-item>
                                <el-menu-item index="3" @click="showMyMovieComment()">
                                    <i class="el-icon-video-camera-solid"></i>
                                    <span slot="title">我的电影评话</span>
                                </el-menu-item>
                                <el-menu-item index="4" @click="showMyMusicComment()">
                                    <i class="el-icon-headset"></i>
                                    <span slot="title">我的音乐评话</span>
                                </el-menu-item>
                                <el-menu-item index="5" @click="showMyGroup()">
                                    <i class="el-icon-s-promotion"></i>
                                    <span slot="title">我加入的小组</span>
                                </el-menu-item>
                                <el-menu-item index="6" @click="showMyInvitation()">
                                    <i class="el-icon-chat-square"></i>
                                    <span slot="title">我的帖子</span>
                                </el-menu-item>
                                <el-menu-item index="7" @click="showMyReply()">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">我的回复</span>
                                </el-menu-item>
                            </el-menu>
                        </div>
                    </el-col>

                    <!--       右边的主体部分             -->
                    <el-col :span="18" style="border-right: 1px solid #e6e6e6;border-bottom: 1px solid #e6e6e6">
                        <div style="height: 70vh">

                            <!-- 个人信息显示  -->
                            <div v-if="this.clickItem == '1'">
                                <el-row style="margin-top: 4vh;">
                                    <el-col :span="24">
                                        <div>账号:{{userInfo.account}}</div>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 2vh">
                                    <el-col :span="24">
                                        <div>昵称:{{userInfo.nickname}}</div>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 2vh;">
                                    <el-col :span="24">
                                        <div>性别:{{userInfo.sex}}</div>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 2vh;">
                                    <el-col :span="24">
                                        <div>电话:{{userInfo.tel}}</div>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 2vh;">
                                    <el-col :span="24">
                                        <div>地区:{{userInfo.area}}</div>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 2vh;">
                                    <el-col :span="24">
                                        <div>邮箱:{{userInfo.email}}</div>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 2vh;">
                                    <el-col :span="24">
                                        <div>个性签名:{{userInfo.sign}}</div>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 4vh;">
                                    <el-col :span="24">
                                        <div>
                                            <el-button type="primary" @click="dialogModifyUserInfoVisible = true">修改
                                            </el-button>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <!-- 以上是个人信息显示  -->

                            <!--           点击我的书籍评话显示                 -->
                            <div v-if="this.clickItem == '2'">
                                <el-row style="margin-top: 4vh;" v-for="item in userCommentList" :key="item">

                                    <el-col :span="24" style="display: flex;border-bottom: 1px solid #e6e6e6">
                                        <div style="margin-left: 4vw;text-align: left;margin-bottom: 1vh">
                                            <p>[书籍]{{item.resourceName}}</p>
                                            <p>发布时间:{{item.publicTime}}</p>
                                            <p>{{item.commentContent}}</p>
                                        </div>

                                        <div style="display: flex;margin-left: 15vw;margin-bottom: 1vh;height: 6vh;margin-top: 2vh">
                                            <el-button type="primary" size="mini"
                                                       @click="showModifyCommentDialog(item)">修改
                                            </el-button>
                                            <el-button type="danger" size="mini"
                                                       @click="removeComment(item.resourceCommentId)">删除
                                            </el-button>

                                        </div>


                                    </el-col>


                                </el-row>

                                <div class="group-footer-page" style="margin-top: 25px">
                                    <el-pagination
                                            background
                                            @size-change="handleSizeChange"
                                            @current-change="handleCurrentChange"
                                            :page-sizes="[5,10,15,20]"
                                            :current-page="paging.currentPage"
                                            :page-size="paging.limit"
                                            layout="total,sizes,prev,pager,next"
                                            :total="userCommentList.length">
                                    </el-pagination>
                                </div>

                            </div>
                            <!--           以上点击我的书籍评话显示                 -->

                            <!--           点击我的影视评话显示                 -->
                            <div v-if="this.clickItem == '3'">
                                <el-row style="margin-top: 4vh;" v-for="item in userCommentList" :key="item">
                                    <el-col :span="24" style="display: flex;border-bottom: 1px solid #e6e6e6">
                                        <div style="margin-left: 4vw;text-align: left;margin-bottom: 1vh">
                                            <p>[电影]{{item.resourceName}}</p>
                                            <p>发布时间:{{item.publicTime}}</p>
                                            <p>{{item.commentContent}}</p>
                                        </div>
                                        <div style="display: flex;margin-left: 15vw;margin-bottom: 1vh;height: 6vh;margin-top: 2vh">
                                            <el-button type="primary" size="mini"
                                                       @click="showModifyCommentDialog(item)">修改
                                            </el-button>
                                            <el-button type="danger" size="mini"
                                                       @click="removeComment(item.resourceCommentId)">删除
                                            </el-button>
                                        </div>
                                    </el-col>
                                </el-row>

                                <div class="group-footer-page" style="margin-top: 25px">
                                    <el-pagination
                                            background
                                            @size-change="handleSizeChange"
                                            @current-change="handleCurrentChange"
                                            :page-sizes="[5,10,15,20]"
                                            :current-page="paging.currentPage"
                                            :page-size="paging.limit"
                                            layout="total,sizes,prev,pager,next"
                                            :total="userCommentList.length">
                                    </el-pagination>
                                </div>

                            </div>
                            <!--           以上点击我的影视评话显示                 -->


                            <!--           点击我的音乐评话显示                 -->
                            <div v-if="this.clickItem == '4'">
                                <div style="margin-top: 4vh"></div>
                                <el-row v-for="item in userCommentList" :key="item">
                                    <el-col :span="24" style="display: flex;border-bottom: 1px solid #e6e6e6">
                                        <div style="margin-left: 4vw;text-align: left;margin-bottom: 1vh">
                                            <p>[音乐]{{item.resourceName}}</p>
                                            <p>发布时间:{{item.publicTime}}</p>
                                            <p>{{item.commentContent}}</p>
                                        </div>
                                        <div style="display: flex;margin-left: 15vw;margin-bottom: 1vh;height: 6vh;margin-top: 2vh">
                                            <el-button type="primary" size="mini"
                                                       @click="showModifyCommentDialog(item)">修改
                                            </el-button>
                                            <el-button type="danger" size="mini"
                                                       @click="removeComment(item.resourceCommentId)">删除
                                            </el-button>
                                        </div>
                                    </el-col>
                                </el-row>

                                <div class="group-footer-page" style="margin-top: 25px">
                                    <el-pagination
                                            background
                                            @size-change="handleSizeChange"
                                            @current-change="handleCurrentChange"
                                            :page-sizes="[5,10,15,20]"
                                            :current-page="paging.currentPage"
                                            :page-size="paging.limit"
                                            layout="total,sizes,prev,pager,next"
                                            :total="userCommentList.length">
                                    </el-pagination>
                                </div>

                            </div>
                            <!--           以上点击我的音乐评话显示                 -->


                            <!--            点击我加入的小组显示                -->
                            <div v-if="this.clickItem == '5'">
                                <!--             群组列表               -->
                                <div v-for="item in userJoinGroups" :key="item"
                                     style="border-bottom: 1px solid #e6e6e6;text-align: left">
                                    <el-row style="margin-top: 4vh;">
                                        <el-col :span="6">
                                            <div style="margin-left: 20%;margin-top: 5px;margin-bottom: 5px;">
                                                <img :src="item.groupHead" style="width:7vw;height:14vh">
                                            </div>
                                        </el-col>
                                        <el-col :span="10">
                                            <div style="margin-top: 6%">
                                                <p>{{item.groupName}}</p>
                                                <p>{{item.personNumber}}人</p>
                                            </div>
                                        </el-col>
                                        <el-col :span="8">
                                            <div style="margin-top: 8%">
                                                <el-button type="primary" style="margin-left: 10%"
                                                           v-if="item.isCreater=='1'" size="medium"
                                                           @click="updateGroupInfo(item)">修改
                                                </el-button>
                                                <el-button type="danger" style="margin-left: 10%"
                                                           v-if="item.isCreater=='1'" size="medium"
                                                           @click="removeGroup(item.groupId)">解散
                                                </el-button>
                                                <el-button type="danger" style="margin-left: 10%"
                                                           v-if="item.isCreater=='2'" size="medium"
                                                           @click="quitGroup(item.groupId)">退出
                                                </el-button>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                                <!--          群组底部分页                  -->
                                <div class="group-footer-page" style="margin-top: 25px">
                                    <el-pagination
                                            background
                                            @size-change="handleSizeChangeJoins"
                                            @current-change="handleCurrentChangeJoins"
                                            :page-sizes="[5,10,15,20]"
                                            :current-page="paging.currentPage"
                                            :page-size="paging.limit"
                                            layout="total,sizes,prev,pager,next"
                                            :total="userJoinGroups.length">
                                    </el-pagination>

                                </div>
                            </div>
                            <!--          以上是点击我加入的小组显示                  -->


                            <!--            点击我的帖子显示                -->
                            <div v-if="this.clickItem == '6'">
                                <el-row style="margin-top: 4vh;" v-for="item in userInvitationList" :key="item">
                                    <el-col :span="24" style="display: flex;border-bottom: 1px solid #e6e6e6">
                                        <div style="margin-left: 4vw;text-align: left;margin-bottom: 1vh">
                                            <p>发布时间:{{item.createTime}}</p>
                                            <p>{{item.invitationTitle}}</p>
                                        </div>
                                        <div style="display: flex;margin-left: 15vw;margin-bottom: 1vh;height: 6vh">
                                            <el-button type="primary" size="mini" @click="modifyInvitationInfo(item)">
                                                修改
                                            </el-button>
                                            <el-button type="danger" size="mini"
                                                       @click="removeInvitation(item.invitationId)">删除
                                            </el-button>
                                        </div>
                                    </el-col>
                                </el-row>
                                <div class="group-footer-page" style="margin-top: 25px">
                                    <el-pagination
                                            background
                                            @size-change="handleSizeChangeInvitation"
                                            @current-change="handleCurrentChangeInvitation"
                                            :page-sizes="[5,10,15,20]"
                                            :current-page="paging.currentPage"
                                            :page-size="paging.limit"
                                            layout="total,sizes,prev,pager,next"
                                            :total="userInvitationList.length">
                                    </el-pagination>
                                </div>
                            </div>
                            <!--            以上是点击我的帖子显示                -->


                            <!--            点击我的回复显示                -->
                            <div v-if="this.clickItem == '7'">
                                <el-row style="margin-top: 4vh;" v-for="item in userInvitationReplyList" :key="item">
                                    <el-col :span="24" style="display: flex;border-bottom: 1px solid #e6e6e6">
                                        <div style="margin-left: 4vw;text-align: left;margin-bottom: 1vh">
                                            <p>发布时间:{{item.replyTime}}</p>
                                            <p>{{item.invitationReplyContent}}</p>
                                        </div>
                                        <div style="display: flex;margin-left: 15vw;margin-bottom: 1vh;height: 6vh">
                                            <el-button type="primary" size="mini" @click="modifyReply(item)">修改
                                            </el-button>
                                            <el-button type="danger" size="mini"
                                                       @click="removeReply(item.invitationReplyId)">删除
                                            </el-button>
                                        </div>
                                    </el-col>
                                </el-row>
                                <div class="group-footer-page" style="margin-top: 25px">
                                    <el-pagination
                                            background
                                            @size-change="handleSizeChangeInvitation"
                                            @current-change="handleCurrentChangeInvitation"
                                            :page-sizes="[5,10,15,20]"
                                            :current-page="paging.currentPage"
                                            :page-size="paging.limit"
                                            layout="total,sizes,prev,pager,next"
                                            :total="userInvitationReplyList.length">
                                    </el-pagination>
                                </div>

                            </div>
                        </div>


                    </el-col>

                </el-row>

            </el-col>

            <el-col :span="3">
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


    </div>
</template>

<script>
    import {getCurrentUserInfo, modifyInfo} from "../../api/user";
    import {modifyComment, pageGetCurrentAllComment, removeCommentById} from "../../api/resource-comment";
    import {pageGetMyJoinGroups, quitGroupById} from "../../api/join";
    import {modifyInvitation, pageGetMyInvitation, removeInvitationById} from "../../api/invitation";
    import {pageGetMyInvitationReply, removeReplyById, updateReply} from "../../api/invitationReply";
    import {getGroupDetailById, removeGroupById, updateGroupInfo,isGroupCreater} from "../../api/group";

    export default {
        name: "userPersonCenter",
        data: function () {
            return {
                userHeadSrc: "http://47.99.186.220:9000/recommend/userHead.jpg?Content-Disposition=attachment%3B%20filename%3D%22userHead.jpg%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220425%2F%2Fs3%2Faws4_request&X-Amz-Date=20220425T023015Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=31d4174deb0645f8ef1453472703f242d2ba6b3c375a42185196784728d84b3c",
                clickItem: '1',
                resourceType: "1",
                userInfo: {},
                isGroupCreaterFlag: true,
                userCommentList: [{}],
                userJoinGroups: [{}],
                userInvitationList: [{}],
                userInvitationReplyList: [{}],
                dialogModifyUserInfoVisible: false,
                dialogBookCommentVisible: false,
                dialogInvitationVisible: false,
                dialogInvitationReplyVisible: false,
                dialogGroupVisible: false,
                targetGroupInfo: {},
                updateCommentInfo: {},
                updateInvitationInfo: {},
                updateInvitationReply: {},
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
            }
        },
        methods: {
            removeReply(id) {
                this.$confirm('此操作将永久删除该回复, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    removeReplyById(id);
                    this.getMyInvitationReply();
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
            removeInvitation(id) {
                this.$confirm('此操作将永久删除该帖子, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    removeInvitationById(id);
                    this.getMyInvitation();
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
                console.log(id);
                this.$confirm('此操作将永久删除该小组, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    removeGroupById(id);
                    this.getMyJoinGroups();
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
            quitGroup(id) {
                this.$confirm('此操作将永久退出该小组, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    quitGroupById(id);
                    this.getMyJoinGroups();
                    this.$message({
                        type: 'success',
                        message: '退出成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消退出'
                    });
                });
            },
            removeComment(id) {
                console.log(id);
                this.$confirm('此操作将永久删除该评论, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    removeCommentById(id);
                    this.pageGetComment();
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
            //点击导航个人信息
            showMyInfo() {
                this.clickItem = '1'
            },
            //点击导航书籍评话
            showMyBookComment() {
                console.log("点击了我的书籍评话")
                this.clickItem = '2';
                this.resourceType = '1'
                this.pageGetComment();
            },
            //点击导航电影评话
            showMyMovieComment() {
                this.clickItem = '3'
                this.resourceType = '2'
                this.pageGetComment();
            },
            //点击导航我的音乐评话
            showMyMusicComment() {
                this.clickItem = '4'
                this.resourceType = '3'
                this.pageGetComment();
            },
            //点击导航我加入的小组
            showMyGroup() {
                this.clickItem = '5'
            },
            //点击导航我的帖子
            showMyInvitation() {
                this.clickItem = '6'
            },
            //点击导航我的回复
            showMyReply() {
                this.clickItem = '7'
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
                this.pageGetComment()
            },
            //页面改变分页当前页数
            handleCurrentChange(val) {
                this.paging.currentPage = val
                this.pageGetComment()
            },
            //我的帖子用页面改变分页每页数量
            handleSizeChangeInvitation(val) {
                this.paging.limit = val
                this.paging.currentPage = 1
                this.getMyInvitation()
            },
            //我的帖子用页面改变分页当前页数
            handleCurrentChangeInvitation(val) {
                this.paging.currentPage = val
                this.getMyInvitation()
            },
            //我的小组用页面改变分页每页数量
            handleSizeChangeJoins(val) {
                this.paging.limit = val
                this.paging.currentPage = 1
                this.getMyJoinGroups()
            },
            //我的小组用页面改变分页当前页数
            handleCurrentChangeJoins(val) {
                this.paging.currentPage = val
                this.getMyJoinGroups()
            },
            //我的回复用页面改变分页每页数量
            handleSizeChangeReply(val) {
                this.paging.limit = val
                this.paging.currentPage = 1
                this.getMyInvitationReply()
            },
            //我的回复用页面改变分页当前页数
            handleCurrentChangeReply(val) {
                this.paging.currentPage = val
                this.getMyInvitationReply()
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
            isGroupCreater().then(resp =>{
                this.isGroupCreaterFlag = resp.data.data;
            })
        }
    }
</script>

<style scoped>
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

</style>