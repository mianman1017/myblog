<template>
    <div class="common-layout" onselectstart="return false">
        <Navbar></Navbar>
        <el-row class="main-container">
            <el-col :xs="24" :sm="8" :md="10">
                <div class="me-aside">
                    <CardMe></CardMe>
                </div>
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
import { ElNotification } from 'element-plus';

export default {
    name: 'Home',
    data() {
        return {
            activeIndex: '/',
            footerShow: true,
        };
    },
    components: {
        ArticleList,
        Navbar,
        CardMe,
    },
    methods: {
        Welcome() {
            ElNotification({
                title: '这里是绵满的个人博客૮(˶ᵔ ᵕ ᵔ˶)ა',
                customClass: 'notification', //自定义类名
                duration: 5000,
            });
        },
    },
    mounted() {
        this.Welcome();
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
    margin-right: 17px;
}

.me-aside {
    margin-bottom: 20px;
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
)
