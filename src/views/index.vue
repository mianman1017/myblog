<template>
    <div class="common-layout">
        <Navbar></Navbar>
        <el-row class="main-container">
            <el-col :xs="24" :sm="8" :md="10">
                <CardMe></CardMe>
            </el-col>
            <el-col :xs="24" :sm="16" :md="14">
                <div class="me-articles">
                    <ArticleList></ArticleList>
                </div>
            </el-col>
        </el-row>

        <el-footer>Footer</el-footer>
    </div>
</template>

<script>
import ArticleList from '@/components/ArticleList/index';
import Navbar from '@/components/Navbar/index';
import CardMe from '@/components/CardMe/index';

export default {
    data() {
        return {};
    },
    components: {
        ArticleList,
        Navbar,
        CardMe,
    },
};
</script>

<style>
.el-card:hover {
    background-color: var(--theme_hover_color);
}
.common-layout {
    height: 100vh;
}
.main-container {
    display: flex;
    flex-direction: row-reverse;
    height: fit-content;
    overflow-x: hidden;
}
.me-articles {
    display: flex;
    flex-direction: row-reverse;
    margin-right: 10px;
}
.el-header {
    margin-bottom: 20px;
}
.el-card {
    border-radius: 0;
}
.el-card:not(:first-child) {
    margin-top: 20px;
}
.flex-grow {
    flex-grow: 1;
}
</style>
