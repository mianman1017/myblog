<template>
    <el-card
        style="border-radius: 3px"
        class="article-card"
        :body-style="{ padding: '0' }"
    >
        <el-row>
            <el-col :span="10">
                <el-image class="article-img" :src="url" fit="fill" />
            </el-col>
            <el-col :span="14"
                ><div class="me-article">
                    <div class="me-article-header">
                        <span>
                            <el-icon><Paperclip /></el-icon>
                            <span v-if="weight > 0" class="me-article-icon"
                                >置顶</span
                            >
                        </span>
                        <span class="me-pull-right">
                            <span class="me-article-count">
                                <el-icon><ChatLineRound /></el-icon>&nbsp;{{
                                    commentCounts
                                }}
                            </span>
                            <span class="me-article-count">
                                <el-icon><View /></el-icon>&nbsp;{{
                                    viewCounts
                                }}
                            </span>
                            <span class="me-article-count">
                                <el-icon><Calendar /></el-icon>&nbsp;{{
                                    // $filters.format(createDate)
                                    createDate
                                }}
                            </span>
                        </span>
                    </div>
                    <a @click="view(id)" class="me-article-title">{{
                        title
                    }}</a>
                    <div class="me-article-description">
                        {{ summary }}
                    </div>
                    <div class="me-article-footer">
                        <el-icon class="tag-icon"><PriceTag /></el-icon>
                        <el-tag
                            v-for="t in tags"
                            :key="t.tagName"
                            size="small"
                            type="success"
                            class="article-tag"
                            >{{ t.tagName }}</el-tag
                        >
                    </div>
                </div></el-col
            >
        </el-row>
    </el-card>
</template>

<script>
export default {
    name: 'ArticleItem',
    props: {
        id: String,
        weight: Number,
        img: String,
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
            url: require('../../assets/docker.jpg'),
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
    border: 0;
    color: var(--text_color);
    width: 530px;
    height: 175px;
    margin-right: 10px;
    margin-bottom: 20px;
    transition: width 0s;
    /* opacity: 0.7;
    transition: opacity 0.15s; */
}

/* .article-card:hover {
    opacity: 0.85;
} */

.article-img {
    width: 100%;
    height: 175px;
}

.me-article {
    padding: 7px 0 0 10px;
}

.me-article-title {
    cursor: pointer;
    position: relative;
    font-weight: 600;
    top: -2px;
}
.me-article-title:hover {
    color: cadetblue;
}

.me-article-icon {
    cursor: default;
    font-family: '华康手札体W5P';
    font-size: 14px;
    font-weight: 600;
    position: relative;
    color: #f56c6c;
    top: -2.5px;
    left: 2px;
    padding: 0;
}
.me-article-count {
    color: var(--text_color);
    padding-right: 7px;
    font-size: 13px;
}
.me-pull-right {
    float: right;
}
.me-article-description {
    font-size: 13px;
    line-height: 24px;
    margin-bottom: 5px;
    height: 75px;
}

.tag-icon {
    position: relative;
    top: 3px;
    color: #ff00ff;
}

.article-tag {
    margin-left: 6px;
    color: #ffffff;
    background-color: #ff00ff;
    border-color: var(--card_color);
    transition: border-color 0.2s;
}

.me-view {
    height: 27px;
    width: 65px;
    background-color: hotpink;
    border-radius: 8px 0 0 0;
    text-indent: 10px;
}

@media screen and (max-width: 992px) {
    .article-card {
        width: 97%;
        min-width: 470px;
    }
}

@media screen and (max-width: 768px) {
    .article-card {
        margin: auto;
    }
}
</style>
