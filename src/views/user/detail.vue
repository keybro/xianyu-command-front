<template>
    <div>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000" style="width: 100px">
        </el-pagination>
        <img src="" alt="">
        
    </div>

</template>

<script>
    export default {
        name: "detail",
        data:function () {
            return{
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


</style>