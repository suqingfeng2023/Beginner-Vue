<template>
  <ToDoHeader @addTodo="addTodo" />
  <ToDoMain :list="showList" @delToDo="delToDo" />
  <ToDoFooter :lastLength="lastLength" :status="status" @updateStatus="updateStatus" />
</template>

<script setup>
import { ref, computed } from 'vue'
import ToDoHeader from './components/ToDoHeader.vue'
import ToDoMain from './components/ToDoMain.vue'
import ToDoFooter from './components/ToDoFooter.vue'

// 任务列表数据
const list = ref([
  { id: 1, name: '晨练', done: false },
  { id: 2, name: '练书法', done: true }
])

// 添加任务
const addTodo = name => {
  list.value.push({ name, done: false, id: ~~(Math.random() * 1000) })
}

// 删除任务
const delToDo = id => {
  list.value = list.value.filter(item => item.id !== id)
}

// 未完成任务数
const lastLength = computed(() => {
  return list.value.filter(item => !item.done).length
})

// 任务状态筛选
const status = ref('all')
const showList = computed(() => {
  if (status.value === 'all') return list.value
  if (status.value === 'active') return list.value.filter(item => !item.done)
  if (status.value === 'completed') return list.value.filter(item => item.done)
})

// 更新状态
const updateStatus = newStatus => {
  status.value = newStatus
}
</script>