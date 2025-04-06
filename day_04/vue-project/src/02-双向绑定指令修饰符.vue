<script setup>
import { reactive } from 'vue';
const goods = reactive([
  { id: 1, 
    name: '', 
    price: ''
  }
]);
</script>
<template>
  <div>
    <!-- .lazy  懒加载 -->
    <!-- .trim 去除首尾空格 -->
    <!-- .number 转换为数字 -->
    名称：<input type="text" v-model.lazy="goods[0].name" />
    <!-- 价格：<input type="text" v-model.trim="goods[0].price" /> -->
    价格：<input type="text" v-model.number="goods[0].price" />
    
  </div>
</template>



<style scoped></style>