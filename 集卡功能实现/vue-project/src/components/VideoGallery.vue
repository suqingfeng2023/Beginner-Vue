<template>
    <div class="video-gallery">
      <div v-for="video in videos" :key="video.id" class="video-card">
        <img :src="video.thumbnail" :alt="video.title" @click="collectCard(video)" />
        <p>{{ video.title }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // 示例视频列表，图片来自 public/images 文件夹
  const videos = ref([
    { id: 1, title: '钧瓷视频1', thumbnail: '/images/thumbnail1.jpg' },
    { id: 2, title: '钧瓷视频2', thumbnail: '/images/thumbnail2.jpg' },
  ])
  
  const emit = defineEmits()
  
  const collectCard = (video) => {
    emit('collect', { id: video.id, name: video.title }) // 触发收集卡片事件
  }
  </script>
  
  <style scoped>
  .video-gallery {
    display: flex;
    gap: 16px;
    justify-content: center;
  }
  
  .video-card {
    cursor: pointer;
    text-align: center;
  }
  
  img {
    width: 200px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  p {
    margin-top: 10px;
    font-size: 16px;
    color: #555;
  }
  </style>
  