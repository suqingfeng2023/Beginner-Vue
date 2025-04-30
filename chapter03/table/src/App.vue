<script setup>
import { ref, onMounted, computed, reactive } from 'vue'
import MyFood from './components/MyFood.vue'

const foodList = ref([])
const newFood = ref({
  foodName: '',
  foodPrice: 0
})

// 计算属性：生成连续的序号
const sortedFoodList = computed(() => {
  return foodList.value.map((food, index) => ({
    ...food,
    displayId: index + 1 // 生成从1开始的连续序号
  }))
})

// 获取所有食品及其评价
const fetchFoods = async () => {
  console.log('开始获取食品列表...')
  try {
    const response = await fetch('/api/food')
    const result = await response.json()
    console.log('API响应:', result)
    
    if (result.code === 1) {
      foodList.value = result.data.map(item => reactive({
        ...item,
        reviews: [], // 初始为空，后续单独加载评价
        inputVisible: false,
        inputValue: ''
      }))
      console.log('食品列表数据:', foodList.value)
      // 加载每个食品的评价
      await fetchReviewsForFoods()
    } else {
      console.error('获取食品列表失败:', result.msg)
    }
  } catch (error) {
    console.error('请求异常:', error)
  }
}

// 获取食品评价
const fetchReviewsForFoods = async () => {
  console.log('开始获取食品评价...')
  try {
    for (const food of foodList.value) {
      const response = await fetch(`/api/food/${food.id}/tags`)
      const result = await response.json()
      if (result.code === 1) {
        food.reviews = result.data.map(t => t.tagName) // 将tagName作为评价内容
        console.log(`食品ID ${food.id} 的评价:`, food.reviews)
      }
    }
  } catch (error) {
    console.error('获取评价失败:', error)
  }
}

// 添加食品
const addFood = async () => {
  if (!newFood.value.foodName) {
    console.log('食品名称为空，不执行添加')
    alert('食品名称不能为空')
    return
  }

  if(newFood.value.foodPrice <= 0) {
    console.log('食品价格无效，不执行添加')
    alert('食品价格必须大于0')
    return
  }
  
  console.log('尝试添加食品:', newFood.value)
  try {
    const response = await fetch('/api/food', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFood.value)
    })
    const result = await response.json()
    if (result.code === 1) {
      console.log('添加成功，刷新列表')
      await fetchFoods()
      newFood.value = { foodName: '', foodPrice: 0 }
    } else {
      console.error('添加失败:', result.msg)
    }
  } catch (error) {
    console.error('请求异常:', error)
  }
}

// 显示评价输入框
const showReviewInput = (food) => {
  console.log('当前 food 对象:', food);
  console.log('修改前 inputVisible:', food.inputVisible);
  food.inputVisible = true;
  console.log('修改后 inputVisible:', food.inputVisible);
  }

// 删除食品
const deleteFood = async (id) => {
  if (!confirm('确定要删除这个食品吗？')) {
    console.log('取消删除')
    return
  }
  
  console.log('尝试删除食品ID:', id)
  try {
    const response = await fetch(`/api/food/${id}`, {
      method: 'DELETE'
    })
    const result = await response.json()
    if (result.code === 1) {
      console.log('删除成功，更新列表')
      foodList.value = foodList.value.filter(item => item.id !== id)
    } else {
      console.error('删除失败:', result.msg)
    }
  } catch (error) {
    console.error('请求异常:', error)
  }
}

// 添加评价
const addReview = async (food) => {
  const review = food.inputValue.trim()
  console.log('尝试添加评价:', review, '到食品ID:', food.id)
  
  if (!review || food.reviews.index(review)!== -1) {
    console.log('评价内容为空')
    food.inputValue = ''
    food.inputVisible = false
    return
  }
  
  try {
    const response = await fetch(`/api/food/${food.id}/tags`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tagName: review }) // 将评价作为tagName发送
    })
    const result = await response.json()
    if (result.code === 1) {
      console.log('评价添加成功')
      food.reviews.push(review)
      food.inputValue = ''
      food.inputVisible = false
    }
  } catch (error) {
    console.error('添加评价失败:', error)
  }
}

// 组件挂载时获取数据
onMounted(() => {
  console.log('组件挂载，开始获取数据...')
  fetchFoods()
})
</script>

<template>
  <div class="container mt-4">
    <!-- 添加食品表单 -->
    <div class="card mb-4">
      <div class="card-header bg-primary text-white">
        <h4 class="mb-0">食品入库表</h4>
      </div>
      <div class="card-body">
        <div class="row g-3 align-items-center">
          <div class="col-md-5">
            <input
              v-model="newFood.foodName"
              type="text"
              class="form-control"
              placeholder="食品名称"
              @keyup.enter="addFood"
            >
          </div>
          <div class="col-md-5">
            <input
              v-model.number="newFood.foodPrice"
              type="number"
              class="form-control"
              placeholder="价格"
              min="0"
              step="0.01"
              @keyup.enter="addFood"
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

    <!-- 使用MyFood组件替代原生表格 -->
    <div class="card">
      <div class="card-body">
        <MyFood :food-list="sortedFoodList">
          <template #header>
            <th>序号</th>
            <th>食品名称</th>
            <th>价格</th>
            <th>评价</th>
            <th>操作</th>
          </template>
          
          <template #body="{ row: food }">
            <td>{{ food.displayId }}</td>
            <td>{{ food.foodName }}</td>
            <td>¥{{ food.foodPrice.toFixed(2) }}</td>
            <td>
              <!-- 评价展示 -->
              <span v-for="(review, index) in food.reviews" :key="index" class="btn btn-outline-dark btn-sm me-2 mb-2">
                {{ review }}
              </span>
              
              <!-- 添加评价按钮 -->
              <button
                v-if="!food.inputVisible"
                type="button"
                class="btn btn-sm btn-outline-primary rounded-pill"
                @click="showReviewInput(food)"
              >
                + 添加评价
              </button>
              
              <!-- 评价输入框 -->
              <div v-if="food.inputVisible" class="d-flex align-items-center">
                <input
                  type="text"
                  class="form-control form-control-sm me-2"
                  style="width: 150px;"
                  v-model="food.inputValue"
                  v-focus       
                  @keyup.enter="addReview(food)"
                  @keyup.esc="food.inputVisible = false"
                >
                <button
                  class="btn btn-sm btn-success me-1"
                  @click="addReview(food)"
                >
                  保存
                </button>
                <button
                  class="btn btn-sm btn-secondary"
                  @click="food.inputVisible = false"
                >
                  取消
                </button>
              </div>
            </td>
            <td>
              <button
                class="btn btn-sm btn-outline-danger"
                @click="deleteFood(food.id)"
              >
                删除
              </button>
            </td>
          </template>
        </MyFood>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 20px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.card-header {
  padding: 1rem 1.5rem;
}

.table {
  margin-top: 0;
}

.btn-outline-dark {
  margin-right: 5px;
  margin-bottom: 5px;
}

.form-control-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
</style>