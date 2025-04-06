<script setup>
import { ref } from 'vue'

const selectedOption = ref('自习室') // 默认选中值

const options = ref([
  { value: 'classroom', label: '自习室' },
  { value: 'library', label: '图书馆' },
  { value: 'dorm', label: '宿舍' }
])
</script>

<template>
  <select 
    class="form-select form-select-sm mb-3" 
    v-model="selectedOption"
  >
    <option 
      v-for="option in options" 
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
  
  <div>当前选择：{{ selectedOption }}</div>
</template>



<style scoped></style>