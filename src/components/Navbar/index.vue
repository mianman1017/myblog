<template>
    <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false">
        <div class="logo">M-Blog</div>
        <div style="width: 50px"></div>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/category/all">分类</el-menu-item>
        <el-menu-item index="/timeline">时间轴</el-menu-item>
        <el-menu-item index="/post">说说</el-menu-item>
        <el-menu-item index="/message">留言</el-menu-item>
        <el-menu-item index="/friends">友链</el-menu-item>
        <div class="flex-grow" />

        <template v-if="!user.login">
            <el-button class="nav-button" link>登录</el-button>
        </template>

        <template v-else>
            <el-sub-menu index>
                <template slot="title">
                    <img class="me-header-picture" :src="user.avatar" />
                </template>
                <el-menu-item index @click="logout"
                    ><i class="el-icon-back"></i>退出</el-menu-item
                >
            </el-sub-menu>
        </template>

        <el-switch
            v-model="value"
            class="ml-2"
            inline-prompt
            active-text="☀️"
            inactive-text="🌙"
            style="
                --el-switch-on-color: rgb(63, 137, 221);
                --el-switch-off-color: rgb(31, 19, 84);
                opacity: 1;
            "
            @change="changeTheme"
        />

        <!-- <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu> -->
    </el-menu>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Navbar',
    props: {
        activeIndex: String,
        simple: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            user: {
                login: false,
                avatar: '',
            },
        };
    },
    setup() {
        const value = ref(true);
        return { value };
    },
    methods: {
        changeTheme() {
            const theme = document.getElementById('theme');
            console.log(theme.href);
            if (theme.href.includes('light.css')) {
                theme.href = '../theme/dark.css';
            } else {
                theme.href = '../theme/light.css';
            }
            this.$nextTick(() => {
                // 等待DOM更新后强制重绘滚动条
                const html = document.documentElement;
                html.scroll;
                // 删除滚动条
                html.style.overflow = 'hidden';
                // 用于暂时撑起滚动条的宽度，这样页面就不会抖动
                html.style.paddingRight = `10px`;

                // 等待1ms
                setTimeout(() => {
                    // 重新添加滚动条
                    html.style.overflow = '';
                    html.style.paddingRight = '';
                }, 1);
            });
        },
    },
};
</script>

<style>
.el-menu {
    margin-bottom: 30px;
    background-color: var(--card_color);
    border-color: var(--card_color);
    color: var(--text_color);
    /* opacity: 0.7; */
}
.el-menu-item {
    font-family: 'Harmony';
    color: var(--text_color) !important;
}

.el-menu-item:hover,
.el-menu-item:focus {
    background-color: var(--hover_color) !important;
}

.logo {
    cursor: default;
    font-family: '华康手札体W5P';
    font-weight: bold;
    font-size: 20px;
    line-height: 57.6px;
    text-indent: 30px;
}
.el-switch {
    margin-top: 10px;
    margin-right: 30px;
}
.nav-button {
    position: relative;
    font-family: 'Harmony';
    color: var(--text_color);
    width: 57.6px;
    top: -2px;
    margin-right: 10px;
}
</style>
