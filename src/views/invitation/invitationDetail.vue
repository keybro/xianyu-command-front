<template>
    <div class="invitation-detail">
        <!--   帖子标题     -->
        <el-row>
            <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
            <!--   帖子详情的主体部分         -->
            <el-col :span="18" style="border-left: 1px #e6e6e6 solid;border-right: 1px #e6e6e6 solid">
                <div class="grid-content bg-purple-light">
                    <h1 style="text-align: left;margin-left: 5%;margin-top: 10px">{{invitation.invitationTitle }}</h1>
                </div>
            </el-col>
            <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <!--    用户头像和基本信息    -->
        <el-row>
            <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
            <!--   帖子详情的主体部分         -->
            <el-col :span="18" style="display: flex;border-left: 1px #e6e6e6 solid;border-right: 1px #e6e6e6 solid">
                <div class="grid-content bg-purple-light" style="text-align: left">
                    <img src="http://47.99.186.220:9000/recommend//group/%E7%94%BB%E9%A5%BC%E5%A4%A9%E7%BA%BF.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220412%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220412T025909Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e85219d114ed5f75c29da4e82004dcb684088dbd602f3a2d4f804df3ad3684c3"
                         alt="" style="width: 5vw
                         ;height: 9vh;margin-left: 4vw;margin-top: 5px">
                </div>
                <div style="text-align: left;margin-left: 1vw;margin-top: 10px">
                    <p>来自: ctc</p>
                    <p>发布时间: {{invitation.createTime}}</p>
                </div>
            </el-col>
            <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

        <!--   帖子内容     -->
        <el-row>
            <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
            <!--   帖子详情的主体部分         -->
            <el-col :span="18" style="display: flex;border-left: 1px #e6e6e6 solid;border-right: 1px #e6e6e6 solid">
                <div class="grid-content bg-purple-light" style="text-align: left;width: 100%">
                    <p class="invitation-content" style="margin-left: 4vw;margin-top: 10px;">{{invitation.invitationContent}}</p>
                </div>
            </el-col>
            <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        </el-row>


        <!--   发送回应     -->
        <el-row>
            <el-col :span="3"><div class="grid-content bg-purple" style="margin-bottom: 10px"></div></el-col>
            <!--   帖子详情的主体部分         -->
            <el-col :span="18" style="display: flex;border-bottom: 1px #e6e6e6 solid;border-left: 1px #e6e6e6 solid;border-right: 1px #e6e6e6 solid">
                <div class="grid-content bg-purple-light" style="text-align: left;width: 100%;margin-bottom: 2vh">
                    <el-button type="primary" size="small" style="margin-left: 4vw;margin-top: 20px;margin-right: 60%" @click="sendReply">发送回应</el-button>
                    <el-input
                            type="textarea"
                            :autosize="{ minRows: 4, maxRows: 7}"
                            placeholder="请输入内容"
                            style="width: 80%;margin-left: 4vw;margin-top: 10px"
                            v-model="sendContent">
                    </el-input>
                </div>
            </el-col>
            <el-col :span="3"><div class="grid-content bg-purple" style="margin-bottom: 2vh"></div></el-col>
        </el-row>


        <!--  帖子的回应列表  -->
        <el-row v-for="item in replyList" :key="item">
            <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
            <!--   帖子详情的主体部分         -->
            <el-col :span="18" style="display: flex;border-bottom: 1px #e6e6e6 solid;border-left: 1px #e6e6e6 solid;border-right: 1px #e6e6e6 solid">
                <div class="grid-content bg-purple-light" style="text-align: left;width: 100%">
                    <p style="margin-left: 4vw;margin-top: 1vh;font-weight: bold">{{item.createrName}}    发表时间：{{item.replyTime}}</p>
                    <p style="margin-left: 4vw;margin-top: 5px;margin-bottom: 10px">{{item.invitationReplyContent}}</p>
                </div>
            </el-col>
            <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        </el-row>




        <!--    底部分页    -->
        <el-row>
            <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>

            <el-col :span="18" style="display: flex;margin-bottom: 1vh;border-bottom: 1px #e6e6e6 solid;border-left: 1px #e6e6e6 solid;border-right: 1px #e6e6e6 solid">
                <div class="grid-content bg-purple-light" style="text-align: center;width: 100%">
                    <el-pagination
                            background
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :page-sizes="[10,15,20]"
                            :current-page="paging.currentPage"
                            :page-size="paging.limit"
                            layout="total,sizes,prev,pager,next"
                            :total="replyList.length">
                    </el-pagination>
                </div>
            </el-col>
            <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

    </div>
</template>

<script>
    import {getInvitationById} from "../../api/invitation";
    import {createinvitationReply,pageGetReplyByInvitationId} from "../../api/invitationReply";

    export default {
        name: "invitationDetail",
        data:function () {
            return{
                sendContent:'',
                invitation:{},
                paging:{
                    currentPage:1,
                    limit:10,
                },
                createInvitation:{
                    invitationBelongId:"",
                    invitationReplyContent:"",
                },
                replyList:[{}],
            }
        },
        methods:{
            getReplyList(){
                let invitationId = sessionStorage.getItem("invitationId")
                let params ={}
                this.$set(params,"limit",this.paging.limit)
                this.$set(params,"currentPage",this.paging.currentPage)
                this.$set(params,"invitationId",invitationId)
                pageGetReplyByInvitationId(params).then(resp =>{
                    this.replyList = resp.data.data.records;
                })

            },
            sendReply(){

                let id = this.invitation.invitationId;
                this.createInvitation.invitationBelongId = id;
                this.createInvitation.invitationReplyContent = this.sendContent;
                this.$confirm('次回应将被发送, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    createinvitationReply(this.createInvitation)
                    this.$message({
                        type: 'success',
                        message: '发送成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消发送'
                    });
                });
            },
            //页面改变分页每页数量
            handleSizeChange(val){
                this.paging.limit=val
                this.paging.currentPage=1
                this.getReplyList()
            },
            //页面改变分页当前页数
            handleCurrentChange(val){
                this.paging.currentPage=val
                this.getReplyList()
            },
        },
        created() {
            let invitationId = sessionStorage.getItem("invitationId");
            getInvitationById(invitationId).then(resp =>{
                this.invitation = resp.data.data;
            })
            //获取评论列表
            this.getReplyList();
        }
    }
</script>

<style scoped>

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

    /*帖子的详细信息中帖子内容的换行显示css*/
    .invitation-content{
        width: 80%;
        word-break: break-all;
        overflow: auto;
        white-space: normal;
    }


</style>