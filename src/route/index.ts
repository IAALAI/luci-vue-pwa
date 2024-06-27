import { createRouter, createWebHashHistory } from 'vue-router'

import login from '@/views/login/login.vue'
import overview from '@/views/status/overview.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },

        {
            path: '/status/overview',
            name: 'overview',
            component: overview
        }, {
            path: '/status/firewall',
            name: 'firewall',
            component: () => import('@/views/status/firewall.vue'),
        }, {
            path: '/status/routes',
            name: 'routes',
            component: () => import('@/views/status/routes.vue'),
        }, {
            path: '/status/syslog',
            name: 'syslog',
            component: () => import('@/views/status/syslog.vue'),
        }
    ]
})

export default router