<script setup>
import { ref } from 'vue'
// 初始课程数据
const list = ref([
  {
    id: '1',
    cname: 'Vue.js前端开发',
    credit: 3,
    course_type: '专业课',
    status: false
  },
  {
    id: '2',
    cname: '大学英语',
    credit: 2,
    course_type: '基础课',
    status: false
  },
  {
    id: '3',
    cname: '音乐鉴赏',
    credit: 1,
    course_type: '通识课',
    status: true
  },
  {
    id: '4',
    cname: '数据结构',
    credit: 4,
    course_type: '基础课',
    status: false
  }
])

/* 实现删除功能*/
let remove = (id, status) => {
  if (status) {
    if (window.confirm('确认删除吗？')) {
      list.value = list.value.filter(item => item.id !== id)
    }
  } else {
    alert('请先完成课程修读')
  }
}

/* 实现学习计划的添加功能 */
let cname = ref('')   // 课程名称
let credit = ref('')   // 课程学分
let course_type = ref('')     // 课程种类
let selectedOption = ref('专业课')
let options = ref(
  [
    { typeCode: 0, course_type: '专业课' },
    { typeCode: 1, course_type: '通识课' },
    { typeCode: 2, course_type: '选修课' },
    { typeCode: 3, course_type: '基础课' }
  ]
)

/* 添加课程名称 */
let add = () => {
  if (cname.value.trim() === '') {
    alert("课程名称为必填项！")
    return
  }
  if (!credit.value || isNaN(credit.value) || credit.value <= 0) {
    alert("请输入有效的学分数字！")
    return
  }
  const newId = list.value.length > 0
    ? Math.max(...list.value.map(item => parseInt(item.id))) + 1
    : 1
  const obj = {
    id: newId.toString(),  // 确保 ID 是字符串
    cname: cname.value,
    credit: credit.value,
    course_type: selectedOption.value,
    status: false
  }
  list.value.push(obj)
  // 清空表单
  cname.value = ''
  credit.value = ''
  selectedOption.value = '专业课'
}
</script>
<template>
  <div class="card">
    <!-- 标题区域 -->
    <div class="card-header">
      <!-- card-header: 标题 -->
      课程修读表
    </div>
    <!-- 提交区域 -->
    <div class="card-body">
      <!-- card-body: 内容 -->
      <form @submit.prevent="add">
        <div class="row g-4">
          <!-- row g-4: 控制列间隔 -->
          <!-- 课程名 -->
          <div class="col-auto">
            <!-- col-auto: 宽度自动 -->
            <div class="input-group mb-3">
              <!-- mb-3: 下边距 -->
              <!-- input-group: 输入框组 -->
              <span class="input-group-text" id="basic-addon1">课程名</span>
              <!-- input-group-text: 输入框组前缀 -->
              <input type="text" class="form-control" placeholder="请输入课程名称" v-model.trim="cname">
              <!-- form-control: 输入框 -->
              <!-- placeholder: 提示文本 -->
            </div>
          </div>
          <!-- 课程学分 -->
          <div class="col-auto">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">课程学分</span>
              <input type="number" class="form-control" placeholder="请输入学分" v-model.number="credit">
            </div>
          </div>
          <!-- 课程种类 -->
          <div class="col-auto">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">课程种类</span>
              <select class="form-select form-select-sm" v-model="selectedOption">
                <!-- form-select: 下拉框 -->
                 <!-- form-select-sm: 小尺寸 -->
                <option v-for="option in options" :key="option.typeCode" :value="option.course_type">
                  {{ option.course_type }}
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
    <!-- table-striped: 斑马纹 -->
    <!-- table-hover: 鼠标悬停高亮 -->
    <!-- table-bordered: 边框 -->
    <thead>
      <tr>
        <th scope="col">序号</th>
        <th scope="col">课程名称</th>
        <th scope="col">课程学分</th>
        <th scope="col">课程种类</th>
        <th scope="col">修读状态</th>
        <th scope="col">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.cname }}</td>
        <td>{{ item.credit }}</td>
        <td>{{ item.course_type }}</td>
        <td>
          <!-- 完成状态 -->
          <div class="form-check form-switch">
            <input type="checkbox" class="form-check-input" role="switch" :id="'cb' + item.id" v-model="item.status">
            <label class="form-check-label" :for="'cb' + item.id" v-if="item.status">已修读</label>
            <label class="form-check-label" :for="'cb' + item.id" v-else>未修读</label>
          </div>
        </td>
        <td>
          <a href="javascript:;" @click="remove(item.id, item.status)">删除</a>
          <!-- <button type="button" class="text-danger bg-transparent border-0 p-0" @click="remove(item.id, item.status)">删除</button> -->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
/* 卡片头部样式优化 */
.card-header {
  background-color: rgb(91, 91, 220);
  color: white;
  font-weight: bolder;
  text-align: center;
}
/* 提交按键优化 */
.btn-primary {
  background-color: rgb(96, 197, 96);
}
/* 提交按键悬停效果 */
.btn-primary:hover {
  background-color: darkgreen;
}
/* 表格样式优化 */
.table th {
  background-color: rgb(91, 91, 220);
  color: white;
}
/* 删除按键优化 */
a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: red;
  text-decoration: underline;
}
a:active {
  color: blue;
  text-decoration: underline;
}
/* 响应式状态栏优化 */
@media (max-width: 768px) {
  .form-check-label {
    font-size: 0.8rem;
  }
}
</style>