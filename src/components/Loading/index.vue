<template>
    <div ref="scroll" id="scroll-page" style="overflow: hidden">
        <slot></slot>
        <!--loading动画，加载的数据的过程中显示 elementui load-->
        <div
            style="height: 100px; z-index: 1"
            v-loading="true"
            element-loading-text="努力加载中(〃'▽'〃)"
            element-loading-background="rgba(245,245,245,0)"
        ></div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {},
};
</script>

<style>
.el-loading-spinner {
    top: 20px;
}

@media screen and (max-width: 768px) {
    .el-loading-spinner {
        top: 35px;
    }
}
</style>
