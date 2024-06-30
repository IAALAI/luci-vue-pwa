import { RouteRecordRaw } from "vue-router";
import nav_routes from "@/route/nav_route"
import { navList } from "./navList";
import { navItem } from "./navItem";

export let nav_list_info: navList[] = [
    {
        label: '状态',
        icon: 'mdi-home-outline',
        path: 'status'
    },   {
        label: '系统',
        icon: 'mdi-cog-outline',
        path: 'system'
    },{
        label: '服务',
        icon: 'mdi-server-outline',
        path: 'service'
    },{
        label: '网络',
        icon: 'mdi-network-outline',
        path: 'network'
    }, {
        label: '储存',
        icon: 'mdi-database-outline',
        path: 'storage'
    },{
        label: '代理',
        icon: 'mdi-web',
        path: 'proxy'
    }
]

export let nav_item_info: { [key: string]: navItem[] } = {}

for (let route of nav_routes) {
    const [nul, category, name] = route.path.split('/')
    if (!nav_item_info[category]) {
        nav_item_info[category] = []
    }
    nav_item_info[category].push({
        label: <string>route.meta?.label,
        icon: <string>route.meta?.icon,
        path: route.path
    })
}