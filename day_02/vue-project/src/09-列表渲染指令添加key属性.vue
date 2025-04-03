<!-- v-for 添加key属性-->
<!-- 
提高vue在更新列表时的性能，确保每个元素都有一个唯一的key属性，vue会根据key属性来判断元素是否发生了变化，从而决定是否重新渲染该元素。
语法：
<li v-for="item in items" :key="item.id">{{ item.text }}</li>
 -->

<script setup>
import { ref } from 'vue'
const bookList = ref([
    { id: 1, name: '《红楼梦》', author: '曹雪芹' },
    { id: 2, name: '《三国演义》', author: '罗贯中' },
    { id: 3, name: '《水浒传》', author: '施耐庵' },
    { id: 4, name: '《西游记》', author: '吴承恩' }
])
const onDel = (index) => {
    const flag = window.confirm('确认删除吗？')
    if (flag) {
        bookList.value.splice(index, 1)
    } else {
        return
    }
}
</script>
<template>
    <div class="app">
        <h3>比特人的书架</h3>
        <ul>
            <li v-for="book in bookList" :key="book.id">
                <span>{{ book.name }}</span>
                <span>{{ book.author }}</span>
                <button @click="onDel">删除</button>
            </li>
        </ul>
    </div>
</template>



<style>
.app {
    width: 500px;
    margin: 100px auto;
}

ul {
    list-style: none;
}

ul li {
    display: flex;
    justify-content: space-around;
    padding: 10px 0 10px 0;
    border-bottom: 1px solid #ccc;
}
</style>