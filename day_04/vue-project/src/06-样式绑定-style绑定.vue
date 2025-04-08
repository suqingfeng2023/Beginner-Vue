<script setup>
import { reactive, ref } from 'vue'
// 字体颜色
const colorStr = ref('red')
// 响应式样式对象
const styleObj = reactive({
  color: 'red',
  fontSize: '20px',
  backgroundColor: 'blue'
})
</script>

<template>
  <div>
    <p :style="{ color : colorStr }">style1</p>
    <p :style="styleObj">style2</p>
  </div>

</template>



<style scoped>

</style>