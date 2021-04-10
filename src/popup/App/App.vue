<template>
    <div class="main_app">
        <h1>Hello popup</h1>
        <el-button type="primary" @click="test">酷搜</el-button>
        <el-input placeholder="请输入关键词..." v-model="keyword"></el-input>
        <el-card class="box-card">
            <pre>{{content}}</pre>
        </el-card>
    </div>
</template>

<script>
    import {searchMusicByKeyword} from "../../api/api";

    export default {
        name: 'app',
        data() {
            return {
                keyword: null,
                content: 'nothing'
            }
        },
        methods: {
            test() {
                let params = {
                    key: this.keyword,
                    pn: 1,
                    rn: 30
                }
                searchMusicByKeyword(params).then(res => {
                    this.content = JSON.stringify(res);
                })
            }
        }
    }
</script>

<style>
    .main_app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        width: 500px;
        height: 200px;
    }
</style>
