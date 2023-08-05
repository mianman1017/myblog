<template>
    <div class="article-detail-container">
        <el-row>
            <el-col :xs="24" :sm="16" :md="16">
                <el-card class="article-detail-card">
                    <div class="title">文章标题</div>
                    <div class="msg">文章时间等信息</div>
                    <div v-html="markdownToHtml"></div>
                </el-card>
            </el-col>
            <el-col :xs="0" :sm="6" :md="6">
                <el-card class="article-menu-card">
                    <div class="title">文章目录</div>
                    <div></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';

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
                            this.offset += 5;
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
    },
    computed: {
        markdownToHtml() {
            const render = new marked.Renderer();
            marked.setOptions({
                renderer: render, // 这是必填项
                gfm: true, // 启动类似于Github样式的Markdown语法
                pedantic: false, // 只解析符合Markdwon定义的，不修正Markdown的错误
                sanitize: false, // 原始输出，忽略HTML标签（关闭后，可直接渲染HTML标签）

                // 高亮的语法规范
                highlight: (code, lang) =>
                    hljs.highlight(code, { language: lang }).value,
            });
            //blog.csdn.net/qq_22841387/article/details/125173963
            // console.log(this.article.body);
            // console.log(marked(this.article.body));
            https: return marked(this.article.body);
        },
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
    font-weight: bold;
}
.article-detail-card .msg {
    text-align: center;
}

.article-menu-card {
    background-color: var(--hover_color);
    color: var(--text_color);
    border: 0;
    transition: background-color 0s;
}

pre {
    color: white;
    background-color: rgb(55, 55, 55);
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
}

code {
    display: block;
    font-family: 'JetBrains Mono';
    font-size: 14px;
    width: 100%;
}

h1,
h2 {
    margin-top: 13px;
    margin-bottom: 13px;
    border-bottom: solid rgba(200, 200, 200, 0.9) 0.3px;
}

h3,
h4,
h5,
p {
    margin-top: 13px;
    margin-bottom: 13px;
}
</style>
