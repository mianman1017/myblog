<template>
    <Navbar ref="navbar" />
    <div class="article-detail-container">
        <el-row>
            <el-col :xs="24" :sm="17" :md="17">
                <ArticleDetail v-bind="article" />
                <Comment
                    :comments="this.comments"
                    :id="this.article.id"
                    @getComment="getComment"
                />
            </el-col>
            <el-col :xs="0" :sm="7" :md="7">
                <el-card class="article-menu-card">
                    <div class="title">文章目录</div>
                    <div v-html="processedTOC"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar/index';
import ArticleDetail from '@/components/ArticleDetail/index';
import Comment from '@/components/Comment/index';

export default {
    name: 'Article',
    data() {
        return {
            article: {
                id: 0,
                weight: 0,
                img: '',
                title: '',
                body: '',
                toc: '',
                commentCounts: 0,
                viewCounts: 0,
                summary: '',
                author: '',
                tags: [],
                createDate: '',
                updateDate: '',
            },
            comments: [],
        };
    },
    components: {
        Navbar,
        ArticleDetail,
        Comment,
    },
    methods: {
        getArticle() {
            const title = this.$route.params.title;
            // console.log(id);
            const params = new URLSearchParams();
            params.append('title', title);

            this.axios
                .post('http://localhost:8000/article/get/', params)
                .then((res) => {
                    //Result(success,msg,data)
                    // console.log(id);
                    if (res.data.success) {
                        // console.log(res.data);
                        if (res.data.data.length <= 0) {
                            this.noData = true;
                        } else {
                            this.article = res.data.data;
                            // console.log(this.article.body);
                            // console.log(this.article.weight);
                            // console.log(this.article.body);
                        }
                        this.addView();
                        this.getComment();
                    }
                })
                .catch((err) => {
                    // this.$message.error('文章加载失败');
                })
                .finally(() => {});
        },
        addView() {
            const params = new URLSearchParams();
            params.append('id', this.article.id);

            this.axios
                .post('http://localhost:8000/article/view/add/', params)
                .then((res) => {
                    //Result(success,msg,data)
                    // console.log(id);
                    if (res.data.success) {
                        // console.log(res.data);
                    }
                })
                .catch((err) => {
                    // this.$message.error('文章加载失败');
                })
                .finally(() => {});
        },
        getComment() {
            const params = new URLSearchParams();
            params.append('id', this.article.id);
            // console.log(this.offset);
            this.axios
                .post('http://localhost:8000/commentlist/get/', params)
                .then((res) => {
                    //Result(success,msg,data)
                    if (res.data.success) {
                        //console.log(res.data.data.length);
                        this.comments = res.data.data;
                        // console.log(this.articles.length);
                        // console.log(res.data.data);
                        this.article.commentCounts = this.comments.length;
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
        jumpTo(idname) {
            const targetElement = document.querySelector(idname);

            if (!targetElement) {
                return; // 目标元素不存在，无法执行滚动
            }

            const elementRect = targetElement.getBoundingClientRect();
            const elementTop = elementRect.top + window.scrollY; // 添加滚动位置

            // 计算目标元素的最终滚动位置
            const scrollOffset = elementTop - 50;

            // 如果目标元素已经在视口内，就不执行滚动
            window.scrollTo({
                top: scrollOffset,
                behavior: 'smooth',
            });
        },
    },
    computed: {
        processedTOC() {
            if (this.article.toc) {
                const processedToc = this.article.toc.replace(
                    /<a\s+href="([^"]+)">/g,
                    '<a onclick="jumpTo(\'$1\')">'
                );
                return processedToc;
            } else {
                return ''; // Return an empty string if toc is not available
            }
        },
    },
    created() {
        window.jumpTo = this.jumpTo;
    },

    mounted() {
        this.getArticle();
    },
};
</script>

<style>
.el-card {
    border: solid 1.5px var(--border_color);
}

.article-detail-container {
    padding-top: 90px;
    margin-left: 10%;
    margin-right: 10%;
}

/* 目录结构样式 */

.article-menu-card {
    width: 75%;
    position: sticky;
    top: 1rem;
    font-family: '华康手札体W5P';
    background-color: var(--card_color);
    color: var(--text_color);
    transition: background-color 0s;
}

.article-menu-card .title {
    font-size: 20px;
    border-bottom: solid 2px var(--pink_color);
}

.article-menu-card ul:nth-child(1) {
    padding-left: 0;
}

.article-menu-card ul:not(:first-child) {
    padding-left: 30px;
}

.article-menu-card li {
    list-style-type: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.article-menu-card li a {
    cursor: pointer;
    font-weight: bold;
    padding: 2px;
}

.article-menu-card li a:hover {
    background-color: #e677a3;
}
</style>
