<!-- 事件绑定指令 -->
 <!-- 
    作用：
        1.绑定事件
        2.执行表达式
        3.执行函数
        4.执行函数带参数
 -->
 <!-- 
    v-on:事件名="内联代码"
    v-on:事件名="函数名"
    v-on:事件名="函数名(参数)"
 -->
<!-- 
简写
    @事件名="内联代码"
    @事件名="函数名"
    @事件名="函数名(参数)" 

-->

<template>
<div>
    <p>{{ count }}</p>
    <!-- 1.内联式 -->
    <button v-on:click="count++">+1</button>
    <button v-on:click="count--">-1</button>
    <!-- 2.函数式 -->
    <button v-on:click="add(1)">+1</button>
    <button v-on:click="sub(1)">-1</button>
    <!-- 3.函数式带参数 -->
    <button v-on:click="add(10)">+10</button>
    <button v-on:click="sub(10)">-10</button>
    
</div>
</template>

<script setup>
    import { ref } from 'vue';
    // 计数器

    const count = ref(0);
    const add = (n) => {
        count.value += n;
    }
    const sub = (n) => {
        count.value -= n;
    }
</script>

<style scoped>

</style>