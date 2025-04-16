<script setup>
import { ref, computed } from 'vue'
import ToDoHeader from './components/ToDoHeader.vue'
import ToDoMain from './components/ToDoMain.vue'
import ToDoFooter from './components/ToDoFooter.vue'

// 任务列表数据
const list = ref([
  { id: 1, name: '北京', done: false },
  { id: 2, name: '上海', done: true }
])

// 添加城市
const addTodo = name => {
  list.value.push(
    { name, 
      done: false, 
      id: ~~(Math.random() * 1000) 
    }
  )
}

// 删除城市
const delToDo = id => {
  list.value = list.value.filter(item => item.id !== id)
}

// 未完成城市数
const lastLength = computed(() => {
  return list.value.filter(item => !item.done).length
})

// 任务状态筛选
const status = ref('all')
const showList = computed(() => {
  if (status.value === 'all') 
    return list.value
  if (status.value === 'active') 
    return list.value.filter(item => !item.done)
  if (status.value === 'completed') 
    return list.value.filter(item => item.done)
})

// 更新状态
const updateStatus = newStatus => {
  status.value = newStatus
}
</script>


<template>
  <ToDoHeader 
  @addTodo="addTodo" />
  <ToDoMain 
  :list="showList" 
  @delToDo="delToDo" />
  <ToDoFooter 
  :lastLength="lastLength" 
  :status="status" 
  @updateStatus="updateStatus" />
</template>

