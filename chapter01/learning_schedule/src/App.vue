<script setup>
import { ref, computed } from 'vue'

// 初始数据
const list = ref([
  {
    id: '1',
    subject: 'Vue.js前端实战开发',
    content: '学习指令，例如v-if、v-for、v-model等',
    place: '自习室',
    status: false,
    priority: 2,
    tags: ['前端', 'Vue'],
    completedAt: null
  },
  {
    id: '2',
    subject: 'JavaScript高级编程',
    content: '学习闭包、原型链等高级概念',
    place: '图书馆',
    status: false,
    priority: 1,
    tags: ['JavaScript', '高级'],
    completedAt: null
  },
  {
    id: '3',
    subject: '计算机网络基础',
    content: '学习TCP/IP协议栈',
    place: '宿舍',
    status: false,
    priority: 3,
    tags: ['网络', '基础'],
    completedAt: null
  }
])

const searchQuery = ref('')
const editingId = ref(null)

// 计算属性 - 过滤后的列表
const filteredList = computed(() => {
  if (!searchQuery.value.trim()) return list.value
  const query = searchQuery.value.toLowerCase()
  return list.value.filter(item =>
    item.subject.toLowerCase().includes(query) ||
    item.content.toLowerCase().includes(query)
  )
})

// 删除功能
const remove = (id, status) => {
  if (!status) {
    alert('请先完成学习任务')
    return
  }
  
  if (confirm('确定要删除这条学习计划吗？')) {
    list.value = list.value.filter(item => item.id !== id)
  }
}

// 表单数据
const subject = ref('')
const content = ref('')
const selectedOption = ref('自习室')
const priority = ref(2) // 1-高, 2-中, 3-低
const tags = ref('')

const options = ref([
  { placeCode: 0, place: '自习室' },
  { placeCode: 1, place: '图书馆' },
  { placeCode: 2, place: '宿舍' }
])

const priorityOptions = ref([
  { value: 1, label: '高优先级' },
  { value: 2, label: '中优先级' },
  { value: 3, label: '低优先级' }
])

// 添加/更新学习计划
const savePlan = () => {
  if (subject.value.trim() === '') {
    alert("学习科目为必填项！")
    return
  }

  const tagArray = tags.value.split(',').map(tag => tag.trim()).filter(tag => tag)
  
  if (editingId.value) {
    // 更新现有任务
    const index = list.value.findIndex(item => item.id === editingId.value)
    if (index !== -1) {
      list.value[index] = {
        ...list.value[index],
        subject: subject.value,
        content: content.value,
        place: selectedOption.value,
        priority: priority.value,
        tags: tagArray
      }
    }
  } else {
    // 添加新任务
    const newId = list.value.length > 0
      ? Math.max(...list.value.map(item => parseInt(item.id))) + 1
      : 1
    const obj = {
      id: newId.toString(),
      subject: subject.value,
      content: content.value,
      place: selectedOption.value,
      status: false,
      priority: priority.value,
      tags: tagArray,
      completedAt: null
    }
    list.value.push(obj)
  }

  resetForm()
}

// 编辑任务
const editPlan = (id) => {
  const plan = list.value.find(item => item.id === id)
  if (plan) {
    editingId.value = id
    subject.value = plan.subject
    content.value = plan.content
    selectedOption.value = plan.place
    priority.value = plan.priority
    tags.value = plan.tags.join(', ')
  }
}

// 重置表单
const resetForm = () => {
  editingId.value = null
  subject.value = ''
  content.value = ''
  selectedOption.value = '自习室'
  priority.value = 2
  tags.value = ''
}

// 切换任务状态
const toggleStatus = (item) => {
  const index = list.value.findIndex(i => i.id === item.id)
  if (index !== -1) {
    list.value[index] = {
      ...list.value[index],
      status: !list.value[index].status,
      completedAt: !list.value[index].status ? new Date().toLocaleString() : null
    }
  }
}
</script>

<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5>学习计划表</h5>
        <div class="search-box">
          <input 
            type="text" 
            class="form-control form-control-sm" 
            placeholder="搜索任务..." 
            v-model.trim="searchQuery"
          >
        </div>
      </div>
      
      <div class="card-body">
        <form @submit.prevent="savePlan">
          <div class="row g-3">
            <div class="col-md-4">
              <div class="input-group mb-3">
                <span class="input-group-text">学习科目</span>
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="请输入学习科目" 
                  v-model.trim="subject" 
                  required
                >
              </div>
            </div>
            
            <div class="col-md-4">
              <div class="input-group mb-3">
                <span class="input-group-text">学习内容</span>
                <textarea 
                  class="form-control" 
                  v-model.trim="content" 
                  placeholder="请输入学习内容"
                ></textarea>
              </div>
            </div>
            
            <div class="col-md-2">
              <div class="input-group mb-3">
                <span class="input-group-text">学习地点</span>
                <select class="form-select" v-model="selectedOption">
                  <option v-for="option in options" :key="option.placeCode" :value="option.place">
                    {{ option.place }}
                  </option>
                </select>
              </div>
            </div>
            
            <div class="col-md-2">
              <div class="input-group mb-3">
                <span class="input-group-text">优先级</span>
                <select class="form-select" v-model="priority">
                  <option v-for="opt in priorityOptions" :key="opt.value" :value="opt.value">
                    {{ opt.label }}
                  </option>
                </select>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="input-group mb-3">
                <span class="input-group-text">标签</span>
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="用逗号分隔，如: Vue,前端,学习"
                  v-model.trim="tags"
                >
              </div>
            </div>
            
            <div class="col-md-6 d-flex align-items-center">
              <button type="submit" class="btn btn-primary me-2">
                {{ editingId ? '更新' : '添加' }}
              </button>
              <button v-if="editingId" type="button" class="btn btn-secondary" @click="resetForm">
                取消
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <table class="table table-striped table-hover mt-3">
      <thead class="table-dark">
        <tr>
          <th width="5%">#</th>
          <th width="15%">学习科目</th>
          <th width="25%">学习内容</th>
          <th width="10%">地点</th>
          <th width="10%">优先级</th>
          <th width="15%">标签</th>
          <th width="10%">状态</th>
          <th width="10%">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredList" :key="item.id" :class="{'table-success': item.status}">
          <td>{{ item.id }}</td>
          <td>{{ item.subject }}</td>
          <td>{{ item.content }}</td>
          <td>{{ item.place }}</td>
          <td>
            <span :class="{
              'badge bg-danger': item.priority === 1,
              'badge bg-warning': item.priority === 2,
              'badge bg-success': item.priority === 3
            }">
              {{ priorityOptions.find(opt => opt.value === item.priority)?.label }}
            </span>
          </td>
          <td>
            <span v-for="tag in item.tags" :key="tag" class="badge bg-info me-1">
              {{ tag }}
            </span>
          </td>
          <td>
            <div class="form-check form-switch">
              <input 
                type="checkbox" 
                class="form-check-input" 
                :id="'status-'+item.id"
                :checked="item.status"
                @change="toggleStatus(item)"
              >
              <label class="form-check-label" :for="'status-'+item.id">
                {{ item.status ? '已完成' : '未完成' }}
              </label>
              <div v-if="item.status" class="small text-muted">
                {{ item.completedAt }}
              </div>
            </div>
          </td>
          <td>
            <button 
              class="btn btn-sm btn-outline-primary me-1" 
              @click="editPlan(item.id)"
            >
              编辑
            </button>
            <button 
              class="btn btn-sm btn-outline-danger" 
              @click="remove(item.id, item.status)"
            >
              删除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.search-box {
  width: 250px;
}

textarea.form-control {
  min-height: 38px;
  resize: vertical;
}

.table th {
  white-space: nowrap;
}

.badge {
  font-weight: normal;
}

.table-success {
  background-color: rgba(25, 135, 84, 0.1);
}
</style>