import { RouteRecord, RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

import none from '@/views/none.vue'
import nav_routes from './nav_route'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: '',
            component: none
        },
        ...nav_routes
    ]
})

export default router