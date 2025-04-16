<script setup>
const props = defineProps(['list'])
const emit = defineEmits(['delToDo'])

const delTodo = (id) => {
  const task = props.list.find(item => item.id === id)
  
  if (!task.done) {
    const confirmDelete = confirm('该城市状态未完成，确定要删除这个城市吗？')
    if (!confirmDelete) return
  }
  
  emit('delToDo', id)
}
</script>
<template>
    <div class="main">
      <ul class="todo-list">
        <li v-for="item in list" :key="item.id" :class="{ completed: item.done }">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.done" />
            <label>{{ item.name }}</label>
            <button class="destroy" @click="delTodo(item.id)"></button>
          </div>
        </li>
      </ul>
    </div>
  </template>



<style scoped>
.main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
}

.todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.todo-list li {
    position: relative;
    font-size: 16px;
    border-bottom: 1px solid #ededed;
}

.todo-list li:last-child {
    border-bottom: none;
}

.todo-list li .toggle {
    text-align: center;
    width: 30px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    opacity: 0;
}

.todo-list li .toggle+label {
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center left;
}

.todo-list li .toggle:checked+label {
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E");
}

.todo-list li label {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
    font-weight: 400;
    color: #484848;
}

.todo-list li.completed label {
    color: #949494;
    text-decoration: line-through;
}

.todo-list li .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    transition: color 0.2s ease-out;
    border: none;
    background-color: #fff;
}

.todo-list li .destroy:hover,
.todo-list li .destroy:focus {
    color: #c18585;
}

.todo-list li .destroy:after {
    content: "×";
    display: block;
    height: 100%;
    line-height: 1.1;
}

.todo-list li:hover .destroy {
    display: block;
}
</style>