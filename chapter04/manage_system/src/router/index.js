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
            redirect: '/home/food-list',
            children: [
                {
                    path: 'add-food',
                    component: () => import('../views/AddFood.vue')
                },
                {
                    path: 'food-list',
                    component: () => import('../views/FoodList.vue')
                },
                {
                    path: 'food-detail/:id',
                    component: () => import('../views/FoodDetail.vue'),
                    props: true
                },
                {
                    path: 'user-info',
                    component: () => import('../views/UserInfo.vue')
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