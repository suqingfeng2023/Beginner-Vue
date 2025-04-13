<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
// 商品列表(原始数据) 
const goodsList = ref([
  { id: 1, name: '篮球', num: 1 },
  { id: 2, name: '玩具', num: 3 },
  { id: 3, name: '书籍', num: 2 }
])
// 计算属性获得总数量
const total = computed(() => {
  console.log('total computed')
  return goodsList.value.reduce((prve, item) => prve + item.num, 0)
})

// 普通函数获得总数量
const calcTotal = () => {
  console.log('calcTotal')
  return goodsList.value.reduce((prve, item) => prve + item.num, 0)
}
</script>
<template>
  <h3>⽐特⼈的礼物清单</h3>
  <table>
    <thead>
      <tr>
        <th>名字</th>
        <th>数量</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in goodsList" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.num }}个</td>
      </tr>
    </tbody>
  </table>
  <!-- ⽬标：统计求和, 展⽰礼物总数 -->
  <p>礼物总数：{{ total }} 个</p>
  <p>礼物总数：{{ total }} 个</p>
  <p>礼物总数：{{ total }} 个</p>
  <hr>
  <p>礼物总数：{{ calcTotal() }} 个</p>
  <p>礼物总数：{{ calcTotal() }} 个</p>
  <p>礼物总数：{{ calcTotal() }} 个</p>
</template>
<style scoped>
table {
  width: 350px;
  border: 1px solid #333;
}

table th,
table td {
  border: 1px solid #333;
}

table td {
  text-align: center;
}
</style>
