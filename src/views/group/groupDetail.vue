<template>
    <!--  小组详情页面  -->
    <div class="group-detail">
        <el-row>
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="20">
                <div>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content header">
                                <div class="left">
                                    <div class="image__preview">
                                        <el-image
                                                style="width: 10vh; height: 12vh"
                                                :src="url"
                                                :preview-src-list="srcList">
                                        </el-image>
                                        <p id="title">XXX组</p>
                                    </div>
                                    <h3>组长:xxxxxxx</h3>
                                </div>
                                <div class="right">
                                    <el-button type="text">加入小组</el-button>
                                    <div class="label">
                                        <p>小组标签：</p>
                                        <el-tag>生活</el-tag>
                                        <el-tag type="success">甜宠</el-tag>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content introduction">
                                <h3>小组简介</h3>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content like">
                                <h3 id="like">喜欢这个作品的人也喜欢</h3>
                                <div class="images">
                                    <div class="block" v-for="fit in fits" :key="fit">
                                        <el-image
                                                style="width: 10vh; height: 10vh"
                                                :src="url"
                                                :fit="fit">
                                        </el-image>
                                        <div class="member">
                                            <p>xxx</p>
                                            <div id="member">xx位成员</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                    <p class="right">发言</p>
                                </div>
                                <div class="bottom" style="text-align: center">
<!--                                    <div class="item">-->
<!--                                        <span>帖子</span>-->
<!--                                        <span id="write">作者</span>-->
<!--                                        <span>回应数</span>-->
<!--                                        <span>发帖时间</span>-->
<!--                                    </div>-->
<!--                                    <div class="items" :reverse="reverse" v-for="(user,i) in listObj" style="margin-right: 0px">-->
<!--                                        <div class="blocks">-->
<!--                                            <span><i class="el-icon-s-comment"></i>{{user.post}}</span>-->
<!--                                            <span><i class="el-icon-user-solid"></i>{{user.name}}</span>-->
<!--                                            <span><i class="el-icon-s-data"></i>{{user.get}}</span>-->
<!--                                            <span><i class="el-icon-date"></i>{{user.time}}</span>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <div style="text-align: center; width: 90%;margin-left: 5%">
                                        <el-row>
                                            <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                                            <el-col :span="22">
                                                <div class="grid-content bg-purple-light">
                                                    <el-table
                                                            :data="tableData">
                                                        <el-table-column
                                                                prop="date"
                                                                label="日期"
                                                                width="180">
                                                        </el-table-column>
                                                        <el-table-column
                                                                prop="name"
                                                                label="姓名"
                                                                width="180">
                                                        </el-table-column>
                                                        <el-table-column
                                                                prop="address"
                                                                label="地址">
                                                        </el-table-column>
                                                    </el-table>
                                                </div>
                                            </el-col>
                                            <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                                        </el-row>


                                    </div>



                                    <div class="pagination">
                                        <el-pagination
                                                background
                                                layout="prev, pager, next"
                                                :total="1000"
                                        style="margin-top: 10px;margin-bottom: 15px">
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
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
        </el-row>










    </div>
</template>

<script>
    export default {
        name: "groupDetail",
        data() {
            return {
                fits: ['fill', 'fill', 'fill', 'fill', 'fill'],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
                ],
                list:[1,2,3,4,5,6,7,8],
                listObj:[
                    {post:' xxxx', name:' xxxxx',get:' 250',time:' xxxx-xx-xx'},
                    {post:' xxxx', name:' xxxxx',get:' 211',time:' xxxx-xx-xx'},
                    {post:' xxxx', name:' xxxxx',get:' 54',time:' xxxx-xx-xx'},
                    {post:' xxxx', name:' xxxxx',get:' 50',time:' xxxx-xx-xx'},
                    {post:' xxxx', name:' xxxxx',get:' 30',time:' xxxx-xx-xx'},
                    {post:' xxxx', name:' xxxxx',get:' 30',time:' xxxx-xx-xx'},
                    {post:' xxxx', name:' xxxxx',get:' 25',time:' xxxx-xx-xx'},
                    {post:' xxxx', name:' xxxxx',get:' 17',time:' xxxx-xx-xx'}
                ],
                reverse: true,
                tableData: [{
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
        }
    }
</script>

<style scoped>
    .group-detail{
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

    .header{
        height: 21vh;
        border: 1px #e6e6e6 solid;
        display: flex;
        justify-content: flex-start;
    }

    .left{
        margin: 3vh 15vh 3vh 3vh;
    }

    .image__preview{
        display: flex;
        flex-direction: row;
    }

    .image__preview p{
        margin-left: 1vh;
    }

    .header .left h3{
        margin-top: 1vh;
        margin-left: -2vh;
    }

    .right{
        margin-top: 3vh;
    }

    .header .right{
        /*float: left;*/
        position: relative;
        left: 8vh;
        top: 8vh;
    }

    .label{
        position: relative;
        left: 7vh;
    }

    .label p{
        font-size: initial;
        display: inline-block;
    }

    .introduction{
        height: 16vh;
        border: #e6e6e6 1px solid;
    }

    .introduction h3{
        margin: 3vh 3vh 3vh 3vh;
    }

    .like{
        height: 25vh;
        border: #e6e6e6 1px solid;
        display: flex;
        flex-direction: column;
    }

    .like #like{
        float: left;
        margin: 3vh 3vh 3vh 3vh;
        display: flex;
        justify-content: flex-start;
    }

    .images{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 3vh;
    }

    .like .images .block{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .like .images .block .member{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 1vh;
    }

    .like .images .block .member p{
        color: black;
    }

    .comment{
        /*height: 62vh;*/
        border: #e6e6e6 1px solid;
        display: flex;
        flex-direction: column;
    }

    .comment .top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .comment .top .icon{
        margin-left: 1vh;
    }
    .comment .top .left{
        font-size: medium;
    }

    .comment .top .right{
        float: right;
        position: relative;
        left: -12vh;
        top: -0.5vh;
        font-weight: bolder;
    }

    .bottom{
        margin: 0 3vh;
        outline: 1px #e6e6e6  dashed;
        outline-offset:-5px;
        border-radius:10px;
        box-shadow:0 0 0 5px transparent;
        padding-top: 3vh;
    }

    .item{
        color: #2b95f5;
        margin: 0vh 8vh 3vh 5vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .item span{
        font-weight: bolder;
    }

    .item #write{
        position: relative;
        left: 1vh;
    }

    .items{
        margin-right: 3vh;
        position: relative;
        top: -2vh;
    }

    .items .blocks{
        margin: 0vh 3vh 0vh 3vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
        top: 0.5vh;
    }

    .el-divider{
        margin: 1vh 3vh 1vh 3vh;
    }

    /*.pagination{*/
    /*    position: relative;*/
    /*    top: 6vh;*/
    /*}*/

    .footer{
        /*height: 4vh;*/
    }

    .footer p{
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

</style>