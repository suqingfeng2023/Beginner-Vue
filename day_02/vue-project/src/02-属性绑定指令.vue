<!-- 属性绑定指令 -->
 <!-- 
    作用：
        把表达式的结果与标签属性动态绑定
    指令：
        v-bind:属性名="表达式"
        :属性名="表达式"
    简写：
        :属性名
    注意：
        1.如果表达式的值为字符串，不需要加引号
        2.如果表达式的值为对象，需要加引号
 -->

<!-- 
v-bind:属性名="表达式"
-->

<template>
    <div v-bind:title="msg">
        {{ msg }}
    </div>
    <a :href="url", >百度一下</a>
</template>

<script setup>
    import { ref } from 'vue';

    const msg = ref('Hello world');
    const url = "www.baidu.com"
</script>

<style scoped>

</style>