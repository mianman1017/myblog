<template>
    <el-row class="main-container">
        <el-col :xs="24" :sm="9" :md="10">
            <div class="me-aside">
                <CardMe />

                <TagCloud :tags="tags" />
            </div>
        </el-col>
        <el-col :xs="24" :sm="13" :md="14">
            <div class="me-articles">
                <ArticleList></ArticleList>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import ArticleList from '@/components/ArticleList/index';
import Navbar from '@/components/Navbar/index';
import CardMe from '@/components/CardMe/index';
import TagCloud from '@/components/TagCloud/index';
import { ElNotification } from 'element-plus';

export default {
    name: 'Home',
    data() {
        return {
            activeIndex: '/',
            footerShow: true,
            tags: [
                {
                    id: 1,
                    tagName: 'Vue',
                },
                {
                    id: 2,
                    tagName: 'Django',
                },
                {
                    id: 3,
                    tagName: 'Spring Boot',
                },
                {
                    id: 4,
                    tagName: 'Git',
                },
                {
                    id: 5,
                    tagName: 'Docker',
                },
                {
                    id: 6,
                    tagName: 'Python',
                },
                {
                    id: 7,
                    tagName: 'Java',
                },
                {
                    id: 8,
                    tagName: 'C++',
                },
                {
                    id: 9,
                    tagName: 'MySQL',
                },
                {
                    id: 10,
                    tagName: 'QT Creater',
                },
                {
                    id: 11,
                    tagName: 'MATLAB',
                },
            ],
        };
    },
    components: {
        ArticleList,
        Navbar,
        CardMe,
        TagCloud,
    },
    methods: {
        Welcome() {
            ElNotification({
                title: '这里是绵满的个人博客૮(˶ᵔ ᵕ ᵔ˶)ა',
                customClass: 'notification', //自定义类名
                duration: 3000,
            });
        },
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.activeIndex = to.path;
        });
    },
    mounted() {
        this.Welcome();
    },
};
</script>

<style>
.el-card {
    font-family: '华康手札体W5P';
    border: 0;
    background-color: var(--card_color);
    transition: background-color 0s;
}
.el-card:hover {
    background-color: var(--hover_color);
}

.main-container {
    display: flex;
    flex-direction: row-reverse;
    height: fit-content;
    overflow-x: hidden;
}
.me-articles {
    /* font-family: 'Harmony'; */
    display: flex;
    flex-direction: row-reverse;
    margin: auto;
}

.me-aside {
    position: relative;
    margin: auto;
    margin-bottom: 20px;
}
.el-header {
    margin-bottom: 20px;
}

.el-card:not(:first-child) {
    margin-top: 20px;
}
.flex-grow {
    flex-grow: 1;
}
</style>
