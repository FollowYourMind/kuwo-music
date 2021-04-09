<template>
    <div class="main_app">
        <h1>Hello popup</h1>
        <el-button type="primary" @click="test">百度一下，你就知道</el-button>
        <el-card class="box-card">
            <div v-html="content"></div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                content: 'nothing'
            }
        },
        methods: {
            test() {
                this.$axios.get('https://www.baidu.com').then(response => {
                    this.content = response;
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
