<template>
  <div id="app">
    <h1>钧瓷集卡系统</h1>
    <VideoGallery @collect="handleCollect" />
    <TaskBar :streak="streakDays" @sign="handleSignIn" @share="handleShare" />
    <CardPackModal :show="showModal" :cards="cardStore.collectedCards" @update:show="showModal = $event" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VideoGallery from './components/VideoGallery.vue'
import TaskBar from './components/TaskBar.vue'
import CardPackModal from './components/CardPackModal.vue'
import { useCardStore } from './store/useCardStore'

// 示例签到天数
const streakDays = ref(5)
// 控制 modal 显示与隐藏
const showModal = ref(false)
// 获取 Pinia 状态
const cardStore = useCardStore()

// 收集卡片
const handleCollect = (cardInfo) => {
  cardStore.collectCard(cardInfo)
  showModal.value = true
}

// 签到事件
const handleSignIn = () => {
  streakDays.value += 1
  console.log(`已签到：${streakDays.value} 天`)
}

// 分享事件
const handleShare = () => {
  console.log('用户分享了视频')
}
</script>

<style scoped>
/* 添加样式 */
#app {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #333;
}
</style>
