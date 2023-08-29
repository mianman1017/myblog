<template>
    <Navbar ref="navbar" />
    <div class="article-detail-container">
        <el-row>
            <el-col :xs="24" :sm="18" :md="18">
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
import '../../../public/theme/dracula.css';
import Navbar from '@/components/Navbar/index';

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
    components: {
        Navbar,
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

.article-detail-card {
    width: 90%;
    font-family: '华康手札体W5P';
    background-color: var(--card_color);
    color: var(--text_color);
    transition: background-color 0s;
    padding: 0px 20px 0px 20px;
    margin: auto;
}

.article-detail-card .title {
    text-align: center;
    font-size: 30px;
    color: var(--pink_color);
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
    line-height: 150%;
}

.article-detail-card h1,
.article-detail-card h2 {
    margin-top: 13px;
    margin-bottom: 13px;
    border-bottom: solid rgb(238, 238, 238) 1px;
}

.article-detail-card h3 {
    width: fit-content;
    padding-right: 2px;
    margin-top: 13px;
    margin-bottom: 13px;
    border-bottom: solid rgb(238, 238, 238) 1px;
}

.article-detail-card h3,
.article-detail-card h4,
.article-detail-card h5,
.article-detail-card p {
    margin-top: 13px;
    margin-bottom: 13px;
}

.article-detail-card img {
    filter: invert(var(--latex_color));
}

.article-detail-card blockquote {
    color: grey;
    padding-left: 15px;
    border-left: solid 5px var(--pink_color);
    margin-left: 0;
}

/* 目录结构样式 */

.article-menu-card {
    width: 90%;
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
