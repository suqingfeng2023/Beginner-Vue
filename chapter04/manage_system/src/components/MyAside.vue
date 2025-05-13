<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const navItems = [
  { path: '/home/add-food', name: '添加食品' },
  { path: '/home/food-list', name: '食品展示' },
  { path: '/home/user-info', name: '用户信息' }
]

const navigate = (path) => {
  router.push(path)
}
</script>

<template>
  <div class="aside-container">
    <div v-for="item in navItems" :key="item.path" class="nav-item" :class="{ active: $route.path === item.path }"
      @click="navigate(item.path)">
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped>
.aside-container {
  width: 200px;
  background-color: #2c3e50;
  color: white;
  height: 100%;
  padding: 20px 0;
}

.nav-item {
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.nav-item:hover {
  background-color: #34495e;
}

.nav-item.active {
  background-color: #5f9ea0;
  font-weight: bold;
}
</style>