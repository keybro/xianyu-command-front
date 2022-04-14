<template>
    <div class="group-classify">
        <el-row>
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="20">
                <!--         页面的中间主体部分       -->
                <div>

                    <el-row>

                        <!--         主体部分的左部列表               -->
                        <el-col :span="16">
                            <div style="text-align: left;border-left: 1px #e6e6e6 solid;border-right: 1px #e6e6e6 solid;border-top: 1px #e6e6e6 solid">
                                <div class="title" style="margin-top: 8px">
                                    <h4 style="margin-left: 10px">选择小组</h4>
                                </div>
                                <div style="display: flex;margin-top: 10px">
                                    <p style="margin-left: 10px;margin-left: 10px;margin-top: 5px">小组类型:</p>
                                    <div style="margin-top: 20px;margin: 0px;margin-right: 0px;margin-left: 10px">
                                        <el-radio-group v-model="radio2" size="small" @change="getListByType()">
                                            <el-radio-button label="全部"></el-radio-button>
                                            <el-radio-button label="影视"></el-radio-button>
                                            <el-radio-button label="音乐"></el-radio-button>
                                            <el-radio-button label="文学"></el-radio-button>
                                            <el-radio-button label="运动"></el-radio-button>
                                            <el-radio-button label="美食"></el-radio-button>
                                            <el-radio-button label="公益"></el-radio-button>
                                            <el-radio-button label="家庭"></el-radio-button>
                                            <el-radio-button label="购物"></el-radio-button>
                                            <el-radio-button label="求职"></el-radio-button>
                                            <el-radio-button label="考试"></el-radio-button>
                                            <el-radio-button label="艺术"></el-radio-button>
                                            <el-radio-button label="学术"></el-radio-button>
                                            <el-radio-button label="情感"></el-radio-button>
                                            <el-radio-button label="闲聊"></el-radio-button>
                                        </el-radio-group>
                                    </div>

                                </div>


                                <!--           书籍列表            -->
                                <div style="width: 100%;border-top: 1px #e6e6e6 solid;margin-top: 10px;border-right: 1px #e6e6e6 solid">
                                    <!--                 每个图书div                   -->
                                    <div class="content-list-div" style="margin-top: 10px;border-bottom: 1px #e6e6e6 solid;display: flex" v-for="(item, index) in groupList" :key="item" :offset="index > 0 ? 10 : 0">
                                        <img :src="item.groupHead" alt="" style="width: 10%;height: 13vh; margin-left: 30px;margin-bottom: 10px" @click="goToBookDetail(item)">
                                        <div class="img-right-content" style="margin-top: 1vh;margin-left: 20px">
                                            <h4>{{item.groupName}}</h4>
                                            <p style="margin-top: 10px">人数：10</p>
                                            <div style="width: 30vw;margin-top: 10px">
                                                <p class="detail-hidden">小组简介:{{item.groupIntroduction}}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <!--             底部分页                       -->
                                    <div class="bottom-page" style="text-align: center;margin-top: 10px;border-bottom: 1px #e6e6e6 solid">
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
                                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                            <div style="width: 40%"><p style="margin-top: 12px">用户名</p></div>
                                        </div>
                                    </div>

                                    <div style="text-align: left;margin-left: 5%">
                                        <p>我的书籍评论:</p>
                                        <p style="margin-top: 10px">我的电影评论:</p>
                                        <p style="margin-top: 10px">我的音乐评论:</p>
                                        <p style="margin-top: 10px">我的小组:</p>
                                        <p style="margin-top: 10px">我的帖子:</p>
                                    </div>
                                </el-card>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
        </el-row>


        <!--    页脚    -->
        <div class="footer" style="text-align: center;">
            <h3 style="margin-top: 3px;margin-bottom: 3px;">邮友论坛</h3>
        </div>



    </div>
</template>

<script>
    import {pageGetGroupByType} from "../../api/group";

    export default {
        name: "groupClassify",
        data:function () {
            return{
                radio2: '全部',
                groupList:[{}],
                paging:{
                    currentPage:1,
                    limit:10,
                },
            }
        },
        methods:{
            getListByType(){
                console.log("点击了类型")
                console.log("点击的类型是"+this.radio2)
                let params ={}
                this.$set(params,"limit",this.paging.limit)
                this.$set(params,"currentPage",this.paging.currentPage)
                this.$set(params,"label",this.radio2)

                pageGetGroupByType(params).then(resp =>{
                    this.groupList = resp.data.data.records
                    console.log(this.groupList);
                })
            },
            //页面改变分页每页数量
            handleSizeChange(val){
                this.paging.limit=val
                this.paging.currentPage=1
                this.getListByType()
            },
            //页面改变分页当前页数
            handleCurrentChange(val){
                this.paging.currentPage=val
                this.getListByType()
            },
            goToBookDetail(data){
                sessionStorage.setItem("groupId",data.groupId)
                this.$router.push('/homePage/groupDetail')
            }
        },
        created() {
            this.getListByType()
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

    .detail-hidden{
        /*width: 300px;*/
        /* 规定当内容溢出元素框（容器）时隐藏 */
        overflow: hidden;
        /* 规定当文本溢出包含元素（容器）出现省略号 */
        text-overflow: ellipsis;
        /* 规定段落中的文本不进行换行 */
        white-space: nowrap;
    }

</style>