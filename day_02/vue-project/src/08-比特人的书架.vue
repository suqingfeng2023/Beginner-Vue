<script setup>
    import { ref } from 'vue'
    const bookList = ref([
        { name: '《红楼梦》', author: '曹雪芹' },
        { name: '《三国演义》', author: '罗贯中' },
        { name: '《水浒传》', author: '施耐庵' },
        { name: '《西游记》', author: '吴承恩' } 
    ])
    const onDel = (index) => {
        const flag = window.confirm('确认删除吗？')
        if(flag){
            bookList.value.splice(index, 1)
        }else{
            return
        } 
    }
</script>
<template>
    <div class="app">
        <h3>比特人的书架</h3>
        <ul>
            <li v-for="book in bookList">
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
    ul{
        list-style: none;
    }
    ul li {
        display: flex;
        justify-content: space-around;
        padding: 10px 0 10px 0;
        border-bottom: 1px solid #ccc;
    }
</style>