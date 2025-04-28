<script setup>
import { ref } from 'vue'
import  mitt  from 'mitt'
import MyLeft from './components/MyLeft.vue'
import MyRight from './components/MyRight.vue'
// 创建中间值
const meipo = mitt()
</script>

<template>
  <div class="container">
    <MyLeft />
    <MyRight />
  </div>
</template>



<style scoped>
 .container {
 display: flex;
 }
 </style>