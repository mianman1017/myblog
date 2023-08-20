<template>
    <Transition>
        <el-backtop class="backtotop" v-if="needToTop" :right="100" :bottom="50"
            ><el-icon class="top-icon"><Position /></el-icon
        ></el-backtop>
    </Transition>
</template>

<script>
export default {
    name: 'GoTop',
    data() {
        return {};
    },
    methods: {
        needToTop() {
            let curHeight =
                document.documentElement.scrollTop || document.body.scrollTop;
            if (curHeight > 400) {
                return true;
            } else {
                return false;
            }
        },
    },
    mounted() {
        // 获取this更新之后的dom
        this.$nextTick(function () {
            window.addEventListener('scroll', this.needToTop);
        });
    },
};
</script>

<style>
.backtotop {
    color: hotpink !important;
    border: solid 1.5px var(--border_color) !important;
    background-color: var(--card_color) !important;
}

.top-icon {
    width: 100% !important;
    height: 100% !important;
}
.top-icon svg {
    position: relative;
    left: -1.5px;
    top: 2px;
    width: 60% !important;
    height: 60% !important;
}
</style>
