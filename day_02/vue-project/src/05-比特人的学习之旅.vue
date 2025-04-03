<script setup>
import { ref } from 'vue'
// 定义⼀个变量，⽤来记录当前的索引
const currentIndex = ref(0)
// 图⽚列表 
const imgList = [
    'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-00.gif',
    'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-01.gif',
    'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-02.gif',
    'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-03.gif',
    'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-04.png',
    'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-05.png'
]
</script>
<template>
    <div>
        <button
        v-if="currentIndex > 0"
        @click="currentIndex--">上⼀⻚</button>
    </div>
    <img :src="imgList[currentIndex]" alt="img" />
    <div>
        <button
        v-if="currentIndex < imgList.length - 1"
        @click="currentIndex++">下⼀⻚</button>
    </div>
</template>
<style>
#app {
    display: flex;
    width: 500px;
    height: 240px;
}

img {
    width: 240px;
    height: 240px;
}

#app div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>