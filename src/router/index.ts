import {createRouter, createWebHashHistory} from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'neco',
            redirect: '/lobby',
            component: () => import('../views/Home.vue'),
            children: [
                {
                    path: '/lobby',
                    name: 'lobby',
                    component: () => import('../views/Lobby/Lobby.vue'),
                    meta: {title: 'NMO'}
                },
                {
                    path: '/list',
                    name: 'list',
                    component: () => import('../views/List/List.vue'),
                    meta: {title: '服务器列表'}
                },
                {
                    path: '/news',
                    name: 'news',
                    component: () => import('../views/News/News.vue'),
                    meta: {title: '新闻'},
                    children: [
                        {
                            path: '/news/activity',
                            name: 'activity',
                            component: () => import('../views/News/Activities.vue'),
                            meta: {title: '活动'}
                        },
                        {
                            path: '/news/journal',
                            name: 'journal',
                            component: () => import('../views/News/Journals.vue'),
                            meta: {title: '社刊'}
                        }
                    ]
                },
                {
                    path: '/links',
                    name: 'links',
                    component: () => import('../views/Links/Links.vue'),
                    meta: {title: '导航'}
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('../views/About/About.vue'),
                    meta: {title: '关于'}
                }
            ]            
        },{
            path: '/404',
            name: 'NotFound',
            component: () => import('../views/NotFound.vue')
        },{
            path: '/:catchAll(.*)*',
            redirect: '/404'
        }
    ]
})

router.beforeEach((to, _, next) => {
    if (to.meta.title) {
        document.title = String(to.meta.title)
    }

    next()
})

export {router}