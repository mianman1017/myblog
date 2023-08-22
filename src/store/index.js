import { createStore } from 'vuex';

export default createStore({
    state: {
        theme: true, // 当前主题,true代表白天，false代表黑夜
        login: false, // 当前是否登录
    },
    getters: {
        theme: (state) => state.theme,
    },
    mutations: {
        // 定义一个mutation来更新开关状态
        toggleTheme(state) {
            state.theme = !state.theme;
        },
    },
    actions: {
        // 定义一个action来触发mutation更新开关状态
        toggleTheme({ commit }) {
            commit('toggleTheme');
        },
    },
    modules: {},
});
