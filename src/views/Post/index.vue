<template>
    <Loading v-if="loading" />
    <Navbar />
    <div class="post-container">
        <el-card class="post-card">
            <div v-if="this.posts.length" v-for="post in posts" :key="post.id">
                <PostItem v-bind="post" />
            </div>
            <h1 v-else class="nodata"></h1>
        </el-card>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar/index';
import PostItem from '@/components/PostItem/index';
import Loading from '@/components/Loading/index';

export default {
    data() {
        return {
            offset: 0,
            noData: false,
            posts: [],
            loading: true,
        };
    },
    components: {
        Navbar,
        PostItem,
        Loading,
    },
    methods: {
        load() {
            // 触发分页，调用接口加载文章列表
            const params = new URLSearchParams();
            params.append('offset', this.offset);
            this.axios
                .post('http://111.229.204.126:8000/postlist/get/', params)
                .then((res) => {
                    //Result(success,msg,data)
                    if (res.data.success) {
                        // console.log(res.data.data);
                        if (res.data.data.length < 7) {
                            this.noData = true;
                        }
                        this.posts = this.posts.concat(res.data.data);
                        this.offset += 7;
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
    },
    mounted() {
        // 页面加载时，调用一次load方法加载文章列表
        this.load();
    },
};
</script>

<style>
.post-container {
    padding-top: 90px;
}

.post-card {
    width: 50%;
    margin: auto;
    background: var(--bg_color);
    border: solid 1.5px var(--border_color);
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    min-width: 620px;
}

.post-card .el-card__body {
    padding-right: 17px;
}

.nodata {
    font-family: '华康手札体W5P';
    color: var(--text_color);
    text-align: center;
}
</style>
