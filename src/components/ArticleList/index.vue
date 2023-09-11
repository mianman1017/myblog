<template>
    <div class="articlelist-container">
        <div class="article-list">
            <ArticleItem
                v-for="article in articles"
                :key="article.id"
                v-bind="article"
            />
        </div>
    </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem/index';
import Pagination from '@/components/Pagination/index';

export default {
    data() {
        return {
            noData: false,
            offset: 0, // 初始化偏移值为0
            articles: [], // 初始化文章列表为空
            requesting: false,
        };
    },
    components: {
        ArticleItem,
        Pagination,
    },
    methods: {
        load() {
            // 触发分页，调用接口加载文章列表
            this.requesting = true;
            const params = new URLSearchParams();
            params.append('offset', this.offset);
            // console.log(this.offset);
            this.axios
                .post('http://111.229.204.126:8000/articlelist/get/', params)
                .then((res) => {
                    //Result(success,msg,data)
                    if (res.data.success) {
                        //console.log(res.data.data.length);
                        if (res.data.data.length < 5) {
                            this.noData = true;
                        }
                        this.articles = this.articles.concat(res.data.data);
                        //for (article in this.articles) {
                        //    console.log(article.img);
                        //}
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
                    this.$emit('loadingOver');
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
            //console.log(this.noData);
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
@media screen and (max-width: 768px) {
    .articlelist-container {
        margin: auto;
    }
}
</style>
