<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 模拟数据
const foodItems = ref([
    { id: 1, name: '苹果', price: 5.5, review: '新鲜多汁，非常好吃' },
    { id: 2, name: '香蕉', price: 3.2, review: '香甜可口，营养丰富' },
    { id: 3, name: '牛奶', price: 8.0, review: '纯天然，无添加' },
    { id: 4, name: '面包', price: 6.5, review: '松软可口，早餐必备' }
])

const showDetail = (id) => {
    router.push(`/home/food-detail/${id}`)
}
</script>

<template>
    <div class="food-list-container">
        <h3>食品列表</h3>
        <table class="food-table">
            <thead>
                <tr>
                    <th>食品名称</th>
                    <th>价格</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in foodItems" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>¥{{ item.price }}</td>
                    <td>
                        <button @click="showDetail(item.id)" class="review-btn">客户点评</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.food-list-container {
    padding: 20px;
}

.food-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.food-table th,
.food-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
}

.food-table th {
    background-color: #5f9ea0;
    color: white;
}

.food-table tr:nth-child(even) {
    background-color: #f2f2f2;
}

.food-table tr:hover {
    background-color: #e9e9e9;
}

.review-btn {
    background-color: #5f9ea0;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.review-btn:hover {
    background-color: #4d8b8d;
}
</style>