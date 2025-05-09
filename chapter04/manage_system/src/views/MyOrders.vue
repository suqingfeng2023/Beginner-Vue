<script setup>
const orders = [
  { id: '1001', customer: '张三', amount: 350, status: '已支付' },
  { id: '1002', customer: '李四', amount: 200, status: '待发货' },
  { id: '1003', customer: '王五', amount: 500, status: '已完成' },
  { id: '1004', customer: '赵六', amount: 150, status: '已取消' }
]
</script>

<template>
  <h4 class="text-center">订单管理</h4>
  <table border style="width: 100%">
    <thead>
      <tr>
        <th>订单号</th>
        <th>客户</th>
        <th>金额</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ order.customer }}</td>
        <td>{{ order.amount }}</td>
        <td>{{ order.status }}</td>
        <td>
          <button class="btn">详情</button>
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