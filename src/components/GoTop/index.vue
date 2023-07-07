<template>
    <Transition>
        <el-backtop v-if="needToTop" :right="100" :bottom="100" />
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

<style></style>
