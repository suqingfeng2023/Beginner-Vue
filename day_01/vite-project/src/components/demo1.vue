<template>
    <div id="app">
      <h2>{{ message }}</h2>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const message = ref('莫听穿林打叶声，何妨吟啸且徐行。');

        setTimeout(() => {
        message.value = '—— 苏轼';
      }, 2000);
  
      return {
        message,
      };
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: blue;
    font-family: "微软雅黑";
    text-align: center;
  }
  </style>