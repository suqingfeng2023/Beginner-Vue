<script setup>
const goodsList = [
  { id: '1', name: '商品A', price: 100, stock: 50 },
  { id: '2', name: '商品B', price: 200, stock: 30 },
  { id: '3', name: '商品C', price: 150, stock: 45 },
  { id: '4', name: '商品D', price: 300, stock: 20 }
]
</script>

<template>
  <h4 class="text-center">商品管理</h4>
  <table border style="width: 100%">
    <thead>
      <tr>
        <th>编号</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>库存</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in goodsList" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.stock }}</td>
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