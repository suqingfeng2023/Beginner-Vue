<script setup>
import { ref } from 'vue'
import LifeCycle from './components/LifeCycle.vue'
const isAlive = ref(true)
</script>
<template>
  <life-cycle v-if="isAlive" />
</template>
