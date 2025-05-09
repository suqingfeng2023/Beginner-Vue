<script setup>
const settings = [
  { name: '系统名称', value: '商城后台管理系统', editable: false },
  { name: 'Logo', value: 'logo.png', editable: true },
  { name: '备案号', value: 'ICP备12345678号', editable: true },
  { name: '客服电话', value: '400-123-4567', editable: true }
]
</script>

<template>
  <h4 class="text-center">系统设置</h4>
  <table border style="width: 100%">
    <thead>
      <tr>
        <th>设置项</th>
        <th>当前值</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(setting, index) in settings" :key="index">
        <td>{{ setting.name }}</td>
        <td>{{ setting.value }}</td>
        <td>
          <button class="btn" v-if="setting.editable">修改</button>
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