<!-- 内容渲染指令 -->
 <!-- 
    v-html="表达式"
    v-text="表达式"
 -->

<template>
<div>
    <p v-html="str"></p>
    <p v-text="str"></p>
</div>
</template>

<script setup>
    import { ref } from 'vue'
    const str = ref('<span style="color:red;">Hello Vue3+Vite</span>')
    
</script>

<style scoped>

</style>

