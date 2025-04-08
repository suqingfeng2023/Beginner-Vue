<script setup>
import { ref } from 'vue'
const progress = ref(0) // 0-4表示进度级别
</script>

<template>
  <div class="progress-container">
    <div class="progress-info">
      <span>当前进度: {{ Math.min(progress * 25, 100) }}%</span>
    </div>
    
    <div class="progress-bar">
      <div 
        class="progress-fill"
        :style="{ width: `${progress * 25}%` }"
      ></div>
    </div>
    
    <div class="progress-controls">
      <button 
        v-for="step in 4" 
        :key="step"
        @click="progress = step"
        :class="{ active: progress === step }"
      >
        {{ step * 25 }}%
      </button>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  max-width: 500px;
  margin: 2rem auto;
  font-family: 'Arial', sans-serif;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}

.progress-bar {
  height: 24px;
  background-color: #f0f0f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 12px;
  transition: width 0.5s ease-out;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
  background-size: 30px 30px;
  animation: animate-stripes 1s linear infinite;
}

@keyframes animate-stripes {
  0% { background-position: 0 0; }
  100% { background-position: 30px 0; }
}

.progress-controls {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.progress-controls button {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background-color: #e0e0e0;
  color: #555;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.progress-controls button:hover {
  background-color: #d0d0d0;
}

.progress-controls button.active {
  background-color: #4facfe;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(79, 172, 254, 0.3);
}
</style>