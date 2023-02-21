import { createRouter, createWebHashHistory } from "vue-router"

const routes = [        //路由配置，配置路由路径与组件的对应关系
    {
        path: '/home',
        name: 'home',
        component: () => import('../components/pages/MainWindow/MainWindow'),
        children:[
            {
                path:'index',
                name:'index',
                component: () => import('../components/pages/MainWindow/Index/Index'),
            },
            {
                path:'manage',
                name:'manage',
                component: () => import('../components/pages/MainWindow/Manage/Manage'),
            },
            {
                path:'my',
                name:'my',
                component: () => import('../components/pages/MainWindow/My/My'),
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/pages/Login/Login')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../components/pages/Register/Register')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})


export default router;         //导出路由实例，在main.js中导入使用