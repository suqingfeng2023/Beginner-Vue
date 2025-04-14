import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 导入MyPanel组件
import MyPanel from './components/MyPanel.vue'
// 创建应用并指定渲染的位置
const app = createApp(App)

// 全局注册MyPanel组件
app.component('MyPanel', MyPanel)

app.mount('#app')
