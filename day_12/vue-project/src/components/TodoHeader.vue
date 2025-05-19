<script setup>
import { useTodoStore } from '@/store/todo';
const todoStore = useTodoStore();
// 回车监听
const onEnter = (e) => {
    const text = e.target.value.trim()
    // 非空校验
    if(!text) {
        return alert('任务名称不能为空')
    }
    todoStore.addTodo(text)
    e.target.value = ''
}
</script>
<template>
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be finished?" autofocus  @keydown.enter="onEnter"/>
    </header>
</template>