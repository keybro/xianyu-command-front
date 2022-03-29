<template>
    <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
            <el-table
                    :data="tableData"
                    style="width: 100%">
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
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>

    
</template>

<script>
import {helloWorld} from "@/api/login";

export default {
        name: "helloWorld",
        data() {
            return {
                testData:{
                    date:"",
                    name:"",
                    thing:"",
                    count:""
                },
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
        },
    methods:{
            getTestInfo(){
                helloWorld().then(resp =>{
                    let data= resp;
                    console.log("调用接口")
                    console.log(data)
                })

            }

    },
    created(){
            this.getTestInfo();
    }
    }
</script>

<style scoped>

</style>