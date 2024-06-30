import { RouteRecordRaw } from "vue-router";
import overview from '@/views/status/overview.vue'

const nav_routes: RouteRecordRaw[] = [
    {
        path: '/status/overview',
        name: 'overview',
        meta: {
            label: '总览',
        },
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

export default nav_routes