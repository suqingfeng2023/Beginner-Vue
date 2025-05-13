/* 导入路由 */
import { createRouter, createWebHistory } from 'vue-router'
/* 导入组件 */


/* 路由配置 */
const router = createRouter({
    history: createWebHistory('/'),  // 明确基础路径
    routes: [
      {
        path: '/',
        redirect: '/find' 
      },
      {
        path: '/find',
        name: 'Find',
        component: () => import('@/views/Find.vue')  // 懒加载
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('@/views/My.vue')
      },
      {
        path: '/friend',
        name: 'Friend',
        component: () => import('@/views/Friend.vue')
      },
      {
        path: '/:pathMatch(.*)*',  // 捕获所有未匹配的路由
        name: 'NotFound',
        component: () => import('@/views/404.vue')
      }
    ]
  })
/* 导出路由 */
export default router