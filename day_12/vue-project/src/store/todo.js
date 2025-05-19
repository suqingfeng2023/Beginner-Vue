import { defineStore } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'

// 选中的类型
export const TODO_TYPE = {
    all: 'all',
    unfinished: 'unfinished',
    finished: 'finished'
}

export const useTodoStore = defineStore('todo', () => {
    // todos数组
    const todos = ref([
        {
            id: 1,
            text: '吃饭',
            finished: false
        },
        {
            id: 2,
            text: '睡觉',
            finished: false
        },
        {
            id: 3,
            text: '打代码',
            finished: false
        }
    ])

    // 选择的类型
    const type = ref(TODO_TYPE.all)

    // 小选是否全部选中
    const isAll = computed(() => {
        return todos.value.every(item => item.finished)
    })

    // 所有未完成的todos
    const unfinishedTodos = computed(() => {
        return todos.value.filter((item) => !item.finished)
    })

    // 展示需要的todos
    const showTodos = computed(() => {
        switch (type.value) {
            case TODO_TYPE.all:
                return todos.value
            case TODO_TYPE.finished:
                return todos.value.filter(item => item.finished)
            case TODO_TYPE.unfinished:
                return todos.value.filter(item => !item.finished)
        }
    })
    // 添加
    const addTodo = (text) => {
        todos.value.push({
            text,
            id: todos.value.length + 1,
            finished: false
        })
    }
    // 删除
    const removeTodo = (index) => {
        if (window.confirm('确定删除吗？')) {
            todos.value.splice(index, 1)
        }
    }

    // 切换
    const toggleTodo = (flag) => {
        todos.value.forEach(item => {
            item.finished = flag
        })
    }

    // 清除所有完成的事件
    const clearTodo = () => {
        todos.value = todos.value.filter(item => !item.finished)
    }

    // 设置类型
    const setType = (newtype) => {
        type.value = newtype
    }

    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        isAll,
        unfinishedTodos,
        clearTodo,
        type,
        setType,
        showTodos
    }
})