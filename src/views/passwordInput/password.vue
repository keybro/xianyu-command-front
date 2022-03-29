<template>
    <div class="password-input">
        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div><el-input placeholder="Please enter your password" v-model="input.password" show-password></el-input></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8">
                <div>
                    <el-button type="primary" @click="submitPassword">Submit the password</el-button>
                </div>
            </el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <div style="margin-top: 5%"></div>
        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8">
                <div>
                    <el-input
                            type="textarea"
                            :autosize="{ minRows: 4, maxRows: 50}"
                            placeholder="Please enter the content"
                            v-model="text.input">
                    </el-input>
                </div>
            </el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8">
                <div>
                    <el-button type="primary" @click="submitText">Submit the text</el-button>
                </div>
            </el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>



        <!--     提交密码对话框    -->
        <el-dialog
                title="prompt"
                :visible.sync="dialogVisiblePassWord"
                width="30%">
            <span>
                <div>
                    <p>The password you entered is:{{this.text.input}}</p>
                    <p>Password intensity:{{this.intensity}}</p>
                    <p>amendments:{{this.suggestion}}</p>
                </div>
            </span>
            <span slot="footer" class="dialog-footer">
                 <el-button @click="dialogVisiblePassWord = false">cancel</el-button>
                <el-button type="primary" @click="dialogVisiblePassWord = false">confirm</el-button>
            </span>
        </el-dialog>



        <!--     提交文本对话框    -->
        <el-dialog
                title="prompt"
                :visible.sync="dialogVisibleText"
                width="30%">
            <span>
                <div>
                    <p>Text analysis results：</p>
                    <p>Number of characters (including Spaces and punctuation)：{{this.AllCharNumber}}</p>
                    <p>Number of characters (excluding punctuation)： {{this.exCharNumber}}</p>
                    <p>Number of words: {{this.wordsNumber}}</p>

                </div>
            </span>
            <span slot="footer" class="dialog-footer">
                 <el-button @click="dialogVisibleText = false">cancel</el-button>
                <el-button type="primary" @click="dialogVisibleText = false">confirm</el-button>
            </span>
        </el-dialog>

    </div>


</template>

<script>
    import {submitThePassWord} from "../../api/flaskapi";
    import {textAnalyse} from "../../api/flaskapi";
    import {test} from "../../api/flaskapi";

    export default {
        name: "password",
        data:function () {
            return {
                input: {
                    password:''
                },
                text:{
                    input:''
                },
                textarea:'',
                dialogVisiblePassWord: false,
                intensity:'',
                suggestion:'',
                dialogVisibleText:false,
                passwordIntensity:'',
                AllCharNumber:'',
                exCharNumber:'',
                wordsNumber:''

            }
        },
        methods:{
            submitPassword(){
                this.dialogVisiblePassWord = true
                test()
                submitThePassWord(this.input).then(resp =>{
                    this.intensity = resp.data.intensity
                    this.suggestion = resp.data.suggest
                    console.log(resp)
                })


            },
            submitText(){
                this.dialogVisibleText = true
                textAnalyse(this.text).then(resp => {
                    this.AllCharNumber = resp.data.allLength
                    this.exCharNumber = resp.data.exceptbd
                    this.wordsNumber = resp.data.wordsNumber
                })
            }
        }
    }
</script>

<style scoped>
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {

    }
    .bg-purple {

    }
    .bg-purple-light {

    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
    }

</style>