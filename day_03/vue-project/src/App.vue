<!-- v-show 指令示例 -->

<template>
  <div>
    <h1>v-show 指令示例</h1>
    <p v-show="showMessage">这是一个显示的消息。</p>
    <p v-show="!showMessage">这是一个隐藏的消息。</p>
    <button @click="toggleMessage">切换消息</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 定义响应式变量
const showMessage = ref(true);

// 定义切换方法
const toggleMessage = () => {
  showMessage.value = !showMessage.value;
};
</script>

<style scoped>
div {
  text-align: center;
}

h1 {
  color: white;
}

p {
  font-size: 20px;
  margin: 20px;
}

button {
  padding: 10px;
  font-size: 16px;
  color: black;
  background-color: #dcd85b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style>