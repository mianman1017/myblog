<template>
    <el-card class="search-card" :body-style="{ padding: '8px 18px' }">
        <div class="search-header">文章搜索</div>
        <div style="text-align: center">
            <el-input
                v-model="input"
                placeholder="搜点什么吧..."
                class="search-input"
                @keyup.enter="search"
            ></el-input>
            <el-button type="primary" class="search-btn" @click="search">
                <el-icon><Search /></el-icon>
            </el-button>
        </div>
    </el-card>
</template>

<script>
import { ElMessage } from 'element-plus';

export default {
    name: 'SearchCard',
    data() {
        return {
            input: '',
        };
    },
    methods: {
        search() {
            if (this.input) {
                this.$router.push({ path: '/search/' + this.input });
            } else {
                ElMessage({
                    message: '输入内容不能为空',
                    type: 'warning',
                });
            }
        },
    },
};
</script>

<style>
.search-input {
    border: solid 1px var(--border_color);
    border-radius: 0.1rem;
    width: 60%;
    margin-right: 10px;
}

.search-input .el-input__wrapper {
    border-radius: 0;
    border: 0;
    background-color: var(--card_color);
}

.search-input .el-input__inner {
    color: var(--text_color);
}

.search-btn {
    position: relative;
    width: 45px;
    border-radius: 0.1rem;
    border: solid 1.5px var(--border_color);
    color: var(--text_color);
    background-color: #6399fc;
    cursor: pointer;
    top: 0.1px;
    height: 34.3px;
}

.search-btn:hover {
    border-radius: 0.1rem;
    color: var(--text_color);
    background-color: rgb(146, 177, 235);
    border: solid 1.5px var(--border_color);
}

.search-btn .el-icon {
    font-size: 20px;
}

.search-card {
    font-family: '华康手札体W5P';
    max-width: 280px;
    min-width: 230px;
    height: 100px;
    background-color: var(--card_color);
    border: solid 1.5px var(--border_color);
    color: var(--text_color);
    margin-left: 7px;
}

.search-header {
    font-weight: 600;
    border-bottom: solid 2px var(--text_color);
    margin-bottom: 13px;
}
@media screen and (max-width: 768px) {
    .search-card {
        display: none;
    }
}
</style>
