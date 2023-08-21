import { createStore } from 'vuex';

export default createStore({
    state: {
        currentTheme: true, // 当前主题,true代表白天，false代表黑夜
    },
    getters: {
        currentTheme: (state) => state.currentTheme,
    },
    mutations: {
        // 定义一个mutation来更新开关状态
        toggleTheme(state) {
            state.currentTheme = !state.currentTheme;
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
