<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  video: {
    type: Object,
    required: true
  }
})

// 通过 defineEmits 声明事件
const emit = defineEmits()

// 记录是否已集卡，避免重复领取
const isCollected = ref(false)

const collectCard = () => {
  if (isCollected.value) return
  // 模拟集卡的逻辑
  console.log('Collecting card for:', props.video.title)
  isCollected.value = true
  // 通过 emit 发送事件
  emit('collect', { mode: 'watch', videoId: props.video.id })
}

const onVideoEnd = () => {
  if (!isCollected.value) {
    collectCard()
  }
}
</script>
