<script setup>
import { ref } from 'vue'
</script>
<template>
  <h3>可折叠⾯板</h3>
  <!-- 使用 MyPanel 组件 -->
   <MyPanel />

</template>
<style lang="scss">
body {
  background-color: #ccc;
}

#app {
  width: 400px;
  margin: 20px auto;
  padding: 1em 2em 2em;
  border: 4px solid green;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  background-color: #fff;
}

#app h3 {
  text-align: center;
  
}


</style>