<template>
    <Navbar ref="navbar" />
    <div class="timeline-container">
        <div class="timeline-card">
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
        </div>
    </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem/index';
import Navbar from '@/components/Navbar/index';

export default {
    data() {
        return {
            articles: [
                {
                    id: '1',
                    //weight: 1,
                    title: '利用Docker管理项目环境',
                    commentCounts: 123,
                    viewCounts: 123,
                    summary: '概要11',
                    author: '作者',
                    tags: [{ tagName: 'vue' }],
                    createDate: '2023-7-7',
                },
                {
                    id: '2',
                    //weight: 1,
                    title: '标题2',
                    commentCounts: 123,
                    viewCounts: 123,
                    summary: '概要11',
                    author: '作者',
                    tags: [{ tagName: 'vue' }],
                    createDate: '2023-7-6',
                },
                {
                    id: '3',
                    //weight: 1,
                    title: '标题3',
                    commentCounts: 123,
                    viewCounts: 123,
                    summary: '概要11',
                    author: '作者',
                    tags: [{ tagName: 'vue' }],
                    createDate: '2023-7-3',
                },
                {
                    id: '4',
                    //weight: 0,
                    title: '标题1',
                    commentCounts: 123,
                    viewCounts: 123,
                    summary: '概要11',
                    author: '作者',
                    tags: [{ tagName: 'vue' }],
                    createDate: '2023-5-4',
                },
                {
                    id: '5',
                    //weight: 0,
                    title: '标题1',
                    commentCounts: 123,
                    viewCounts: 123,
                    summary: '概要11',
                    author: '作者',
                    tags: [{ tagName: 'vue' }],
                    createDate: '2023-2-3',
                },
            ],
        };
    },
    components: {
        ArticleItem,
        Navbar,
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
    border-radius: 10px;
    background: var(--card_color);
    padding-top: 30px;
    margin-bottom: 30px;
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
    min-width: 620px;
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
