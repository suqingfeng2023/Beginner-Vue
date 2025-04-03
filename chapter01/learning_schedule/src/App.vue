<script setup>
import { ref } from 'vue'
const list = ref([
  {
    id: '1',
    subject: 'Vue.js前端实战开发',
    content: '学习指令，例如v-if、v-for、v-model等',
    place: '自习室',
    status: false,
  },
])
/* 实现删除功能*/
let remove = (id, status) => {
  if (status) {
    list.value = list.value.filter(item => item.id !== id)
  } else {
    alert('请先完成学习任务')
  }
}

/* 实现学习计划的添加功能 */
let subject = ref('')   // 学习科目
let content = ref('')   // 学习内容
let place = ref('')     // 学习地点
let selectedOption = ref('自习室')
let options = ref(
  [
    { placeCode: 0, place: '自习室' },
    { placeCode: 1, place: '图书馆' },
    { placeCode: 2, place: '宿舍' }
  ]
)

/* 添加学习计划 */
let add = () => {
  if (subject.value.trim() === '') {
    alert("学习科目为必填项！")
    return
  }
  const newId = list.value.length > 0
    ? Math.max(...list.value.map(item => parseInt(item.id))) + 1
    : 1
  const obj = {
    id: newId.toString(),  // 确保 ID 是字符串（如果原数据是字符串）
    subject: subject.value,
    content: content.value,
    place: selectedOption.value,
    status: false
  }
  list.value.push(obj)
  // 清空表单
  subject.value = ''
  content.value = ''
  selectedOption.value = '自习室'
}
</script>
<template>
  <div class="card">
    <!-- 标题区域 -->
    <div class="card-header">
      学习计划表
    </div>
    <!-- 提交区域 -->
    <div class="card-body">
      <form @submit.prevent="add">
        <div class="row g-4">
          <!-- 学习科目 -->
          <div class="col-auto">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">学习科目</span>
              <input type="text" class="form-control" placeholder="请输入学习科目" v-model.trim="subject">
            </div>
          </div>
          <!-- 学习任务 -->
          <div class="col-auto">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">学习内容</span>
              <textarea class="form-control" v-model.trim="content" placeholder="请输入学习内容"
                :style="{ height: '32px' }"></textarea>
            </div>
          </div>
          <!-- 学习地点 -->
          <div class="col-auto">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">学习地点</span>
              <select class="form-select form-select-sm" v-model="selectedOption">
                <option v-for="option in options" :key="option.placeCode" :value="option.place">
                  {{ option.place }}
                </option>
              </select>
            </div>
          </div>
          <!-- 添加按钮 -->
          <div class="col-auto">
            <button type="submit" class="btn btn-primary">添加</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <table class="table table-striped table-hover table-bordered">
    <thead>
      <tr>
        <th scope="col">序号</th>
        <th scope="col">学习科目</th>
        <th scope="col">学习内容</th>
        <th scope="col">学习地点</th>
        <th scope="col">完成状态</th>
        <th scope="col">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.subject }}</td>
        <td>{{ item.content }}</td>
        <td>{{ item.place }}</td>
        <td>
          <!-- 完成状态 -->
          <div class="form-check form-switch">
            <input type="checkbox" class="form-check-input" role="switch" :id="'cb' + item.id" v-model="item.status">
            <label class="form-check-label" :for="'cb' + item.id" v-if="item.status">已完成</label>
            <label class="form-check-label" :for="'cb' + item.id" v-else>未完成</label>
          </div>
        </td>
        <td>
          <a href="javascript:;" @click="remove(item.id, item.status)">删除</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>