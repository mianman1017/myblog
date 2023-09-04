<template>
    <el-card class="postitem-card">
        <el-row>
            <el-col :span="1">
                <el-avatar :src="avatar" :size="55" draggable="false" />
            </el-col>
            <el-col :span="23">
                <div class="postitem-name">
                    {{ name }}
                    <span class="postitem-certified"></span>
                </div>
                <div class="postitem-time">{{ createTime }}</div>
            </el-col>
        </el-row>
        <el-row>
            <div class="postitem-content">{{ content }}</div>
        </el-row>
        <el-row style="margin-left: 4px">
            <div
                v-for="(img, index) in imgs"
                :key="index"
                class="postitem-imgs"
            >
                <el-image
                    style="width: 160px; height: 130px"
                    :zoom-rate="1.2"
                    :preview-src-list="this.srcList"
                    :initial-index="index"
                    :src="img"
                />
            </div>
        </el-row>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            srcList: [],
        };
    },
    props: {
        avatar: String,
        name: String,
        content: String,
        createTime: String,
        imgs: Array,
    },
    mounted() {
        // console.log(this.content);
        this.srcList = this.imgs;
        // console.log(this.srcList);
    },
};
</script>

<style>
.postitem-card {
    font-family: '华康手札体W5P';
    width: 95%;
    height: fit-content;
    min-width: 470px;
    background-color: var(--card_color);
    color: var(--text_color);
    border: solid 1.5px var(--border_color);
    margin: auto;
    transition: width 0s;
    transition: background-color 0.3s, border-color 0.3s;
}

.postitem-name {
    position: relative;
    top: 5px;
    font-weight: 600;
    font-size: 17px;
    text-indent: 45px;
}

.postitem-certified {
    position: relative;
    background: url('@/assets/imgs/certified.png') no-repeat;
    background-size: contain;
    width: 18px;
    height: 18px;
    top: 3.7px;
    left: -2.5px;
    display: inline-block;
}

.postitem-time {
    position: relative;
    top: 3px;
    text-indent: 45px;
}

.postitem-content {
    text-indent: 7px;
    margin-bottom: 5px;
}

.postitem-imgs {
    margin-left: 3px;
}
</style>
