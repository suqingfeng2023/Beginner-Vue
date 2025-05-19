<script setup>
import { useTodoStore } from '@/store/todo';
import { TODO_TYPE } from '@/store/todo';
const todoStore = useTodoStore();

</script>
<template>
    <footer class="footer">
        <span class="todo-count"><strong>{{ todoStore.unfinishedTodos.length }}</strong> item left</span>
        <ul class="filters">
            <li>
                <a href="#/" 
                @click="todoStore.setType(TODO_TYPE.all)"
                :class="{selected: todoStore.type == TODO_TYPE.all}">All</a>
            </li>
            <li>
                <a href="#/active" 
                @click="todoStore.setType(TODO_TYPE.unfinished)"
                :class="{selected: todoStore.type == TODO_TYPE.unfinished}">Active</a>
            </li>
            <li>
                <a href="#/completed" 
                @click="todoStore.setType(TODO_TYPE.finished)"
                :class="{selected: todoStore.type == TODO_TYPE.finished}">Completed</a>
            </li>
        </ul>
        <button class="clear-completed" @click="todoStore.clearTodo()">
            Clear completed
        </button>
    </footer>
</template>
<style scoped></style>