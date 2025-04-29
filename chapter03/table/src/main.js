import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 创建 Vue 应用实例
const app = createApp(App)

app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

// 挂载应用
app.mount('#app')