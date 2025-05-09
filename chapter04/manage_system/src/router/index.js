import { RouterView, createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/home',
            component: () => import('../views/Home.vue'),
            redirect: '/home/users',
            children: [
                {
                    path: 'users',
                    component: { render: () => h(RouterView) },
                    children: [
                        {
                            path: '',
                            component: () => import('../views/MyUsers.vue')
                        },
                        {
                            path: ':id',
                            name: 'details',
                            component: () => import('../views/user/MyUserDetail.vue'),
                            props: true
                        }
                    ]
                },
                {
                    path: 'rights',
                    component: () => import('../views/MyRights.vue')
                },
                {
                    path: 'goods',
                    component: () => import('../views/MyGoods.vue')
                },
                {
                    path: 'orders',
                    component: () => import('../views/MyOrders.vue')
                },
                {
                    path: 'settings',
                    component: () => import('../views/MySettings.vue')
                },
                {
                    path: 'menu',
                    component: () => import('../views/MyMenu.vue')
                }
            ]

        }
    ]
})

/* 路由守卫 */
routes.beforeEach((to, from, next) => {
    // 访问登录时
    if (to.path === '/login') {
        return next()
    }
    const token = localStorage.getItem('token')
    // 如果没有token，跳转到登录页
    if (!token) {
        return next('/login')
    }

    // 如果有token，放行
    next()
})

export default routes