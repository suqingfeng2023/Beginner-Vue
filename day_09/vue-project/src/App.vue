<script setup>
import MyDialog from './components/MyDialog.vue'
</script>

<template>
  <!-- 2. 在使用组件时候，给组件传入想展示的结构 -->
  <MyDialog>
    <template v-slot:header> 
      <h3>友情提示</h3>
    </template>
    <template v-slot:body> 
      <p>你确定要删除吗？</p>
    </template>
  </MyDialog>
  <MyDialog>
    <template v-slot:header> 
      <h3>警告</h3>
    </template>
    <template #body="obj">
      <span>{{ obj }}</span>
      <br>
      <span>该操作无法撤回</span>
    </template>
  </MyDialog>
</template>

<style>
body {
  background-color: #b3b3b3;
}
</style>
