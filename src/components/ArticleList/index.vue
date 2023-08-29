<template>
    <div class="articlelist-container">
        <Loading
            v-if="loading"
            :loading="loading"
            :offset="offset"
            :nodata="noData"
            @isDownDirection="isDownDirection"
            @load="load"
        />
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
            offset: 0, // 初始化偏移值为0
            articles: [], // 初始化文章列表为空
        };
    },
    components: {
        ArticleItem,
        Pagination,
        Loading,
    },
    methods: {
        load() {
            // 触发分页，调用接口加载文章列表
            this.loading = true;
            const params = new URLSearchParams();
            params.append('offset', this.offset);
            this.axios
                .post('http://localhost:8000/articlelist/get/', params)
                .then((res) => {
                    //Result(success,msg,data)
                    if (res.data.success) {
                        // console.log(res.data.data);
                        if (res.data.data.length <= 0) {
                            this.noData = true;
                        } else {
                            this.articles = this.articles.concat(res.data.data);
                            this.offset += 5;
                            // console.log(this.articles);
                            // console.log(this.articles[0].weight);
                        }
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
                .catch((err) => {
                    // this.$message.error('文章加载失败');
                })
                .finally(() => {
                    this.loading = false;
                });
        },

        isDownDirection() {
            this.$emit('isDownDirection');
        },
    },
    mounted() {
        // 页面加载时，调用一次load方法加载文章列表
        this.load();
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
