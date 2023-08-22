<template>
    <Navbar ref="navbar" />
    <div class="timeline-container">
        <el-card class="timeline-card">
            <el-timeline>
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
        </el-card>
    </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem/index';
import Navbar from '@/components/Navbar/index';

export default {
    data() {
        return {
            articles: [],
        };
    },
    components: {
        ArticleItem,
        Navbar,
    },
    methods: {
        load() {
            // 触发分页，调用接口加载文章列表
            this.loading = true;
            const params = new URLSearchParams();
            params.append('offsert', this.offset);
            this.axios
                .post('http://localhost:8000/articlelist/get/', params)
                .then((res) => {
                    //Result(success,msg,data)
                    if (res.data.success) {
                        console.log(res.data.data);
                        if (res.data.data.length <= 0) {
                            this.noData = true;
                        } else {
                            this.articles = this.articles.concat(res.data.data);
                            this.offset += 5;
                            console.log(this.articles);
                            console.log(this.articles[0].weight);
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
.timeline-container {
    padding-top: 90px;
}

.timeline-card {
    width: 50%;
    margin: auto;
    background: var(--card_color);
    padding-top: 30px;
    margin-bottom: 30px;
    min-width: 620px;
    border: solid 1.5px var(--border_color);
}
.timeline-card .el-card {
    box-shadow: 0 0 5px var(--shadow_color) !important;
}
.timeline-card .el-timeline {
    position: relative;
    margin-left: 5%;
    margin-right: 5%;
    padding-left: 6%;
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

.timeline-article {
    width: 93%;
    height: 200px;
    min-width: 420px;
}

.timeline-article .article-img,
.timeline-article .me-article {
    height: 200px;
}

.timeline-article .me-article-title {
    font-size: 16px;
}

.timeline-article .me-article-description {
    height: 105px;
}

@media screen and (max-width: 992px) {
    .timeline-article {
        min-width: 450px;
    }
}
</style>
