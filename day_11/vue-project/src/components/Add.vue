<script setup>
  import { useStockStore } from '@/store/store.js';

  // 创建仓库
  const stockStore = useStockStore();
</script>

<template>
    <div>
        <h3>Add组件</h3>
        <p>已知库存数: {{ stockStore.stock }}</p>
        <button @click="stockStore.addStock">库存+1</button>
    </div>
</template>

<style scoped></style>
