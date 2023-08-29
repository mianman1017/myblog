<template>
    <Navbar ref="Navbar" />
    <div class="tag-article-container">
        <!-- <el-card class="tag-card"> -->
        <div v-for="article in articles">
            <ArticleItem
                class="timeline-article"
                :key="article.id"
                v-bind="article"
            />
        </div>
        <!-- </el-card> -->
    </div>
</template>

<script>
import Navbar from '@/components/Navbar/index';
import ArticleItem from '@/components/ArticleItem/index';

export default {
    data() {
        return {
            offset: 0,
            tag: '',
            articles: [],
        };
    },
    components: { Navbar, ArticleItem },
    methods: {
        getArticleList() {
            const params = new URLSearchParams();
            params.append('offset', this.offset);
            params.append('tag', this.tag);
            this.axios
                .post('http://localhost:8000/articlelist/tag/get/', params)
                .then((res) => {
                    //Result(success,msg,data)
                    if (res.data.success) {
                        console.log(res.data.data);
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
    },
    mounted() {
        this.tag = this.$route.params.tag;
        this.getArticleList();
        // console.log(this.tag);
    },
};
</script>

<style>
.tag-article-container {
    padding-top: 90px;
}

.tag-article-card {
    background: var(--card_color);
    border: solid 1.5px var(--border_color);
}
</style>
