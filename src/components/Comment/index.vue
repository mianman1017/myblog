<template>
    <el-card class="comment-card">
        <div class="header">
            <el-icon style="position: relative; top: 6px; left: -2px"
                ><ChatLineRound
            /></el-icon>
            <span style="font-size: 25px; font-weight: 600">评论</span>
        </div>
        <div class="pull">
            <span class="comment-avatar"></span>
            <el-input
                v-model="content"
                placeholder="说点什么吧..."
                class="comment-input"
                @keyup.enter="addComment"
            ></el-input>
            <el-button type="primary" class="comment-btn" @click="addComment">
                提交
            </el-button>
        </div>
        <div class="content" v-for="comment in comments" :key="comment.id">
            <el-row>
                <el-col :span="1">
                    <span class="comment-avatar"></span>
                </el-col>
                <el-col :span="23">
                    <div style="position: relative; left: 10px">
                        <span style="font-weight: 600">游客</span>
                        <div>{{ comment.content }}</div>
                        <div>{{ comment.createTime }}</div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </el-card>
</template>

<script>
import { ElMessage } from 'element-plus';

export default {
    data() {
        return {
            content: '',
        };
    },
    props: {
        id: Number,
        comments: Array,
    },
    methods: {
        addComment() {
            const params = new URLSearchParams();
            params.append('id', this.id);
            params.append('content', this.content);
            console.log(this.content);
            if (this.content) {
                if (this.content.length < 100) {
                    this.axios
                        .post(
                            'http://111.229.204.126:8000/comment/add/',
                            params
                        )
                        .then((res) => {
                            //Result(success,msg,data)
                            if (res.data.success) {
                                //console.log(res.data.data.length);
                                // console.log(this.articles.length);
                                // console.log(res.data.data);
                                this.$emit('getComment');
                                this.content = '';
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
                } else {
                    ElMessage({
                        message: '输入内容不能超过100个字符',
                        type: 'warning',
                    });
                }
            } else {
                ElMessage({
                    message: '输入内容不能为空',
                    type: 'warning',
                });
            }
        },
    },
    mounted() {
        console.log(this.comments);
    },
};
</script>

<style>
.comment-card {
    width: 82%;
    font-family: '华康手札体W5P';
    background-color: var(--card_color);
    color: var(--text_color);
    transition: background-color 0s;
    padding: 0px 20px 0px 20px;
    float: right;
    margin-right: 25px;
}

.comment-card .header {
    position: relative;
    font-size: 30px;
    left: -5px;
    border-bottom: solid 2px var(--pink_color);
}

.comment-card .pull {
    position: relative;
    top: -10px;
}

.comment-card .pull .comment-avatar {
    width: 53px;
    height: 53px;
    top: 22px;
    left: -10px;
}

.comment-input {
    border: solid 1px var(--border_color);
    border-radius: 0.1rem;
    width: 70%;
    margin-right: 10px;
    height: 40px;
}

.comment-input .el-input__wrapper {
    border-radius: 0;
    border: 0;
    background-color: var(--card_color);
}

.comment-input .el-input__inner {
    color: var(--text_color);
    font-size: 17px;
}

.comment-btn {
    position: relative;
    width: 55px;
    border-radius: 0.1rem;
    border: solid 1.5px var(--border_color);
    color: var(--text_color);
    background-color: #6399fc;
    cursor: pointer;
    top: 0.4px;
    height: 40px;
}

.comment-btn:hover {
    border-radius: 0.1rem;
    color: var(--text_color);
    background-color: rgb(146, 177, 235);
    border: solid 1.5px var(--border_color);
}

.comment-card .comment-avatar {
    position: relative;
    background: url('@/assets/imgs/default.png') no-repeat;
    background-size: contain;
    width: 42px;
    height: 42px;
    display: inline-block;
    filter: invert(var(--latex_color));
    left: -7px;
    top: 3px;
}

.comment-card .content {
    font-size: 14.5px;
    margin-top: 7px;
    border-bottom: solid 0.5px var(--border_color);
}
</style>
