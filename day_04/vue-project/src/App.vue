<script setup>
import { ref } from 'vue'
// 成绩列表 
const scoreList = ref([
  { id: 19, subject: '语⽂', score: 94 },
  { id: 27, subject: '数学', score: 59 },
  { id: 12, subject: '英语', score: 92 }
])

// 添加成绩
const addScore = () => {
  const id = Math.floor(Math.random() * 100)
  const subject = prompt('请输⼊科⽬')
  const score = prompt('请输⼊分数')
  scoreList.value.push({ id, subject, score })
}
</script>
<template>
  <div class="score-case">
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>科⽬</th>
            <th>成绩</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in scoreList" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.subject }}</td>
            <td :class="{red: item.score < 60}">{{ item.score }}</td>
            <td><a href="#">删除</a></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5">
              <span>总分: 246</span>
              <span style="margin-left: 50px">平均分: 79</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <form class="form">
      <div class="form-item">
        <div class="label">科⽬：</div>
        <div class="input">
          <input type="text" placeholder="请输⼊科⽬" v-model="subject" />
        </div>
      </div>
      <div class="form-item">
        <div class="label">分数：</div>
        <div class="input">
          <input type="text" placeholder="请输⼊分数" v-model="score" />
        </div>
      </div>
      <div class="form-item">
        <div class="label"></div>
        <div class="input">
          <button class="submit" @click="addScore">添加</button>
        </div>
      </div>
    </form>
  </div>
</template>
<style>
.score-case {
  width: 1000px;
  margin: 50px auto;
  display: flex;
}

.score-case .table {
  flex: 4;
}

.score-case .table table {
  width: 100%;
  border-spacing: 0;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}

.score-case .table table th {
  background: #f5f5f5;
}

.score-case .table table tr:hover td {
  background: #f5f5f5;
}

.score-case .table table td,
.score-case .table table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  text-align: center;
  padding: 10px;
}

.score-case .table table td.red,
.score-case .table table th.red {
  color: red;
}

.score-case .table .none {
  height: 100px;
  line-height: 100px;
  color: #999;
}

.score-case .form {
  flex: 1;
  padding: 20px;
}

.score-case .form .form-item {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}

.score-case .form .form-item .label {
  width: 60px;
  text-align: right;
  font-size: 14px;
}

.score-case .form .form-item .input {
  flex: 1;
}

.score-case .form .form-item input,
.score-case .form .form-item select {
  appearance: none;
  outline: none;
  border: 1px solid #ccc;
  width: 200px;
  height: 40px;
  box-sizing: border-box;
  padding: 10px;
  color: #666;
}

.score-case .form .form-item input::placeholder {
  color: #666;
}

.score-case .form .form-item .cancel,
.score-case .form .form-item .submit {
  appearance: none;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 10px;
  margin-right: 10px;
  font-size: 12px;
  background: #ccc;
}

.score-case .form .form-item .submit {
  border-color: #069;
  background: #069;
  color: #fff;
}
</style>
