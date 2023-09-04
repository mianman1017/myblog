<template>
    <Navbar ref="navbar" />
    <div class="timeline-container">
        <el-card class="timeline-card">
            <!-- <div class="timeline-header">归档</div> -->
            <el-timeline v-if="!noData">
                <el-timeline-item
                    v-for="article in articles"
                    :timestamp="article.createDate"
                    placement="top"
                >
                    <ArticleItem
                        class="timeline-article"
                        :key="article.id"
                        v-bind="article"
                    />
                </el-timeline-item>
            </el-timeline>
            <h1 v-else class="nodata">Oh no, 没有结果😢</h1>
        </el-card>
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
            noData: false,
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
.timeline-container {
    padding-top: 90px;
}

.timeline-card {
    width: 50%;
    margin: auto;
    background: var(--bg_color);
    padding-top: 30px;
    margin-bottom: 30px;
    min-width: 620px;
    border: solid 1.5px var(--border_color);
}
.timeline-card .el-card {
    box-shadow: 0 0 5px var(--shadow_color) !important;
}

/* .timeline-card .timeline-header {
    font-family: '华康手札体W5P';
    font-weight: 600;
    font-size: 30px;
    margin: auto;
    width: fit-content;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 30px;
    color: var(--text_color);
    border-bottom: solid 2px var(--border_color);
} */

.timeline-card .el-timeline {
    position: relative;
    margin-left: 5%;
    margin-right: 5%;
    padding-left: 3%;
    transition: padding-left 0.1s;
}

.timeline-card .el-timeline-item {
    padding-bottom: 20px;
}

.timeline-card .el-timeline-item__wrapper {
    padding-left: 30px;
}

.timeline-card .el-timeline-item__timestamp {
    color: var(--text_color);
}

.timeline-card .el-timeline-item__tail {
    border-left-color: var(--text_color);
}

.timeline-card .el-timeline-item__node {
    background-color: var(--text_color);
}

.timeline-card .timeline-article {
    width: 93%;
    height: 200px;
    min-width: 420px;
}

.timeline-card .timeline-article .article-img,
.timeline-card .timeline-article .me-article {
    height: 200px;
}

.timeline-card .timeline-article .me-article-title {
    font-size: 16px;
}

.timeline-card .timeline-article .me-article-description {
    height: 105px;
}

.nodata {
    font-family: '华康手札体W5P';
    text-align: center;
}

@media screen and (max-width: 992px) {
    .timeline-card .timeline-article {
        min-width: 450px;
    }
}
</style>
