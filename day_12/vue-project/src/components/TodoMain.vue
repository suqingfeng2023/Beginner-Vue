<script setup>
import { computed } from 'vue';
import { useTodoStore } from '@/store/todo';
const todoStore = useTodoStore();
const isAllSelected = computed({
    get() {
        return todoStore.isAll;
    },
    set(flag) {
        todoStore.toggleTodo(flag)
    }
})

</script>
<template>
    <section class="main">
        <input 
        id="toggle-all" 
        class="toggle-all" 
        type="checkbox"
        v-model="isAllSelected"
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li 
            v-for="(item, index) in todoStore.showTodos" 
            :key="item.id" 
            :class="{ completed: item.finished }"
            >
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="item.finished" />
                    <label>{{ item.text }}</label>
                    <button class="destroy" @click="todoStore.removeTodo(index)"></button>
                </div>
            </li>
        </ul>
    </section>
</template>