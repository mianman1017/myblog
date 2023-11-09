<template>
    <Loading v-if="loading" />
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
                <ArticleList @loadingOver="loadingOver" />
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
import Loading from '@/components/Loading/index';
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
                    tagName: 'NLP',
                },
                {
                    id: 6,
                    tagName: 'CS224N',
                },
                {
                    id: 7,
                    tagName: 'Word2Vec',
                },
                {
                    id: 8,
                    tagName: 'NNLM',
                },
                {
                    id: 9,
                    tagName: 'CNN',
                },
                {
                    id: 10,
                    tagName: 'RNN',
                },
                {
                    id: 11,
                    tagName: 'LSTM',
                },
                {
                    id: 12,
                    tagName: 'Seq2Seq',
                },
                {
                    id: 13,
                    tagName: 'Attention',
                },
                {
                    id: 14,
                    tagName: 'Transformer',
                },
                {
                    id: 15,
                    tagName: 'BERT',
                },
                {
                    id: 16,
                    tagName: 'Paper',
                },
                {
                    id: 17,
                    tagName: 'ReCode',
                },
                {
                    id: 18,
                    tagName: 'AIOps',
                },
            ],
            scrollAction: {
                x: 'undefined',
                y: 'undefined',
            },
            loading: true,
        };
    },
    components: {
        ArticleList,
        Navbar,
        CardMe,
        TagCloud,
        SearchCard,
        Loading,
    },
    methods: {
        Welcome() {
            ElNotification({
                title: '这里是绵满的个人博客૮(˶ᵔ ᵕ ᵔ˶)ა',
                customClass: 'notification', //自定义类名
                duration: 3000,
            });
        },
        loadingOver() {
            // console.log('success');
            this.loading = false;
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
