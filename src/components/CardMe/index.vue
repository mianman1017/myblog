<template>
    <el-card class="me-card" style="border-radius: 3px">
        <el-avatar :src="avatar" :size="80" />
        <div class="me-profile">
            <h3 class="me-name">MianMan</h3>
            <el-tag class="me-tag" effect="dark" type="danger" size="small"
                >💞ZX</el-tag
            >
        </div>
        <div class="me-iconlist">
            <div style="display: flex">
                <el-popover
                popper-class=""
                    placement="bottom-start"
                    title="Github"
                    :width="200"
                    trigger="hover"
                >
                    <template #reference>
                        <el-button class="me-icon github"></el-button>
                    </template>
                    <template #default> nihao </template>
                </el-popover>
                <el-popover
                    placement="bottom-start"
                    title="BiliBili"
                    :width="200"
                    trigger="hover"
                    content="this is content, this is content, this is content"
                >
                    <template #reference>
                        <el-button class="me-icon bilibili"></el-button>
                    </template>
                </el-popover>
                <el-popover
                    placement="bottom-start"
                    title="WeChat"
                    :width="200"
                    trigger="hover"
                    content="this is content, this is content, this is content"
                >
                    <template #reference>
                        <el-button class="me-icon wechat"></el-button>
                    </template>
                </el-popover>
                <el-popover
                    placement="bottom-start"
                    title="QQ"
                    :width="200"
                    trigger="hover"
                    content="this is content, this is content, this is content"
                >
                    <template #reference>
                        <el-button class="me-icon qq"></el-button>
                    </template>
                </el-popover>
            </div>
        </div>
    </el-card>
</template>

<script>
import avatar from '@/assets/avatar.jpg';
export default {
    name: 'CardMe',
    data() {
        return {
            avatar: avatar,
        };
    },
    methods: {
        popoverEffect() {
            var currentTheme = getComputedStyle(document.documentElement)
                .getPropertyValue('--theme_card_color')
                .trim();
            if (currentTheme === 'rgb(255, 255, 255, 0.9)') {
                return 'light';
            } else {
                return 'dark';
            }
        },
    },
};
</script>

<style>
.me-card {
    margin-top: 0 !important;
    width: 280px;
    background-color: var(--theme_card_color);
    border-color: var(--theme_card_color);
    color: var(--theme_text_color);
    /* opacity: 0.7;
    transition: opacity 0.15s; */
}

.me-profile {
    display: flex;
    padding-bottom: 10px;
    border-bottom: solid plum 2px;
}

/* .me-card:hover {
    opacity: 0.85;
} */

.el-avatar {
    position: relative;
    left: 35%;
}

.me-name {
    position: relative;
    font-family: '华康手札体W5P';
    left: 30%;
    margin: 0;
}

.me-tag {
    position: relative;
    font-family: '华康手札体W5P';
    padding-top: 2px;
    top: 4px;
    left: 33%;
}
.me-iconlist {
    padding-top: 15px;
    width: 100%;
    height: 150px;
}

.me-iconlist a {
    font-family: 'Harmony';
    color: black;
    text-decoration: none;
    line-height: 35px;
    border-bottom: solid pink 2px;
}

.me-icon {
    width: 40px;
    height: 40px;
    border: 0;
}

.me-icon:hover {
}
.github {
    background: url('../../assets/github.png') no-repeat;
    background-size: contain;
}
.bilibili {
    background: url('../../assets/bilibili.png') no-repeat;
    background-size: contain;
}
.wechat {
    background: url('../../assets/wechat.png') no-repeat;
    background-size: contain;
}
.qq {
    background: url('../../assets/qq.png') no-repeat;
    background-size: contain;
}

.el-popover {
    background-color: aqua;
}
</style>
