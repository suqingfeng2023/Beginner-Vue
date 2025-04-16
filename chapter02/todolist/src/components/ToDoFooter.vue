<script setup>
defineProps(['lastLength', 'status'])
const emit = defineEmits(['updateStatus'])
</script>
<template>
    <div class="footer">
      <span class="todo-count">共<strong>{{ lastLength }}</strong>个城市未完成</span>
      <ul class="filters">
        <li>
          <a 
            @click.prevent="emit('updateStatus', 'all')" 
            :class="{ selected: status === 'all' }" 
            href="#/"
          >全部</a>
        </li>
        <li>
          <a 
            @click.prevent="emit('updateStatus', 'active')" 
            :class="{ selected: status === 'active' }"
            href="#/active"
          >未完成</a>
        </li>
        <li>
          <a 
            @click.prevent="emit('updateStatus', 'completed')" 
            :class="{ selected: status === 'completed' }"
            href="#/completed"
          >完成</a>
        </li>
      </ul>
    </div>
  </template>



<style scoped>
.footer {
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    font-size: 15px;
    border-top: 1px solid #e6e6e6;
}

.footer:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
        0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
        0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todo-count {
    float: left;
    text-align: left;
}

.todo-count strong {
    font-weight: 300;
}

.filters {
    float: right;
    margin: 0;
    padding: 0;
    list-style: none;

}

.filters li {
    display: inline;
}

.filters li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    border-color: #767676;
}

.filters li a:hover {
    border-color: #db7676;
}

.filters li a.selected {
    border-color: #db7676;
}
</style>