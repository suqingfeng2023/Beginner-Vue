<script setup>
import { ref } from 'vue' 
import { computed } from 'vue'
const planList = ref([
  {id: 12, name: '跑步', done: false},
  {id: 76, name: '游泳', done: false},
  {id: 31, name: '健身', done: false},
  {id: 45, name: '骑行', done: false},
])

// 全选
const isAll = computed({
  get() {
    return planList.value.every(item => item.done)
  },
  set(value) {
    planList.value.forEach(item => {
      item.done = value
    })
  }
})

// 反选
const onToggle = () => {
  planList.value.forEach(item => {
    item.done = !item.done
  })
}
</script>

<template>
  <!-- 添加包裹div，与样式匹配 -->
  <div>
    <p>
      <span>
        <input type="checkbox" id="all" v-model="isAll">
        <label for="all">全选</label>
      </span>
      <span>
        <button @click="onToggle">反选</button>
      </span>
    </p>
    <ul>
      <li v-for="item in planList" :key="item.id">
        <input type="checkbox" v-model="item.done">
        <span :class="{completed: item.done}">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div {
  width: 400px;
  margin: 100px auto;
  padding: 15px;
  font-size: 18px;
  background: plum;

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #ddd;

    button {
      padding: 3px 6px;
      cursor: pointer;
    }
  }
}

ul {
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #ddd;


    &:hover {
      background: rgba(255,255,255,0.2);
    }

    span.completed {
      color: #ddd;
      text-decoration: line-through;
    }
  }
}

input {
  margin-right: 8px;
  cursor: pointer;
}

label {
  cursor: pointer;
}
</style>