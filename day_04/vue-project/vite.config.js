import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  css: {
    preprocessorOptions: {
      scss: {
        // 双保险配置（优先尝试 sass-embedded，失败时回退到 sass）
        implementation: (() => {
          try {
            return require('sass-embedded')
          } catch {
            return require('sass')
          }
        })()
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})