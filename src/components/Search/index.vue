<template>
    <el-card class="search-card" :body-style="{ padding: '8px 18px' }">
        <div class="search-header">全站搜索</div>
    </el-card>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {};
    },
    methods: {},
};
</script>

<style>
.search-card {
    max-width: 280px;
    min-width: 230px;
    height: 100px;
    color: var(--text_color);
    margin-left: 7px;
}
.search-header {
    font-weight: 600;
    border-bottom: solid 2px var(--text_color);
}
</style>
