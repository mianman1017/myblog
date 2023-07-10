<template>
    <div class="articlelist-container">
        <Loading
            v-if="loading"
            :loading="loading"
            :offset="offset"
            :nodata="noData"
            @load="load"
        ></Loading>
        <div class="article-list">
            <ArticleItem
                v-for="article in articles"
                :key="article.id"
                v-bind="article"
            />
        </div>
    </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem/index';
import Pagination from '@/components/Pagination/index';
import Loading from '@/components/Loading/index';
export default {
    data() {
        return {
            loading: false,
            noData: true,
            offset: 0,
            innerPage: {
                currentpage: 1,
                pageSize: 10,
            },
            articles: [
                {
                    id: '1',
                    weight: 1,
                    title: '标题1',
                    commentCounts: 123,
                    viewCounts: 123,
                    summary: '概要11',
                    author: '作者',
                    tags: [{ tagName: 'vue' }],
                    createDate: '2023-7-7',
                },
                {
                    id: '2',
                    weight: 1,
                    title: '标题2',
                    commentCounts: 123,
                    viewCounts: 123,
                    summary: '概要11',
                    author: '作者',
                    tags: [{ tagName: 'vue' }],
                    createDate: '2023-7-7',
                },
                {
                    id: '3',
                    weight: 1,
                    title: '标题3',
                    commentCounts: 123,
                    viewCounts: 123,
                    summary: '概要11',
                    author: '作者',
                    tags: [{ tagName: 'vue' }],
                    createDate: '2023-7-7',
                },
                {
                    id: '4',
                    weight: 0,
                    title: '标题1',
                    commentCounts: 123,
                    viewCounts: 123,
                    summary: '概要11',
                    author: '作者',
                    tags: [{ tagName: 'vue' }],
                    createDate: '2023-7-7',
                },
                {
                    id: '5',
                    weight: 0,
                    title: '标题1',
                    commentCounts: 123,
                    viewCounts: 123,
                    summary: '概要11',
                    author: '作者',
                    tags: [{ tagName: 'vue' }],
                    createDate: '2023-7-7',
                },
                {
                    id: '6',
                    weight: 0,
                    title: '标题3',
                    commentCounts: 123,
                    viewCounts: 123,
                    summary: '概要11',
                    author: '作者',
                    tags: [{ tagName: 'vue' }],
                    createDate: '2023-7-7',
                },
                {
                    id: '7',
                    weight: 0,
                    title: '标题3',
                    commentCounts: 123,
                    viewCounts: 123,
                    summary: '概要11',
                    author: '作者',
                    tags: [{ tagName: 'vue' }],
                    createDate: '2023-7-7',
                },
            ],
        };
    },
    components: {
        ArticleItem,
        Pagination,
        Loading,
    },
    methods: {
        load() {
            // 如果出发分页，需要调用接口，加载文章列表
            alert('触发分页');
            // this.getArticles();
        },

        // 分页功能待实现
        getArticles() {
            this.loading = true;
            // 后端发请求
            this.axios
                .post('url', 'params')
                .then((res) => {
                    //Result(success,msg,data)
                    if (res.data.success) {
                        if (res.data.data.length <= 0) {
                            this.noData = true;
                        }
                        this.articles = this.articles.concat(res.data.data);
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
                .catch((err) => {
                    // this.$message.error('文章加载失败');
                })
                .finally(() => {});
            this.noData = false;
            this.loading = false;
        },
    },
};
</script>

<style>
@media screen and (max-width: 768px) {
    .articlelist-container {
        margin: auto;
    }
}
</style>
