<script setup>
  import{ ref } from 'vue'
  const isActive = ref(true)
</script>


<template>
  <div>
    <!-- 三元绑定 -->
    <p :class="isActive ? 'active' : ' ' ">Active</p>
    <!-- 对象绑定 -->
    <p :class="{ active: isActive }">Active</p>
    <!-- 静态class与动态class可以共存 -->
    <p class="item" :class="{ active: isActive }">Active</p>
  </div>
</template>


<style scoped>
  .active {
    color: red;
  }
  .item {
    color: blue;
  }
</style>