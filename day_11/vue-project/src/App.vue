<script setup>
import Add from '@/components/Add.vue'
import Sub from '@/components/Sub.vue'
import { useStockStore } from '@/store/store.js'

const stockStore = useStockStore()
</script>
<template>
  <div>
    <h1>根组件</h1>
    <p>
      <span>库存总数: </span>
      <input type="number" v-model="stockStore.stock"/>
    </p>
    <p>stock 的翻倍值 = {{ stockStore.doubleStock }}</p>
  </div>
  <hr />
  <Add />
  <hr />
  <Sub />
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>