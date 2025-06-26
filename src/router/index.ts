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
                    meta: {title: 'Lobby'}
                }
            ]            
        }
    ]
})


export {router}