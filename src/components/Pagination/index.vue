<template>
    <div class="container">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="5"
            @current-change="getArticles()"
        />
    </div>
</template>

<script>
export default {
    props: {
        currentpage: Number,
        total: Number,
    },
    data() {
        return {
            total: 100,
        };
    },
    methods: {
        getArticles() {
            //根据当前页获取相关的文章数据
        },
    },
};
</script>

<style>
.container {
    display: grid;
    place-items: center; /* 水平和垂直居中 */
}
.el-pagination {
    margin-top: 15px;
    margin-right: 5%;
}
</style>
