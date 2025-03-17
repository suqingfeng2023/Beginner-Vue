<!-- 条件渲染指令 -->
<!-- 
    作用：
        1.根据表达式的值，来决定是否渲染元素
        2.根据表达式的值，来决定是否渲染元素中的内容
    指令：
        v-if="表达式"
        v-else-if="表达式"
        v-else="表达式"
        v-show="表达式"
 -->
<!-- 
v-show:是通过控制css的display属性来控制元素的显示和隐藏
v-if:是通过控制dom元素的存在和不存在来控制元素的显示和隐藏
v-if:是惰性的，如果在初始渲染时条件为假，则什么也不做。直到条件第一次变为真时，才会开始渲染条件块。
v-show:不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。
因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
-->

<template>
    <div>
        <div class="red" v-show="visible"></div>
        <div class="green" v-if="visible"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)

</script>

<style scoped>
.red {
    width: 100px;
    height: 100px;
    background-color: red;
}

.green {
    width: 100px;
    height: 100px;
    background-color: green;
}
</style>