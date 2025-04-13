<script setup>
import { ref } from 'vue'
import { computed } from 'vue'

// const uname = computed(() => {
//   return '姬霓太美'
// })

const uname = computed({
  get() {
    return '姬霓太美'
  },
  set(newValue) {
    console.log(newValue)
  }
})
</script>
<!-- 计算属性的完整写法
  1. 需要更改计算属性的时候，需要更改计算属性的函数
  2. 默认的简易写法，计算属性是只读的，不能更改
  3. 需要用到计算属性的完整写法，get和set
-->

<template>
  <div>
    <input 
    type="text" 
    v-model="uname">
  </div>
</template>


<style scoped></style>