<template>
    <div class="article-detail-container">
        <el-row>
            <el-col :xs="24" :sm="16" :md="16">
                <el-card class="article-detail-card">
                    <div class="title">{{ this.article.title }}</div>
                    <div class="tail">
                        <el-icon><Calendar /></el-icon>
                        <span class="tail-ele"
                            >发表于:{{ this.article.createDate }}</span
                        >
                        <span class="seperator">∣</span>
                        <el-icon><Refresh /></el-icon>
                        <span class="tail-ele"
                            >更新于: {{ this.article.updateDate }}</span
                        >
                        <span class="seperator">∣</span>
                        <el-icon><View /></el-icon>
                        <span class="tail-ele"
                            >浏览量: {{ this.article.viewCounts }}</span
                        >
                        <span class="seperator">∣</span>
                        <el-icon><ChatDotRound /></el-icon>
                        <span class="tail-ele"
                            >评论量: {{ this.article.commentCounts }}</span
                        >
                        <span class="seperator">∣</span>
                        <el-icon><PriceTag /></el-icon>
                        <el-tag
                            v-for="t in this.article.tags"
                            :key="t.id"
                            size="small"
                            type="info"
                            effect="plain"
                            class="tail-tag"
                            >{{ t }}</el-tag
                        >
                    </div>
                    <div v-html="this.article.body"></div>
                </el-card>
            </el-col>
            <el-col :xs="0" :sm="6" :md="6">
                <el-card class="article-menu-card">
                    <div class="title">文章目录</div>
                    <div v-html="processedTOC"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import '../../../public/theme/monokai.css';

export default {
    name: 'ArticleDetail',
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
        };
    },
    methods: {
        getArticle() {
            const id = this.$route.params.id;
            // console.log(id);
            const params = new URLSearchParams();
            params.append('id', id);

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
                    }
                })
                .catch((err) => {
                    // this.$message.error('文章加载失败');
                })
                .finally(() => {});
        },
        jumpTo(idname) {
            console.log(idname);
            document.querySelector(idname).scrollIntoView({
                behavior: 'smooth', // 平滑过渡
                block: 'center', // 上边框与视窗顶部平齐。默认值
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
.article-detail-container {
    margin-left: 10%;
    margin-right: 10%;
}
.article-detail-card {
    font-family: '华康手札体W5P';
    margin-left: 10px;
    margin-right: 10px;
    background-color: var(--hover_color);
    border: 0;
    color: var(--text_color);
    transition: background-color 0s;
}

.article-detail-card .title {
    text-align: center;
    font-size: 30px;
}
.article-detail-card .tail {
    text-align: center;
}

.tail .tail-ele {
    font-size: 14px;
    padding-right: 3px;
}

.tail .tail-tag {
    margin-right: 5px;
    border-color: var(--text_color);
    color: var(--text_color);
    background-color: var(--card_color);
}

.tail .el-icon {
    position: relative;
    top: 2px;
    font-size: 12px;
    padding-left: 3px;
    padding-right: 3px;
}

.tail .el-tag {
    height: 15px;
    padding: 5px;
}

.tail .el-tag .el-tag__content {
    height: 13px;
    position: relative;
    top: 1.5px;
}

/* 代码块样式 */

.article-detail-card code {
    display: block;
    font-family: 'JetBrains Mono';
    font-size: 13px;
    width: 100%;
}

.article-detail-card h1,
.article-detail-card h2 {
    margin-top: 13px;
    margin-bottom: 13px;
    border-bottom: solid rgba(200, 200, 200, 0.9) 0.3px;
}

.article-detail-card h3,
.article-detail-card h4,
.article-detail-card h5,
.article-detail-card p {
    margin-top: 13px;
    margin-bottom: 13px;
}

/* 目录结构样式 */

.article-menu-card {
    position: sticky;
    top: 1rem;
    font-family: '华康手札体W5P';
    background-color: var(--hover_color);
    color: var(--text_color);
    border: 0;
    transition: background-color 0s;
}

.article-menu-card .title {
    font-size: 20px;
}

.article-menu-card ul:nth-child(1) {
    padding-left: 0;
}

.article-menu-card ul:not(:first-child) {
    padding-left: 30px;
}

.article-menu-card li {
    list-style-type: none;
}
.article-menu-card li a {
    cursor: pointer;
    font-weight: bold;
    padding: 2px;
    border: 5px;
    border-radius: 3px;
}

.article-menu-card li a:hover {
    background-color: #e677a3;
}
</style>
