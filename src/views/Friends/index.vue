<template>
    <Loading v-if="loading" />
    <Navbar />
    <div class="friends-container">
        <el-row>
            <el-col :xs="24" :sm="16" :md="16">
                <el-card class="friends-card">
                    <el-row>
                        <div>
                            <el-col v-for="friend in friends" :key="friend.id">
                                <div
                                    class="link-card"
                                    @click="open('https://' + friend.link)"
                                >
                                    <el-row>
                                        <el-col :span="10">
                                            <el-avatar
                                                :src="friend.img"
                                                :size="50"
                                                draggable="false"
                                            />
                                        </el-col>
                                        <el-col :span="14">
                                            <div style="font-weight: 600">
                                                {{ friend.name }}
                                            </div>
                                            <div style="font-size: 14px">
                                                {{ friend.intro }}
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </div>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :xs="0" :sm="8" :md="8">
                <el-card class="friends-intro">
                    <div class="header">友链申请</div>
                    <el-input
                        v-model="input1"
                        placeholder="name of your web..."
                    >
                        <template #prepend>网站名称</template>
                    </el-input>
                    <el-input v-model="input2" placeholder="url of your web...">
                        <template #prepend>网站地址</template>
                    </el-input>
                    <el-input
                        v-model="input3"
                        placeholder="intro of yout web..."
                    >
                        <template #prepend>网站介绍</template>
                    </el-input>
                    <el-input v-model="input4" placeholder="url of your img...">
                        <template #prepend>展示图片</template>
                    </el-input>
                    <el-button
                        type="primary"
                        class="commit-btn"
                        @click="search"
                    >
                        提交
                    </el-button>
                    <div class="header">本站信息</div>
                    <el-input value="绵满の博客" disabled>
                        <template #prepend>网站名称</template>
                    </el-input>
                    <el-input value="..." disabled>
                        <template #prepend>网站地址</template>
                    </el-input>
                    <el-input value="欢迎来到绵满在互联网上的小窝~" disabled>
                        <template #prepend>网站介绍</template>
                    </el-input>
                    <el-input value="..." disabled>
                        <template #prepend>展示图片</template>
                    </el-input>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar/index';
import Loading from '@/components/Loading/index';

export default {
    data() {
        return {
            friends: [],
            noData: false,
            intro: '',
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            loading: true,
        };
    },
    components: {
        Navbar,
        Loading,
    },
    methods: {
        load() {
            // 触发分页，调用接口加载文章列表
            // const params = new URLSearchParams();
            // params.append('offset', this.offset);
            this.axios
                .post('http://111.229.204.126:8000/friendlist/get/')
                .then((res) => {
                    //Result(success,msg,data)
                    if (res.data.success) {
                        // console.log(res.data.data);
                        if (res.data.data.length <= 0) {
                            this.noData = true;
                        } else {
                            this.friends = res.data.data;
                            // console.log(this.friends);
                            // this.offset += 7;
                        }
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
                .catch((err) => {
                    // this.$message.error('文章加载失败');
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        open(url) {
            window.open(url);
        },
    },
    mounted() {
        this.load();
    },
};
</script>

<style>
.el-card {
    border: solid 1.5px var(--border_color);
}

.friends-container {
    padding-top: 90px;
}

.friends-card {
    width: 82%;
    font-family: '华康手札体W5P';
    background-color: var(--bg_color);
    color: var(--text_color);
    transition: background-color 0s;
    padding: 0px 20px 0px 20px;
    float: right;
    margin-right: 25px;
}

.link-card {
    padding: 10px;
    cursor: pointer;
    width: 100%;
    height: 50px;
    border-radius: 3px;
    background: var(--card_color);
    border: solid 1.5px var(--border_color);
}

.link-card:hover {
    background-color: var(--bg_color);
}

.link-card .link {
    color: var(--pink_color);
    text-decoration: none;
    line-height: 50px;
    padding-left: 10px;
    padding-right: 10px;
}

.friends-intro {
    width: 75%;
    position: sticky;
    top: 1rem;
    font-family: '华康手札体W5P';
    background-color: var(--bg_color);
    color: var(--text_color);
    transition: background-color 0s;
}

.friends-intro .header {
    font-size: 25px;
    font-weight: 600;
    border-bottom: solid 2px var(--border_color);
    margin-bottom: 10px;
}

.friends-intro .el-input {
    margin-bottom: 5px;
}

.friends-intro .el-input .el-input__wrapper {
    background-color: var(--card_color);
}

.friends-intro .el-input .el-input__inner {
    background-color: var(--card_color);
}

.commit-btn {
    position: relative;
    border-radius: 0.1rem;
    border: solid 1px var(--border_color);
    color: var(--text_color);
    background-color: #6399fc;
    cursor: pointer;
    width: 60px;
    height: 35px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.commit-btn:hover {
    border-radius: 0.1rem;
    color: var(--text_color);
    background-color: rgb(146, 177, 235);
    border: solid 1.5px var(--border_color);
}

@media screen and (max-width: 768px) {
    .friends-card {
        margin-right: 4.5%;
    }
}
</style>
