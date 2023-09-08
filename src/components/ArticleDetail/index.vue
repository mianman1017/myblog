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
        <div v-html="body"></div>
    </el-card>
</template>

<script>
import '@/assets/styles/dracula.css';

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
};
</script>

<style>
.article-detail-card {
    width: 82%;
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
</style>
