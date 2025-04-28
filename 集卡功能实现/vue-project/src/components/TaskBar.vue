<template>
    <div class="task-bar">
      <button @click="signIn">签到</button>
      <button @click="share">分享</button>
      <p>连续签到：{{ streak }} 天</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    streak: {
      type: Number,
      default: 0
    }
  })
  
  const emit = defineEmits()
  
  const signIn = () => {
    emit('sign') // 触发签到事件
  }
  
  const share = () => {
    emit('share') // 触发分享事件
  }
  </script>
  
  <style scoped>
  .task-bar {
    display: flex;
    justify-content: space-around;
    padding: 16px;
    background-color: #f1f1f1;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  p {
    font-size: 16px;
    color: #333;
    margin-left: 20px;
  }
  </style>
  