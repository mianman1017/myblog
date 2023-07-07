<template>
    <el-card
        style="border-radius: 3px"
        class="article-card"
        :body-style="{ padding: '16px' }"
    >
        <div class="me-article-header">
            <a @click="view(id)" class="me-article-title">{{ title }}</a>

            <el-button v-if="weight > 0" class="me-article-icon" type="text"
                >置顶</el-button
            >
            <span class="me-pull-right me-article-count">
                <el-icon><ChatLineRound /></el-icon>&nbsp;{{ commentCounts }}
            </span>
            <span class="me-pull-right me-article-count">
                <el-icon><View /></el-icon>&nbsp;{{ viewCounts }}
            </span>
        </div>
        <div class="me-article-description">
            {{ summary }}
        </div>
        <div class="me-article-footer">
            <span class="me-article-author">
                <el-icon><User /></el-icon>&nbsp;<el-tag class="article-tag">{{
                    author
                }}</el-tag>
            </span>
            <el-tag
                v-for="t in tags"
                :key="t.tagName"
                size="mini"
                type="success"
                class="article-tag"
                >{{ t.tagName }}</el-tag
            >
            <span class="me-pull-right me-article-count">
                <el-icon><Clock /></el-icon>&nbsp;{{
                    $filters.format(createDate)
                }}
            </span>
        </div>
    </el-card>
</template>

<script>
export default {
    name: 'ArticleItem',
    props: {
        id: String,
        weight: Number,
        title: String,
        commentCounts: Number,
        viewCounts: Number,
        summary: String,
        author: String,
        tags: Array,
        createDate: String,
    },
    data() {
        return {
            topShow: false,
        };
    },
    methods: {
        view(id) {
            this.$router.push({ path: '/view/${id}' });
        },
    },
};
</script>

<style>
.article-card {
    background-color: var(--theme_card_color);
    border-color: var(--theme_card_color);
    color: var(--theme_text_color);
    width: 500px;
    /* opacity: 0.7;
    transition: opacity 0.15s; */
}
/* .article-card:hover {
    opacity: 0.85;
} */
.me-article-header {
    padding-bottom: 10px;
}
.me-article-title {
    font-weight: 600;
}
.me-article-icon {
    padding: 3px 8px;
}
.me-article-count {
    color: #ff00ff;
    padding-left: 14px;
    font-size: 13px;
}
.me-pull-right {
    float: right;
}
.me-article-description {
    font-size: 13px;
    line-height: 24px;
    margin-bottom: 10px;
}
.me-article-author {
    color: #aa00ff;
    padding-right: 18px;
    font-size: 13px;
}
.article-tag {
    margin-left: 6px;
    color: #ffffff;
    background-color: #ff00ff;
    border-color: var(--theme_card_color);
    transition: border-color 0.2s;
}
</style>
