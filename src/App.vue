<template>
    <div id="building" ref="buildingRef"></div>
    <!-- 渲染路由匹配到的组件 -->
    <router-view />

    <!-- 回到顶部的组件 -->
    <GoTop></GoTop>
</template>

<script>
import GoTop from '@/components/GoTop/index';

export default {
    components: {
        GoTop,
    },
};
</script>

<style>
@font-face {
    font-family: '华康手札体W5P';
    src: url('../public/fonts/华康手札体w5.ttf');
}

@font-face {
    font-family: 'Harmony';
    src: url('../public/fonts/HarmonyOS_Sans_SC_Medium.ttf');
}

html,
body,
#app,
.el-container {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
}

/* 用于添加全局背景图 */
#building {
    background: url('../public/imgs/background.jpg');

    width: 100%;
    height: 100%;
    position: fixed;
    background-size: 100% 100%;
    z-index: -1;
}

/* 定义全局的css变量 */
:root {
    /* 卡片颜色 */
    --theme_card_color: rgb(255, 255, 255, 0.9);
    --theme_hover_color: rgb(255, 255, 255);
    --theme_text_color: rgb(0, 0, 0, 0.85);
}
</style>
