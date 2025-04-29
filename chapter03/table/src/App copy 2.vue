<script setup>
import { ref, onMounted } from 'vue'
import MyTable from './components/MyTable.vue'

const goodsList = ref([])

// 获取商品列表
const fetchGoodsList = async () => {
  console.log('开始获取商品列表...')
  try {
    const response = await fetch('/api/product')
    const result = await response.json()
    console.log('API响应:', result)
    
    if (result.code === 1) {
      goodsList.value = result.data.map(item => ({
        ...item,
        tags: [], // 初始为空，后续单独加载标签
        inputVisible: false,
        inputValue: ''
      }))
      console.log('商品列表数据:', goodsList.value)
      // 加载每个商品的标签
      await fetchTagsForGoods()
    } else {
      console.error('获取商品列表失败:', result.msg)
    }
  } catch (error) {
    console.error('请求异常:', error)
  }
}

// 获取商品标签
const fetchTagsForGoods = async () => {
  console.log('开始获取商品标签...')
  try {
    for (const goods of goodsList.value) {
      const response = await fetch(`/api/product/${goods.id}/tags`)
      const result = await response.json()
      if (result.code === 1) {
        goods.tags = result.data.map(t => t.tagName)
        console.log(`商品ID ${goods.id} 的标签:`, goods.tags)
      }
    }
  } catch (error) {
    console.error('获取标签失败:', error)
  }
}

// 显示输入框
const onShowInput = (row) => {
  console.log('显示输入框，商品ID:', row.id)
  row.inputVisible = true
}

// 删除商品
const onRemove = async id => {
  console.log('尝试删除商品ID:', id)
  try {
    const response = await fetch(`/api/product/${id}`, {
      method: 'DELETE'
    })
    const result = await response.json()
    if (result.code === 1) {
      goodsList.value = goodsList.value.filter(item => item.id !== id)
      console.log('删除成功，更新后的商品列表:', goodsList.value)
    } else {
      console.error('删除失败:', result.msg)
    }
  } catch (error) {
    console.error('请求异常:', error)
  }
}

// 处理标签输入
const onInputConfirm = async row => {
  const val = row.inputValue.trim()
  console.log('尝试添加标签:', val, '到商品ID:', row.id)
  if (!val || row.tags.indexOf(val) !== -1) {
    row.inputValue = ''
    row.inputVisible = false
    return
  }
  
  try {
    const response = await fetch(`/api/product/${row.id}/tags`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tagName: val })
    })
    const result = await response.json()
    if (result.code === 1) {
      row.tags.push(val)
      row.inputValue = ''
      row.inputVisible = false
      console.log('标签添加成功，更新后的标签:', row.tags)
    }
  } catch (error) {
    console.error('添加标签失败:', error)
  }
}

// 组件挂载时获取数据
onMounted(() => {
  console.log('组件挂载，开始获取数据...')
  fetchGoodsList()
})
</script>

<template>
    <h4 class="mb-3">商品管理</h4>
    <MyTable :goodsList="goodsList">
      <!-- 具名插槽 - 表头 -->
      <template #header>
        <th scope="col">#</th>
        <th scope="col">商品名称</th>
        <th scope="col">价格</th>
        <th scope="col">标签</th>
        <th scope="col">操作</th>
      </template>
      
      <!-- 作用域插槽 - 表格内容 -->
      <template #body="{ row, index }">
        <td>{{ index + 1 }}</td>
        <td>{{ row.goodsName }}</td>
        <td>¥{{ row.goodsPrice }}</td>
        <td>
          <!-- 标签展示 -->
          <span v-for="(tag, i) in row.tags" :key="i" class="btn btn-outline-dark">
            {{ tag }}
          </span>
          
          <!-- 添加标签按钮 -->
          <button 
            v-if="!row.inputVisible"
            type="button" 
            class="btn btn-sm btn-outline-primary rounded-pill"
            @click="onShowInput(row)"
          >
            + 添加标签
          </button>
          
          <!-- 标签输入框 -->
          <input 
            v-if="row.inputVisible"
            type="text"
            class="form-control form-control-sm ipt-tag"
            v-model="row.inputValue"
            @blur="onInputConfirm(row)"
            @keyup.enter="onInputConfirm(row)"
            @keyup.esc="row.inputValue = ''"
          />
        </td>
        <td>
          <button 
            type="button" 
            class="btn btn-outline-danger btn-sm"
            @click="onRemove(row.id)"
          >
            删除
          </button>
        </td>
      </template>
    </MyTable>
</template>

<style scoped>
th {
  text-align: center;
}

td {
  line-height: 30px;
  vertical-align: middle;
}

.ipt-tag {
  display: inline-block;
  width: 100px;
}

.badge {
  vertical-align: middle;
}
</style>