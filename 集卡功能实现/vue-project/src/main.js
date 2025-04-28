import { createApp } from 'vue'
import { createPinia } from 'pinia'  // 导入 Pinia
import App from './App.vue'

// 创建 Vue 应用
const app = createApp(App)

// 创建 Pinia 实例并将其传递给 Vue 应用
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
