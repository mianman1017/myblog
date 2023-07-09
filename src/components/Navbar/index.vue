<template>
    <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
        <div class="logo">MianMan's Blog</div>
        <div style="width: 50px"></div>
        <el-menu-item index="1"> 首页</el-menu-item>
        <el-menu-item index="2">分类</el-menu-item>
        <el-menu-item index="3">关于我</el-menu-item>
        <div class="flex-grow" />

        <template v-if="!user.login">
            <el-button class="nav-button" type="text">登录</el-button>
        </template>

        <template v-else>
            <el-submenu index>
                <template slot="title">
                    <img class="me-header-picture" :src="user.avatar" />
                </template>
                <el-menu-item index @click="logout"
                    ><i class="el-icon-back"></i>退出</el-menu-item
                >
            </el-submenu>
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
            var currentTheme = getComputedStyle(document.documentElement)
                .getPropertyValue('--theme_card_color')
                .trim();
            var text_color = currentTheme;
            var card_color = currentTheme;
            var hover_color = currentTheme;
            // console.log(currentTheme);
            if (currentTheme === 'rgb(255, 255, 255, 0.9)') {
                currentTheme = 'rgb(0, 0, 0, 0.85)';
                hover_color = 'rgb(0, 0, 0)';
            } else {
                currentTheme = 'rgb(255, 255, 255, 0.9)';
                hover_color = 'rgb(255, 255, 255)';
            }
            card_color = currentTheme;

            document.documentElement.style.setProperty(
                '--theme_card_color',
                card_color
            );
            document.documentElement.style.setProperty(
                '--theme_hover_color',
                hover_color
            );
            document.documentElement.style.setProperty(
                '--theme_text_color',
                text_color
            );

            // 切换背景图片
            // const buildingElement = document.querySelector('#building');
            // const currentBackground = getComputedStyle(buildingElement)
            //     .getPropertyValue('background-image')
            //     .trim();

            // const dayBackgroundURL = 'url("/imgs/background-day.jpg")';
            // const nightBackgroundURL = 'url("/imgs/background-night.jpg")';

            // if (currentBackground === dayBackgroundURL) {
            //     buildingElement.style.backgroundImage = nightBackgroundURL;
            // } else {
            //     buildingElement.style.backgroundImage = dayBackgroundURL;
            // }
        },
    },
};
</script>

<style>
.el-menu {
    margin-bottom: 20px;
    background-color: var(--theme_card_color);
    border-color: var(--theme_card_color);
    color: var(--theme_text_color);
    transition: background-color 0.2s;
    transition: border-color 0.1s;
    /* opacity: 0.7; */
}
.el-menu-item {
    font-family: 'Harmony';
    color: var(--theme_text_color) !important;
}

.el-menu-item:hover,
.el-menu-item:focus {
    background-color: var(--theme_hover_color) !important;
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
    color: var(--theme_text_color);
    width: 57.6px;
    top: 10px;
    margin-right: 10px;
}
</style>
