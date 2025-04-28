// src/store/useCardStore.js
import { defineStore } from 'pinia'

export const useCardStore = defineStore('card', {
  state: () => ({
    collectedCards: [],
  }),
  actions: {
    collectCard(cardInfo) {
      // 添加图像路径到已收集卡片列表
      if (!this.collectedCards.some(card => card.id === cardInfo.id)) {
        const newCard = { 
          ...cardInfo,
          thumbnail: '/images/thumbnail' + cardInfo.id + '.jpg', // 为每个卡片添加图像路径
        }
        this.collectedCards.push(newCard)
      }
    },
  },
})
