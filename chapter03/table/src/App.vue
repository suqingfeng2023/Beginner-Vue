<script setup>
import { ref, onMounted } from 'vue'

const foodList = ref([])
const newFood = ref({
  name: '',
  price: 0
})

// 获取所有食品
const fetchFoods = async () => {
  try {
    const response = await fetch('/api/foods')
    const result = await response.json()
    if (result.code === 1) {
      foodList.value = result.data.map(item => ({
        ...item,
        inputVisible: false,
        reviewInput: item.review || ''
      }))
    }
  } catch (error) {
    console.error('获取食品列表失败:', error)
  }
}

// 添加食品
const addFood = async () => {
  if (!newFood.value.name) return
  
  try {
    const response = await fetch('/api/foods', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFood.value)
    })
    await fetchFoods()
    newFood.value = { name: '', price: 0 }
  } catch (error) {
    console.error('添加食品失败:', error)
  }
}

// 添加评价
const addReview = async (food) => {
  try {
    await fetch(`/api/foods/${food.id}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(food.reviewInput)
    })
    food.inputVisible = false
    food.review = food.reviewInput
  } catch (error) {
    console.error('添加评价失败:', error)
  }
}

// 删除食品
const deleteFood = async (id) => {
  try {
    await fetch(`/api/foods/${id}`, {
      method: 'DELETE'
    })
    await fetchFoods()
  } catch (error) {
    console.error('删除食品失败:', error)
  }
}

// 初始化数据
onMounted(fetchFoods)
</script>

<template>
    <!-- 上半部分：输入区域 -->
    <div class="card mb-4">
      <div class="card-header bg-primary text-white">
        <h4>食品入库表</h4>
      </div>
      <div class="card-body">
        <div class="row g-3">
          <div class="col-md-5">
            <input 
              v-model="newFood.name"
              type="text" 
              class="form-control" 
              placeholder="食品名称"
            >
          </div>
          <div class="col-md-5">
            <input 
              v-model.number="newFood.price"
              type="number" 
              class="form-control" 
              placeholder="价格"
            >
          </div>
          <div class="col-md-2">
            <button 
              @click="addFood"
              class="btn btn-primary w-100"
            >
              添加
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 下半部分：表格区域 -->
    <div class="card">
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>食品名称</th>
              <th>价格</th>
              <th>评价</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="food in foodList" :key="food.id">
              <td>{{ food.id }}</td>
              <td>{{ food.name }}</td>
              <td>¥{{ food.price.toFixed(2) }}</td>
              <td>
                <span v-if="!food.inputVisible">
                  {{ food.review || '暂无评价' }}
                  <button 
                    @click="food.inputVisible = true"
                    class="btn btn-sm btn-outline-primary ms-2"
                  >
                    + 点评
                  </button>
                </span>
                <div v-else class="input-group">
                  <input
                    v-model="food.reviewInput"
                    type="text"
                    class="form-control form-control-sm"
                    @keyup.enter="addReview(food)"
                  >
                  <button
                    @click="addReview(food)"
                    class="btn btn-sm btn-success"
                  >
                    保存
                  </button>
                </div>
              </td>
              <td>
                <button
                  @click="deleteFood(food.id)"
                  class="btn btn-sm btn-danger"
                >
                  删除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<style scoped>
.input-group {
  width: 300px;
}
</style>