<template>
    <div class="detail">
        <div class="header">
            <el-button type="text">首页</el-button>
            <el-button type="text" id="center">个人中心</el-button>
        </div>
        <div class="main">
            <div class="left">
                <div class="image">
                    <p id="title">XXX</p>
                    <el-image
                            style="width: 25vh; height: 30vh"
                            :src="url">
                    </el-image>
                </div>
                <div id="content">
                    <p>xxx</p>
                    <p>xxx</p>
                    <p>xxx</p>
                    <p>xxx</p>
                    <p>xxx</p>
                    <p>xxx</p>
                    <p>xxx</p>
                </div>
            </div>
            <div class="right">
                <div id="score">
                    <span class="text">邮友评分</span>
                    <el-rate
                            v-model="value"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                    </el-rate>
                </div>
                <p id="evaluate">3213人评价</p>
                <div id="review">
                    <el-link icon="el-icon-edit">写影评</el-link>
                </div>
            </div>
        </div>
        <div class="introduction">
            <h4 id="introduction">简介</h4>
        </div>
        <div class="like">
            <h4 id="like">喜欢这个作品的人也喜欢</h4>
            <div class="images">
                <div class="block" v-for="fit in fits" :key="fit">
                    <el-image
                            style="width: 10vh; height: 10vh"
                            :src="url"
                            :fit="fit">

                    </el-image>
                    <p>xxx</p>
                </div>
            </div>
        </div>
        <div class="comment">
            <h4>评论</h4>
            <div id="con">
                <div class="left">
                    <el-button type="text">热门</el-button>
                    <el-button type="text" >最新</el-button>
                    <div id="comment">
                        <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item class="clearfix">
                                    <el-badge value="new" class="item">
                                        <el-button size="small">评论</el-button>
                                    </el-badge>
                                </el-dropdown-item>
                                <el-dropdown-item class="clearfix">
                                    <el-badge value="hot" class="item">
                                        <el-button size="small">回复</el-button>
                                    </el-badge>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
                <div class="right">
                    <p>1063有用</p>
                </div>
            </div>
        </div>
        <div class="pagination">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data:function () {
            return{
                value: 5,
                fits: ['fill', 'fill', 'fill', 'fill', 'fill'],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
        },
    }
</script>

<style scoped>
    .detail{
        width: 100%;
        height: 100%;
        border: #000 1px solid;
        position: relative;
        top: -5vh;
    }

    .header{
        border-bottom: cornflowerblue 1px solid;
        width: 100%;
        display: flex;
        justify-content: end;

    }

    .header #center{
        margin: 0 3vh;
    }

    .main{
        height: 40vh;
        border-bottom: cornflowerblue 1px solid;
        display: flex;
        justify-content: space-between;
    }

    .main .left{
        width: 250vh;
        border-right: cornflowerblue 1px solid;
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
        border-bottom: cornflowerblue 1px solid;

    }

    .introduction #introduction{
        float: left;
        margin: 7vh;
    }

    .like{
        height: 40vh;
        border-bottom: cornflowerblue 1px solid;
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
        height: 15vh;

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


</style>