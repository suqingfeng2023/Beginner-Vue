<script setup>
import { ref } from 'vue'
 // 导入中间值
 import meipo from '../eventBus.js'
 // 定义发送消息的方法
 const msg = ref("两情若是长久时，又岂在朝朝暮暮");
 const onSend = () => {
    // 发送消息
    meipo.emit('send', msg.value)
}
</script>

<template>
    <div class="my-left" style="flex: 1;
    align-items: center;
    height: 100px;
    background: plum;
    text-align: center;">
        <h3>我是⽜郎,点击发送消息给织⼥</h3>
        <button @click="onSend">Send Message</button>
    </div>
</template>



<style scoped></style>