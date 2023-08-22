<template>
    <Navbar ref="navbar" />
    <div class="personal-container">
        <el-card class="personal-card"> </el-card>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar/index';

export default {
    data() {
        return {};
    },
    components: {
        Navbar,
    },
};
</script>

<style>
.personal-container {
    padding-top: 90px;
}
.personal-card {
    width: 60%;
    margin: auto;
    background: var(--card_color);
    padding-top: 30px;
    margin-bottom: 30px;
    min-width: 620px;
    border: solid 1.5px var(--border_color);
}
</style>
