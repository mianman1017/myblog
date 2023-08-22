<template>
    <div id="building" ref="buildingRef"></div>
    <!-- <div class="header" onselectstart="return false">
        <Navbar ref="navbar" />
    </div> -->
    <div class="common-layout">
        <!-- 渲染路由匹配到的组件 -->
        <router-view />

        <!-- 回到顶部的组件 -->
        <GoTop></GoTop>
    </div>
</template>

<script>
import GoTop from '@/components/GoTop/index';
import Navbar from '@/components/Navbar/index';

export default {
    components: {
        GoTop,
        Navbar,
    },
    mounted() {
        let link = document.createElement('link');
        link.type = 'text/css';
        link.id = 'theme';
        link.rel = 'stylesheet';
        link.href = '../theme/light.css';
        document.getElementsByTagName('head')[0].appendChild(link);
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

@font-face {
    font-family: 'JetBrains Mono';
    src: url('../public/fonts/JetBrainsMono-Light.ttf');
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

html::-webkit-scrollbar {
    width: 8px;
    height: 7px;
    /**/
}
html::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
}
html::-webkit-scrollbar-thumb {
    background: linear-gradient(
        180deg,
        rgba(76, 155, 218, 0.7) 0%,
        rgba(162, 0, 255, 0.7) 36%,
        rgba(179, 0, 255, 0.7) 52%,
        rgba(230, 119, 163, 0.7) 76%
    );
    border-radius: 10px;
}
html::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
        180deg,
        rgba(76, 155, 218, 1) 0%,
        rgba(162, 0, 255, 1) 36%,
        rgba(179, 0, 255, 1) 52%,
        rgba(230, 119, 163, 1) 76%
    );
}
html::-webkit-scrollbar-corner {
    background: #179a16;
}
</style>
