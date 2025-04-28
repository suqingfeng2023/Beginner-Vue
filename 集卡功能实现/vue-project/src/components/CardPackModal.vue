<template>
    <div v-if="show" class="modal-overlay">
      <div class="modal-content">
        <button @click="closeModal">关闭</button>
        <h3>已收集的卡片</h3>
        <ul>
          <li v-for="card in cards" :key="card.id">
            <img :src="card.thumbnail" :alt="card.name" class="card-thumbnail" />
            {{ card.name }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    show: Boolean,
    cards: Array,
  })
  
  const emit = defineEmits()
  
  const closeModal = () => {
    emit('update:show', false) // 关闭 modal
  }
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
  }
  
  button {
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #cc0000;
  }
  
  ul {
    margin-top: 10px;
    list-style-type: none;
  }
  
  li {
    margin: 5px 0;
    display: flex;
    align-items: center;
  }
  
  .card-thumbnail {
    width: 50px;
    height: auto;
    border-radius: 5px;
    margin-right: 10px;
  }
  </style>
  