<script setup>
import MyForm from './components/MyForm.vue'
import { ref } from 'vue'
// 获取MyForm组件的实例
const FormRef = ref(null)

const onLogin = () => {
  // 调用MyForm组件的validate方法
  const result = FormRef.value.validate()
  if (result) {
    alert('登录成功')
  } else {
    alert('登录失败')
  }
}
</script>
<template>
  <MyForm ref="FormRef"/>
  <button @click="onLogin">登 录</button>
</template>
<style>
#app {
  width: 300px;
  margin: 100px auto;
}
</style>
