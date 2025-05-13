import { RouterView, createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/layout/home.vue'
import foods from '../views/foods/FoodList.vue'
import addFood from '../views/addfood/AddFood.vue'
import user from '../views/user/UserInfo.vue'
import FoodDetail from '../views/foods/FoodDetail.vue'
import index from '../views/index/index.vue'
import UpdatePassword from '../views/user/UpdatePassword.vue'

const router = createRouter({
    history: createWebHistory(), //hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            component: Layout, //主页
            redirect: '/login', //重定向到login
            children: [ //子路由
                { path: '/index', component: index}, // 首页
                { path: '/foods', component: foods }, //食物列表
                { path: '/foods/:id', component: FoodDetail }, //食品详情页
                { path: '/addFood', component: addFood }, //新增食物
                { path: '/user', component: user }, //用户信息
                { path: '/UpdatePassword', component: UpdatePassword } //修改密码
            ]
        },
        {
            path: '/login',
            component: () => import('../views/login/Login.vue') //登录页
        }
    ]

})


export default router