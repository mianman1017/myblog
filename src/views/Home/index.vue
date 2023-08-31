<template>
    <Navbar ref="navbar" />
    <el-row class="main-container">
        <el-col :xs="0" :sm="9" :md="10">
            <div ref="aside" class="me-aside">
                <CardMe />
                <TagCloud :tags="tags" />
                <SearchCard />
            </div>
        </el-col>
        <el-col :xs="24" :sm="13" :md="14">
            <div class="me-articles">
                <ArticleList @isDownDirection="isDownDirection"></ArticleList>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import ArticleList from '@/components/ArticleList/index';
import Navbar from '@/components/Navbar/index';
import CardMe from '@/components/CardMe/index';
import TagCloud from '@/components/TagCloud/index';
import SearchCard from '@/components/SearchCard/index';
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
                    tagName: 'MySQL',
                },
                {
                    id: 4,
                    tagName: 'PyTorch',
                },
                {
                    id: 5,
                    tagName: 'Word2Vec',
                },
            ],
            scrollAction: {
                x: 'undefined',
                y: 'undefined',
            },
        };
    },
    components: {
        ArticleList,
        Navbar,
        CardMe,
        TagCloud,
        SearchCard,
    },
    methods: {
        Welcome() {
            ElNotification({
                title: '这里是绵满的个人博客૮(˶ᵔ ᵕ ᵔ˶)ა',
                customClass: 'notification', //自定义类名
                duration: 3000,
            });
        },
        isDownDirection() {
            if (typeof this.scrollAction.x == 'undefined') {
                this.scrollAction.x = window.scrollX;
                this.scrollAction.y = window.scrollY;
            }
            var diffX = this.scrollAction.x - window.scrollX;
            var diffY = this.scrollAction.y - window.scrollY;

            this.scrollAction.x = window.scrollX;
            this.scrollAction.y = window.scrollY;

            if (diffX < 0) {
                // Scroll right
            } else if (diffX > 0) {
                // Scroll left
            } else if (diffY < 0) {
                // Scroll down
                return true;
            } else if (diffY > 0) {
                // Scroll up
            } else {
                // First scroll event
            }
            return false;
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
.main-container {
    margin: auto;
    display: flex;
    flex-direction: row-reverse;
    height: fit-content;
    overflow-x: hidden;
    padding-top: 90px;
}
.me-articles {
    /* font-family: 'Harmony'; */
    display: flex;
    flex-direction: row-reverse;
    margin: auto;
}

.me-aside {
    position: sticky;
    top: 1rem;
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

h1 {
    border: 0;
}
</style>
