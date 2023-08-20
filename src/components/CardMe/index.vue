<template>
    <el-card class="me-card" style="border-radius: 3px">
        <el-avatar :src="avatar" :size="80" draggable="false" />
        <div class="me-profile">
            <h3 class="me-name">MianMan</h3>
            <el-tag class="me-tag" effect="dark" type="danger" size="small"
                >💞ZX</el-tag
            >
        </div>
        <div class="me-msg">
            <div>
                <el-icon><LocationInformation /></el-icon>
                <span class="me-msg-text"> 南开大学</span>
            </div>
            <div>
                <el-icon><EditPen /></el-icon>
                <span class="me-msg-text"> 追风赶月莫停留，平芜尽处是春山</span>
            </div>
        </div>
        <div class="me-iconlist">
            <div style="display: flex">
                <el-tooltip content="GitHub：NKUmianman" effect="customized">
                    <button class="me-icon github"></button>
                </el-tooltip>
                <el-tooltip
                    content="BiliBili：绵满从小就AC"
                    effect="customized"
                >
                    <button class="me-icon bilibili"></button>
                </el-tooltip>
                <el-tooltip content="WeChat：mianm1017" effect="customized">
                    <button class="me-icon wechat"></button>
                </el-tooltip>
                <el-tooltip content="QQ:1277463846" effect="customized">
                    <button class="me-icon qq"></button>
                </el-tooltip>
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
};
</script>

<style>
.me-card {
    font-family: '华康手札体W5P';
    max-width: 280px;
    min-width: 230px;
    height: 290px;
    margin-left: 7px;
    background-color: var(--card_color);
    border-color: var(--border_color);
    color: var(--text_color);
    /* opacity: 0.7;
    transition: opacity 0.15s; */
}

.me-profile {
    display: flex;
    padding-bottom: 10px;
}

.me-msg {
    height: 50px;
    padding-bottom: 7px;
    border-bottom: solid var(--pink_color) 2px;
}
.me-msg-text {
    position: relative;
    font-size: 14px;
    top: -3px;
}

/* .me-card:hover {
    opacity: 0.85;
} */

.el-avatar {
    position: relative;
    left: 33%;
}

.me-name {
    position: relative;
    font-family: '华康手札体W5P';
    left: 27%;
    margin: 0;
}

.me-tag {
    position: relative;
    font-family: '华康手札体W5P';
    padding-top: 2px;
    top: 4px;
    left: 30%;
}
.me-iconlist {
    padding-top: 15px;
    width: 100%;
    height: 40px;
}

.me-iconlist a {
    font-family: 'Harmony';
    color: black;
    text-decoration: none;
    text-indent: 5px;
    line-height: 35px;
    border-bottom: solid pink 2px;
}

.me-icon {
    width: 40px;
    height: 40px;
    border: 0;
    margin: auto;
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

.el-popper.is-customized {
    /* Set padding to ensure the height is 32px */
    padding: 6px 12px;
    background: linear-gradient(90deg, rgb(51, 103, 216), rgb(191, 114, 230));
}

.el-popper.is-customized .el-popper__arrow::before {
    background: linear-gradient(45deg, #5476ca, #9d63e0);
    right: 0;
}
@media screen and (max-width: 768px) {
    .me-card {
        display: none;
    }
}
</style>
