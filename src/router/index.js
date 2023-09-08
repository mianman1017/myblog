import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: HomeView
    // },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // },
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Home/index.vue'),
    },
    {
        path: '/timeline',
        name: 'TimeLine',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/TimeLine/index.vue'
            ),
    },
    {
        path: '/post',
        name: 'Post',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Post/index.vue'),
    },
    {
        path: '/friends',
        name: 'Friends',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/Friends/index.vue'
            ),
    },
    {
        path: '/message',
        name: 'Message',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/Message/index.vue'
            ),
    },
    {
        path: '/view/:title',
        name: 'View',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/Article/index.vue'
            ),
    },
    {
        path: '/tags/:tag',
        name: 'Tag',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Tag/index.vue'),
    },
    {
        path: '/search/:input',
        name: 'Search',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Search/index.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
