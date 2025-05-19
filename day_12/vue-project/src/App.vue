<script setup>import './assets/style.css'
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
</script>
<template>
  <section class="todoapp">
    <todo-header />
    <todo-main />
    <todo-footer />
  </section>
</template>