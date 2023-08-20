<template>
    <el-menu
        :default-active="activeIndex"
        ref="navbar"
        :router="true"
        :class="{
            'navbar-transform': isNavbarTransformed,
            'navbar-padding': hasPadding,
        }"
        mode="horizontal"
        :ellipsis="false"
    >
        <div class="logo">M-Blog</div>
        <div style="width: 50px"></div>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/timeline">时间轴</el-menu-item>
        <el-menu-item index="/post">说说</el-menu-item>
        <el-menu-item index="/message">留言</el-menu-item>
        <el-menu-item index="/friends">友链</el-menu-item>
        <div class="flex-grow" />

        <template v-if="!user.login">
            <el-button class="nav-button" link
                ><el-icon><User /></el-icon
            ></el-button>
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
                --el-switch-border-color: var(--border_color);
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
            scrollAction: {
                x: 'undefined',
                y: 'undefined',
            },
            isNavbarTransformed: false,
            hasPadding: false,
            activeIndex: '/',
        };
    },
    setup() {
        const value = ref(true);
        return { value };
    },
    methods: {
        changeTheme() {
            const theme = document.getElementById('theme');
            const background = document.getElementById('building');
            console.log(theme.href);
            if (theme.href.includes('light.css')) {
                theme.href = '../theme/dark.css';
                background.style.filter = 'brightness(60%)';
            } else {
                theme.href = '../theme/light.css';
                background.style.filter = 'brightness(100%)';
            }
        },
        isDownDirection() {
            if (typeof this.scrollAction.x == 'undefined') {
                this.scrollAction.x = window.scrollX;
                this.scrollAction.y = window.scrollY;
            }
            var diffX = this.scrollAction.x - window.scrollX;
            var diffY = this.scrollAction.y - window.scrollY;

            this.scrollAction.x = window.scrollX;
            this.scrollAction.y = window.scrollY;

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
        HandleScrollForNavbarShow() {
            this.$nextTick(() => {
                const navbar = this.$refs.navbar;
                if (navbar) {
                    const isDownDirection = this.isDownDirection();
                    if (isDownDirection && !this.isNavbarTransformed) {
                        this.isNavbarTransformed = true;
                    } else if (!isDownDirection && this.isNavbarTransformed) {
                        this.isNavbarTransformed = false;
                    }
                }
            });
        },
    },
    mounted() {
        window.addEventListener('scroll', this.HandleScrollForNavbarShow);
        this.activeIndex = this.$route.path;
        console.log(this.activeIndex);
    },
};
</script>

<style>
.el-menu {
    position: fixed !important;
    width: 100%;
    height: 50px;
    margin-bottom: 30px !important;
    background-color: var(--nav_color) !important;
    border-color: var(--border_color) !important;
    color: var(--text_color) !important;
    transition: transform 0.3s ease;
    z-index: 100;
    /* opacity: 0.7; */
}
.el-menu-item {
    font-family: 'Harmony' !important;
    color: var(--text_color) !important;
}

.el-menu-item:hover,
.el-menu-item:focus {
    background-color: var(--hover_color) !important;
    color: var(--pink_color) !important;
}

.common-layout > .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid var(--pink_color);
    color: var(--pink_color) !important;
}

.el-menu .logo {
    cursor: default;
    font-family: '华康手札体W5P';
    font-weight: bold;
    font-size: 20px;
    line-height: 57.6px;
    text-indent: 30px;
}
.el-menu .el-switch {
    margin-top: 10px;
    margin-right: 30px;
}

.el-menu .nav-button {
    position: relative;
    color: var(--text_color) !important;
    font-size: 20px;
    width: 50px;
    margin-right: 10px;
    border-radius: 100%;
    border: solid var(--text_color) 10px;
    transition: transform 0.3s;
}

.el-menu .nav-button:hover {
    transform: scale(1.2);
}

.navbar-transform {
    transform: translateY(-100%);
}

.navbar-padding {
    padding-right: 10px;
}

.flex-grow {
    flex-grow: 1;
}
</style>
