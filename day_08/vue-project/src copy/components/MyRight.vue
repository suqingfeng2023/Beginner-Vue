<script setup>
import { ref } from 'vue'
 import meipo from '../eventBus.js';
 // 接收消息
 const ret = ref('');
 meipo.on('send', (msg) => {
     ret.value = msg;
 });
</script>

<template>
    <div class="my-right" style="
    flex: 1;
    align-items: center;
    height: 100px;
    background: paleturquoise;
    text-align: center;
    ">
        <h3>我是织⼥, 收到来⾃⽜郎的消息: {{ ret }} </h3>
    </div>
</template>




<style scoped></style>