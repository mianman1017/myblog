import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as Icons from '@element-plus/icons-vue'; // 引入所有图标，并命名为 Icons

const app = createApp(App);

// 自定义指令
app.directive('title', {
    mounted(el, binding) {
        document.title = el.dataset.title;
    },
});

app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(VueAxios, axios);

// 通过遍历的方式注册所有 svg组件，会牺牲一点点性能
for (let i in Icons) {
    app.component(i, Icons[i]);
}

app.mount('#app');
