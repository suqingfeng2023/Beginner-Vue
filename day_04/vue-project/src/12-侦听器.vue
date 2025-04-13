<script setup>
import { reactive, ref } from 'vue'
import { watch } from 'vue'
// 搜索关键字
const Keyword = ref('')
// 监听搜索关键字变化
watch(Keyword, (newValue, oldValue) => {
  console.log('搜索关键字变化', newValue, oldValue)
})

// 监听对象
const obj = reactive({
  username: '',
  password: ''
})

watch(obj, (newValue, oldValue) => {
  console.log('监听对象变化', newValue, oldValue)
  console.log(newValue == oldValue)
  // newValue === oldValue 为true
})
</script>


<template>
  <div>
    <h3>搜索商品</h3>
    <input type="text" v-model="Keyword" placeholder="请输入搜索关键字" />
    <p>搜索关键字：{{ Keyword }}</p>
  </div>

  <hr>
  <hr>
  <div>
    <h3>监听对象</h3>
    <input type="text" v-model="obj.username" placeholder="请输入用户名" />
    <input type="password" v-model="obj.password" placeholder="请输入密码" />
    <p>用户名：{{ obj.username }}</p>
    <p>密码：{{ obj.password }}</p>
  </div>
</template>



<style scoped></style>