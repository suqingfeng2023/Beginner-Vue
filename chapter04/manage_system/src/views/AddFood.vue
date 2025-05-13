<script setup>
import { ref } from 'vue'

const foodName = ref('')
const foodPrice = ref('')
const foodReview = ref('')
const foodList = ref([])

const addFood = () => {
    if (!foodName.value || !foodPrice.value) {
        alert('请填写食品名称和价格')
        return
    }

    foodList.value.push({
        name: foodName.value,
        price: foodPrice.value,
        review: foodReview.value
    })

    // 清空输入框
    foodName.value = ''
    foodPrice.value = ''
    foodReview.value = ''

    alert('添加成功!')
}
</script>

<template>
    <div class="add-food-container">
        <h3>添加食品</h3>
        <div class="form-group">
            <label>食品名称:</label>
            <input v-model="foodName" type="text" placeholder="请输入食品名称">
        </div>
        <div class="form-group">
            <label>价格:</label>
            <input v-model="foodPrice" type="number" placeholder="请输入价格">
        </div>
        <div class="form-group">
            <label>好评意见:</label>
            <textarea v-model="foodReview" placeholder="请输入好评意见"></textarea>
        </div>
        <button @click="addFood" class="add-btn">添加</button>

        <div v-if="foodList.length > 0" class="food-list">
            <h4>已添加食品:</h4>
            <ul>
                <li v-for="(food, index) in foodList" :key="index">
                    {{ food.name }} - ¥{{ food.price }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.add-food-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.form-group textarea {
    height: 100px;
}

.add-btn {
    background-color: #5f9ea0;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.add-btn:hover {
    background-color: #4d8b8d;
}

.food-list {
    margin-top: 30px;
}

.food-list ul {
    list-style: none;
    padding: 0;
}

.food-list li {
    padding: 8px;
    border-bottom: 1px solid #eee;
}
</style>