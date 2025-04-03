<script setup>
// 导⼊ todo 样式 
import '../src/style/index.css'
import { ref } from 'vue'
// 代办任务列表 
const todoList = ref(
    [
        { id: 321, name: '吃饭', finished: false },
        { id: 666, name: '睡觉', finished: true },
        { id: 195, name: '打豆豆', finished: false }
    ]
)
/* 收集任务信息 */
const title = ref('')
/* 添加任务 */
const onAdd = () => {
    // 1.去除 title 中的空格 
    title.value = title.value.trim()
    // 2.判断 title 是否为空 
    if (!title.value) {
        alert('任务不能为空！')
        return
    }
    // 3.添加任务 
    todoList.value.push({
        id: Date.now(),
        name: title.value,
        finished: false
    })
    // 4.重置 title 
    title.value = ''

}
/* 删除任务 */
const onDelete = (index) => {
    const flag = window.confirm('确认删除吗？')
    if (flag) {
        todoList.value.splice(index, 1)
    } else {
        return
    }
}
/* 清空任务 */
const onClear = () => {
    const flag = window.confirm('确认清空吗？')
    if (flag) {
        todoList.value = []
    } else {
        return
    }
}
</script>
<template>
    <section clsss="todoapp">
        <header class="header">
            <h1>⽐特⼈记事本</h1>
            <input placeholder="请输⼊任务" class="new-todo" v-model="title"/>
            <button class="add" @click="onAdd">添加任务</button>
        </header>
        <section class="main">
            <ul class="todo-list">
                <li class="todo" v-for="item, index in todoList" :key="item.id">
                    <div class="view">
                        <span class="index">{{ index + 1 }}</span> <label>{{ item.name }}</label>
                        <button class="destroy" @click="onDelete(index)"></button>
                    </div>
                </li>
            </ul>
        </section>
        <footer class="footer">
            <span class="todo-count">合 计: <strong> {{ todoList.length }} </strong></span>
            <button class="clear-completed" @click="onClear">清空任务</button>
        </footer>
    </section>
</template>
