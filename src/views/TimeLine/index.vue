<template>
    <Loading v-if="loading" />
    <Navbar ref="navbar" />
    <div class="timeline-container">
        <el-card class="timeline-card">
            <!-- <div class="timeline-header">归档</div> -->

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
            <!-- <Loading v-if="loading" :loading="loading" /> -->
        </el-card>
    </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem/index';
import Navbar from '@/components/Navbar/index';
import Loading from '@/components/Loading/index';

export default {
    data() {
        return {
            loading: false,
            articles: [],
            offset: 0,
            noData: false,
            loading: true,
            requesting: false,
        };
    },
    components: {
        ArticleItem,
        Navbar,
        Loading,
    },
    methods: {
        load() {
            // 触发分页，调用接口加载文章列表
            this.requesting = true;
            const params = new URLSearchParams();
            params.append('offset', this.offset);
            this.axios
                .post('http://111.229.204.126:8000/articlelist/get/', params)
                .then((res) => {
                    //Result(success,msg,data)
                    if (res.data.success) {
                        if (res.data.data.length < 5) {
                            this.noData = true;
                        }
                        this.articles = this.articles.concat(res.data.data);
                        this.offset += 5;
                        // console.log(this.articles.length);
                        // console.log(res.data.data);
                    } else {
                        this.$message.error(res.data.msg);
                    }
                    this.requesting = false;
                })
                .catch((err) => {
                    // this.$message.error('文章加载失败');
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        isDownDirection() {
            if (typeof this.scrollAction == 'undefined') {
                this.scrollAction = {}; // 初始化scrollAction对象
                this.scrollAction.x = window.scrollX;
                this.scrollAction.y = window.scrollY;
            }
            var diffX = this.scrollAction.x - window.scrollX;
            var diffY = this.scrollAction.y - window.scrollY;

            this.scrollAction.x = window.scrollX;
            this.scrollAction.y = window.scrollY;

            //console.log(diffX, diffY);

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
        scrollToBottom(e) {
            // console.log(this.noData);
            if (!this.noData) {
                // console.log(this.loading);
                //如果有数据，触发
                const scrollHeight =
                    document.documentElement.scrollHeight ||
                    document.body.scrollHeight;
                const scrollTop =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                const windowHeight = window.innerHeight;
                // console.log(scrollTop, windowHeight, scrollHeight, this.offset);

                // 至于这里为什么要加3是我通过测试发现的，每次滑到底部总是少一点
                if (
                    scrollTop + windowHeight + this.offset + 5 >=
                        scrollHeight &&
                    this.isDownDirection()
                ) {
                    //调用load加载数据
                    if (!this.requesting) {
                        this.load();
                    }
                }
            }
        },
    },
    mounted() {
        // 页面加载时，调用一次load方法加载文章列表
        this.load();
        window.addEventListener('scroll', this.scrollToBottom, false);
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
    color: var(--text_color);
    text-align: center;
}

@media screen and (max-width: 992px) {
    .timeline-card .timeline-article {
        min-width: 450px;
    }
}
</style>
