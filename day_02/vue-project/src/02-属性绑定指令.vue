<!-- 属性绑定指令 -->

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