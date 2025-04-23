<script setup>
import { ref } from 'vue'
 // 父传子语法
 // 1. 子组件通过 defineProps() 接收自己需要的数据，进而使用数据
 // 2. 父组件内，子组件的自定义标签上，通过自定义属性传递数据
 // 3. 子组件接收的数据，是一个响应式数据，父组件传递的数据发生变化，子组件的数据也会跟着变化
 const props = defineProps([
    'imgUrl', 'title', 'price', 'index'
 ])

 // 子传父语法
 // 1. 子组件通过 defineEmits() 接收自己需要传递的数据，进而使用数据
 // 2. 父组件内，子组件的自定义标签上，通过自定义事件传递数据
 // 触发自定义事件的函数
 const emit = defineEmits()
const x = ref(3)
 // 点击子组件砍价按钮
 const onCut = () => {
    // 1. 触发自定义事件，传递数据
    emit('cut', props.index, x.value)
    
 }
</script>


<template>
    <div class="item">
        <img 
        :src="imgUrl" alt="title" />
        <p class="name">{{ title }}</p>
        <p class="price">
            <span>{{ price }}.00</span>
            <button @click="onCut">砍一刀</button>
        </p>
    </div>
</template>



<style scoped lang="scss">
.item {
    width: 240px;
    margin-left: 10px;
    padding: 20px 30px;
    transition: all 0.5s;
    margin-bottom: 20px;

    .item:nth-child(4n) {
        margin-left: 0;
    }

    &:hover {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        transform: translate3d(0, -4px, 0);
        cursor: pointer;
    }

    img {
        width: 100%;
    }

    .name {
        font-size: 18px;
        margin-bottom: 10px;
        color: #666;
    }

    .price {
        display: flex;
        align-items: center;
        height: 36px;
        font-size: 22px;
        color: firebrick;
        button {
            margin-left: 50px;
            font-size: 14px;
        }
    }

    .price::before {
        content: '¥';
        font-size: 22px;
    }
}
</style>