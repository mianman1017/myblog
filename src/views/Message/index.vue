<template>
    <Navbar ref="navbar" />
    <div class="message-container">
        <div class="barrage">
            <span
                v-for="item in messagelist"
                :key="item.id"
                :style="{ top: item.top, right: item.right }"
                class="barrage-item"
                >{{ item.content }}</span
            >
        </div>
        <div
            style="display: flex; justify-content: center; align-items: center"
        >
            <div class="msg-input-card">
                <div class="msg-header">留言框</div>
                <div style="text-align: center">
                    <el-input
                        v-model="message"
                        placeholder="请输入留言"
                        class="msg-input"
                        @keyup.enter="addMessage"
                    ></el-input>
                    <el-button
                        type="primary"
                        class="msg-btn"
                        @click="addMessage"
                    >
                        提交
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar/index';
export default {
    data() {
        return {
            message: '',
            messagelist: [],
            noData: false,
        };
    },
    components: { Navbar },
    methods: {
        getMessage() {
            this.axios
                .post('http://localhost:8000/messagelist/get/')
                .then((res) => {
                    //Result(success,msg,data)
                    // console.log(id);
                    if (res.data.success) {
                        // console.log(res.data);
                        if (res.data.data.length <= 0) {
                            this.noData = true;
                        } else {
                            this.messagelist = res.data.data;
                        }
                    }
                })
                .catch((err) => {
                    // this.$message.error('文章加载失败');
                })
                .finally(() => {});
        },
        addMessage() {
            const params = new URLSearchParams();
            params.append('top', Math.floor(Math.random() * 70) + 'vh');
            params.append('right', Math.floor(Math.random() * 70) + 'vw');
            params.append('message', this.message);
            if (this.message) {
                this.axios
                    .post('http://localhost:8000/message/add/', params)
                    .then((res) => {
                        //Result(success,msg,data)
                        // console.log(id);
                        if (res.data.success) {
                            console.log(res.data);
                        }
                    })
                    .catch((err) => {
                        // this.$message.error('文章加载失败');
                    })
                    .finally(() => {
                        this.message = '';
                        this.getMessage();
                    });
            }
            // this.message = '';
            // this.getMessage();
        },
    },
    mounted() {
        this.getMessage();
    },
};
</script>

<style>
.message-container {
    padding-top: 90px;
}

.barrage {
    position: relative;
    height: calc(100vh - 90px);
    overflow: hidden;
}

.barrage-item {
    z-index: 100;
    font-family: '华康手札体W5P';
    position: relative;
    background-color: #e671e0;
    border-radius: 1rem;
    padding: 5px 10px 5px 10px;
    white-space: nowrap;
    animation: barrageMove 15s linear infinite;
}

.msg-input-card {
    font-family: '华康手札体W5P';
    position: absolute;
    top: 42%;
    width: 400px;
    height: 130px;
    color: var(--text_color);
    background-color: var(--card_color);
    margin-left: 7px;
    text-align: center;
    border: solid 1.5px var(--border_color);
    opacity: 0.5;
    transition: opacity 0.3s;
}

.msg-input-card:hover {
    opacity: 1;
}

.msg-header {
    font-weight: 600;
    font-size: 20px;
    padding: 5px;
    border-bottom: solid 2px var(--text_color);
    margin-bottom: 20px;
}

.msg-input {
    border: solid 1px var(--border_color);
    border-radius: 0.1rem;
    width: 60%;
    margin-right: 10px;
}

.msg-input .el-input__wrapper {
    border-radius: 0;
    border: 0;
    background-color: var(--card_color);
}

.msg-input .el-input__inner {
    color: var(--text_color);
}

.msg-btn {
    position: relative;
    width: 55px;
    border-radius: 0.1rem;
    border: solid 1.5px var(--border_color);
    color: var(--text_color);
    background-color: rgb(133, 99, 252);
    cursor: pointer;
    top: 0.3px;
    height: 33.7px;
}

.msg-btn:hover {
    border-radius: 0.1rem;
    color: var(--text_color);
    background-color: rgb(168, 148, 240);
    border: solid 1.5px var(--border_color);
}

@keyframes barrageMove {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}
</style>
