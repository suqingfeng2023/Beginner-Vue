<script setup>
import { ref } from 'vue'
import MyTable from './components/MyTable.vue'

// 商品列表数据
const goodsList = ref([
  {
    id: 1,
    goods_name: '夏季专柜同款女鞋',
    goods_price: 298,
    tags: ['舒适', '透气'],
    inputVisible: false,
    inputValue: ''
  },
  {
    id: 2,
    goods_name: '冬季保暖女士休闲雪地靴 舒适加绒防水短靴 防滑棉鞋',
    goods_price: 89,
    tags: ['保暖', '防滑'],
    inputVisible: false,
    inputValue: ''
  },
  {
    id: 3,
    goods_name: '秋冬新款女士毛衣 套头宽松针织衫 简约上衣',
    goods_price: 199,
    tags: ['秋冬', '毛衣'],
    inputVisible: false,
    inputValue: ''
  },
  {
    id: 4,
    goods_name: '2023 春秋装新款大码女装 衬衫 上衣',
    goods_price: 19,
    tags: ['雪纺衫', '打底'],
    inputVisible: false,
    inputValue: ''
  },
  {
    id: 5,
    goods_name: '长款长袖圆领女士毛衣 2022 秋装新款假两件连衣裙',
    goods_price: 178,
    tags: ['圆领', '连衣裙'],
    inputVisible: false,
    inputValue: ''
  }
])

// 删除商品
const onRemove = id => {
  goodsList.value = goodsList.value.filter(item => item.id !== id)
}

// 显示输入框
const onShowInput = row => {
  row.inputVisible = true
}



// 处理标签输入
const onInputConfirm = row => {
  const val = row.inputValue.trim()
  if (!val || row.tags.indexOf(val) !== -1) {
    row.inputValue = ''
    row.inputVisible = false
    return
  }
  row.tags.push(val)
  row.inputValue = ''
  row.inputVisible = false
}
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
        <td>{{ row.goods_name }}</td>
        <td>¥{{ row.goods_price }}</td>
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
            v-focus
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