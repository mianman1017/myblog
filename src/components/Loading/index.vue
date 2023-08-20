<template>
    <div ref="scroll" id="scroll-page" style="overflow: hidden">
        <slot></slot>
        <!--loading动画，加载的数据的过程中显示 elementui load-->
        <div
            style="height: 40px; margin-top: 10px; z-index: 1"
            v-loading="loading"
            element-loading-text="努力加载中(〃'▽'〃)"
            element-loading-background="rgba(245,245,245,0.8)"
        ></div>
    </div>
</template>

<script>
export default {
    props: {
        loading: Boolean,
        noData: Boolean,
        offset: Number,
    },
    name: 'index',
    mounted() {
        //绑定事件监听，滚动的时候触发
        window.addEventListener('scroll', this.handleScrollForTop, false);
        // 在DOM更新后执行相关代码
        this.$nextTick(() => {
            if (this.$refs.scroll) {
                this.handleScrollForTop();
            }
        });
    },
    beforeDestroy() {
        //移出事件监听
        window.removeEventListener('scroll', this.handleScrollForTop);
    },
    data() {
        return {};
    },
    methods: {
        handleScrollForTop(e) {
            var that = this;
            //
            if (!that.noData) {
                //如果有数据，触发
                const scrollHeight =
                    document.documentElement.scrollHeight ||
                    document.body.scrollHeight;
                const scrollTop =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                const windowHeight = window.innerHeight;
                // console.log(scrollTop, windowHeight, scrollHeight, this.offset);

                // 至于这里为什么要加3是我通过测试发现的，每次滑到底部总是少一点
                if (
                    scrollTop + windowHeight + this.offset + 3 >=
                        scrollHeight &&
                    that.$emit('isDownDirection')
                ) {
                    //判断是否到达底部
                    if (!that.loading) {
                        //调用load加载数据
                        that.$emit('load');
                    }
                }
            }
        },
    },
};
</script>

<style></style>
