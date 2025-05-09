<script setup>
const menus = [
  { id: '1', name: '首页', path: '/home', icon: 'home' },
  { id: '2', name: '用户管理', path: '/home/users', icon: 'user' },
  { id: '3', name: '商品管理', path: '/home/goods', icon: 'shopping' },
  { id: '4', name: '订单管理', path: '/home/orders', icon: 'order' }
]
</script>

<template>
  <h4 class="text-center">菜单管理</h4>
  <table border style="width: 100%">
    <thead>
      <tr>
        <th>菜单ID</th>
        <th>菜单名称</th>
        <th>路径</th>
        <th>图标</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="menu in menus" :key="menu.id">
        <td>{{ menu.id }}</td>
        <td>{{ menu.name }}</td>
        <td>{{ menu.path }}</td>
        <td>{{ menu.icon }}</td>
        <td>
          <button class="btn">编辑</button>
          <button class="btn">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.btn {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>