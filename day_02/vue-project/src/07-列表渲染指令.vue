<!-- 列表渲染指令
 
-->
<script setup>
    import { ref } from 'vue'
    // 定义响应式数组
    const list = ref([1, 2, 3, 4, 5])
    const goodslist = ref(
        [
            { name: '苹果', price: 10 },
            { name: '香蕉', price: 20 },
            { name: '草莓', price: 30 },
            { name: '橘子', price: 40 },
            { name: '菠萝', price: 50 },
        ]
    )
</script>
<template>
    <div>
        <ul>
            <li v-for="item, index in list">
                {{ item }} => {{ index }}
            </li>
        </ul>
        <div class="goodslist">
            <div class="goodsitem"
            v-for="item in goodslist">
                <p>{{ item.name }}</p>
                <p>{{ item.price }}</p>
            </div>
        </div>
    </div>
</template>



<style scoped></style>