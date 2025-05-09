<script setup>
const roles = [
  { id: '1', name: '管理员', description: '拥有所有权限' },
  { id: '2', name: '编辑', description: '可编辑内容' },
  { id: '3', name: '运营', description: '可管理订单和商品' },
  { id: '4', name: '客服', description: '可处理客户问题' }
]
</script>

<template>
  <h4 class="text-center">权限管理</h4>
  <table border style="width: 100%">
    <thead>
      <tr>
        <th>角色ID</th>
        <th>角色名称</th>
        <th>描述</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="role in roles" :key="role.id">
        <td>{{ role.id }}</td>
        <td>{{ role.name }}</td>
        <td>{{ role.description }}</td>
        <td>
          <button class="btn">分配权限</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.btn {
  padding: 5px 10px;
  cursor: pointer;
}
</style>