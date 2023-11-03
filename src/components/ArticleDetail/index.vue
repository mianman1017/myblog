<template>
    <el-card class="article-detail-card">
        <div class="title">{{ title }}</div>
        <div class="tail">
            <el-icon><Calendar /></el-icon>
            <span class="tail-ele">发表于:{{ createDate }}</span>
            <span class="seperator">∣</span>
            <el-icon><Refresh /></el-icon>
            <span class="tail-ele">更新于: {{ updateDate }}</span>
            <span class="seperator">∣</span>
            <el-icon><View /></el-icon>
            <span class="tail-ele">浏览量: {{ viewCounts + 1 }}</span>
            <span class="seperator">∣</span>
            <el-icon><ChatLineRound /></el-icon>
            <span class="tail-ele">评论量: {{ commentCounts }}</span>
            <span class="seperator">∣</span>
            <el-icon><PriceTag /></el-icon>
            <el-tag
                v-for="t in tags"
                :key="t.id"
                size="small"
                type="info"
                effect="plain"
                class="tail-tag"
                >{{ t }}</el-tag
            >
        </div>
        <div v-html="body" v-highlight></div>
    </el-card>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        id: Number,
        weight: Number,
        img: String,
        title: String,
        body: String,
        toc: String,
        commentCounts: Number,
        viewCounts: Number,
        summary: String,
        author: String,
        tags: Array,
        createDate: String,
        updateDate: String,
    },
    mounted() {
        console.log(this.body);
    },
};
</script>

<style>
.article-detail-card {
    width: 85.5%;
    font-family: '华康手札体W5P';
    background-color: var(--card_color);
    color: var(--text_color);
    transition: background-color 0s;
    padding: 0px 20px 0px 20px;
    float: right;
    margin-right: 25px;
    margin-bottom: 10px;
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

.tail .el-icon {
    position: relative;
    top: 2px;
    font-size: 12px;
    padding-left: 3px;
    padding-right: 3px;
}

.tail .el-tag {
    font-family: 'JetBrains Mono';
    height: 15px;
    padding: 5px;
    margin-right: 5px;
    border-color: var(--text_color);
    color: var(--text_color);
    background-color: var(--card_color);
}

.tail .el-tag .el-tag__content {
    height: 13px;
    position: relative;
    top: 1px;
}

/* 代码块样式 */

.article-detail-card pre {
    overflow-x: auto;
    background-color: rgb(35, 36, 31);
    border-radius: 7px;
}

.article-detail-card code {
    display: block;
    font-family: 'JetBrains Mono';
    font-size: 13px;
    line-height: 150%;
    overflow-x: visible !important;
}

.article-detail-card pre::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    /**/
}
.article-detail-card pre::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
}
.article-detail-card pre::-webkit-scrollbar-thumb {
    background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%);
    border-radius: 10px;
}
.article-detail-card pre::-webkit-scrollbar-thumb:hover {
    background-image: linear-gradient(to right, #d15f92 0%, #6662df 100%);
}
.article-detail-card pre::-webkit-scrollbar-corner {
    background: #179a16;
}

.hljs-class .hljs-title,
.hljs-params,
.hljs-title.class_ {
    color: rgb(90, 212, 230);
}

.hljs-attr,
.hljs-keyword,
.hljs-name,
.hljs-selector-tag {
    color: rgb(252, 97, 141);
}

.hljs-addition,
.hljs-selector-attr,
.hljs-selector-id,
.hljs-selector-pseudo,
.hljs-string,
.hljs-template-variable,
.hljs-type,
.hljs-variable {
    color: rgb(252, 229, 102);
}

.hljs-bullet,
.hljs-link,
.hljs-literal,
.hljs-number,
.hljs-quote,
.hljs-regexp {
    color: rgb(148, 138, 227);
}

.hljs-built_in,
.hljs-code,
.hljs-section,
.hljs-selector-class,
.hljs-title {
    color: rgb(123, 216, 143);
}

/* markdown样式 */
.article-detail-card h1,
.article-detail-card h2 {
    margin-top: 13px;
    margin-bottom: 13px;
    border-bottom: solid rgb(238, 238, 238) 1px;
}

.article-detail-card h3 {
    font-size: 20px;
    width: fit-content;
    padding-right: 2px;
    margin-top: 13px;
    margin-bottom: 13px;
    border-bottom: solid rgb(238, 238, 238) 1px;
}

.article-detail-card h4 {
    font-size: 17px;
    margin-top: 13px;
    margin-bottom: 13px;
}
.article-detail-card h5,
.article-detail-card p {
    margin-top: 13px;
    margin-bottom: 13px;
    white-space: pre-line;
}

.article-detail-card #latex {
    filter: invert(var(--latex_color));
}

.article-detail-card blockquote {
    color: grey;
    padding-left: 15px;
    border-left: solid 5px var(--pink_color);
    margin-left: 0;
}

.article-detail-card blockquote #latex {
    filter: invert(0.5);
}

.article-detail-card .md-image {
    width: 100%;
}

@media screen and (max-width: 768px) {
    .article-detail-card {
        margin: auto;
    }
}
</style>
