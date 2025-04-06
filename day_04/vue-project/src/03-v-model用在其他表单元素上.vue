<script setup>
import { ref } from 'vue'
const msg = ref('')
const msg2 = ref('0')
const msg3 = ref('a')
const msg4 = ref([])
</script>

<template>
  <div>
    <textarea  cols="30px" rows="10px" placeholder="请输入内容" v-model="msg">

    </textarea>

    <br>
    <br>
    <select name="" id="" v-model="msg2">
      <option value="0">请选择</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <br>
    <br>
    <!-- 单选框 -->
     <input type="radio" value="a" v-model="msg3">A 
     <input type="radio" value="b" v-model="msg3">B
     <input type="radio" value="c" v-model="msg3">C
     <input type="radio" value="d" v-model="msg3">D
     <input type="radio" value="e" v-model="msg3">E

     <br>
     <!-- 多选框 -->
     <input type="checkbox" value="a" v-model="msg4">A
     <input type="checkbox" value="b" v-model="msg4">B
     <input type="checkbox" value="c" v-model="msg4">C
     <input type="checkbox" value="d" v-model="msg4">D
  </div>
</template>



<style scoped></style>