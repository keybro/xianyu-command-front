<template>
    <!--  小组详情页面  -->
    <div class="group-detail">
        <el-row>
            <el-col :span="2">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="20">
                <div>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content header">
                                <div class="left">
                                    <div class="image__preview">
                                        <el-image
                                                style="width: 10vh; height: 12vh"
                                                :src="this.groupDetailInfo.groupHead"
                                                :preview-src-list="srcList">
                                        </el-image>
                                        <h4 id="title" style="margin-left: 10px;margin-top: 10px">
                                            {{this.groupDetailInfo.groupName}}</h4>
                                    </div>

                                    <p style="margin-top: 10px;text-align: left">组长:{{createrName}}</p>


                                </div>
                                <div class="right">
                                    <el-button type="primary" size="small" @click="createJoinApp()" v-if="this.isHavaJoinFlag == true">加入小组</el-button>
                                    <div style="display: flex;margin-top: 10px;margin-bottom: 10px">
                                        <p style="margin-top: 5px">小组标签：</p>
                                        <el-tag v-for="(item) in labelArray.slice(0,labelArray.length-1)" :key="item">
                                            {{item}}
                                        </el-tag>
                                        <!--                                        <el-tag type="success">甜宠</el-tag>-->
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row style="margin-top: 6px;border-right: 1px #e6e6e6 solid;border-left: 1px #e6e6e6 solid;;margin-top: 0px">
                        <el-col :span="1">
                            <div class="grid-content bg-purple"></div>
                        </el-col>
                        <!--         作品的简介内容           -->
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light" style="text-align: left">
                                <h4 style="margin-top: 5px">简介:</h4>
                            </div>
                        </el-col>
                        <el-col :span="1">
                            <div class="grid-content bg-purple"></div>
                        </el-col>
                    </el-row>

                    <el-row style="border-right: 1px #e6e6e6 solid;border-left: 1px #e6e6e6 solid;">
                        <el-col :span="1">
                            <div class="grid-content bg-purple"></div>
                        </el-col>
                        <!--         作品的简介内容           -->
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light" style="text-align: left">
                                {{this.groupDetailInfo.groupIntroduction}}
                            </div>
                        </el-col>
                        <el-col :span="1">
                            <div class="grid-content bg-purple"></div>
                        </el-col>
                    </el-row>


                    <el-row style="border-top: 1px #e6e6e6 solid;border-left: 1px #e6e6e6 solid;border-right: 1px #e6e6e6 solid">
                        <el-col :span="1">
                            <div class="grid-content bg-purple"></div>
                        </el-col>
                        <!--         喜欢推荐标题           -->
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light" style="text-align: left">
                                <h4 style="margin-top: 10px">喜欢这个作品的人也喜欢</h4>
                            </div>
                        </el-col>
                        <el-col :span="1">
                            <div class="grid-content bg-purple"></div>
                        </el-col>
                    </el-row>

                    <!--    推荐card书籍部分        -->
                    <el-row style="margin-top: 6px;margin-bottom: 10px;border-left: 1px #e6e6e6 solid;border-right: 1px #e6e6e6 solid">
                        <el-col :span="1">
                            <div class="grid-content bg-purple"></div>
                        </el-col>
                        <!--         喜欢推荐标题           -->
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light" style="text-align: left">

                                <!--           图片card部分             -->
                                <!--                                <el-row style="margin-top: 6px">-->
                                <!--                                    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>-->
                                <!--                                    &lt;!&ndash;         喜欢推荐标题           &ndash;&gt;-->
                                <!--                                    <el-col :span="4" v-for="(item, index) in recommendGroupList" :key="item" :offset="index > 0 ? 5 : 0" style="display: flex;margin-left: 10px">-->
                                <!--                                            <img :src="item.groupHead" alt="" style="width: 8vw;height: 14vh;margin-left: 3vw" @click="toThisDetail(item.groupId)">-->
                                <!--                                            <div>-->
                                <!--                                                <p class="group-name-recommend" style="width: 5vw">{{item.groupName}}</p>-->
                                <!--                                                <p style="margin-top: 10px">1919人</p>-->
                                <!--                                            </div>-->

                                <!--                                    </el-col>-->
                                <!--                                </el-row>-->

                                <div style="display: flex;justify-content: center;" v-for="item in recommendGroupList"
                                     :key="item">
                                    <img :src="item.groupHead" alt="" style="width: 8vw;height: 14vh;margin-left: 5px" @click="toThisDetail(item.groupId)">
                                    <div style="margin-left: 2px">
                                        <p class="group-name-recommend" style="width: 5vw">{{item.groupName}}</p>
                                        <p style="margin-top: 10px">{{item.personNumber}}人</p>
                                    </div>

                                </div>

                            </div>
                        </el-col>
                        <el-col :span="1">
                            <div class="grid-content bg-purple"></div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content comment">
                                <div class="top">
                                    <el-breadcrumb separator="/" class="left">
                                        <i class="el-icon-edit-outline icon"></i>
                                        <el-breadcrumb-item><a href="/">最热讨论</a></el-breadcrumb-item>
                                        <el-breadcrumb-item id="behind"><a href="/">最近讨论</a></el-breadcrumb-item>
                                    </el-breadcrumb>
                                    <el-button type="primary" size="small" class="right" style="margin-top: 10px"
                                               @click="writeBtn()">发言
                                    </el-button>
                                    <!--                                    <p >发言</p>-->
                                </div>
                                <div class="bottom" style="text-align: center">
                                    <div style="text-align: center; width: 90%;margin-left: 5%">
                                        <el-row>
                                            <el-col :span="1">
                                                <div class="grid-content bg-purple"></div>
                                            </el-col>
                                            <el-col :span="22">
                                                <div class="grid-content bg-purple-light">
                                                    <el-table
                                                            fit
                                                            highlight-current-row
                                                            @row-click="showInvitationDetail"
                                                            :data="invitationList">
                                                        <el-table-column
                                                                prop="invitationTitle"
                                                                label="帖子"
                                                                align="center"
                                                                width="350">
                                                        </el-table-column>
                                                        <el-table-column
                                                                prop="createrName"
                                                                label="作者"
                                                                align="center"
                                                                width="210">
                                                        </el-table-column>
                                                        <el-table-column
                                                                prop="replyNumber"
                                                                align="center"
                                                                width="90"
                                                                label="回应数">
                                                        </el-table-column>
                                                        <el-table-column
                                                                prop="createTime"
                                                                width="400"
                                                                align="center"
                                                                label="发帖时间">
                                                        </el-table-column>
                                                    </el-table>
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
                                </div>

                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content footer">
                                <p>邮友论坛</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>


        <!--   写评语对话框     -->
        <el-dialog title="" :visible.sync="dialogTableVisible">
            <div class="comment-header" style="background: #f8f8f8;text-align: right">
                <el-button type="success" @click="uploadInvitation()">发表帖子</el-button>
            </div>
            <div class="comment-object" style="background: #f8f8f8;margin-top: 1vh;text-align: left">
                <p style="font-size: medium;margin-left: 3%">[小组] {{this.currentGroupName}}</p>

            </div>
            <div class="comment-score" style="background: #f8f8f8;text-align: left">
                <div style="margin-left: 3%;margin-top: 1vh">
                    标题：
                    <el-input v-model="createInvitation.invitationTitle" placeholder="请输入帖子标题"
                              style="width: 92%"></el-input>
                </div>
            </div>

            <div class="comment-content" style="background: #f8f8f8;text-align: left">
                <div style="display: flex;margin-left: 3%;margin-top: 1vh">
                    正文：
                    <el-input
                            type="textarea"
                            :autosize="{ minRows: 3, maxRows: 6}"
                            placeholder="请输入帖子正文"
                            v-model="createInvitation.invitationContent"
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
    import {getGroupDetailById, getGroupRecommendById} from "../../api/group";
    import {getUserInfoById} from "../../api/user";
    import {createJoinApplication,isHaveJoin} from "../../api/join";
    import {createInvitation, pageGetInvitationByGroup} from "../../api/invitation";

    export default {
        name: "groupDetail",
        data() {
            return {
                dialogTableVisible: false,
                groupDetailInfo: {},
                fits: ['fill', 'fill', 'fill', 'fill', 'fill'],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
                ],
                list: [1, 2, 3, 4, 5, 6, 7, 8],
                reverse: true,
                labelArray: [{}],
                endLabelArray: [{}],
                recommendGroupList: [{}],
                createrName: '',
                isHavaJoinFlag: true,
                invitationTitle: "",
                invitationContent: "",
                currentGroupName: "",
                createInvitation: {
                    invitationTitle: "",
                    invitationContent: "",
                    groupId: ""
                },
                paging: {
                    currentPage: 1,
                    limit: 10,
                },
                invitationList: [{}],
            }
        },
        methods: {
            writeBtn(){
                if (this.isHavaJoinFlag == false){
                    this.dialogTableVisible = true;
                }
                else {
                    this.$alert('请先加入小组', '提示', {
                        confirmButtonText: '确定',
                    });
                }
            },
            isHaveJoinGroup(){
                let groupId = sessionStorage.getItem("groupId")
                isHaveJoin(groupId).then(resp =>{
                    this.isHavaJoinFlag = resp.data.data;
                })
            },
            showInvitationDetail(row) {
                if (this.isHavaJoinFlag == false){
                    sessionStorage.setItem("invitationId", row.invitationId)
                    this.$router.push("/homePage/invitationDetail");
                }
                else {
                    this.$alert('请先加入小组', '提示', {
                        confirmButtonText: '确定',
                    });
                }

            },
            toThisDetail(id) {
                sessionStorage.setItem("groupId",id)
                this.isHaveJoinGroup();
                getGroupDetailById(id).then(resp => {
                    this.groupDetailInfo = resp.data.data;
                    this.currentGroupName = resp.data.data.groupName;
                    this.labelArray = resp.data.data.label.split('/');
                    getUserInfoById(resp.data.data.createrId).then(resp => {
                        this.createrName = resp.data.data.nickname;
                    })
                })
                getGroupRecommendById(id).then(resp => {
                    this.recommendGroupList = resp.data.data;
                    console.log("推荐的小组")
                    console.log(this.recommendGroupList)
                })
                this.getInvitationList();

            },
            getInvitationList() {
                let groupId = sessionStorage.getItem("groupId")
                let params = {}
                this.$set(params, "limit", this.paging.limit)
                this.$set(params, "currentPage", this.paging.currentPage)
                this.$set(params, "groupId", groupId)
                pageGetInvitationByGroup(params).then(resp => {
                    this.invitationList = resp.data.data.records
                    // for (let i = 0; i < this.invitationList.length; i++) {
                    //      getUserInfoById(this.invitationList[i].createrId).then(resp=>{
                    //         this.invitationList[i].createrName = resp.data.data.nickname;
                    //         this.invitationList[i].replyNumber = 10
                    //     })
                    // }
                    console.log(this.invitationList)
                })
            },
            uploadInvitation() {
                let groupId = sessionStorage.getItem("groupId");
                this.createInvitation.groupId = groupId;
                createInvitation(this.createInvitation).then(() => {
                    this.$message({
                        message: '发帖成功！',
                        type: 'success'
                    });
                    this.dialogTableVisible = false;
                })

            },
            createJoinApp() {
                let groupId = sessionStorage.getItem("groupId");
                console.log(groupId)
                createJoinApplication(groupId).then(() => {
                    this.$message({
                        message: '恭喜你成为该小组的一员！',
                        type: 'success'
                    });
                    this.isHaveJoinGroup()
                })
            },
            //页面改变分页每页数量
            handleSizeChange(val) {
                this.paging.limit = val
                this.paging.currentPage = 1
                this.getInvitationList()
            },
            //页面改变分页当前页数
            handleCurrentChange(val) {
                this.paging.currentPage = val
                this.getInvitationList()
            },

        },
        created() {
            let groupId = sessionStorage.getItem("groupId");
            setTimeout(this.getInvitationList(), 1000);
            getGroupDetailById(groupId).then(resp => {
                this.groupDetailInfo = resp.data.data;
                this.currentGroupName = resp.data.data.groupName;
                this.labelArray = resp.data.data.label.split('/');
                getUserInfoById(resp.data.data.createrId).then(resp => {
                    this.createrName = resp.data.data.nickname;
                })
            })
            getGroupRecommendById(groupId).then(resp => {
                this.recommendGroupList = resp.data.data;
                console.log("推荐的小组")
                console.log(this.recommendGroupList)
            })
            this.isHaveJoinGroup();


        }
    }
</script>

<style scoped>
    .group-detail {
        width: 99.9%;
        height: 100%;
        border: #e6e6e6 1px solid;
        margin: 0 auto;
    }

    .grid-content {
        /*height: 21vh;*/
        display: flex;
        flex-direction: row;
    }

    .header {
        /*height: 21vh;*/
        border: 1px #e6e6e6 solid;
        display: flex;
        justify-content: flex-start;
    }

    .left {
        margin: 3vh 15vh 3vh 3vh;
    }

    .image__preview {
        display: flex;
        flex-direction: row;
    }

    .image__preview p {
        margin-left: 1vh;
    }

    .header .left h3 {
        margin-top: 1vh;
        margin-left: -2vh;
    }

    .right {
        margin-top: 3vh;
    }

    .header .right {
        /*float: left;*/
        position: relative;
        left: 8vh;
        top: 8vh;
    }

    .label {
        position: relative;
        left: 7vh;
    }

    .label p {
        font-size: initial;
        display: inline-block;
    }

    .introduction {
        height: 16vh;
        border: #e6e6e6 1px solid;
    }

    .introduction h3 {
        margin: 3vh 3vh 3vh 3vh;
    }

    .like {
        height: 25vh;
        border: #e6e6e6 1px solid;
        display: flex;
        flex-direction: column;
    }

    .like #like {
        float: left;
        margin: 3vh 3vh 3vh 3vh;
        display: flex;
        justify-content: flex-start;
    }

    .images {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 3vh;
    }

    .like .images .block {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .like .images .block .member {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 1vh;
    }

    .like .images .block .member p {
        color: black;
    }

    .comment {
        /*height: 62vh;*/
        border: #e6e6e6 1px solid;
        display: flex;
        flex-direction: column;
    }

    .comment .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .comment .top .icon {
        margin-left: 1vh;
    }

    .comment .top .left {
        font-size: medium;
    }

    .comment .top .right {
        float: right;
        position: relative;
        left: -12vh;
        top: -0.5vh;
        font-weight: bolder;
    }

    .bottom {
        margin: 0 3vh;
        outline: 1px #e6e6e6 dashed;
        outline-offset: -5px;
        border-radius: 10px;
        box-shadow: 0 0 0 5px transparent;
        padding-top: 3vh;
    }

    .item {
        color: #2b95f5;
        margin: 0vh 8vh 3vh 5vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .item span {
        font-weight: bolder;
    }

    .item #write {
        position: relative;
        left: 1vh;
    }

    .items {
        margin-right: 3vh;
        position: relative;
        top: -2vh;
    }

    .items .blocks {
        margin: 0vh 3vh 0vh 3vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
        top: 0.5vh;
    }

    .el-divider {
        margin: 1vh 3vh 1vh 3vh;
    }

    /*.pagination{*/
    /*    position: relative;*/
    /*    top: 6vh;*/
    /*}*/

    .footer {
        /*height: 4vh;*/
    }

    .footer p {
        margin: 0 auto;
        font-size: medium;
        display: flex;
        align-items: center;
        color: #999999;
    }


    .bg-purple {
        background: white;
    }

    .bg-purple-light {
        background: white;
    }

    .grid-content {
        border-radius: 0px;
        min-height: 36px;
    }

    .group-name-recommend {
        /*width: 300px;*/
        /* 规定当内容溢出元素框（容器）时隐藏 */
        overflow: hidden;
        /* 规定当文本溢出包含元素（容器）出现省略号 */
        text-overflow: ellipsis;
        /* 规定段落中的文本不进行换行 */
        white-space: nowrap;
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