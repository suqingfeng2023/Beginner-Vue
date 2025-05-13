<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const foodItem = ref(null)

// 模拟数据
const foodItems = [
    { id: 1, name: '苹果', price: 5.5, review: '新鲜多汁，非常好吃' },
    { id: 2, name: '香蕉', price: 3.2, review: '香甜可口，营养丰富' },
    { id: 3, name: '牛奶', price: 8.0, review: '纯天然，无添加' },
    { id: 4, name: '面包', price: 6.5, review: '松软可口，早餐必备' }
]

onMounted(() => {
    const id = parseInt(route.params.id)
    foodItem.value = foodItems.find(item => item.id === id)
})

const goBack = () => {
    router.push('/home/food-list')
}
</script>

<template>
    <div class="food-detail-container" v-if="foodItem">
        <button @click="goBack" class="back-btn">返回</button>
        <h3>{{ foodItem.name }} 详情</h3>
        <div class="detail-info">
            <p><strong>价格:</strong> ¥{{ foodItem.price }}</p>
            <p><strong>客户点评:</strong></p>
            <div class="review-box">{{ foodItem.review }}</div>
        </div>
    </div>
    <div v-else>
        <p>加载中...</p>
    </div>
</template>

<style scoped>
.food-detail-container {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
}

.back-btn {
    background-color: #5f9ea0;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: background-color 0.3s;
}

.back-btn:hover {
    background-color: #4d8b8d;
}

.detail-info {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
}

.review-box {
    background-color: white;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 10px;
}
</style>